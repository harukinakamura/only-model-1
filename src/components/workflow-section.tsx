"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import StartJourneyButton from "./ui/start-journey-button";

export function WorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Different parallax depths for each element
  const logoX = useTransform(x, [-300, 300], [-5, 5]);
  const logoY = useTransform(y, [-300, 300], [-5, 5]);

  // Parallax group transforms
  const socialsX = useTransform(x, [-300, 300], [-18, 18]);
  const socialsY = useTransform(y, [-300, 300], [-18, 18]);
  const metricsX = useTransform(x, [-300, 300], [18, -18]);
  const metricsY = useTransform(y, [-300, 300], [-18, 18]);

  const socialPlatforms = [
    {
      name: "TikTok",
      signal: "Creator loops",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      signal: "High-intent DM",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Paid Promo",
      signal: "Whitelist boosts",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5 1.5 9l10.5 7.5L22.5 9zm0 0v21" />
        </svg>
      ),
    },
    {
      name: "Twitch",
      signal: "Live funnel",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      signal: "Pin drops",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Reddit",
      signal: "Community heat",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      signal: "Story takeovers",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  const floweredSocials = socialPlatforms.map((platform, index) => {
    const angle = (index / socialPlatforms.length) * 2 * Math.PI;
    const radius = 42;
    const offsetX = 50 + Math.cos(angle) * radius;
    const offsetY = 50 + Math.sin(angle) * radius;
    return {
      ...platform,
      position: {
        top: `${offsetY}%`,
        left: `${offsetX}%`,
      },
    };
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="workflow-section mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 py-24 my-20"
      id="workflow"
      data-section="workflow"
    >
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-4 text-center"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-accent">How We Work</p>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
            We operate the entire machine<br />so you stay in creator mode
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted">
            Strategy, chat, creative, compliance, and growth systems built exclusively for OnlyFans elites.
          </p>
          <div className="flex justify-center mt-10">
            <StartJourneyButton />
          </div>
        </motion.div>

        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-background/60 via-background/40 to-background/70 p-5 md:rounded-[40px] md:p-6 lg:rounded-[48px] lg:p-8 shadow-[0_35px_120px_rgba(9,9,15,0.55)] will-change-transform"
          style={{ perspective: "1500px" }}
        >
          <div className="flex flex-col gap-8 md:grid md:grid-cols-[1.1fr_0.8fr_1.1fr] md:gap-6 md:items-center lg:gap-10">
            <motion.div
              style={{ x: socialsX, y: socialsY }}
              className="relative flex justify-center md:justify-start"
            >
              {/* Orbiting Container on Desktop */}
              <div className="relative mx-auto grid w-full grid-cols-3 gap-2 md:block md:h-[230px] md:w-[230px] md:animate-[spin_60s_linear_infinite] lg:h-[360px] lg:w-[360px]">
                {floweredSocials.map((platform, index) => {
                  // Mobile Grid Placement Logic (2-3-2 layout)
                  // Col 1: Indexes 0, 1
                  // Col 2: Indexes 2, 3, 4
                  // Col 3: Indexes 5, 6
                  let mobileGridClass = "";
                  if (index === 0) mobileGridClass = "col-start-1 row-start-1";
                  if (index === 1) mobileGridClass = "col-start-1 row-start-2";
                  if (index === 2) mobileGridClass = "col-start-2 row-start-1";
                  if (index === 3) mobileGridClass = "col-start-2 row-start-2";
                  if (index === 4) mobileGridClass = "col-start-2 row-start-3";
                  if (index === 5) mobileGridClass = "col-start-3 row-start-1";
                  if (index === 6) mobileGridClass = "col-start-3 row-start-2";

                  return (
                    <motion.div
                      key={platform.name}
                      className={`group relative flex min-h-[90px] w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-[20px] border border-white/12 bg-gradient-to-br from-background/85 to-surface/70 px-2 py-3 text-center shadow-[0_15px_30px_rgba(8,6,15,0.35)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-accent/60 hover:bg-white/15 md:absolute md:min-h-[80px] md:w-[85px] md:gap-1.5 md:rounded-[16px] md:px-2.5 md:py-2.5 lg:min-h-[110px] lg:w-[120px] lg:gap-2 lg:rounded-[26px] lg:px-4 lg:py-4 !top-auto !left-auto !translate-0 md:!top-[var(--top)] md:!left-[var(--left)] md:!translate-x-[-50%] md:!translate-y-[-50%] ${mobileGridClass}`}
                      style={{
                        "--top": platform.position.top,
                        "--left": platform.position.left,
                      } as any}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.25 + index * 0.07 }}
                    >
                      {/* Counter-rotate content to keep it upright */}
                      <div className="flex flex-col items-center gap-2 md:animate-[spin_60s_linear_infinite_reverse]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-background/70 to-surface/60 shadow-inner shadow-black/30 md:h-6 md:w-6 md:rounded-lg lg:h-10 lg:w-10 lg:rounded-2xl">
                          {platform.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold text-foreground md:text-[10px] lg:text-xs">{platform.name}</p>
                          {/* <p className="text-[0.5rem] uppercase tracking-[0.3em] text-muted md:text-[0.5rem] md:tracking-[0.3em] lg:text-[0.6rem] lg:tracking-[0.45em]">
                            {platform.signal}
                          </p> */}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              style={{ x: logoX, y: logoY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex flex-col items-center justify-center gap-4 md:gap-5"
            >
              <div className="relative flex h-24 w-24 items-center justify-center rounded-[28px] border border-accent/40 bg-gradient-to-br from-accent/20 via-background/40 to-accent-secondary/10 p-6 shadow-[0_30px_80px_rgba(255,87,182,0.25)] md:h-28 md:w-28 md:rounded-[32px] md:p-7 lg:h-40 lg:w-40 lg:rounded-[34px] lg:p-8">
                <div className="absolute inset-2 rounded-[26px] border border-white/10 md:rounded-[30px]" />
                <Image
                  src="/assets/logos/logo.png"
                  alt="OnlyModels"
                  width={150}
                  height={150}
                  className="relative z-10 h-16 w-16 object-contain md:h-20 md:w-20 lg:h-28 lg:w-28"
                />
                <div className="absolute -left-6 top-1/2 hidden h-1 w-16 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/40 to-accent lg:block" />
                <div className="absolute -right-6 top-1/2 hidden h-1 w-16 -translate-y-1/2 bg-gradient-to-r from-accent via-accent-secondary/60 to-transparent lg:block" />
              </div>
              <p className="text-center text-[0.6rem] uppercase tracking-[0.4em] text-muted md:text-xs md:tracking-[0.5em]">
                Centralized Ops OS
              </p>
            </motion.div>

            <motion.div
              style={{ x: metricsX, y: metricsY }}
              className="flex w-full flex-col gap-3 md:mx-auto md:max-w-[220px] md:gap-4 lg:mx-0 lg:max-w-none"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-[16px] border border-white/12 bg-gradient-to-br from-background/80 to-surface/70 p-3.5 shadow-[0_30px_60px_rgba(15,10,30,0.45)] backdrop-blur-lg md:rounded-[20px] md:p-3.5 lg:rounded-[26px] lg:p-5"
              >
                <div className="flex items-center justify-between text-[0.55rem] uppercase tracking-[0.25em] text-muted md:text-[0.65rem] md:tracking-[0.3em] lg:text-xs">
                  <span>Revenue Trend</span>
                  <span className="text-accent">Updating</span>
                </div>
                <p className="mt-1.5 text-[0.6rem] text-muted md:mt-2 md:text-xs lg:text-sm">Nov 2024 - Nov 2025</p>
                <svg viewBox="0 0 240 120" className="mt-2.5 w-full max-w-[180px] sm:max-w-[260px]">
                  <defs>
                    <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,87,182,0.35)" />
                      <stop offset="100%" stopColor="rgba(255,20,147,0.1)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 110 L 0 70 Q 60 55, 120 40 T 240 25 L 240 110 Z"
                    fill="url(#revenueGradient)"
                  />
                  <path
                    d="M 0 70 Q 60 55, 120 40 T 240 25"
                    stroke="rgba(255,87,182,1)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="rounded-[16px] border border-white/12 bg-gradient-to-br from-background/80 to-surface/70 p-3.5 shadow-[0_30px_60px_rgba(15,10,30,0.45)] backdrop-blur-lg md:rounded-[20px] md:p-3.5 lg:rounded-[26px] lg:p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 md:h-9 md:w-9 lg:h-10 lg:w-10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent md:h-4 md:w-4 lg:h-5 lg:w-5" />
                  </div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-foreground md:text-sm lg:text-base">Successful payout</p>
                    <p className="text-[0.55rem] text-muted md:text-[0.65rem] lg:text-xs">Funds routed to creator vault</p>
                  </div>
                </div>
                <div className="space-y-2.5 text-sm">
                  {[
                    { label: "Subscriptions", value: "$40,613" },
                    { label: "Messages", value: "$105,524" },
                    { label: "Tips", value: "$163,620" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-2 py-1.5 text-foreground/90 text-[0.6rem] md:px-2.5 md:text-[0.7rem] lg:text-sm"
                    >
                      <span className="text-[0.42rem] uppercase tracking-[0.25em] text-muted md:text-[0.5rem] lg:text-xs">
                        {metric.label}
                      </span>
                      <span className="text-[0.8rem] font-semibold text-foreground md:text-sm lg:text-base">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
