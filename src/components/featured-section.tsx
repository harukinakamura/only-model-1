"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const brands = [
  { name: "AVN", tagline: "Adult Video News", logo: "/assets/brand-svgs/avn-logo.svg" },
  { name: "FHM", tagline: "For Him Magazine", logo: "/assets/brand-svgs/fhm-logo.svg" },
  { name: "MIAMI", tagline: "Miami Weekly", logo: "/assets/brand-svgs/miami-logo.svg" },
  { name: "XBIZ", tagline: "XBIZ", logo: "/assets/brand-svgs/xbiz-logo.svg" },
];

const carouselLogos = [
  { src: "/assets/carousel-logos/forbes-logo.svg", alt: "Forbes" },
  { src: "/assets/carousel-logos/gq-logo.svg", darkSrc: "/assets/carousel-logos/gq-logo-white.svg", alt: "GQ" },
  { src: "/assets/carousel-logos/losangelesmag-logo.svg", alt: "Los Angeles Magazine" },
  { src: "/assets/carousel-logos/outlook-logo.svg", alt: "Outlook" },
];

export function FeaturedSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, isInView]);

  return (
    <section
      className="featured-section relative z-10 mx-auto w-full max-w-6xl px-5 py-24"
      id="featured"
      data-section="featured"
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-foreground/40">As seen in</p>
        <div className="featured-media-pill inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-foreground/70">
          40+ media features
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4"
      >
        {brands.map((brand) => (
          <motion.div
            key={brand.name}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 50, damping: 15 },
              },
            }}
            className="featured-brand-card group relative cursor-pointer overflow-hidden rounded-4xl border border-white/10 bg-background/70 p-6 text-center transition duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-background/80"
          >
            <div className="absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-60 bg-linear-to-br from-accent/30 via-accent-secondary/10 to-transparent" />
            <div className="relative space-y-3">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className={`mx-auto h-12 w-auto object-contain opacity-80 transition group-hover:opacity-100 ${brand.name === "MIAMI" ? "miami-logo" : ""}`}
              />
              <p className="featured-brand-tagline text-xs uppercase tracking-[0.35em] text-foreground/50">{brand.tagline}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 rounded-[48px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(5,5,16,0.4)]"
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.5em] text-foreground/40">Expert&apos;s pick</p>
            <p className="text-2xl font-semibold text-foreground">Top rated OnlyFans agency</p>
          </div>
          <div className="relative w-full overflow-hidden px-4">
            <div className="flex min-w-max animate-scroll items-center gap-16 whitespace-nowrap">
              {[...carouselLogos, ...carouselLogos].map((logo, index) => (
                <div
                  key={`carousel-logo-${index}`}
                  className="group flex min-w-[150px] cursor-pointer items-center justify-center px-2"
                >
                  {logo.darkSrc ? (
                    <>
                      <img
                        src={logo.darkSrc}
                        alt={logo.alt}
                        className="h-10 w-auto object-contain opacity-50 transition group-hover:opacity-100 logo-dark"
                      />
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-10 w-auto object-contain opacity-50 transition group-hover:opacity-100 logo-light"
                      />
                    </>
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`h-10 w-auto object-contain opacity-50 transition group-hover:opacity-100 ${logo.alt === "Los Angeles Magazine" ? "la-logo" : ""}`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/5 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/5 to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
