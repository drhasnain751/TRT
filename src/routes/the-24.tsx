import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/trt/Nav";
import { Footer } from "@/components/trt/Footer";
import { Reveal } from "@/components/trt/Reveal";
import { TIERS, priceForFounder } from "@/lib/trt-data";
import { Check } from "lucide-react";
import the24Bg from "@/assets/the-24-bg.jpg";

export const Route = createFileRoute("/the-24")({
  head: () => ({
    meta: [
      { title: "The 24 — Founders Circle | TRT" },
      { name: "description", content: "A private Founders Circle helping build the future of The Real Toronto Basketball League. 24 legacy positions." },
      { property: "og:title", content: "The 24 — TRT Founders Circle" },
      { property: "og:description", content: "Twenty-four legacy positions. Once filled, never reopened." },
    ],
    links: [{ rel: "canonical", href: "/the-24" }],
  }),
  component: The24,
});

const benefits = [
  "VIP Access to all TRT events",
  "Founding Legacy recognition in perpetuity",
  "Private Founders-only gatherings",
  "Reserved league access & seating",
  "Media exposure & co-branded moments",
  "Founder participation rewards",
  "Investment opportunity priority",
  "Front-office relationship access",
];

function tierLabel(n: number): string {
  const t = TIERS.find((t) => n >= t.range[0] && n <= t.range[1])!;
  return `Founder ${t.range[0]}–${t.range[1]}`;
}

function The24() {
  const [selected, setSelected] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", website: "", industry: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-black text-white">
      <Nav />

      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={the24Bg} alt="" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        <div className="container-x relative">
          <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red animate-fade-up">Founders Circle · Members Only</p>
          <h1 className="font-display mt-6 text-[32vw] md:text-[22vw] leading-[0.8] animate-fade-up">
            The<br /><span className="text-trt-red">24.</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg md:text-xl text-white/80 animate-fade-up">
            A private Founders Circle helping build the future of The Real Toronto Basketball League.
            Twenty-four positions. Once filled, never reopened.
          </p>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Founder Benefits</p>
            <h2 className="font-display mt-6 text-5xl md:text-6xl leading-[0.95]">More than a logo on a wall.</h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 border border-white/10 p-4 hover:border-trt-red transition-colors">
                  <Check size={18} className="text-trt-red mt-0.5 shrink-0" />
                  <span className="text-white/80">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="container-x">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Founder Pricing</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-5xl md:text-7xl leading-[0.95]">Tiered by legacy.</h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-4 gap-px bg-white/10">
            {TIERS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-black p-8 h-full flex flex-col justify-between aspect-square">
                  <div>
                    <span className="font-mono text-xs text-trt-red">TIER 0{i + 1}</span>
                    <p className="mt-6 font-display text-2xl">Founder {t.range[0]}–{t.range[1]}</p>
                  </div>
                  <p className="font-display text-5xl md:text-6xl">
                    ${(t.price / 1000).toFixed(1).replace(/\.0$/, "")}<span className="text-trt-red">K</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="container-x">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Live Founder Tracker</p>
              <h2 className="font-display mt-4 text-4xl md:text-6xl leading-[0.95]">24 / 24 available</h2>
            </div>
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-trt-red animate-pulse-dot" />
              Live
            </span>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
            {Array.from({ length: 24 }).map((_, i) => {
              const n = i + 1;
              const active = selected === n;
              return (
                <button
                  key={n}
                  onClick={() => setSelected(n)}
                  className={`group aspect-square border p-3 flex flex-col justify-between text-left transition-all ${
                    active ? "border-trt-red bg-trt-red/10" : "border-white/15 hover:border-white/40"
                  }`}
                >
                  <span className="font-mono text-[10px] text-white/40">#{String(n).padStart(2, "0")}</span>
                  <div>
                    <p className={`font-display text-xl ${active ? "text-trt-red" : "text-white/80"}`}>Available</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/40">${priceForFounder(n).toLocaleString()}</p>
                  </div>
                </button>
              );
            })}
          </div>
          {selected && (
            <p className="mt-6 text-sm text-white/60">
              Selected: <span className="text-trt-red font-semibold">Founder #{selected}</span> · {tierLabel(selected)} · ${priceForFounder(selected).toLocaleString()}
            </p>
          )}
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-trt-red">Apply</p>
            <h2 className="font-display mt-6 text-5xl md:text-6xl leading-[0.95]">Become a founder.</h2>
            <p className="mt-6 text-white/60 max-w-md">
              Applications are reviewed personally. Founders are selected for alignment, not only capital.
            </p>
          </div>
          <div className="md:col-span-7">
            {submitted ? (
              <div className="border border-trt-red bg-trt-red/10 p-10 text-center">
                <h3 className="font-display text-3xl">Application received.</h3>
                <p className="mt-3 text-white/70">A TRT founder relations lead will reach out within 72 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  ["name", "Name"],
                  ["company", "Company"],
                  ["email", "Email", "email"],
                  ["phone", "Phone"],
                  ["website", "Website"],
                  ["industry", "Industry"],
                ].map(([key, label, type]) => (
                  <label key={key} className="block">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">{label}</span>
                    <input
                      required={key === "name" || key === "email"}
                      type={type || "text"}
                      value={(form as any)[key as string]}
                      onChange={(e) => setForm({ ...form, [key as string]: e.target.value })}
                      maxLength={200}
                      className="mt-2 w-full bg-transparent border-b border-white/20 py-2 focus:border-trt-red outline-none transition-colors"
                    />
                  </label>
                ))}
                <label className="block sm:col-span-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Founder Position Interest {selected && `· #${selected}`}
                  </span>
                  <input
                    value={selected ? `Founder #${selected} (${tierLabel(selected)})` : ""}
                    onChange={() => {}}
                    placeholder="Select from tracker above"
                    readOnly
                    className="mt-2 w-full bg-transparent border-b border-white/20 py-2 outline-none text-white/70"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Message</span>
                  <textarea
                    rows={4}
                    value={form.message}
                    maxLength={2000}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-white/20 py-2 focus:border-trt-red outline-none resize-none"
                  />
                </label>
                <button
                  type="submit"
                  className="sm:col-span-2 mt-4 bg-trt-red px-6 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
