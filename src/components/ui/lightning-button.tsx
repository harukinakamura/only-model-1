"use client";

type LightningButtonProps = {
  label: string;
  href?: string;
};

export function LightningButton({ label, href }: LightningButtonProps) {
  const button = (
    <div className="lightning-button group relative inline-flex">
      <button
        type="button"
        className="relative z-10 cursor-pointer rounded-full border-4 border-transparent bg-gradient-to-r from-accent via-accent-secondary to-accent-strong px-10 py-4 text-lg font-semibold text-background transition-colors duration-300"
      >
        {label}
      </button>
      <svg
        viewBox="0 0 234.6 61.3"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-[-0.2rem] top-[-0.6rem] h-[120%] w-[105%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <defs>
          <filter id="lightningGlow">
            <feGaussianBlur result="coloredBlur" stdDeviation={2} />
            <feTurbulence type="fractalNoise" baseFrequency="0.075" numOctaves="0.3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale={25} xChannelSelector="R" yChannelSelector="G" result="displace" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="displace" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          className="lightning-line line-1"
          d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z"
          stroke="#fff"
          fill="transparent"
          filter="url(#lightningGlow)"
        />
        <path
          className="lightning-line line-2"
          d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
          stroke="#fff"
          fill="transparent"
          filter="url(#lightningGlow)"
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute left-1/4 top-0 h-3 w-3 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-[fly-up_3s_linear_infinite]" />
        <div className="absolute right-1/3 top-0 h-3 w-3 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-[fly-up_3s_linear_infinite] [animation-delay:0.5s]" />
        <div className="absolute left-1/2 bottom-0 h-3 w-3 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-[fly-down_3s_linear_infinite]" />
      </div>
      <style jsx>{`
        .lightning-line {
          stroke-dasharray: 120;
        }
        .line-1 {
          stroke: rgba(236, 72, 153, 0.9);
          stroke-dashoffset: 0;
          animation: spark-1 3s linear infinite;
        }
        .line-2 {
          stroke: rgba(14, 165, 233, 0.9);
          stroke-dashoffset: 500;
          animation: spark-2 3s linear infinite;
        }
        @keyframes spark-1 {
          to {
            stroke-dashoffset: -1000;
          }
        }
        @keyframes spark-2 {
          to {
            stroke-dashoffset: -500;
          }
        }
        @keyframes fly-up {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.4);
          }
          40% {
            opacity: 1;
            transform: translateY(-1rem) scale(0.6);
          }
          100% {
            opacity: 0;
            transform: translateY(-3rem) scale(0.4);
          }
        }
        @keyframes fly-down {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.4);
          }
          40% {
            opacity: 1;
            transform: translateY(1rem) scale(0.6);
          }
          100% {
            opacity: 0;
            transform: translateY(3rem) scale(0.4);
          }
        }
      `}</style>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-flex">
        {button}
      </a>
    );
  }

  return button;
}
