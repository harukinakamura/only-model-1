"use client";

import { useEffect, useMemo, useState } from "react";

type PhraseAnimationProps = {
  phrases?: string[];
};

export function HeroPhraseAnimations({ phrases = [] }: PhraseAnimationProps) {
  const safePhrases = useMemo(
    () => (phrases.length ? phrases : ["Without Stress"]),
    [phrases],
  );

  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCycle((current) => current + 1);
    }, 3500);
    return () => window.clearInterval(interval);
  }, [safePhrases.length]);

  const currentIndex = cycle % safePhrases.length;
  const previousIndex =
    (currentIndex - 1 + safePhrases.length) % safePhrases.length;

  return (
    <span className="hero-phrases">
      {safePhrases.map((phrase, phraseIndex) => {
        const stateClass =
          phraseIndex === currentIndex
            ? "active"
            : phraseIndex === previousIndex
              ? "out"
              : "idle";

        return (
          <span
            key={phrase}
            className={`hero-phrase hero-phrase--${stateClass}`}
            aria-hidden={phraseIndex !== currentIndex}
          >
            <span className="hero-phrase__glow" />
            {phrase}
          </span>
        );
      })}
    </span>
  );
}
