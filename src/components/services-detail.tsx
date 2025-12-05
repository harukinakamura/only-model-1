"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { Check, Lock, MessageCircle, ShieldCheck, TrendingUp, User } from "lucide-react";

const services = [
    {
        title: "Authentic U.S. Chatters Who Speak Like You",
        type: "chat",
        content: [
            "Get round-the-clock coverage from highly trained U.S.-based chatters who match your personality, tone, and style perfectly. Every reply feels like you, not a bot.",
            "Your chatters are supervised daily by an expert who tracks their performance, analyzes their data, and gives them guidance to improve connection, intimacy, and relationship-building with your fans. Most agencies don’t even know how to chat properly. They just spam cheap PPV messages and instantly make you look like someone who’s only there for money.",
            "At OnlyModels, we focus on real connection.",
            "We build a GFE-style experience where clients get emotionally invested in you, stay loyal longer, and spend more because they feel a genuine bond. No fake pressure, no desperate spamming, no “robot energy.”",
            "We create conversations that make fans fall for you, not run away.",
        ],
    },
    {
        title: "Anti-Leak Protection & Content Security",
        type: "security",
        content: [
            "At OnlyModels, your content is fully protected to keep your photos and videos off platforms you never approved.",
            "If a leak appears, we act immediately.",
            "We track it, report it through priority channels, and remove it fast, even on sites like Reddit.",
            "No delays.",
            "No excuses.",
            "Your brand stays protected.",
            "Your content stays yours."
            
        ],
    },
    {
        title: "Tailored Marketing That Actually Works",
        type: "growth",
        content: [
            "At OnlyModels, we don’t spam every platform and hope for luck.Most agencies use generalists who post everywhere with no strategy, which leads to flat growth.",
            "We do the opposite.",
            "We choose platforms based on your personality and niche, start by building real traction on one, then use that momentum to grow the next.It creates a chain reaction instead of scattered visibility.",
            "TikTok, Instagram, Reddit, YouTube, Twitter. We only use what makes sense for you, in the right order.",
            "Our creators don’t just grow. ",
            "They scale.",
        ],
    },
];

const headingEntryTransition: Transition = {
    duration: 1.05,
    ease: [0.22, 1, 0.36, 1],
};

const createHeadingEntryVariants = (direction:  "right" | "left"): Variants => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? -45 : 45,
        y: 18,
        scale: 0.92,
        rotateX: 25,
        filter: "blur(16px)",
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        transition: { ...headingEntryTransition },
    },
});

const wordContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
};

const wordVariants: Variants = {
    hidden: { y: "150%", opacity: 0 },
    visible: {
        y: "0%",
        opacity: 1,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

function ChatInterface() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border/40 dark:border-white/10 bg-white dark:bg-black/20 p-6 shadow-[0_20px_60px_rgba(var(--accent-primary),0.12)] dark:shadow-none backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/40 dark:from-accent/10 dark:to-transparent" />

            {/* Header */}
            <div className="relative mb-6 flex items-center gap-3 border-b border-border/30 dark:border-white/5 pb-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-accent/20">
                    <User className="h-full w-full p-2 text-accent" />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-black dark:bg-green-500" />
                </div>
                <div>
                    <div className="text-sm font-semibold text-foreground">Creator Support</div>
                    <div className="text-xs text-accent">Typing...</div>
                </div>
            </div>

            {/* Messages */}
            <div className="relative space-y-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mr-auto max-w-[85%] rounded-2xl rounded-tl-none border border-border/30 bg-white/90 p-3 text-sm text-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-foreground/90"
                >
                    Hey! Just checked your latest stats 📈
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-accent p-3 text-sm text-white shadow-[0_10px_25px_rgba(var(--accent-primary),0.25)]"
                >
                    Omg the engagement is crazy today!
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mr-auto max-w-[85%] rounded-2xl rounded-tl-none border border-border/30 bg-white/90 p-3 text-sm text-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-foreground/90"
                >
                    We matched your tone perfectly. Fans are loving it! ✨
                </motion.div>
            </div>
        </div>

    );
}

