"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import {
    Check,
    Map,
    Users,
    ShieldAlert,
    Settings,
    ToggleRight,
    ToggleLeft,
    ListTodo,
    TrendingUp,
    Clock
} from "lucide-react";
import StartJourneyButton from "./ui/start-journey-button";

const growthFeatures = [
    {
        title: "Creator Consulting & Strategy",
        type: "consulting",
        content: [
            "You’re not just a model — you’re a business.",
            "We start by auditing your current brand, pricing, and content strategy. We look at what’s working, what’s wasting your time, and where you’re leaving money on the table.",
            "Then, we build a custom roadmap.",
            "We tell you exactly what content to film, how to price your PPVs, and how to structure your page for maximum retention.",
            "No guessing. Just a clear, step-by-step plan to hit your revenue goals.",
        ],
    },
    // {
    //     title: "Strategic Growth & Traffic",
    //     type: "growth",
    //     content: [
    //         "Traffic is the lifeblood of your page.",
    //         "",
    //         "We use a multi-platform approach (TikTok, Instagram, Reddit, Dating Apps) to funnel qualified leads straight to your page.",
    //         "We don’t just chase views.",
    //         "We chase buyers.",
    //         "Our team handles the strategy, the posting schedules, and the optimization so you can focus on creating content, not fighting algorithms.",
    //     ],
    // },
    // {
    //     title: "In-House Chatters (24/7 Coverage)",
    //     type: "chatters",
    //     content: [
    //         "Your fans are online 24/7.",
    //         "You shouldn’t have to be.",
    //         "Our elite chatting team covers your DMs round-the-clock, ensuring no message goes unanswered and no sale is missed.",
    //         "These aren’t random outsourcers using Google Translate.",
    //         "These are highly trained sales professionals who know your persona inside and out.",
    //         "They build real relationships, upsell naturally, and keep your fans addicted to the conversation.",
    //         "You wake up to money, not missed opportunities.",
    //     ],
    // },
    {
        title: "Boundary Control & Compliance",
        type: "compliance",
        content: [
            "Your comfort comes first.",
            "Before we start, we set clear boundaries.",
            "No nudes? No face? No specific fetishes? No problem.",
            "We strictly adhere to your rules.",
            "Our team is trained to maximize earnings within your comfort zone, never pushing you to do anything you don’t want to do.",
            "We also handle all platform compliance, ensuring your account stays safe and never gets flagged or banned.",
            "Peace of mind is part of the package.",
        ],
    },
];

const headingEntryTransition: Transition = {
    duration: 1.05,
    ease: [0.22, 1, 0.36, 1],
};

const createHeadingEntryVariants = (direction: "left" | "right"): Variants => ({
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

function StrategyBoard() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-6 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                    <ListTodo className="w-6 h-6 text-accent" />
                </div>
                <div className="font-semibold">Brand Strategy</div>
            </div>

            <div className="space-y-3">
                {["Brand Audit", "Niche Analysis", "Pricing Strategy", "Content Plan"].map((item, i) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/80 shadow-[0_12px_30px_rgba(236,72,153,0.12)] dark:bg-white/5 dark:shadow-none"
                    >
                        <div className="strategy-check flex items-center justify-center w-6 h-6 rounded-full bg-accent/15 text-accent">
                            <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function GrowthRoadmap() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-6 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/85 via-white/40 to-white/0 dark:from-accent/5 dark:via-transparent dark:to-accent-secondary/10" />

            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                        <Map className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-muted-foreground">Growth Roadmap</div>
                        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">Weekly lift</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-accent">
                    <TrendingUp className="h-4 w-4" />
                    +142%
                </div>
            </div>

            <div className="flex h-48 items-end justify-between gap-2">
                {[35, 55, 45, 72, 60, 82, 95].map((height, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
                        className="relative w-full rounded-t-xl bg-gradient-to-t from-accent-secondary to-accent shadow-[0_15px_40px_rgba(236,72,153,0.25)]"
                    >
                        {i === 6 && (
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-accent/30"
                            >
                                Peak
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function CoverageTimeline() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-6 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent" />

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                    <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="font-semibold">24/7 Coverage</div>
            </div>

            <div className="space-y-4">
                {[
                    { shift: "Morning Shift", time: "06:00 - 14:00", active: true },
                    { shift: "Day Shift", time: "14:00 - 22:00", active: true },
                    { shift: "Night Shift", time: "22:00 - 06:00", active: true },
                ].map((shift, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/80 shadow-[0_12px_30px_rgba(236,72,153,0.12)] dark:bg-white/5 dark:shadow-none">
                        <div>
                            <div className="text-sm font-medium">{shift.shift}</div>
                            <div className="text-xs text-muted-foreground">{shift.time}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="coverage-status text-xs font-semibold text-accent">Active</span>
                            <div className="coverage-status-dot relative w-2 h-2">
                                <div className="coverage-status-ping absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                                <div className="coverage-status-core relative w-full h-full rounded-full bg-accent" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CompliancePanel() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 p-6 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5" />

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                    <ShieldAlert className="w-6 h-6 text-accent" />
                </div>
                <div className="font-semibold">Boundary Settings</div>
            </div>

            <div className="space-y-4">
                {[
                    { label: "No Nudes", enabled: true },
                    { label: "No Face", enabled: true },
                    { label: "Geo-Blocking", enabled: true },
                ].map((setting, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-200 dark:bg-white/5">
                        <span className="text-sm font-medium">{setting.label}</span>
                        <motion.div
                            initial={{ opacity: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent"
                        >
                            <ToggleRight className="w-8 h-8" />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ComprehensiveGrowth() {
    return (
        <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-6xl space-y-32">
                {growthFeatures.map((feature, index) => {
                    const headingDirection = index % 2 === 0 ? "right" : "left";
                    return (
                        <motion.div
                            key={feature.title}
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

                                    {feature.type === "consulting" && <StrategyBoard />}
                                    {feature.type === "growth" && <GrowthRoadmap />}
                                    {feature.type === "chatters" && <CoverageTimeline />}
                                    {feature.type === "compliance" && <CompliancePanel />}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 space-y-8 text-center lg:text-left max-[1200px]:p-[10%]">
                                <div className="flex flex-col items-center space-y-4 lg:items-start">
                                    {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                                        Growth Pillar {index + 1}
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
                                                {feature.title.split(" ").map((word, idx) => (
                                                    <motion.span
                                                        key={`${feature.title}-${idx}`}
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
                                <div className=" space-y-3 text-lg leading-relaxed text-muted-foreground text-left max-[1200px]:p-[10%]  max-[500px]:p-[5%]">
                                    {feature.content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                                <div className="flex justify-center mt-10">
                                    <StartJourneyButton />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
