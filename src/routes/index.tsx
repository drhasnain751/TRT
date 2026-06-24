import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { Marquee } from "@/components/trt/Marquee";
import { FRANCHISES, UPCOMING_GAMES } from "@/lib/trt-data";
import heroImg from "@/assets/hero-toronto.jpg";
import playerImg from "@/assets/player-shadow.jpg";
import courtImg from "@/assets/court-aerial.jpg";
import crowdImg from "@/assets/crowd-energy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRT — The Real Toronto Basketball League" },
      { name: "description", content: "Toronto's professional basketball league. Six franchises. Two levels. One system. Legacy lives here." },
      { property: "og:title", content: "TRT — The Real Toronto Basketball League" },
      { property: "og:description", content: "Toronto's professional basketball league. Six franchises. Two levels. One system." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Nav />
      <GamesTickerBar />
      <Hero />
      <Marquee items={["Toronto", "Scarborough", "Brampton", "Vaughan", "Mississauga", "Durham", "Downtown", "Legacy Lives Here"]} />
      <LeagueSection />
      <FeaturedStory />
      <FranchiseGrid />
      <CommunityBanner />
      <Footer />
    </div>
  );
}

/* ── Games Ticker Bar ─────────────────────────────── */
function GamesTickerBar() {
  return (
    <div className="fixed top-16 md:top-20 inset-x-0 z-40 bg-trt-red/95 backdrop-blur-sm overflow-hidden" style={{ height: "36px" }}>
      <div className="flex items-center h-full animate-marquee whitespace-nowrap">
        {[...UPCOMING_GAMES, ...UPCOMING_GAMES].map((g, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-8 h-full text-[11px] uppercase tracking-[0.15em] text-white font-semibold border-r border-white/20">
            <span className="text-white/70">{g.date}</span>
            <span>{g.home}</span>
            <span className="text-white/50">vs</span>
            <span>{g.away}</span>
            <span className="text-white/60">·</span>
            <span className="text-white/70">{g.time}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      style={{ paddingTop: "calc(4rem + 36px)" }}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Toronto basketball"
          className="h-[120%] w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_85%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col">
        <div className="flex-1" />
        <div className="container-x pb-14 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-trt-red animate-pulse-dot" />
            Toronto · Inaugural Season 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display mt-6 text-[17vw] md:text-[10vw] leading-[0.85] tracking-tight"
          >
            The Real<br />
            <span className="text-trt-red">Toronto</span><br />
            Basketball<br />League
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 grid md:grid-cols-2 gap-10 items-end"
          >
            <p className="max-w-md text-white/70 text-sm md:text-base leading-relaxed">
              Toronto's professional basketball league.<br />
              <span className="text-white">6 Franchises. 2 Levels. 1 System.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/franchises"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Franchises <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/membership"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold border border-white/20 hover:border-white transition-all duration-300"
              >
                TRT Membership <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── League Stats ─────────────────────────────────── */
function LeagueSection() {
  const stats = [
    { n: "6", l: "Franchises" },
    { n: "2", l: "Competitive Levels" },
    { n: "GTA", l: "Coverage" },
    { n: "2026", l: "Inaugural Season" },
  ];

  return (
    <section className="relative py-28 md:py-40 bg-black">
      <div className="container-x">
        <Reveal>
          <h2 className="font-display mt-6 text-[13vw] md:text-[7.5vw] leading-[0.9]">
            Built for<br />
            <span className="text-white/30">Toronto.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <Reveal delay={0.15} className="md:col-span-5">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              TRT is building a city-wide professional basketball property
              designed to unite communities, develop athletes, create
              opportunities, and elevate the game across the Greater Toronto Area.
            </p>
            <p className="mt-6 text-white/40">
              Not just a league. A movement. Not just a season. A system.
            </p>
            <Link
              to="/franchises"
              className="mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-trt-red hover:text-white transition-colors"
            >
              View all franchises <ArrowRight size={12} />
            </Link>
          </Reveal>

          <div className="md:col-span-7 grid grid-cols-2 gap-px bg-white/10">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={0.1 + i * 0.06}>
                <div className="bg-black p-8 md:p-10 aspect-square flex flex-col justify-between">
                  <span className="font-display text-5xl md:text-7xl text-trt-red">{s.n}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">{s.l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Featured Story (single main story) ───────────── */
function FeaturedStory() {
  return (
    <section className="border-t border-white/10 py-28 md:py-40 bg-black">
      <div className="container-x">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Featured</p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-12 gap-0 border border-white/10">
          {/* Image */}
          <Reveal delay={0.05} className="md:col-span-7">
            <div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden bg-black relative">
              <img
                src={crowdImg}
                alt="TRT announcement"
                className="h-full w-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:to-black/50" />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="p-8 md:p-12 flex flex-col justify-center h-full">
              <span className="text-[10px] uppercase tracking-[0.25em] text-trt-red border border-trt-red/40 px-3 py-1 w-fit">
                Announcement
              </span>
              <h2 className="font-display mt-6 text-4xl md:text-5xl leading-[0.95] text-balance">
                TRT unveils six founding franchise markets across the GTA
              </h2>
              <p className="mt-6 text-white/60 leading-relaxed">
                The Real Toronto Basketball League has confirmed its six founding franchises, bringing professional basketball to Downtown Toronto, Scarborough, Brampton, Vaughan, Mississauga, and Durham. The inaugural season tips off in 2026.
              </p>
              <Link
                to="/media"
                className="mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-white hover:text-trt-red transition-colors"
              >
                Read the full story <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Franchise Grid ───────────────────────────────── */
function FranchiseGrid() {
  return (
    <section className="border-t border-white/10 py-28 md:py-40 bg-black relative">
      <div className="absolute inset-0 opacity-10">
        <img src={courtImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black" />
      </div>

      <div className="container-x relative">
        <Reveal>
          <h2 className="font-display text-[12vw] md:text-[7vw] leading-[0.9]">
            Six cities.<br />One league.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {FRANCHISES.map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.05}>
              <Link
                to="/franchises/$slug"
                params={{ slug: f.slug }}
                className="group block bg-black p-7 md:p-8 hover:bg-trt-red/8 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-trt-red flex items-center gap-1.5">
                      <MapPin size={10} /> {f.tag}
                    </p>
                    <h3 className="font-display mt-3 text-3xl leading-[0.95]">{f.city}</h3>
                    <p className="mt-1 text-sm text-white/50">{f.name}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-white/20 mt-1 group-hover:text-trt-red group-hover:translate-x-1 transition-all"
                  />
                </div>
                <p className="mt-5 text-xs text-white/40 leading-relaxed">{f.venue}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Community Banner ─────────────────────────────── */
function CommunityBanner() {
  return (
    <section className="relative border-t border-white/10 py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={playerImg} alt="" className="h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
      </div>
      <div className="container-x relative grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Community</p>
            <h2 className="font-display mt-6 text-[12vw] md:text-[6vw] leading-[0.9]">
              The game.<br />The city.<br />The people.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-lg">
              TRT is more than a league. Every franchise is embedded in its neighbourhood — running clinics, building courts, and creating pathways for the next generation.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex gap-3 flex-wrap">
              <Link
                to="/community"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-trt-red text-white hover:bg-white hover:text-black transition-all"
              >
                Get Involved <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] border border-white/20 hover:border-white transition-all"
              >
                Contact TRT <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
