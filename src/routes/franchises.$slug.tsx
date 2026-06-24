import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { FRANCHISES } from "@/lib/trt-data";
import { ArrowLeft, MapPin, Users, Calendar, Trophy } from "lucide-react";
import playerImg from "@/assets/player-shadow.jpg";
import streetImg from "@/assets/street-ball.jpg";
import courtImg from "@/assets/court-aerial.jpg";
import crowdImg from "@/assets/crowd-energy.jpg";
import heroImg from "@/assets/hero-toronto.jpg";
import the24Bg from "@/assets/the-24-bg.jpg";

const IMG_BY_SLUG: Record<string, string> = {
  "downtown-toronto": heroImg,
  "scarborough": playerImg,
  "brampton": courtImg,
  "vaughan": the24Bg,
  "mississauga": crowdImg,
  "durham": streetImg,
};

export const Route = createFileRoute("/franchises/$slug")({
  loader: ({ params }) => {
    const f = FRANCHISES.find((f) => f.slug === params.slug);
    if (!f) throw notFound();
    return { franchise: f };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.franchise.city} — ${loaderData.franchise.name} | TRT` },
          { name: "description", content: loaderData.franchise.mission },
          { property: "og:title", content: `${loaderData.franchise.city} — TRT` },
          { property: "og:description", content: loaderData.franchise.mission },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/franchises/${loaderData.franchise.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-6xl">Franchise not found</h1>
        <Link to="/franchises" className="mt-6 inline-block text-trt-red">← All franchises</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <Link to="/franchises" className="text-trt-red">← Back to franchises</Link>
    </div>
  ),
  component: FranchisePage,
});

function FranchisePage() {
  const { franchise: f } = Route.useLoaderData();
  const img = IMG_BY_SLUG[f.slug];

  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="relative h-[80svh] min-h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={img} alt={f.city} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>
        <div className="container-x relative pb-16">
          <Link to="/franchises" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-trt-red">
            <ArrowLeft size={14} /> All Franchises
          </Link>
          <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-trt-red">{f.tag}</p>
          <h1 className="font-display mt-4 text-[16vw] md:text-[10vw] leading-[0.85]">{f.city}</h1>
          <p className="mt-4 font-display text-2xl md:text-3xl text-white/80">{f.name}</p>
          <p className="mt-6 max-w-xl text-lg italic text-white/70">"{f.mission}"</p>
        </div>
      </section>

      <section className="py-24 border-b border-white/10">
        <div className="container-x grid md:grid-cols-4 gap-px bg-white/10">
          {[
            { icon: Trophy, l: "Status", v: f.founded },
            { icon: MapPin, l: "Venue", v: f.venue },
            { icon: Users, l: "General Manager", v: f.gm },
            { icon: Calendar, l: "Season", v: "2026 Inaugural" },
          ].map((s) => (
            <div key={s.l} className="bg-black p-6 md:p-8">
              <s.icon size={18} className="text-trt-red" />
              <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/50">{s.l}</p>
              <p className="mt-2 font-display text-2xl">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 border-b border-white/10">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Community Impact</p>
            <h2 className="font-display mt-6 text-5xl md:text-6xl leading-[0.95]">Built in the neighbourhood.</h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7">
            <p className="text-xl text-white/80 leading-relaxed text-balance">{f.community}</p>
            <p className="mt-6 text-white/50">
              Every TRT franchise commits to year-round programming — clinics, scholarships,
              court rebuilds, and pathways into the U23 system. The team is the city. The city
              is the team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-32 border-b border-white/10">
        <div className="container-x">
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Front Office</p>
          <h2 className="font-display mt-6 text-5xl md:text-7xl leading-[0.95]">Building the staff.</h2>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10">
            {["General Manager", "Head Coach", "Player Development", "Operations", "Community Director", "Partnerships"].map((role) => (
              <div key={role} className="bg-black p-8 aspect-square flex flex-col justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">{role}</span>
                <div>
                  <p className="font-display text-3xl text-white/40">Announcing 2026</p>
                  <p className="mt-2 text-xs text-trt-red uppercase tracking-[0.15em]">Apply via TRT Front Office</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-x text-center">
          <h2 className="font-display text-5xl md:text-7xl">Join the {f.city.split(" ").pop()} story.</h2>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <Link to="/contact" className="bg-trt-red px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors">
              Player Inquiry
            </Link>
            <Link to="/sponsorship" className="border border-white/20 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] hover:border-white transition-colors">
              Sponsor This Franchise
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
