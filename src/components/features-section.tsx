"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  graphType: "network" | "workflow" | "revenue";
  image: string;
};

const featureGroups: Feature[] = [
  {
    title: "Profile Optimization",
    description:
      "We optimize your OF profile from top to bottom: bio, pricing, menu, bundles, feed, and PPV strategy. Everything is built to increase sales without losing fans.",
    graphType: "network",
    image: "/assets/images/img1.jpeg",
  },
  {
    title: "Sales Systems",
    description:
      "We build your sales systems: PPV scripts, follow-ups, upsells, GFE flows, and proven strategies that make fans spend consistently.",
    graphType: "workflow",
    image: "/assets/images/img2.jpeg",
  },
  {
    title: "Content Strategy",
    description:
      "We plan your content around what sells: PPV ideas, angles, poses, formats, and posting frequency. Every piece of content.",
    graphType: "revenue",
    image: "/assets/images/img3.jpeg",
  },
];

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function NetworkGraph() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-xl bg-background/30 p-4 backdrop-blur-sm">
      <svg className="h-full w-full" viewBox="0 0 200 100">
        {/* Nodes */}
        <circle cx="100" cy="50" r="4" className="fill-accent animate-pulse" />
        <circle cx="60" cy="30" r="3" className="fill-accent-secondary opacity-60" />
        <circle cx="140" cy="30" r="3" className="fill-accent-secondary opacity-60" />
        <circle cx="40" cy="70" r="3" className="fill-accent-secondary opacity-60" />
        <circle cx="160" cy="70" r="3" className="fill-accent-secondary opacity-60" />

        {/* Links */}
        <path d="M100 50 L60 30" className="stroke-accent/30 stroke-1" />
        <path d="M100 50 L140 30" className="stroke-accent/30 stroke-1" />
        <path d="M60 30 L40 70" className="stroke-accent/30 stroke-1" />
        <path d="M140 30 L160 70" className="stroke-accent/30 stroke-1" />

        {/* Animated Signal */}
        <circle r="2" className="fill-white">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path="M100 50 L60 30 L40 70"
          />
        </circle>
        <circle r="2" className="fill-white">
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            path="M100 50 L140 30 L160 70"
          />
        </circle>
      </svg>
    </div>
  );
}

function WorkflowGraph() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-xl bg-background/30 p-4 backdrop-blur-sm">
      <svg className="h-full w-full" viewBox="0 0 200 100">
        {/* Start Node */}
        <rect x="20" y="40" width="30" height="20" rx="4" className="fill-accent/20 stroke-accent stroke-1" />

        {/* Path */}
        <path d="M50 50 H80" className="stroke-muted stroke-1" />

        {/* Decision Node */}
        <rect x="80" y="40" width="30" height="20" rx="4" className="fill-accent-secondary/20 stroke-accent-secondary stroke-1" />

        {/* Branches */}
        <path d="M110 50 H130 V30 H150" className="stroke-muted stroke-1 fill-none" />
        <path d="M110 50 H130 V70 H150" className="stroke-muted stroke-1 fill-none" />

        {/* End Nodes */}
        <rect x="150" y="20" width="30" height="20" rx="4" className="fill-background stroke-muted stroke-1" />
        <rect x="150" y="60" width="30" height="20" rx="4" className="fill-background stroke-muted stroke-1" />

        {/* Animated Flow */}
        <circle r="2" className="fill-accent">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M50 50 H130 V30 H165"
          />
        </circle>
      </svg>
    </div>
  );
}

function RevenueGraph() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-xl bg-background/30 p-4 backdrop-blur-sm">
      <svg className="h-full w-full" viewBox="0 0 200 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" className="text-accent" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-accent" />
          </linearGradient>
        </defs>

        {/* Area */}
        <path
          d="M0 100 V70 Q30 60 50 80 T100 50 T150 30 T200 10 V100 Z"
          className="fill-[url(#revenueGradient)]"
        />

        {/* Line */}
        <path
          d="M0 70 Q30 60 50 80 T100 50 T150 30 T200 10"
          className="fill-none stroke-accent stroke-2"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0 1000"
            to="1000 0"
            dur="2s"
            fill="freeze"
          />
        </path>
      </svg>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section
      className="features-section mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 py-0"
      id="features"
      data-section="features"
      aria-label="Platform capabilities"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="grid w-full gap-8 md:grid-cols-3"
      >
        {featureGroups.map((feature) => (
          <motion.div
            key={feature.title}
            variants={{
              hidden: { opacity: 0, rotateX: -90, y: 50 },
              visible: {
                opacity: 1,
                rotateX: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 15
                }
              }
            }}
            style={{ perspective: 1000 }}
          >
            <TiltCard
              className="group relative flex h-full cursor-pointer flex-col gap-6 overflow-hidden rounded-3xl border border-border/40 bg-surface/80 p-8 shadow-[0_15px_80px_rgba(8,6,15,0.4)] transition-all duration-700 hover:shadow-[0_20px_100px_rgba(236,72,153,0.2)]"
            >
              {/* Circulating Border Animation */}
              <div className="absolute -inset-full -z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className="absolute inset-0 animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg 340deg, var(--color-accent) 360deg)",
                  }}
                />
              </div>

              {/* Inner background to cover the center of the spinning border */}
              <div className="feature-card-inner absolute inset-px -z-10 rounded-[23px] bg-surface/90" />

              {/* Background Image */}
              <div className="absolute inset-0 -z-10 h-full w-full rounded-3xl overflow-hidden" style={{ transform: "translateZ(-50px)" }}>
                <img
                  src={feature.image}
                  alt=""
                  className="h-full w-full object-cover opacity-10 transition-opacity duration-700 group-hover:opacity-90"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
              </div>

              <div className="feature-icon relative z-10 inline-flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-2xl text-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" style={{ transform: "translateZ(30px)" }}>
                ✦
              </div>

              <div className="relative z-10 space-y-2" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted text-left">{feature.description}</p>
              </div>

              {/* Animated Graph Container */}
              <div className="relative z-10 mt-auto pt-4" style={{ transform: "translateZ(40px)" }}>
                {feature.graphType === "network" && <NetworkGraph />}
                {feature.graphType === "workflow" && <WorkflowGraph />}
                {feature.graphType === "revenue" && <RevenueGraph />}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Dashboard Preview Image */}
      {/* <motion.div
        initial={{ opacity: 0, rotateX: 45, y: 100 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, type: "spring", bounce: 0.2 }}
        className=""
        style={{ perspective: 1000 }}
      > */}
        {/* <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-surface/30"> */}
          {/* Overlay gradient */}
          {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent" /> */}

          {/* <img
            src="/assets/dashboard-showcase/dash-1.jpeg"
            alt="OnlyModels Dashboard Interface"
            className="h-full w-full object-contain transition-transform duration-1000 hover:scale-105"
          /> */}

          {/* Floating Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="features-badge absolute bottom-6 left-6 z-20 rounded-full border border-white/10 bg-surface-950/80 px-4 py-2 backdrop-blur-md"
          >
            <p className="text-sm font-medium text-foreground">
              <span className="mr-2 text-accent">●</span> Live Revenue Cockpit
            </p>
          </motion.div> */}
        {/* </div> */}
      {/* </motion.div> */}
    </section>
  );
}
