import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { ArrowRight } from "lucide-react";
import courtImg from "@/assets/court-aerial.jpg";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — TRT" },
      { name: "description", content: "Investment opportunities in The Real Toronto Basketball League. Capital backing Toronto's next major sports property." },
    ],
    links: [{ rel: "canonical", href: "/investors" }],
  }),
  component: InvestorsPage,
});

const reasons = [
  {
    title: "Underserved Market",
    desc: "Toronto is the most basketball-crazy city in Canada with no professional league serving the GTA community market. TRT fills a genuine gap.",
  },
  {
    title: "Scalable Model",
    desc: "Six franchises are the foundation. The infrastructure, media rights, and community relationships we're building have significant expansion upside.",
  },
  {
    title: "Media & Content",
    desc: "Content-first approach. Every game, every player, every franchise has a story. TRT is building a media brand alongside a league.",
  },
  {
    title: "Community Equity",
    desc: "Brand equity built at the grassroots level is durable. We're not buying attention. We're earning it in the neighbourhoods.",
  },
  {
    title: "Talent Pipeline",
    desc: "The U23 pathway, franchise relationships, and TRT alumni network become real IP. Scouts and global leagues will come to us.",
  },
  {
    title: "First-Mover Advantage",
    desc: "No one has built this in Toronto. TRT has the vision, the community relationships, and the momentum to define the category.",
  },
];

function InvestorsPage() {
  return (
    <div className="bg-black text-white">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={courtImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Investment</p>
            <h1 className="font-display mt-6 text-[14vw] md:text-[9vw] leading-[0.85]">
              Back<br />
              <span className="text-trt-red">Toronto's</span><br />
              next league.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
              The Real Toronto Basketball League is seeking strategic capital partners to help build something the city has never seen. We are not looking for passive investors — we are looking for builders.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
            >
              Request Investment Deck <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why invest */}
      <section className="border-t border-white/10 py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-16">Why TRT</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="bg-black p-8 md:p-10">
                  <h3 className="font-display text-3xl leading-[0.95]">{r.title}</h3>
                  <p className="mt-4 text-white/60 leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="border-t border-white/10 py-24 bg-black">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-12">Investment Categories</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {[
              { label: "Seed Partners", desc: "Early-stage capital building the operational infrastructure — league management, content production, and franchise launches." },
              { label: "Franchise Investors", desc: "Equity stake in an individual franchise. City-specific brand ownership with the full support of the TRT league system." },
              { label: "Media Rights", desc: "Broadcast, streaming, and content licensing opportunities as TRT builds its distribution network." },
              { label: "Strategic Capital", desc: "Larger institutional investment conversations for those who see the long-term play. Let's talk." },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.07}>
                <div className="bg-black p-10 md:p-12">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-trt-red">{item.label}</p>
                  <p className="mt-4 text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9]">
              Let's build<br /><span className="text-trt-red">together.</span>
            </h2>
            <p className="mt-8 max-w-md mx-auto text-white/60">
              Request our investment deck and a member of TRT leadership will be in touch within 48 hours.
            </p>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-2 px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
            >
              Contact TRT <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
