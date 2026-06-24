import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight } from "lucide-react";
import playerImg from "@/assets/player-shadow.jpg";
import streetImg from "@/assets/street-ball.jpg";

export const Route = createFileRoute("/u23")({
  head: () => ({
    meta: [
      { title: "U23 Pathway — TRT" },
      { name: "description", content: "The bridge between potential and professional basketball. Men's and Women's U23 development." },
      { property: "og:title", content: "U23 Pathway — TRT" },
      { property: "og:description", content: "From youth to professional. The TRT U23 development system." },
    ],
    links: [{ rel: "canonical", href: "/u23" }],
  }),
  component: U23,
});

const pillars = [
  { t: "Men's U23", d: "Six rosters. Real minutes. Real coaching. Real scouting." },
  { t: "Women's U23", d: "Built parallel, not after. Women's pathway is a first-class system." },
  { t: "Athlete Development", d: "Strength, skill, nutrition, mental performance, recovery." },
  { t: "Education Support", d: "Academic continuity with partnered post-secondary institutions." },
  { t: "Professional Exposure", d: "Scouts. NCAA networks. Pro leagues. Real eyes on real reps." },
  { t: "International Opportunities", d: "Partnership pipelines into Europe, Asia, and South America." },
  { t: "Recruitment Network", d: "Identifying GTA talent before anyone else can." },
  { t: "Advancement Path", d: "U23 → TRT roster → pro contract. The lane is built." },
];

function U23() {
  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="relative h-[85svh] min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={streetImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>
        <div className="container-x relative pb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red animate-fade-up">U23 Pathway</p>
          <h1 className="font-display mt-6 text-[14vw] md:text-[8vw] leading-[0.85] text-balance animate-fade-up">
            The pathway<br />between potential<br />and <span className="text-trt-red">professional.</span>
          </h1>
        </div>
      </section>

      <section className="py-32 border-t border-white/10">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <img src={playerImg} alt="Player" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.04}>
                <div className="bg-black p-6 h-full">
                  <span className="font-mono text-xs text-trt-red">0{i + 1}</span>
                  <h3 className="font-display mt-4 text-2xl">{p.t}</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-white/10 bg-black">
        <div className="container-x text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Success Stories</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-5xl md:text-7xl leading-[0.95]">
              The next chapter<br />is unwritten.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl mx-auto text-white/60">
              Toronto has produced more NBA-bound talent per capita than any city in the world.
              TRT exists to keep the next generation home — and ready.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 bg-trt-red px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors">
              Player Registration <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
