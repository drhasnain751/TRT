import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { Marquee } from "@/components/trt/Marquee";
import { FRANCHISES } from "@/lib/trt-data";
import heroImg from "@/assets/hero-toronto.jpg";
import playerImg from "@/assets/player-shadow.jpg";
import courtImg from "@/assets/court-aerial.jpg";
import crowdImg from "@/assets/crowd-energy.jpg";
import streetImg from "@/assets/street-ball.jpg";
import the24Bg from "@/assets/the-24-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRT — The Real Toronto Basketball League" },
      { name: "description", content: "Toronto's professional basketball property. Six franchises. Two levels. One system. Legacy lives here." },
      { property: "og:title", content: "TRT — The Real Toronto Basketball League" },
      { property: "og:description", content: "Toronto's professional basketball property. Six franchises. Two levels. One system." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Nav />
      <Hero />
      <Marquee items={["Toronto", "Scarborough", "Brampton", "Vaughan", "Mississauga", "Durham", "Downtown", "Legacy Lives Here"]} />
      <LeagueSection />
      <FranchiseMap />
      <Pathway />
      <The24Section />
      <Sponsorship />
      <MediaSection />
      <LegacySection />
      <Footer />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Toronto skyline at night with basketball court"
          className="h-[120%] w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black" />
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
            Toronto · Est. for the next decade
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display mt-6 text-[18vw] md:text-[10vw] leading-[0.85] tracking-tight"
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
              <CTA to="/franchises" primary>Explore Franchises</CTA>
              <CTA to="/the-24">Join The 24</CTA>
              <CTA to="/sponsorship" subtle>Partner With TRT</CTA>
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
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CTA({
  to,
  children,
  primary,
  subtle,
}: {
  to: string;
  children: React.ReactNode;
  primary?: boolean;
  subtle?: boolean;
}) {
  const base =
    "group inline-flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300";
  const style = primary
    ? "bg-trt-red text-white hover:bg-white hover:text-black"
    : subtle
    ? "border border-white/20 text-white/80 hover:border-white hover:text-white"
    : "bg-white text-black hover:bg-trt-red hover:text-white";
  return (
    <Link to={to} className={`${base} ${style}`}>
      {children}
      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function LeagueSection() {
  const stats = [
    { n: "6", l: "Franchises" },
    { n: "2", l: "Competitive Levels" },
    { n: "1", l: "Unified System" },
    { n: "1000+", l: "Future Athletes" },
    { n: "M+", l: "Future Fans" },
  ];

  return (
    <section className="relative py-32 md:py-44 bg-black">
      <div className="container-x">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">The League</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-[14vw] md:text-[8vw] leading-[0.9]">
            Built for<br />
            <span className="italic font-display text-white/40">Toronto.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-12 gap-10">
          <Reveal delay={0.15} className="md:col-span-5">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-balance">
              TRT is building a city-wide professional basketball property
              designed to unite communities, develop athletes, create
              opportunities, and elevate basketball across the Greater Toronto Area.
            </p>
            <p className="mt-6 text-white/50">
              Not a league. A movement. Not a season. A system.
            </p>
          </Reveal>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={0.1 + i * 0.06}>
                <div className="bg-black p-6 md:p-8 aspect-square flex flex-col justify-between">
                  <span className="font-display text-5xl md:text-7xl text-trt-red">{s.n}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/70">{s.l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FranchiseMap() {
  return (
    <section className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 opacity-30">
        <img src={courtImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      <div className="container-x relative py-32 md:py-44">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">The Map</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-[12vw] md:text-[7vw] leading-[0.9] text-balance">
            Six cities.<br />One league.
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.2}>
            <div className="relative aspect-[5/3] bg-black/60 border border-white/10 overflow-hidden">
              <svg viewBox="0 0 1000 600" className="absolute inset-0 h-full w-full">
                <defs>
                  <radialGradient id="g" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="oklch(0.55 0.24 27 / 0.3)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <rect width="1000" height="600" fill="url(#g)" />
                {/* Lake Ontario suggestion */}
                <path
                  d="M 0,470 Q 250,520 500,470 T 1000,470 L 1000,600 L 0,600 Z"
                  fill="oklch(0.12 0.02 240)"
                  opacity="0.4"
                />
                {FRANCHISES.map((f, i) => (
                  <g key={f.slug} className="cursor-pointer">
                    <circle cx={f.map.x} cy={f.map.y} r="40" fill="oklch(0.55 0.24 27 / 0.1)">
                      <animate attributeName="r" values="30;55;30" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                    </circle>
                    <circle cx={f.map.x} cy={f.map.y} r="8" fill="#D6001C" />
                    <text
                      x={f.map.x + 16}
                      y={f.map.y + 5}
                      fill="white"
                      fontSize="16"
                      fontFamily="Inter, sans-serif"
                      fontWeight="600"
                    >
                      {f.city}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-px bg-white/10">
            {FRANCHISES.map((f, i) => (
              <Reveal key={f.slug} delay={0.1 + i * 0.05}>
                <Link
                  to="/franchises/$slug"
                  params={{ slug: f.slug }}
                  className="group block bg-black p-6 hover:bg-trt-red/10 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-trt-red flex items-center gap-1.5">
                        <MapPin size={11} /> {f.tag}
                      </p>
                      <h3 className="font-display mt-3 text-2xl">{f.city}</h3>
                      <p className="mt-1 text-sm text-white/50">{f.name}</p>
                    </div>
                    <ArrowRight size={16} className="text-white/30 mt-1 group-hover:text-trt-red group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pathway() {
  const steps = [
    { n: "01", t: "Youth Basketball", d: "Community programs across the GTA identify and develop the next wave." },
    { n: "02", t: "U23 Development", d: "Men's and Women's U23 pipelines bridge youth to professional readiness." },
    { n: "03", t: "TRT", d: "Six franchises. Two levels. Real minutes, real coaching, real exposure." },
    { n: "04", t: "Professional", d: "International, NCAA, and pro leagues — TRT alumni move up the ladder." },
  ];

  return (
    <section className="relative py-32 md:py-44 bg-black border-t border-white/10">
      <div className="container-x">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">The Pathway</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-[12vw] md:text-[7vw] leading-[0.9] text-balance">
            From potential<br />to <span className="text-trt-red">professional.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-5">
            <img src={playerImg} alt="Player in shadow" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
          </Reveal>
          <div className="md:col-span-7 flex flex-col">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="group border-t border-white/10 last:border-b py-8 flex gap-6 md:gap-10 hover:bg-white/[0.02] transition-colors">
                  <span className="font-display text-trt-red text-2xl md:text-3xl shrink-0">{s.n}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-5xl">{s.t}</h3>
                    <p className="mt-2 text-white/60 max-w-xl">{s.d}</p>
                  </div>
                  <ArrowDown size={20} className="text-white/30 group-hover:text-trt-red transition-colors mt-2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function The24Section() {
  return (
    <section className="relative py-32 md:py-44 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0">
        <img src={the24Bg} alt="" className="h-full w-full object-cover opacity-60" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-trt-red/20" />
      </div>

      <div className="container-x relative">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Members Only</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-6 text-[20vw] md:text-[14vw] leading-[0.8] text-balance">
                The<br />
                <span className="text-trt-red">24.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg text-white/80">
                A private Founders Circle helping build the future of TRT.
                Twenty-four legacy positions. Once filled, never reopened.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTA to="/the-24" primary>Apply To Become A Founder</CTA>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="md:col-span-5">
            <div className="border border-white/15 bg-black/60 backdrop-blur p-6">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/60">
                <span>Founder Tracker</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-trt-red animate-pulse-dot" />
                  Live
                </span>
              </div>
              <div className="mt-6 grid grid-cols-6 gap-1.5">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square border border-white/15 flex items-center justify-center text-[10px] font-mono text-white/40 hover:border-trt-red hover:text-trt-red transition-colors"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-baseline justify-between border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">Available</span>
                <span className="font-display text-2xl text-white">24 / 24</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Sponsorship() {
  const tiles = [
    { t: "Corporate", d: "Enterprise partners powering the league." },
    { t: "Media", d: "Broadcast, streaming and content collaborators." },
    { t: "Community", d: "Local programs growing the game." },
    { t: "Venue", d: "Arenas, courts and training facilities." },
    { t: "Investment", d: "Capital backing Toronto's next sports IP." },
    { t: "Founding Partners", d: "Day-one builders of the TRT story." },
  ];
  return (
    <section className="py-32 md:py-44 bg-black border-t border-white/10">
      <div className="container-x">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Partner</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-[12vw] md:text-[7vw] leading-[0.9]">
            Build with<br />
            <span className="text-trt-red">TRT.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10">
          {tiles.map((t, i) => (
            <Reveal key={t.t} delay={i * 0.06}>
              <div className="group bg-black p-8 md:p-10 h-full hover:bg-trt-red transition-colors duration-500">
                <span className="font-mono text-xs text-white/40 group-hover:text-white/90">0{i + 1}</span>
                <h3 className="font-display mt-6 text-3xl md:text-4xl">{t.t}</h3>
                <p className="mt-3 text-white/60 group-hover:text-white/90">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-3">
            <CTA to="/sponsorship" primary>Become A Partner</CTA>
            <CTA to="/contact" subtle>Request Investment Deck</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MediaSection() {
  const stories = [
    { tag: "Announcement", t: "TRT unveils six founding franchise markets", img: crowdImg },
    { tag: "Feature", t: "Why Toronto needed its own pro basketball league", img: streetImg },
    { tag: "Inside The 24", t: "Meet the founders shaping Toronto's next sports IP", img: the24Bg },
  ];
  return (
    <section className="py-32 md:py-44 bg-black border-t border-white/10">
      <div className="container-x">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Media</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-6 text-[12vw] md:text-[7vw] leading-[0.9]">
                The story,<br />in motion.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/media" className="text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-trt-red inline-flex items-center gap-2">
              All stories <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <Link to="/media" className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-black">
                  <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-trt-red">{s.tag}</p>
                <h3 className="font-display mt-2 text-2xl md:text-3xl group-hover:text-trt-red transition-colors">{s.t}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegacySection() {
  return (
    <section className="relative h-[90svh] min-h-[600px] flex items-center border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0">
        <img src={courtImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container-x relative">
        <Reveal>
          <h2 className="font-display text-[22vw] md:text-[14vw] leading-[0.82] text-balance">
            Legacy<br />
            <span className="text-trt-red">lives</span> here.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-md text-lg text-white/80">
            The future of basketball in Toronto starts now.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTA to="/franchises" primary>Explore TRT</CTA>
            <CTA to="/contact" subtle>Contact</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
