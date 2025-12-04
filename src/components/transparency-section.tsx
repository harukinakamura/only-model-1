"use client";

import { motion } from "framer-motion";
import { Handshake, Lock, Radar, ScrollText } from "lucide-react";
import { useState } from "react";

const transparencyPoints = [
  {
    title: "Full access to everything",
    description:
      "We partner with a select group of creators and give you full access to everything: your accounts, your stats, your data, your platforms. Nothing is hidden, nothing is restricted, nothing is controlled behind your back.",
    icon: Lock,
  },
  {
    title: "You receive 100% of your earnings directly",
    description:
      "You are the one who gets paid first. After that, you send us our percentage with a real invoice and a real contract that protects both sides. No shady fees, no surprise deductions, no fake paperwork.",
    icon: ScrollText,
  },
  {
    title: "Zero restrictions",
    description:
      "Unlike most agencies, we never ask for any payment upfront. If you’re not earning, we’re not earning. Win/win, simple.",
    icon: Radar,
  },
  {
    title: "Built on trust",
    description:
      "Our communication is clear, our workflow is professional, and every decision is explained so you always understand what’s being done and how it grows your brand. We don’t operate on outdated tactics. We build long-term structures that actually work.",
    icon: Handshake,
  },
];

function HoloCard({
  point,
  index,
}: {
  point: (typeof transparencyPoints)[number];
  index: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / rect.width) * 20;
    const rotateX = ((rect.height / 2 - y) / rect.height) * 20;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  const Icon = point.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="relative w-full cursor-pointer"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      // onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className="relative h-64 w-full overflow-visible"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 200ms ease",
        }}
      >
        <div
          className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "rotate-y-180" : ""
            }`}
        >
          {/* Front */}
          <div className="holo-card-front absolute inset-0 rounded-[30px] border border-white/10 bg-background/60 p-6 text-left shadow-2xl shadow-black/40 [backface-visibility:hidden]">
            <div className="absolute inset-0 overflow-hidden rounded-[30px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent" />
              <div className="absolute -inset-[1px] rounded-[32px] bg-[conic-gradient(from_0deg,rgba(236,72,153,0.3),rgba(147,51,234,0.3),rgba(14,165,233,0.3),rgba(236,72,153,0.3))] opacity-0 blur-md transition duration-500 group-hover:opacity-70" />
            </div>
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center">
                  <div className="absolute h-12 w-12 rounded-full bg-accent/20 blur-lg" />
                  <Icon className="relative h-6 w-6 text-accent" />
                </div>
                {/* <div className="transparency-card-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
                  Proof
                </div> */}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{point.description}</p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            </div>
          </div>
          {/* Back */}
          <div className="holo-card-back absolute inset-0 flex items-center justify-center rounded-[30px] border border-white/10 bg-background/90 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="relative flex h-[95%] w-[95%] flex-col items-center justify-center gap-4 rounded-[28px] border border-white/10 bg-gradient-to-br from-background/80 via-background/60 to-background/80 text-center text-sm text-muted-foreground">
              <div className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/50">
                Always transparent
              </div>
              <p>
                Tap panels to flip between focus states. Everything we do is documented so you can audit it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TransparencySection() {
  return (
    <section
      id="transparency"
      data-section="transparency"
      className="transparency-section relative isolate px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.15),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="transparency-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-foreground/70"
          >
            Transparent by design
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="transparency-heading bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-4xl font-semibold leading-tight text-transparent tracking-tight drop-shadow-[0_5px_30px_rgba(236,72,153,0.35)] md:text-6xl"
            style={{ paddingBottom: "0.15em" }}
          >
            OnlyFans Agency – Full Transparency for Every Creator
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="transparency-subtext mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg"
          >
            At <span className="font-semibold text-accent">OnlyModels</span>, transparency isn't a feature, it's the foundation.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="transparency-grid grid gap-8 md:grid-cols-2"
        >
          {transparencyPoints.map((point, index) => (
            <HoloCard key={point.title} point={point} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground">
           With OnlyModels, you stay in control and we take care of the heavy work so you can focus on growing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
