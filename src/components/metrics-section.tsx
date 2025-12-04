"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    label: "Lead capture upgrade",
    value: "3.2x",
    description: "More qualified subscribers from social promos.",
  },
  {
    label: "Automation coverage",
    value: "78%",
    description: "Of chat threads closed without human handoff.",
  },
  {
    label: "Manager hours saved",
    value: "42h",
    description: "Weekly manual work removed per creator pod.",
  },
];

export function MetricsSection() {
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
      { threshold: 0.2 }
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
      id="metrics"
      ref={sectionRef}
      className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 py-16"
    >
      <div
        className={`grid w-full gap-6 rounded-3xl border border-border/30 bg-background/60 p-8 shadow-[0_20px_120px_rgba(8,6,15,0.35)] transition-all duration-1000 md:grid-cols-3 ${isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-95"
          }`}
      >
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`space-y-3 transition-all duration-700 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
              }`}
            style={{
              transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms",
            }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-muted">
              {metric.label}
            </p>
            <p className="text-4xl font-semibold text-foreground">
              {metric.value}
            </p>
            <p className="text-sm text-muted">{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
