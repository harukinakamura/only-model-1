"use client";

import { ReactNode, useState } from "react";

type CyberCardProps = {
  badge: string;
  title: string;
  description: string;
  highlight: string;
  footer: string;
  icon: ReactNode;
};

export function CyberCard({ badge, title, description, highlight, footer, icon }: CyberCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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

  return (
    <div
      className="group relative h-[320px] w-full cursor-pointer"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div
        className="relative h-full w-full transition-transform duration-300 [transform-style:preserve-3d]"
        style={{
          transform: `perspective(1600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-background/80 via-background/60 to-background/80 shadow-2xl shadow-black/40 transition duration-500 group-hover:scale-[1.01] group-hover:border-accent/40">
          <div className="absolute inset-0 overflow-hidden rounded-[36px]">
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-70">
              <div
                className="absolute inset-0 opacity-40 blur-xl"
                style={{ animation: "spin 12s linear infinite", background: "conic-gradient(from 0deg, rgba(236,72,153,0.4), rgba(147,51,234,0.4), rgba(14,165,233,0.4), rgba(236,72,153,0.4))" }}
              />
            </div>
            <div className="absolute inset-0 hidden md:block">
              <span className="absolute inset-x-6 top-1/3 h-px animate-pulse bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <span className="absolute inset-x-6 top-2/3 h-px animate-pulse bg-gradient-to-r from-transparent via-accent-secondary/30 to-transparent" />
            </div>
          </div>
          <div className="relative flex h-full flex-col justify-between rounded-[36px] border border-white/5 p-6 [backface-visibility:hidden]">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
                {badge}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-accent/30 blur-lg" />
                <span className="relative text-accent">{icon}</span>
              </span>
            </div>
            <div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.4em] text-foreground/40">
                {highlight}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="text-sm font-semibold text-accent-secondary">{footer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
