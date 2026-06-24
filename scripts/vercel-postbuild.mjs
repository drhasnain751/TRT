import { cp, mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { build } from 'esbuild'

const OUT = '.vercel/output'
const FUNC = `${OUT}/functions/index.func`

async function main() {
  console.log('Building Vercel output...')

  await mkdir(`${OUT}/static`, { recursive: true })
  await mkdir(`${FUNC}/bundle`, { recursive: true })

  // Vercel Build Output API v3
  await writeFile(`${OUT}/config.json`, JSON.stringify({
    version: 3,
    routes: [
      { src: '/assets/(.+)', headers: { 'cache-control': 'public, max-age=31536000, immutable' }, continue: true },
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/index' }
    ]
  }, null, 2))

  // Copy client static assets
  if (existsSync('dist/client')) {
    await cp('dist/client', `${OUT}/static`, { recursive: true })
    console.log('Client assets -> .vercel/output/static')
  }

  // Bundle server.js + ALL dependencies into self-contained chunks
  await build({
    entryPoints: ['dist/server/server.js'],
    bundle: true,
    platform: 'node',
    target: 'node20',
    format: 'esm',
    outdir: `${FUNC}/bundle`,
    splitting: true,
    chunkNames: 'chunks/[name]-[hash]',
    allowOverwrite: true,
    minify: false,
    define: { 'process.env.NODE_ENV': '"production"' },
  })
  console.log('Server bundled with all dependencies')

  // Node.js wrapper: bridges Fetch API handler -> Vercel Node req/res
  await writeFile(`${FUNC}/entry.js`, `
import handler from './bundle/server.js'

export default async function(req, res) {
  const proto = (req.headers['x-forwarded-proto'] || 'https').split(',')[0].trim()
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost'
  const url = new URL(req.url, proto + '://' + host)

  const headers = new Headers()
  for (const [k, v] of Object.entries(req.headers)) {
    if (v != null) Array.isArray(v) ? v.forEach(x => headers.append(k, x)) : headers.set(k, String(v))
  }

  let body
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks = []
    for await (const c of req) chunks.push(c)
    const buf = Buffer.concat(chunks)
    if (buf.length) body = buf
  }

  try {
    const response = await handler.fetch(new Request(url, { method: req.method, headers, body }), process.env, {})
    res.statusCode = response.status
    response.headers.forEach((v, k) => res.setHeader(k, v))
    res.end(Buffer.from(await response.arrayBuffer()))
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
}
`)

  // Node.js runtime (not Edge) — supports all npm packages
  await writeFile(`${FUNC}/.vc-config.json`, JSON.stringify({
    runtime: 'nodejs20.x',
    handler: 'entry.js',
    launcherType: 'Nodejs',
    maxDuration: 30
  }, null, 2))

  console.log('Vercel output ready!')
}

main().catch(e => { console.error(e); process.exit(1) })
