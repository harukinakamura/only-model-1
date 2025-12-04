"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Calendar, FileText, MessageCircle, PenTool, Phone } from "lucide-react";
import StartJourneyButton from "./ui/start-journey-button";

const steps = [
  {
    id: 1,
    icon: FileText,
    title: "CEO Intro Call",
    description: "A direct conversation with the CEO of OnlyModels to see if you’re a good fit and if we can genuinely help you grow.",
    meta: "Takes < 2 min",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Optional Agency Call",
    description: "If you want, we get on a call to present the agency, explain what we do, and show exactly how we can help your brand grow.",
    meta: "Live strategy call",
  },
  {
    id: 3,
    icon: Phone,
    title: "Contract",
    description: "If everything aligns, you sign a clear contract that protects both sides, with no hidden fees and no surprises.",
    meta: "48h turnaround",
  },
  {
    id: 4,
    icon: PenTool,
    title: "W Setup & Optimization",
    description: "We collect your inspiration and content, connect your account, and optimize everything: bio, pricing, menu, automations, PPVs, and overall profile setup.",
    meta: "Zero upfront",
  },
  {
    id: 5,
    icon: Calendar,
    title: " Launch & Scale",
    description: "We start the marketing, activate your systems, run 24/7 chatting, and scale your account to generate the highest revenue possible.",
    meta: "Week 1 momentum",
  },
];

const timelineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const } },
};

export function StepsToStartSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const updateProgress = () => {
      if (!progressRef.current) {
        return;
      }
      const rect = progressRef.current.getBoundingClientRect();
      const windowCenter = window.innerHeight / 2;
      const progress = (windowCenter - rect.top) / rect.height;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      className="steps-section relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      id="steps"
      data-section="steps"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,20,147,0.12),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="steps-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-foreground/70">
            Start
          </p>
          <h2 className="steps-heading mt-5 text-balance text-4xl font-semibold text-accent sm:text-5xl lg:text-6xl">
            Steps to activate your revenue engine
          </h2>
          <p className="steps-subtext mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Five touchpoints stand between you and a fully managed backend. Each step unlocks the next,
            with zero guesswork and daily visibility.
          </p>
        </motion.div>

        <div ref={progressRef} className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-4 hidden -translate-x-1/2 lg:left-1/2 lg:block">
            <div className="relative mx-auto h-full w-1 rounded-full bg-white/10">
              <motion.div
                className="absolute bottom-0 w-full rounded-full bg-gradient-to-b from-accent via-accent-secondary to-accent-secondary shadow-[0_0_25px_rgba(255,20,147,0.5)]"
                style={{ height: `${scrollProgress * 100}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
              {/* <motion.div
                className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border border-white/40 bg-background/90 shadow-lg shadow-accent/40"
                style={{ top: `calc(${scrollProgress * 100}% - 10px)` }}
                animate={{ scale: 1 + scrollProgress * 0.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              /> */}
            </div>
          </div>

          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-8 lg:grid-cols-2"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isEven = index % 2 === 0;

              return (
                <motion.button
                  key={step.id}
                  type="button"
                  aria-pressed={isActive}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, x: isEven ? -50 : 50, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: index * 0.15
                      }
                    }
                  }}
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  className="step-card group relative flex cursor-pointer flex-col overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-background/70 via-background/50 to-background/70 p-6 text-left shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
                    <div className="absolute inset-0 rounded-[32px] border border-accent/30" />
                  </div>
                  <div className="relative flex items-center gap-4">
                    <div className="step-icon flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent transition duration-300 group-hover:scale-110 group-hover:border-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/40">
                        Step {String(step.id).padStart(2, "0")}
                      </p>
                      <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-base text-muted-foreground">{step.description}</p>
                  <div className="mt-6 flex items-center justify-between text-sm font-medium text-foreground/70">
                    <span>{step.meta}</span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.3em] transition ${isActive ? "border-accent text-accent" : "border-white/15 text-foreground/50"
                        }`}
                    >
                      {isActive ? "Focused" : "Preview"}
                    </span>
                  </div>
                  <div
                    className={`absolute -left-3 top-6 hidden h-16 w-16 rounded-full border-4 transition lg:block ${isActive ? "border-accent/70" : "border-white/10"
                      }`}
                  />
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 md:text-sm">No risk • Transparent rev share</p>
          <StartJourneyButton />
          
        </motion.div>
      </div>
    </section>
  );
}
