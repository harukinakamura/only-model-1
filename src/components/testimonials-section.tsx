"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useInView as useFramerInView } from "framer-motion";
import { CheckCircle2, Play, Star, TrendingUp } from "lucide-react";

type VideoTestimonial = {
  creator: string;
  role: string;
  stat: string;
  quote: string;
  embedUrl: string;
  aspectPadding: string;
  length: string;
  durationMs: number;
};

const videoTestimonials: VideoTestimonial[] = [
  {
    creator: "Lisa",
    role: "Creator",
    stat: "+420% launch revenue",
    quote: "How we rebuilt her chat scripts and pricing ladder so every fan felt VIP.",
    embedUrl: "https://drive.google.com/file/d/1_TqD7PWfddCtrPeY4Y5acs6_oABlUh2B/preview?autoplay=1&mute=1",
    aspectPadding: "177.778%",
    length: "1:14",
    durationMs: 68000,
  },
  {
    creator: "Ana",
    role: "Creator",
    stat: "+38% avg order value",
    quote: "Daily reports, proactive upsells, and the calm confidence of a 24/7 team.",
    embedUrl: "https://drive.google.com/file/d/1bLODuPjQg1lpyV-iRwGyd_xOm-HwIgxa/preview?autoplay=1&mute=1",
    aspectPadding: "179.272%",
    length: "0:39",
    durationMs: 52000,
  },
  {
    creator: "Delfi.",
    role: "Creator",
    stat: "0 ➜ Top 3% in 60 days",
    quote: "She was posting on every platform without knowing what worked. We reorganized everything for her.",
    embedUrl: "https://drive.google.com/file/d/1jEWBSSzHe25gHywFPp2rO6jYBfi0m0F6/preview?autoplay=1&mute=1",
    aspectPadding: "177.778%",
    length: "0:57",
    durationMs: 92000,
  },
];

const credibilityHighlights = [
  {
    label: "Creator satisfaction",
    value: "4.9/5",
    icon: Star,
  },
  {
    label: "Average uplift",
    value: "+38%",
    icon: TrendingUp,
  },
  {
    label: "Creator retention",
    value: "98%",
    icon: CheckCircle2,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const isVideoInView = useFramerInView(videoContainerRef, { amount: 0.5 });
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (!isVideoInView) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      return;
    }

    const duration = videoTestimonials[activeIndex].durationMs;
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % videoTestimonials.length);
    }, duration + 1000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex, isVideoInView]);

  const headlineVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="testimonials-section relative isolate overflow-hidden py-24 sm:py-32"
      id="testimonials"
      data-section="testimonials"
      ref={containerRef}
    >
      <div className="pointer-events-none absolute inset-0  via-background to-background" />
      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center">
          <motion.span
            initial="hidden"
            animate={controls}
            variants={headlineVariants}
            className="testimonials-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70"
          >
            <Star className="h-4 w-4 text-accent" />
            Verified Creator Receipts
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={controls}
            variants={headlineVariants}
            className="testimonials-heading text-balance text-4xl font-semibold leading-tight text-accent sm:text-5xl lg:text-6xl"
          >
            The trust that keeps elite creators scaling with us
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={headlineVariants}
            className="testimonials-subtext text-pretty text-base text-muted-foreground sm:text-lg"
          >
            Every message, every upsell, every retention play is handled like a white-glove service.
            Here is what a handful of our partners say after handing us the backend.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delayChildren: 0.1, staggerChildren: 0.05 },
            },
          }}
          className="mx-auto mb-16 flex flex-wrap items-center justify-center gap-4"
        >
          {credibilityHighlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.label}
                className="testimonial-highlight group flex w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-muted-foreground backdrop-blur transition hover:border-white/30 hover:text-foreground md:w-auto md:py-2"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-1 items-center justify-between text-left md:flex-none md:flex-col md:items-start md:justify-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                    {highlight.label}
                  </p>
                  <p className="text-base font-semibold text-foreground">{highlight.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="testimonials-shell relative mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-background/80 via-background/50 to-background/80 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/70 p-4 shadow-[0_25px_80px_rgba(15,15,20,0.25)] dark:bg-white/5"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/20 opacity-60" />
              <div className="relative flex flex-col gap-1 pb-4 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                <span>Creator voice memo</span>
              </div>
              <div className="relative mx-auto w-full max-w-[330px] overflow-hidden rounded-[34px] border border-white/15 bg-black/70 shadow-[0_20px_60px_rgba(14,14,20,0.35)] sm:max-w-[360px]">
                <div className="absolute -inset-2 rounded-[40px] bg-gradient-to-tr from-accent/30 via-transparent to-accent-secondary/30 opacity-60 blur-2xl" />
                <div ref={videoContainerRef} className="relative rounded-[34px] border border-white/15 bg-black/80">
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: videoTestimonials[activeIndex].aspectPadding }}
                  >
                    {isVideoInView && (
                      <iframe
                        key={videoTestimonials[activeIndex].embedUrl}
                        src={`${videoTestimonials[activeIndex].embedUrl}?autoplay=1&mute=1`}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="absolute left-0 top-0 h-full w-full rounded-[34px] border-0"
                        title={`${videoTestimonials[activeIndex].creator} testimonial`}
                        
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="relative mt-6 flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-foreground">{videoTestimonials[activeIndex].creator}</p>
                    <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                      {videoTestimonials[activeIndex].role}
                    </p>
                  </div>
                  <div className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                    {videoTestimonials[activeIndex].stat}
                  </div>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {videoTestimonials[activeIndex].quote}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
              className="flex flex-col gap-4"
            >
              {videoTestimonials.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.creator}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`video-testimonial-pill group relative flex items-center gap-4 rounded-2xl border px-4 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${isActive
                        ? "border-accent/40 bg-accent/10 shadow-[0_20px_60px_rgba(236,72,153,0.25)] text-foreground"
                        : "border-white/10 bg-white/5 text-foreground/80 hover:border-white/20 dark:bg-white/5"
                      }`}
                    aria-pressed={isActive}
                    style={{ cursor: "pointer", transform: isActive ? "translateY(-2px)" : undefined }}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition ${isActive ? "border-accent/40 bg-accent/20 text-accent" : "border-white/10 bg-white/5 text-white/70 group-hover:text-accent group-hover:border-accent/30"}`}>
                      <Play className="h-4 w-4" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <p className="text-sm font-semibold">{item.creator}</p>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{item.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-accent">{item.stat}</p>
                      <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">{item.length}</p>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
