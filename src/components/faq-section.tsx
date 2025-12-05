"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Minus, Plus, ShieldCheck, Sparkles } from "lucide-react";
import StartJourneyButton from "./ui/start-journey-button";

const faqs = [
  {
    question: "What makes OnlyModels different from other agencies?",
    answer:
      "We don’t use recycled strategies or generic “post everywhere” tactics. We work with a small, selective group of creators, give you full access to everything, and build a custom system that matches your brand, persona, and goals. Full transparency. No hidden moves.",
  },
  {
    question: " Do I need to sign a contract?",
    answer:
      "Yes — but a real, professional contract. Everything is clear, legal, and transparent. No tricks, no vague terms, no “trust me bro.” You know exactly what you're signing.",
  },
  {
    question: "What does it cost to work with OnlyModels?",
    answer:
      "There’s no upfront fee. You get paid first, and then you send us our percentage. If you don’t make money, neither do we. Simple win/win.",
  },
  {
    question: "Who keeps ownership of my content?",
    answer:
      "You do. Every photo, video, and message belongs to you. We never claim ownership, and nothing is posted or used without your approval.",
  },
  {
    question: "Where is your team based?",
    answer:
      "Our management and chat teams are fully U.S.-based, with additional specialists in Europe for time-zone coverage and growth operations.",
  },
  {
    question: "How many creators do you work with?",
    answer:
      "We keep the roster small on purpose. Fewer creators = more attention, more optimization, and better results for each person.",
  },
  {
    question: "How fast can I expect results?",
    answer:
      "Growth depends on your niche, your consistency, and your current positioning but most creators see traction in the first weeks once our systems are in place.",
  },
  {
    question: "How do I get started?",
    answer:
      "You fill out a quick application, we check if you’re a good fit, and if both sides agree, we start building your strategy immediately.",
  },
  {
    question: "Do I need professional photos or videos?",
    answer:
      "Not at the start. We guide you on what works for your niche, and our strategy shows you how to create content that converts even with a basic setup.",
  },
  {
    question: "Can beginners apply?",
    answer:
      "Absolutely. We work with both new creators and experienced ones. What matters is your motivation and your ability to create content consistently.",
  },
  {
    question: "How often will we communicate?",
    answer:
      "As often as needed. We provide updates, performance reports, and daily communication with your manager. You’re never left in the dark.",
  },
  {
    question: "How does OnlyModels help me grow?",
    answer:
      "We build your funnel from scratch: marketing, chat optimization, strategy, content planning, traffic, automation, scaling, and brand development. You focus on creating we run the machine.",
  },
];

const highlightStats = [
  { label: "Average onboarding", value: "7 days" },
  { label: "Client retention", value: "98%" },
  { label: "Creator NPS", value: "4.9/5" },
];

const answerVariants = {
  open: { height: "auto", opacity: 1 },
  collapsed: { height: 0, opacity: 0 },
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const listInView = useInView(listRef, { once: true, amount: 0.2 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="faq-section relative isolate px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      id="faq"
      data-section="faq"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute inset-0  via-background to-background opacity-90" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 md:gap-16"> {/* Adjusted gap for responsiveness */}
        <motion.div
          initial={false} // Set initial to false to prevent hiding on SSR
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.65 }}
          className="mx-auto w-full max-w-3xl text-center"
        >
          <div className="faq-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-foreground/70">
            <Sparkles className="h-4 w-4 text-accent" />
            FAQ
          </div>
          <h2 className="faq-heading mt-6 text-balance text-4xl font-semibold leading-tight text-accent sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="faq-subtext mt-4 text-lg text-muted-foreground">
            Everything from contracts to day-one execution spelled out so you can scale with
            certainty.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {highlightStats.map((stat) => (
              <div
                key={stat.label}
                className="faq-stat flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-foreground/70 backdrop-blur transition hover:border-white/30 hover:text-foreground md:w-auto md:justify-start md:py-2"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <p className="text-xs uppercase tracking-[0.3em]">{stat.label}</p>
                </div>
                <p className="text-base font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div ref={listRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={false} // Set initial to false to prevent hiding on SSR
              whileInView={
                {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    delay: 0.1 * index,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }
                }
              }
              style={{ transformOrigin: "top center", perspective: "1000px" }}
              className="faq-item rounded-[28px] border border-white/10 bg-gradient-to-r from-background/60 via-background/40 to-background/60 p-1 shadow-lg shadow-black/10 backdrop-blur-md"
            >
              <button
                type="button"
                aria-expanded={openIndex === index}
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-6 rounded-[26px] bg-background/70 px-6 py-5 text-left transition hover:bg-background/90 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm font-semibold text-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-lg font-semibold transition-colors ${openIndex === index ? "text-accent" : "text-foreground"
                      }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5"
                  animate={{
                    rotate: openIndex === index ? 45 : 0,
                    backgroundColor: openIndex === index ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                >
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-accent" />
                  ) : (
                    <Plus className="h-5 w-5 text-foreground/60" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="faq-answer"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={answerVariants}
                    transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <div className="border-t border-white/10 px-6 pb-6 pt-4">
                      <p className="text-base leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center ">
          <StartJourneyButton></StartJourneyButton>
        </div>
      </div>
    </section>
  );
}
