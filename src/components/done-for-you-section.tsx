"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

type ServiceTile = {
  id: number;
  image: string;
  title: string;
  description: string;
  metric: string;
  baseSpan: number;
  expandedSpan: number;
  rowSpan: number;
};

const serviceTiles: ServiceTile[] = [
  {
    id: 1,
    image: "/assets/images/img1.jpeg",
    title: "OnlyFans growth pod",
    description:
      "A senior strategist, retention lead, and closer map your offers, create emotional chat flows, and rebuild upsell ladders.",
    metric: "+42% ARPU avg",
    baseSpan: 5,
    expandedSpan: 8,
    rowSpan: 1,
  },
  {
    id: 2,
    image: "/assets/images/img2.jpeg",
    title: "24/7 chat atelier",
    description:
      "Handpicked U.S. and EU chatters roleplay like your alter ego, nurture high-ticket whales, and send daily conversion notes.",
    metric: "98% response SLA",
    baseSpan: 7,
    expandedSpan: 8,
    rowSpan: 1,
  },
  {
    id: 3,
    image: "/assets/images/img3.jpeg",
    title: "Content & launch lab",
    description:
      "We storyboard reels, shoot b-roll, and schedule multi-platform drops so your OnlyFans stays top 0.5% visible.",
    metric: "4+ creative drops/mo",
    baseSpan: 6,
    expandedSpan: 8,
    rowSpan: 1,
  },
  {
    id: 4,
    image: "/assets/images/img4.jpeg",
    title: "Trust + protection stack",
    description:
      "Anti-leak protection, compliance counsel, and finance ops so you can scale without anxiety or shady agencies.",
    metric: "0 leaks to date",
    baseSpan: 6,
    expandedSpan: 7,
    rowSpan: 1,
  },
];

const kpis = [
  {
    label: "Lead capture upgrade",
    value: 3.2,
    suffix: "x",
    description: "More qualified subs captured from socials and ads.",
  },
  {
    label: "Automation coverage",
    value: 78,
    suffix: "%",
    description: "Of chat threads closed without manual handoff.",
  },
  {
    label: "Hours recovered weekly",
    value: 42,
    suffix: "h",
    description: "Manual work removed per creator pod.",
  },
];

