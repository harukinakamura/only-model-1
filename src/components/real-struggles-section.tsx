"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";

const struggles = [
  {
    id: 1,
    title: "Overwhelmed from the moment you start",
    description:
      'Everyone tells you “post more,” “DM more,” “do this,” “don’t do that.” You get flooded with advice and zero direction. You don’t even know where to begin, and the noise makes everything harder.',
  },
  {
    id: 2,
    title: "Working nonstop but seeing no growth",
    description:
      'You grind for days, weeks, months… and your sub count doesn’t move. Your effort feels invisible, while other creators seem to explode overnight. You start wondering what you’re doing wrong."overnight wins" and you wonder what you are missing.',
  },
  {
    id: 3,
    title: "Feeling invisible among millions of creators",
    description:
      "With so many models online, it’s easy to feel like no one notices you. You post, you try, you put in the work — and still feel like you’re yelling into the void.",
  },
  {
    id: 4,
    title: "Losing motivation because nothing feels consistent",
    description:
      "Some weeks you’re on fire, others you can’t even open your camera roll. That inconsistency kills your momentum, and every time you restart, it feels harder than the last time.",
  },
  {
    id: 5,
    title: "Getting burned by agencies that overpromise",
    description:
      'You trusted an agency, and they ghosted you, mismanaged your brand, or treated you like an ATM. Now you’re stuck questioning if you should keep doing everything alone.',
  },
  {
    id: 6,
    title: " OnlyFans becomes a full-time job on top of everything else",
    description:
      "Content, customs, messages, taxes, promotion… it never stops. You’re juggling all of it, dropping pieces, stressing out, and feeling guilty when things slip through the cracks.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100, rotateX: -45, scale: 0.9 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: 0.1 * index,
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  }),
};

export function RealStrugglesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.4 });
  const gridControls = useAnimation();
  const gridInView = useInView(gridRef, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [cardTilt, setCardTilt] = useState<{ id: number | null; x: number; y: number }>({
    id: null,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (gridInView) {
      gridControls.start("visible");
    }
  }, [gridControls, gridInView]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) {
      return;
    }
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setParallax({ x, y });
  };

  const parallaxStyle = (depth: number) => ({
    transform: `translate3d(${parallax.x * depth}px, ${parallax.y * depth}px, 0)`,
  });

  const handleCardPointer = (event: MouseEvent<HTMLDivElement>, id: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    setCardTilt({ id, x, y });
  };

  const resetCardPointer = () => {
    setCardTilt({ id: null, x: 0, y: 0 });
  };

  return (
    <section
      className="real-struggles-section relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      id="real-struggles"
      data-section="real-struggles"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 via-background/80 to-background" />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={parallaxStyle(12)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.2 } }}
      >
        <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-accent/15 blur-[160px]" />
        <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-accent-secondary/20 blur-[200px]" />
      </motion.div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={
            headingInView
              ? { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
              : {}
          }
          className="mx-auto max-w-4xl text-center"
        >
          <p className="real-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
            The truth
          </p>
          <h2 className="real-heading mt-5 text-balance text-4xl font-semibold text-accent sm:text-5xl lg:text-6xl">
            The real struggles most OnlyFans creators deal with
          </h2>
          <p className="real-subtext mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            If you’ve been feeling stuck, overwhelmed, or unsure what’s wrong, you’re not crazy — these are the problems almost every creator faces but nobody talks about.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridControls}
          className="grid gap-6 md:grid-cols-2"
          style={{ perspective: "1000px" }}
        >
          {struggles.map((struggle, index) => {
            const isActive = hoveredId === struggle.id;
            const tilt = cardTilt.id === struggle.id ? cardTilt : { x: 0, y: 0 };
            return (
              <motion.div
                key={struggle.id}
                custom={index}
                variants={cardVariants}
                className="real-card group relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-background/60 via-background/40 to-background/70 p-6 shadow-xl shadow-pink-900/5 transition duration-500 hover:-translate-y-1 hover:border-accent/40"
                onMouseEnter={() => setHoveredId(struggle.id)}
                onMouseLeave={() => {
                  setHoveredId(null);
                  resetCardPointer();
                }}
                onMouseMove={(event) => handleCardPointer(event, struggle.id)}
              >
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={parallaxStyle(20)}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
                </div>

                <motion.div
                  style={{
                    rotateX: tilt.y * -6,
                    rotateY: tilt.x * 6,
                    scale: isActive ? 1.02 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-foreground/40">
                      {String(struggle.id).padStart(2, "0")}
                    </p>
                    <motion.span
                      animate={{ opacity: isActive ? 1 : 0.3, backgroundColor: isActive ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.02)" }}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60"
                    >
                      Real talk
                    </motion.span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">{struggle.title}</h3>
                    <p className="text-base text-muted-foreground">{struggle.description}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 hidden md:block"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className="pointer-events-none absolute inset-0"
                  animate={{
                    background:
                      hoveredId === struggle.id
                        ? "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 55%)"
                        : "radial-gradient(circle at 30% 20%, rgba(255,255,255,0), transparent 55%)",
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={
            headingInView
              ? { opacity: 1, scale: 1, filter: "blur(0px)", transition: { delay: 0.6, duration: 0.8, ease: "backOut" } }
              : {}
          }
          className="text-center"
        >
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-accent to-transparent" />
          <p className="mt-6 text-xl font-semibold text-accent sm:text-2xl">You are not the problem.</p>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            These cracks are exactly what OnlyModels fixes with full-stack systems, so you can focus on
            creating while we engineer the growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
