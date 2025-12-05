"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ReferButton } from "@/components/refer-button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "Referral", href: "/referral" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/#testimonials" },
  { label: "Contact us", href: "/#cta" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0px at top right)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren" as const,
      },
    },
    open: {
      opacity: 1,
      clipPath: "circle(2500px at top right)",
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 25,
        mass: 0.5,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  // Creative Hamburger Variants
  const topLineVariants = {
    closed: { d: "M 4 8 L 20 8", rotate: 0, translateY: 0, opacity: 1 },
    open: { d: "M 4 8 L 20 8", rotate: 45, translateY: 4, opacity: 1 }, // Rotates to form one arm of X
  };

  const bottomLineVariants = {
    closed: { d: "M 10 16 L 20 16", rotate: 0, translateY: 0, opacity: 1 }, // Shorter line for style
    open: { d: "M 4 16 L 20 16", rotate: -45, translateY: -4, opacity: 1 }, // Extends and rotates to form other arm
  };

  // Hover animation for the closed state
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-30 flex justify-center px-4">
      <div className="nav-shell pointer-events-auto flex items-center gap-3 w-full max-w-[1350px] justify-between">
        <div className="relative z-50 shrink-0 transition-transform duration-300 hover:scale-105">
          <div className="pointer-events-none absolute inset-0 -z-10 scale-[1.8] rounded-full bg-accent/40 blur-[100px]" />
          <Link href="/#home">
          <Image
            src="/assets/logos/logo.png"
            alt="OnlyModels logo"
            width={100}
            height={100}
            className="h-20 w-20 object-contain drop-shadow-[0_5px_35px_rgba(255,20,147,0.85)]"
            priority
          />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:justify-center">
          <nav className="glass-pill glass-pill--menu" style={{gap:'2rem'}}>
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="nav-item">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex shrink-0">
          <div className="glass-pill glass-pill--actions">
            <ThemeToggle />
            <ReferButton />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden relative z-50 shrink-0">
          <div className="glass-pill px-2 py-2">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-white/5"
              aria-label="Toggle menu"
              initial="rest"
              whileHover="hover"
              animate={isOpen ? "open" : "closed"}
              variants={buttonVariants}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <motion.path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 4 8 L 20 8" },
                    open: { d: "M 6 18 L 18 6" }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 10 16 L 20 16" }, // Short bottom line
                    open: { d: "M 6 6 L 18 18" }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-3xl md:hidden"
            >
              {/* Background Gradient Mesh - Absolute and Static relative to the fixed container */}
              <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[20%] h-[600px] w-[600px] rounded-full bg-accent/20 blur-[120px]" />
                <div className="absolute -bottom-[20%] -left-[20%] h-[600px] w-[600px] rounded-full bg-accent-secondary/20 blur-[120px]" />
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
              </div>

              {/* Scrollable Content Container */}
              <div className="flex-1 overflow-y-auto" data-lenis-prevent>
                <div className="min-h-full flex flex-col justify-between">
                  <div className="flex flex-1 flex-col justify-center px-8 py-24">
                    <nav className="flex flex-col items-center text-center w-full">
                      {navLinks.map((item, index) => (
                        <motion.div key={item.href} variants={itemVariants} className="w-full">
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-6 text-4xl font-light tracking-tight text-foreground transition-all hover:text-accent hover:scale-105"
                          >
                            {item.label}
                          </Link>
                          {index < navLinks.length - 1 && (
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                          )}
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  <motion.div variants={itemVariants} className="border-t border-white/10 bg-white/5 p-8 pb-12 backdrop-blur-md">
                    <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium text-muted-foreground">Appearance</span>
                        <ThemeToggle />
                      </div>
                      <div className="w-full" onClick={() => setIsOpen(false)}>
                        <ReferButton className="!w-full flex justify-center" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
