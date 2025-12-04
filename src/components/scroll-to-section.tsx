"use client";

import { useEffect } from "react";

type ScrollToSectionProps = {
  targetId?: string;
};

export function ScrollToSection({ targetId }: ScrollToSectionProps) {
  useEffect(() => {
    if (!targetId) {
      return;
    }
    const selector = `[data-section=\"${targetId}\"]`;
    const element = document.querySelector(selector) ?? document.getElementById(targetId);
    if (!element) {
      return;
    }
    const headerOffset = 120;
    const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, [targetId]);

  return null;
}
