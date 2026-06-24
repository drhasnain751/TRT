import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/why-trt", label: "Why TRT" },
  { to: "/franchises", label: "Franchises" },
  { to: "/u23", label: "U23 Pathway" },
  { to: "/the-24", label: "The 24" },
  { to: "/sponsorship", label: "Sponsorship" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="TRT home">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-trt-red shadow-[0_0_24px_var(--trt-red)]" />
          <span className="font-display text-xl md:text-2xl tracking-[0.04em]">TRT</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors"
              activeProps={{ className: "text-white" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/the-24"
            className="ml-2 inline-flex items-center gap-2 bg-trt-red px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Join The 24
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <div className="container-x py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl tracking-wide text-white/80 hover:text-trt-red"
                activeProps={{ className: "text-trt-red" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
