import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight } from "lucide-react";
import courtImg from "@/assets/court-aerial.jpg";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship & Investment — TRT" },
      { name: "description", content: "Partner with Toronto's next basketball property. Sponsorship, investment, and founding partner opportunities." },
      { property: "og:title", content: "Sponsorship & Investment — TRT" },
      { property: "og:description", content: "Build with TRT. Sponsorship, investment, and partnership opportunities." },
    ],
    links: [{ rel: "canonical", href: "/sponsorship" }],
  }),
  component: Sponsorship,
});

const opportunities = [
  { t: "Sponsorship", d: "Jersey, court, broadcast and digital integrations across the league." },
  { t: "Investment", d: "Equity participation in Toronto's emerging sports IP." },
  { t: "Venue Partnerships", d: "Arenas, training facilities and game-day production homes." },
  { t: "Corporate", d: "Enterprise activation, employee engagement, and brand storytelling." },
  { t: "Community", d: "Co-branded grassroots programs and neighbourhood initiatives." },
  { t: "Media", d: "Streaming, broadcast and editorial partnerships." },
  { t: "Founding Partners", d: "Day-one builders with founding-level recognition." },
  { t: "The 24", d: "Private Founders Circle. 24 legacy positions." },
];

const impact = [
  { n: "7M+", l: "GTA population reach" },
  { n: "6", l: "Local market identities" },
  { n: "2", l: "Competitive levels: Pro + U23" },
  { n: "12", l: "Months of year-round activation" },
];

function Sponsorship() {
  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="relative pt-32 md:pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img src={courtImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black" />
        </div>
        <div className="container-x relative">
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red animate-fade-up">Partner</p>
          <h1 className="font-display mt-6 text-[16vw] md:text-[10vw] leading-[0.85] animate-fade-up">
            Build with<br /><span className="text-trt-red">TRT.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/80 animate-fade-up">
            Partner with Toronto's next basketball property — at the moment of inflection.
          </p>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="container-x">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Opportunities</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-5xl md:text-7xl leading-[0.95]">Eight ways to build.</h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-4 gap-px bg-white/10">
            {opportunities.map((o, i) => (
              <Reveal key={o.t} delay={i * 0.04}>
                <div className="group bg-black p-6 md:p-8 h-full hover:bg-trt-red transition-colors duration-500 aspect-square flex flex-col justify-between">
                  <span className="font-mono text-xs text-white/40 group-hover:text-white/90">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl">{o.t}</h3>
                    <p className="mt-2 text-sm text-white/60 group-hover:text-white/90 leading-relaxed">{o.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="container-x">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Impact</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {impact.map((s) => (
              <div key={s.l} className="bg-black p-8">
                <p className="font-display text-5xl md:text-6xl text-trt-red">{s.n}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/60">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-white/10">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">Let's build the next sports property.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="bg-trt-red px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                Request Sponsorship Package <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="border border-white/20 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] hover:border-white transition-colors">
                Request Investment Information
              </Link>
              <Link to="/contact" className="border border-white/20 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] hover:border-white transition-colors">
                Book A Meeting
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