function SecurityShield() {
    return (
        <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-border/40 dark:border-white/10 bg-white dark:bg-black/20 p-6 shadow-[0_25px_80px_rgba(var(--accent-primary),0.12)] dark:shadow-none backdrop-blur-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/85 via-white/40 to-white/0 dark:from-accent/15 dark:via-transparent dark:to-accent-secondary/20" />

            <div className="relative">
                {/* Shield Icon */}
                <ShieldCheck className="h-32 w-32 text-accent drop-shadow-[0_15px_35px_rgba(var(--accent-primary),0.25)] dark:text-accent/20 dark:drop-shadow-none" />
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Lock className="h-12 w-12 text-accent drop-shadow-[0_10px_25px_rgba(var(--accent-primary),0.25)]" />
                </motion.div>

                {/* Scanning Effect */}
                <motion.div
                    className="absolute inset-x-0 top-0 h-1 bg-accent/60 shadow-[0_0_15px_rgba(var(--accent-primary),0.5)]"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Status Badges */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="service-status-chip absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-border/40 bg-white px-3 py-1 text-xs font-semibold shadow-sm dark:border-accent/30 dark:bg-accent/10"
            >
                <div className="service-status-dot h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="service-status-text text-accent">Active Protection</span>
            </motion.div>
        </div>
    );
}

function GrowthGraph() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border/40 dark:border-white/10 bg-white dark:bg-black/20 p-6 shadow-[0_25px_80px_rgba(var(--accent-primary),0.12)] dark:shadow-none backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/85 via-white/40 to-white/0 dark:from-accent/5 dark:via-transparent dark:to-accent-secondary/10" />

            <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-muted-foreground">Monthly Growth</div>
                    <div className="service-growth-stat flex items-center gap-1 text-sm font-bold">
                        <TrendingUp className="service-growth-icon h-4 w-4" />
                        +142%
                    </div>
                </div>

                {/* Bars */}
                <div className="flex h-48 items-end justify-between gap-2">
                    {[40, 65, 45, 80, 55, 90, 100].map((height, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                            className="relative w-full rounded-t-lg bg-gradient-to-t from-accent-secondary to-accent transition-colors shadow-[0_12px_30px_rgba(var(--accent-primary),0.2)] dark:bg-white/5 hover:from-accent-secondary/90 hover:to-accent dark:hover:bg-accent/20"
                        >
                            {i === 6 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-lg bg-accent px-2 py-1 text-xs font-bold text-white shadow-lg shadow-accent/20"
                                >
                                    Scale
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ServicesDetail() {
    return (
        <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-6xl space-y-32">
                {services.map((service, index) => {
                    const headingDirection = index % 2 === 0 ? "right" : "left";
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`flex flex-col gap-1 lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                                }`}
                        >
                            {/* Visual Side */}
                            <div className="flex-1">
                               

                                <div className="relative aspect-square w-full max-w-md mx-auto transform transition-transform duration-500 hover:scale-[1.02]">
                                    <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-accent/20 to-accent-secondary/20 blur-2xl opacity-50" />

                                    {service.type === "chat" && <ChatInterface />}
                                    {service.type === "security" && <SecurityShield />}
                                    {service.type === "growth" && <GrowthGraph />}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 space-y-8 text-center lg:text-left max-[1200px]:p-[10%]">
                                <div className="flex flex-col items-center space-y-4 lg:items-start">
                                    {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                                        Core Pillar {index + 1}
                                    </div> */}
                                    <motion.div className="relative inline-flex">
                                        <motion.h3
                                            className="text-3xl font-bold leading-tight text-accent sm:text-4xl lg:text-5xl"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.6 }}
                                            variants={createHeadingEntryVariants(headingDirection)}
                                            animate={{
                                                textShadow: [
                                                    "0 0 0px rgba(236,72,153,0)",
                                                    "0 0 15px rgba(236,72,153,0.5)",
                                                    "0 0 0px rgba(236,72,153,0)"
                                                ]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <motion.span
                                                className="inline-flex flex-wrap gap-y-1"
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.6 }}
                                                variants={wordContainerVariants}
                                            >
                                                {service.title.split(" ").map((word, idx) => (
                                                    <motion.span
                                                        key={`${service.title}-${idx}`}
                                                        variants={wordVariants}
                                                        className="inline-block pr-2"
                                                    >
                                                        {word}
                                                    </motion.span>
                                                ))}
                                            </motion.span>
                                        </motion.h3>
                                    </motion.div>
                                </div>
                                <div className="space-y-2 text-lg leading-relaxed text-muted-foreground text-left max-[1200px]:p-[10%]  max-[500px]:p-[5%]">
                                    {service.content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
