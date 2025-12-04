"use client";

import { motion } from "framer-motion";
import { Gift, Headset, Mail, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LightningButton } from "./ui/lightning-button";

const referralPerks = [
  {
    title: "Instant split dashboard",
    description: "Track exactly what every referral earns with real-time payouts.",
  },
  {
    title: "Full info handoff from the manager",
    description: "Your referral’s manager talks to you directly as if you were the creator, gives you every detail you need, and sends screenshots so you always know what’s happening.",
  },
  {
    title: "Higher earnings boost for active referrers",
    description: "The more creators you bring in, the more rewards and perks you unlock as your referrals grow.",
  },
];

function HologramCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="cta-holo-card group relative cursor-pointer overflow-hidden rounded-[32px] border border-white/15 bg-background/60 px-6 py-5 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-background/80">
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-70">
        <div className="absolute inset-0 animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(236,72,153,0.25),rgba(255,20,147,0.25),rgba(255,105,180,0.25),rgba(236,72,153,0.25))] blur-3xl" />
      </div>
      <h4 className="text-base font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function CallToActionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="cta-section relative z-10 mx-auto w-full max-w-6xl px-5 py-32"
      id="cta"
      data-section="cta"
      ref={sectionRef}
    >
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 1.2,
            delay: 0.1
          }}
          className="cta-primary relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-background/80 via-background/60 to-background/80 p-10 text-center shadow-[0_35px_140px_rgba(236,72,153,0.25)] will-change-transform"
        >
          <div className="pointer-events-none absolute inset-0 opacity-90">
            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-accent/30 blur-[180px]" />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-secondary/30 blur-[180px]" />
            <div className="absolute inset-0 opacity-40">
              <span className="absolute inset-x-10 top-24 h-px animate-[pulse_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            </div>
          </div>
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.45em] text-foreground/60">
              Ready to scale
            </p>
            <h2 className="text-3xl font-semibold text-accent md:text-5xl">
              What are you waiting for?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Join the top 0.1% of creators. We handle infrastructure, chat, and growth while you
              focus on what you do best—creating.
            </p>
          </div>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <LightningButton label="Apply Now" href="mailto:launch@onlymodels.app" />
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-10 py-4 text-lg font-semibold text-foreground transition hover:border-accent/50 hover:text-accent">
              <span>+1 438 778 4338</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="cta-referral relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-background/70 via-background/50 to-background/80 p-10 shadow-[0_25px_100px_rgba(236,72,153,0.2)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-secondary/50 to-transparent" />
          </div>
          <div className="relative grid gap-6 lg:grid-cols-[1.6fr,1fr]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                <Gift className="h-4 w-4 text-accent" />
                Referral ignite
              </div>
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                Earn 10% for each creator you invite.
              </h3>
              <p className="text-base text-muted-foreground">
                Share your experience and get rewarded. High-performing referrals unlock larger rev
                shares, custom launch pods, and white-glove support.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="cta-referral-primary inline-flex cursor-pointer items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background">
                  Learn more
                </button>
                <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:text-accent">
                  <ShieldCheck className="h-4 w-4" />
                  Referral terms
                </button>
                
                <button className="cta-referral-primary inline-flex cursor-pointer items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="grid gap-4">
              {referralPerks.map((perk) => (
                <HologramCard key={perk.title} title={perk.title} description={perk.description} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 text-center"
        >
          <h3 className="text-2xl font-semibold text-foreground md:text-3xl">Need something else?</h3>
          <p className="text-lg text-muted-foreground">
            Ping us anytime. A senior success manager replies within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-muted-foreground transition hover:border-accent/50 hover:text-accent">
              <Mail className="h-5 w-5" />
              {/* support@onlymodels.app */}
              onlymodels.ca@gmail.com
            </button>
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-muted-foreground transition hover:border-accent/50 hover:text-accent">
              {/* <Headset className="h-5 w-5" /> */}
              {/* Live concierge */}
              Apply Now
            </button>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
