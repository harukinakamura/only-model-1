"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const label = useMemo(() => {
    if (!mounted) {
      return "Toggle theme";
    }
    return isDark ? "Switch to light mode" : "Switch to dark mode";
  }, [isDark, mounted]);

  if (!mounted) {
    return <div className="tt-wrapper opacity-0" aria-hidden="true" />;
  }

  return (
    <div className="tt-wrapper" title={label}>
      <input
        type="checkbox"
        className="tt-input"
        checked={isDark}
        onChange={toggleTheme}
        aria-label={label}
      />
      <div className="tt-circle" />
      <div className="tt-circle-other" />
      <div className="tt-flex">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 20}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