export function DoneForYouSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const kpiRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const kpisInView = useInView(kpiRef, { once: true, amount: 0.1 });
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = serviceTiles[activeServiceIndex];
  const serviceCarouselRef = useRef<NodeJS.Timeout | null>(null);
  const [activeKpiIndex, setActiveKpiIndex] = useState(0);
  const activeKpi = kpis[activeKpiIndex];
  const heroSpring = useSpring(0, { stiffness: 40, damping: 25 });
  const formatKpiValue = (value: number, suffix: string) => {
    if (suffix === "x") {
      return value.toFixed(1);
    }
    return Math.round(value).toString();
  };
  const [heroDisplayValue, setHeroDisplayValue] = useState(formatKpiValue(0, kpis[0].suffix));

  useEffect(() => {
    const unsubscribe = heroSpring.on("change", (latest) => {
      setHeroDisplayValue(formatKpiValue(latest, kpis[activeKpiIndex].suffix));
    });
    return () => unsubscribe();
  }, [heroSpring, activeKpiIndex]);

  useEffect(() => {
    if (kpisInView) {
      heroSpring.set(activeKpi.value);
    }
  }, [kpisInView, activeKpi, heroSpring]);

  useEffect(() => {
    if (!kpisInView) {
      return;
    }
    const interval = setInterval(() => {
      setActiveKpiIndex((prev) => (prev + 1) % kpis.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [kpisInView]);

  const resetServiceAutoplay = () => {
    if (serviceCarouselRef.current) {
      clearInterval(serviceCarouselRef.current);
    }
    serviceCarouselRef.current = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % serviceTiles.length);
    }, 7000);
  };

  const goToService = (index: number) => {
    setActiveServiceIndex(index);
    resetServiceAutoplay();
  };

  const handlePrevService = () => {
    goToService((activeServiceIndex - 1 + serviceTiles.length) % serviceTiles.length);
  };

  const handleNextService = () => {
    goToService((activeServiceIndex + 1) % serviceTiles.length);
  };

  useEffect(() => {
    if (!isInView) {
      return;
    }
    resetServiceAutoplay();
    return () => {
      if (serviceCarouselRef.current) {
        clearInterval(serviceCarouselRef.current);
      }
    };
  }, [isInView]);

  return (
    <section
      className="done-for-you-section relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      id="done-for-you"
      data-section="done-for-you"
      ref={sectionRef}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at top, rgba(255,20,147,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="dfy-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-foreground/70">
            Done for you
          </p>
          <h2 className="dfy-heading mt-5 text-balance text-4xl font-semibold text-accent sm:text-5xl lg:text-6xl">
            Done-for-You Growth 
          </h2>
          <p className="dfy-subtext mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            At OnlyModels, we transform your OnlyFans into a fully scaled, optimized business — not a side project you manage alone. You get an entire team handling everything: content planning, growth strategy, fan engagement, traffic acquisition, and daily operations.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr,1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-10"
          >
            <motion.div
              ref={kpiRef}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="dfy-kpi-panel rounded-[42px] border border-white/10 bg-gradient-to-br from-background/85 via-background/60 to-background/80 p-8 shadow-[0_40px_140px_rgba(20,5,15,0.6)]"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-accent/10 via-background/40 to-accent-secondary/10 p-8 text-center shadow-inner shadow-black/40">
                  <div className="pointer-events-none absolute inset-0 opacity-70">
                    <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-accent/20 blur-[120px]" />
                    <div className="absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-accent-secondary/25 blur-[140px]" />
                  </div>
                  <div className="relative space-y-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.5em] text-foreground/60">
                        Proof the machine works
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold text-foreground">
                        {activeKpi.label}
                      </h3>
                    </div>
                    <div className="flex items-end justify-center gap-2 text-6xl font-bold text-accent sm:text-7xl">
                      <motion.span key={activeKpi.label}>{heroDisplayValue}</motion.span>
                      <span className="text-4xl text-accent/70">{activeKpi.suffix}</span>
                    </div>
                    <p className="text-lg text-muted-foreground">{activeKpi.description}</p>
                    <div className="hidden md:flex flex-wrap justify-center gap-4 text-sm uppercase tracking-[0.35em] text-foreground/60">
                      {[
                        { label: "Week 1", sub: "Baseline" },
                        { label: "Week 6", sub: "Lift" },
                        { label: "Week 12", sub: "Scale" },
                      ].map((milestone) => (
                        <div key={milestone.label} className="rounded-2xl border border-white/15 px-4 py-3">
                          <p>{milestone.label}</p>
                          <p className="text-base text-foreground/90">{milestone.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {kpis.map((kpi, index) => {
                    const isActive = index === activeKpiIndex;
                    return (
                      <button
                        key={kpi.label}
                        type="button"
                        onMouseEnter={() => setActiveKpiIndex(index)}
                        onFocus={() => setActiveKpiIndex(index)}
                        className={`flex w-full cursor-pointer items-center justify-between rounded-3xl border px-4 py-4 text-left transition duration-300 ${isActive
                          ? "border-accent/60 bg-accent/10 shadow-[0_10px_40px_rgba(236,72,153,0.25)]"
                          : "border-white/10 bg-white/5 hover:border-accent/40"
                          }`}
                      >
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/50">
                            {kpi.label}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{kpi.description}</p>
                        </div>
                        <div className="text-right text-3xl font-semibold text-foreground">
                          {kpi.value}
                          <span className="text-base text-foreground/70">{kpi.suffix}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-[48px] border border-white/10 bg-gradient-to-br from-background/80 via-background/60 to-background/70 p-6 shadow-[0_40px_120px_rgba(20,5,15,0.65)]">
              <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
                <div className="relative h-[420px] overflow-hidden rounded-[40px]">
                  <motion.img
                    key={activeService.image}
                    src={activeService.image}
                    alt={activeService.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                      {activeService.metric}
                    </p>
                    <h3 className="text-3xl font-semibold text-foreground">{activeService.title}</h3>
                  </div>
                  <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 gap-3 md:flex">
                    {serviceTiles.map((tile, index) => {
                      const active = index === activeServiceIndex;
                      return (
                        <button
                          key={tile.id}
                          type="button"
                          onClick={() => goToService(index)}
                          className={`h-2.5 w-2.5 rounded-full transition ${active ? "bg-accent shadow-[0_0_12px_rgba(236,72,153,0.8)]" : "bg-white/40"}`}
                          aria-label={`Go to ${tile.title}`}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-center gap-3 md:hidden">
                  {serviceTiles.map((tile, index) => {
                    const active = index === activeServiceIndex;
                    return (
                      <button
                        key={`mobile-dot-${tile.id}`}
                        type="button"
                        onClick={() => goToService(index)}
                        className={`h-2.5 w-2.5 rounded-full transition ${active ? "bg-accent shadow-[0_0_12px_rgba(236,72,153,0.8)]" : "bg-white/30"}`}
                        aria-label={`Go to ${tile.title}`}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col gap-5">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-left shadow-[0_25px_60px_rgba(20,5,15,0.45)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/50">
                      {activeService.metric}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-foreground">
                      {activeService.title}
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground">{activeService.description}</p>
                  </motion.div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handlePrevService}
                      className="flex flex-1 cursor-pointer items-center justify-center rounded-3xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-foreground/80 transition hover:border-accent/50 hover:text-accent"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={handleNextService}
                      className="flex flex-1 cursor-pointer items-center justify-center rounded-3xl border border-accent/40 bg-accent/15 px-4 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-accent transition hover:bg-accent hover:text-background"
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden md:flex flex-wrap justify-center gap-3">
                    {serviceTiles.map((tile, index) => {
                      const active = index === activeServiceIndex;
                      return (
                        <button
                          key={tile.id}
                          type="button"
                          onClick={() => goToService(index)}
                          className={`flex cursor-pointer items-center gap-3 rounded-3xl border px-4 py-2 text-left text-sm transition ${active
                            ? "border-accent/50 bg-accent/10 text-foreground shadow-[0_10px_30px_rgba(236,72,153,0.25)]"
                            : "border-white/10 bg-white/5 text-foreground/80 hover:border-accent/40"
                            }`}
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="font-semibold">{tile.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
