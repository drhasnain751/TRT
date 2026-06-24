import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight } from "lucide-react";
import streetImg from "@/assets/street-ball.jpg";
import courtImg from "@/assets/court-aerial.jpg";
import crowdImg from "@/assets/crowd-energy.jpg";
import playerImg from "@/assets/player-shadow.jpg";
import heroImg from "@/assets/hero-toronto.jpg";

export const Route = createFileRoute("/why-trt")({
  head: () => ({
    meta: [
      { title: "Why TRT — The Real Toronto Basketball League" },
      { name: "description", content: "Why Toronto. Why the GTA. Why six franchises. Why now. The TRT manifesto." },
      { property: "og:title", content: "Why TRT" },
      { property: "og:description", content: "The TRT manifesto. Six franchises. One movement." },
    ],
    links: [{ rel: "canonical", href: "/why-trt" }],
  }),
  component: WhyTRT,
});

const chapters = [
  { n: "01", t: "Why Toronto", d: "The most diverse basketball city on the continent. Untapped, undervalued, undeniable.", img: heroImg },
  { n: "02", t: "Why The GTA", d: "Seven million people. Six unique communities. One regional identity hungry for a league of its own.", img: streetImg },
  { n: "03", t: "Why Six Franchises", d: "Not centralized. Distributed. Every region gets ownership, identity, and a home team to defend.", img: courtImg },
  { n: "04", t: "Why U23", d: "The missing bridge between youth potential and professional opportunity. We build the lane.", img: playerImg },
  { n: "05", t: "Why Community", d: "A league is meaningless without the streets, schools, and gyms that raised it. We start there.", img: crowdImg },
  { n: "06", t: "Why Now", d: "Canadian basketball has never been bigger. Toronto deserves the property the talent already earned.", img: heroImg },
];

function WhyTRT() {
  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="relative h-[80svh] min-h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={crowdImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="container-x relative pb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red animate-fade-up">Manifesto</p>
          <h1 className="font-display mt-6 text-[16vw] md:text-[10vw] leading-[0.85] animate-fade-up">
            Why <span className="text-trt-red">TRT.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 animate-fade-up">
            This isn't a basketball explanation. It's a movement document.
          </p>
        </div>
      </section>

      {chapters.map((c, i) => (
        <section
          key={c.n}
          className={`relative py-24 md:py-32 border-t border-white/10 ${i % 2 === 1 ? "bg-black" : "bg-black"}`}
        >
          <div className="container-x grid md:grid-cols-12 gap-12 items-center">
            <Reveal className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </Reveal>
            <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <Reveal>
                <span className="font-display text-trt-red text-2xl">{c.n}</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display mt-4 text-[12vw] md:text-[6vw] leading-[0.9] text-balance">{c.t}</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg md:text-xl text-white/70 max-w-lg leading-relaxed text-balance">{c.d}</p>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 border-t border-white/10 bg-black">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-[14vw] md:text-[9vw] leading-[0.9]">
              Toronto's <span className="text-trt-red">league.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/franchises" className="mt-10 inline-flex items-center gap-2 bg-trt-red px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors">
              Explore Franchises <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
