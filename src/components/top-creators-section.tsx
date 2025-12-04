"use client";

import { motion } from "framer-motion";

const creatorMetrics = [
    { label: "Subscriptions", value: "$52,341.88", accent: "bg-accent" },
    { label: "Messages", value: "$112,450.76", accent: "bg-accent-secondary" },
    { label: "Tips", value: "$178,990.12", accent: "bg-accent/60" },
];

const premiumGrowthSeries = [32, 44, 39, 50, 62, 70, 84, 96, 108];

export function TopCreatorsSection() {
    const chartWidth = 320;
    const chartHeight = 180;
    const chartPadding = 24;
    const availableWidth = chartWidth - chartPadding * 2;
    const maxValue = Math.max(...premiumGrowthSeries);
    const minValue = Math.min(...premiumGrowthSeries);
    const valueRange = maxValue - minValue || 1;
    const toX = (index: number) => chartPadding + (index / (premiumGrowthSeries.length - 1)) * availableWidth;
    const toY = (value: number) =>
        chartHeight - chartPadding - ((value - minValue) / valueRange) * (chartHeight - chartPadding * 2);

    const premiumPoints = premiumGrowthSeries.map((value, index) => ({
        x: toX(index),
        y: toY(value),
        value,
    }));

    const premiumPath = premiumPoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
    const premiumArea = [
        `M ${premiumPoints[0].x} ${chartHeight - chartPadding}`,
        ...premiumPoints.map((point) => `L ${point.x} ${point.y}`),
        `L ${premiumPoints[premiumPoints.length - 1].x} ${chartHeight - chartPadding}`,
        "Z",
    ].join(" ");
    return (
        <section
            id="growth"
            data-section="growth"
            className="top-creators-section relative z-10 mx-auto w-full max-w-6xl px-5 py-32"
        >
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
                {/* Left Column: Text Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.8,
                                ease: "easeOut",
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="top-creators-copy space-y-8 text-center md:text-left"
                >
                    {/* Main Heading with Animation */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative">
                        {/* Glow effect */}
                        <div className="top-creators-heading-glow absolute inset-x-0 -top-4 blur-3xl opacity-20 md:-left-4 md:right-auto md:w-max">
                            <h2 className="top-creators-heading-text bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                                The Agency for Top 0.1% Creators
                            </h2>
                        </div>

                        {/* Main heading */}
                        <h2 className="top-creators-heading relative bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text pb-2 text-5xl font-bold leading-tight text-transparent md:text-7xl">
                            We create the top 
                        </h2>
                    </motion.div>

                    {/* Subtext */}
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-xl text-muted md:text-2xl">
                        At <span className="font-semibold text-accent">OnlyModels</span>, we build systems that give creators their time back.
                    </motion.p>

                    {/* Description */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-4 text-base text-muted/80 md:text-lg">
                        <p>
                            From automation to content optimization, everything we set up is designed so you spend less energy on routine work and more on what actually grows your brand.
                        </p>
                        <p>
                            Our focus is helping you operate smarter, scale faster, and reach a level where your only job is deciding <span className="italic text-foreground">what's next</span>.
                        </p>
                    </motion.div>

                    {/* Decorative accent line */}
                    <motion.div
                        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-1 w-32 rounded-full bg-gradient-to-r from-accent to-transparent mx-auto origin-center md:mx-0 md:origin-left"
                    />
                </motion.div>

                {/* Right Column: Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative flex items-center justify-center"
                >
                    <div className="top-creators-card relative w-full max-w-sm rounded-[32px] border border-white/10 bg-gradient-to-b from-background/80 via-surface/70 to-surface/40 p-6 shadow-2xl shadow-black/40 backdrop-blur-lg md:max-w-md lg:max-w-lg">
                        <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-tr from-accent/30 via-transparent to-accent-secondary/30 opacity-40 blur-2xl" />
                        <div className="relative space-y-6">
                            <div className="top-creators-card-graph rounded-[28px] border border-white/10 bg-gradient-to-b from-background/85 to-surface/70 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                                {/* <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.4em] text-muted">Studio momentum</p>
                                        <p className="mt-1 text-3xl font-semibold text-foreground">$1.2M run-rate</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-right text-xs uppercase tracking-[0.4em] text-muted shadow-lg shadow-black/30">
                                        <span className="block text-foreground text-base font-semibold leading-tight">+47%</span>
                                        <span>QoQ lift</span>
                                    </div>
                                </div> */}
                                <div className="relative mt-6">
                                    {/* <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="h-40 w-full">
                                        <defs>
                                            <linearGradient id="premiumArea" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="rgba(255,105,180,0.35)" />
                                                <stop offset="100%" stopColor="rgba(17,24,39,0)" />
                                            </linearGradient>
                                            <linearGradient id="premiumLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                                                <stop offset="100%" stopColor="rgba(255,105,180,1)" />
                                            </linearGradient>
                                            <linearGradient id="premiumLineLight" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="rgba(236,72,153,1)" />
                                                <stop offset="100%" stopColor="rgba(219,39,119,1)" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d={premiumArea}
                                            fill="url(#premiumArea)"
                                            className="dark:block hidden"
                                        />
                                        <path
                                            d={premiumArea}
                                            fill="rgba(236,72,153,0.25)"
                                            className="dark:hidden block"
                                        />
                                        <path
                                            d={premiumPath}
                                            fill="none"
                                            stroke="url(#premiumLine)"
                                            strokeWidth={4}
                                            strokeLinecap="round"
                                            className="drop-shadow-[0_10px_30px_rgba(255,105,180,0.45)] dark:block hidden"
                                        />
                                        <path
                                            d={premiumPath}
                                            fill="none"
                                            stroke="url(#premiumLineLight)"
                                            strokeWidth={4}
                                            strokeLinecap="round"
                                            className="drop-shadow-[0_10px_30px_rgba(255,0,114,0.35)] dark:hidden block"
                                        />
                                        {premiumPoints.map((point, index) => (
                                            <circle
                                                key={index}
                                                cx={point.x}
                                                cy={point.y}
                                                r={4}
                                                fill="rgb(255,255,255)"
                                                stroke="rgba(255,105,180,0.5)"
                                                strokeWidth={2}
                                            />
                                        ))}
                                    </svg> */}
                                    <img src="/assets/income.png"></img>
                                    <div className="absolute inset-x-0 -bottom-4 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-muted-foreground">
                                        <span>Launch</span>
                                        <span>Scale</span>
                                        <span>Peak</span>
                                    </div>
                                </div>
                                <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-muted">
                                    <div className="flex flex-1 items-center justify-between rounded-2xl border border-white/5 bg-background/60 px-4 py-3">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Retention</p>
                                            <p className="text-xl font-semibold text-foreground">92%</p>
                                        </div>
                                        <span className="text-accent text-xs font-semibold uppercase tracking-[0.4em]">Elite</span>
                                    </div>
                                    <div className="flex flex-1 items-center justify-between rounded-2xl border border-white/5 bg-background/60 px-4 py-3">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">PPV Sale Average:</p>
                                            <p className="text-xl font-semibold text-foreground">$46</p>
                                        </div>
                                        <span className="text-accent-secondary text-xs font-semibold uppercase tracking-[0.4em]">+33%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="top-creators-card-label rounded-full border border-white/10 bg-accent/70 px-6 py-2 text-sm font-semibold text-background shadow-lg shadow-accent/30">
                                    From Nov 2024 to Nov 2025
                                </div>
                            </div>
                            

                            <div className="space-y-4">
                                {creatorMetrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="top-creators-card-metric flex items-center justify-between rounded-2xl border border-white/5 bg-background/70 px-4 py-3 text-sm text-muted-foreground"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`h-3 w-3 rounded-full ${metric.accent}`} />
                                            <span className="font-medium text-foreground">{metric.label}</span>
                                        </div>
                                        <span className="text-base font-semibold text-foreground">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements behind image */}
                    <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-[34px] border border-accent/20 bg-accent/5" />
                    <div className="absolute -top-6 -left-6 -z-10 h-full w-full rounded-[34px] border border-accent-secondary/20 bg-accent-secondary/5" />
                </motion.div>
            </div>
        </section>
    );
}
