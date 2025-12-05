
"use client";

import { Mail, MapPin, Phone, Send, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from next/link

const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const footerLinks = [
  { label: "How We work", href: "/how-we-work" },
  { label: "Referral", href: "/referral" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/#testimonials" },
  { label: "Contact us", href: "/#cta" },
];

const contactInfo = [
  { icon: Mail, text: "onlymodels.ca@gmail.com", href: "mailto:onlymodels.ca@gmail.com" },
  { icon: MapPin, text: "6926 Jarry EAST, Montreal, H1P 3C1", href: "https://www.google.com/maps/search/6926+Jarry+EAST,+Montreal,+H1P+3C1" },
];

const socials = [
  { icon: XLogo, href: "https://twitter.com", label: "X" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const WavePath = ({
  d,
  color,
  opacity,
  duration,
  delay,
  yOffset = 0,
}: {
  d: string;
  color: string;
  opacity: number;
  duration: number;
  delay: number;
  yOffset?: number;
}) => {
  return (
    <motion.path
      fill={color}
      fillOpacity={opacity}
      d={d}
      initial={{ x: "-50%" }}
      animate={{ x: "0%" }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      style={{ y: yOffset }}
    />
  );
};

const FooterWaves = () => {
  // Wave paths designed to interleave and create depth
  const wavePath1 =
    "M0,60 C300,70 600,30 900,60 C1200,90 1500,50 1800,60 C2100,70 2400,30 2700,60 L2700,200 L0,200 Z";
  const wavePath2 =
    "M0,50 C400,20 800,80 1200,50 C1600,20 2000,80 2400,50 C2800,20 3200,80 3600,50 L3600,200 L0,200 Z";
  const wavePath3 =
    "M0,70 C250,90 500,50 750,70 C1000,90 1250,50 1500,70 C1750,90 2000,50 2250,70 L2250,200 L0,200 Z";

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[98%]">
      <svg
        className="relative block w-[200%] h-[120px] md:h-[180px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Layer 1 - Back */}
        <WavePath
          d={wavePath2}
          color="var(--wave-color-1)"
          opacity={0.4}
          duration={20}
          delay={0}
          yOffset={10}
        />
        {/* Layer 2 - Middle */}
        <WavePath
          d={wavePath3}
          color="var(--wave-color-2)"
          opacity={0.6}
          duration={15}
          delay={-2}
          yOffset={5}
        />
        {/* Layer 3 - Front */}
        <WavePath
          d={wavePath1}
          color="var(--wave-color-3)"
          opacity={1}
          duration={10}
          delay={-5}
        />
      </svg>
    </div>
  );
};

export function Footer() {
  return (
    <footer className="relative mt-48">
      {/* Theme-aware styles for waves and background */}
      <style jsx global>{`
        [data-theme="light"] footer {
          --footer-bg: #ffc0cb; /* Sakura Pink */
          --wave-color-1: #ffb7c5;
          --wave-color-2: #ffacc1;
          --wave-color-3: #ffc0cb;
          --footer-text: #d63384;
          --footer-text-muted: #e66ea8;
        }
        [data-theme="dark"] footer {
          --footer-bg: #1a0b14; /* Dark with pink hint */
          --wave-color-1: #4a1a36;
          --wave-color-2: #66224a;
          --wave-color-3: #1a0b14;
          --footer-text: #f8d7da;
          --footer-text-muted: #cbb2c0;
        }
      `}</style>

      <div
        className="relative pt-12 pb-12"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <FooterWaves />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6">
          {/* Logo */}
          <div className="w-48 transform transition-transform hover:scale-105 duration-300">
            <Link href="/">
              <img
                src="/assets/logos/footer-logo.png"
                alt="OnlyModels logo"
                className="h-auto w-full object-contain drop-shadow-lg"
              />
            
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-nowrap justify-center gap-3 md:gap-8 text-[10px] md:text-sm font-bold uppercase tracking-wider md:tracking-widest">
            {footerLinks.map((link) => (
              <Link // Changed <a> to Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-white"
                style={{ color: "var(--footer-text)" }}
              >
                {link.label}
              </Link> // Changed </a> to </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{ color: "var(--footer-text)" }}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-2 text-sm" style={{ color: "var(--footer-text-muted)" }}>
            {contactInfo.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="flex items-center  gap-2 transition-colors duration-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-sm font-medium mt-4 text-center px-4"
            style={{ color: "var(--footer-text-muted)" }}
          >
            Copyright © OnlyModels Management LLC {new Date().getFullYear()} – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
