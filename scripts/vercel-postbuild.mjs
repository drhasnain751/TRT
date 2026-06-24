import { cp, mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'

const OUT = '.vercel/output'

async function main() {
  console.log('Building Vercel output...')

  await mkdir(`${OUT}/static`, { recursive: true })
  await mkdir(`${OUT}/functions/index.func`, { recursive: true })

  // Vercel Build Output API v3 config
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

  // Edge function wrapper — adapts TanStack Start's fetch handler to Vercel Edge
  await writeFile(`${OUT}/functions/index.func/entry.js`,
`import handler from './server.js'
export default (request) => handler.fetch(request, {}, {})
export const config = { runtime: 'edge' }
`)

  await writeFile(`${OUT}/functions/index.func/.vc-config.json`, JSON.stringify({
    runtime: 'edge',
    entrypoint: 'entry.js'
  }, null, 2))

  // Copy server bundle into the function directory
  if (existsSync('dist/server')) {
    await cp('dist/server', `${OUT}/functions/index.func`, { recursive: true })
    console.log('Server bundle -> .vercel/output/functions/index.func')
  }

  console.log('Vercel output ready!')
}

main().catch(e => { console.error(e); process.exit(1) })
