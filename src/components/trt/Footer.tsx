import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-trt-red" />
              <span className="font-display text-2xl">TRT</span>
            </div>
            <p className="mt-6 font-display text-4xl md:text-6xl leading-[0.9] text-balance">
              Legacy<br />lives here.
            </p>
            <p className="mt-6 text-white/50 max-w-md text-sm leading-relaxed">
              The Real Toronto Basketball League. Six franchises. Two levels.
              One system. Built for Toronto, for the next decade and beyond.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">League</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/why-trt" className="hover:text-trt-red">Why TRT</Link></li>
              <li><Link to="/franchises" className="hover:text-trt-red">Franchises</Link></li>
              <li><Link to="/u23" className="hover:text-trt-red">U23 Pathway</Link></li>
              <li><Link to="/media" className="hover:text-trt-red">Media</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Build</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/the-24" className="hover:text-trt-red">The 24</Link></li>
              <li><Link to="/sponsorship" className="hover:text-trt-red">Sponsorship</Link></li>
              <li><Link to="/contact" className="hover:text-trt-red">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Toronto</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Greater Toronto Area</li>
              <li>Ontario, Canada</li>
              <li>partners@trt.bball</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between gap-6 pt-8 border-t border-white/10 text-[11px] uppercase tracking-[0.2em] text-white/40">
          <span>© {new Date().getFullYear()} The Real Toronto Basketball League</span>
          <span>Toronto. Built different.</span>
        </div>
      </div>
    </footer>
  );
}
