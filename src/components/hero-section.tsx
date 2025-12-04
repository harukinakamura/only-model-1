"use client";

import Image from "next/image";
import { AnimatedCTA } from "@/components/animated-cta-button";
import { HeroPhraseAnimations } from "@/components/hero-phrase-animations";
import { InteractiveHeroBackground } from "@/components/interactive-hero-background";
import { HeroVisuals } from "@/components/hero-visuals";
import { motion } from "framer-motion";

const rotatingPhrases = [
  "Without Stress",
  "With Elite Operators",
  "On Autopilot Nights",
];

export function HeroSection() {
  return (
    <section id="hero" data-section="hero" className="relative flex min-h-[65dvh] w-full flex-col items-center justify-center overflow-hidden pt-24 md:min-h-dvh md:pt-40">
      <div className="absolute inset-0 z-0">
        <InteractiveHeroBackground />
      </div>
      <div className="pointer-events-none relative z-10 flex w-full justify-center mb-8 md:absolute md:top-24 md:mb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-accent/20 blur-[120px]" />
          <Image
            src="/assets/logos/footer-logo.png"
            alt="OnlyModels emblem"
            width={320}
            height={120}
            className="h-auto w-60 object-contain drop-shadow-[0_0_45px_rgba(255,105,180,0.6)] md:w-[320px]"
            priority
          />
        </motion.div>
      </div>

      <div className="nav-shell relative z-10 mt-10 flex flex-col items-center gap-12 md:mt-28 md:gap-12 px-6 text-center md:flex-col md:text-center xl:mt-0 xl:flex-row xl:gap-28 xl:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-1 flex-col items-center gap-6 md:items-center xl:items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-pill px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-secondary shadow-[0_0_20px_rgba(255,20,147,0.3)]"
          >
            The Agency OS for Top 0.1%
          </motion.div>

          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-foreground md:text-[clamp(3rem,5vw,5rem)] xl:text-[clamp(3.5rem,4.5vw,4.25rem)]">
            <span className="block">Your Success,</span>
            <div className="hero-phrases md:justify-center xl:justify-start">
              <HeroPhraseAnimations phrases={rotatingPhrases} />
            </div>
          </h1>

          <div className="flex flex-col gap-2 text-sm font-medium text-muted md:text-base md:text-center xl:text-left">
            <p>
              Are you posting, chatting, promoting and managing DMs all by yourself?
            </p>
            <p className="text-foreground">
              We Take over the work so you can earn more while doing less.
            </p>
          </div>

          <p className="text-sm font-medium text-muted md:text-base md:text-center xl:text-left">
            Powered by a Dedicated Growth Agency.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center xl:justify-start xl:items-start"
          >
            <AnimatedCTA href="#apply" text="APPLY NOW" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.4 }}
          className="relative flex-1 flex justify-center w-full md:justify-center md:mt-8 xl:mt-0 xl:justify-end md:ml-0 xl:-ml-8 2xl:ml-0"
        >
          <HeroVisuals />
        </motion.div>
      </div>
    </section>
  );
}
