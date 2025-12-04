"use client";

import Link from "next/link";

interface AnimatedCTAProps {
  text?: string;
  href?: string;
  className?: string;
}

export function AnimatedCTA({
  text = "APPLY NOW",
  href = "/cta",
  className = "",
}: AnimatedCTAProps) {
  return (
    <Link href={href} className={`cta-button ${className}`}>
      <div className="cta-button__line" />
      <div className="cta-button__line" />
      <span className="cta-button__text">{text}</span>
      <div className="cta-button__drow1" />
      <div className="cta-button__drow2" />
    </Link>
  );
}
