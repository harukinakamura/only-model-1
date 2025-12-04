"use client";

import { useRef, useState } from "react";
import { Target, Rocket, Gem, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const trustPoints = [
    {
        icon: Target,
        title: "Quality, not noise",
        description:
            "We go after markets that actually pay. USA, Europe, the regions where loyal subscribers spend more, stay longer, and push your earnings higher. We don’t waste your brand on low-intent traffic that looks good on paper but brings zero revenue. With us, every click has a purpose.",
        image: "/assets/images/img1.jpeg",
        animation: "group-hover:scale-110",
    },
    {
        icon: Rocket,
        title: "Modern strategies",
        description:
            "Other agencies are stuck using tactics that stopped working years ago. They survive on spam, promo blasts, and desperation. We don’t. OnlyModels runs on modern traffic engines, creator-centered content systems, and smart funnels built for how platforms actually behave today. That’s why our creators outperform everyone else.",
        image: "/assets/images/img2.jpeg",
        animation: "group-hover:-translate-y-1 group-hover:translate-x-1",
    },
    {
        icon: Gem,
        title: "Real growth",
        description:
            "OnlyModels does more than “manage.” We build systems designed to eliminate chaos. Clean workflows. Smarter content cycles. Automation that enhances your output instead of draining you. Everything we set up is engineered to increase conversions, retention, and monthly earnings in a predictable, scalable way.",
        image: "/assets/images/img3.jpeg",
        animation: "group-hover:rotate-12",
    },
    {
        icon: TrendingUp,
        title: "Long-term results",
        description:
            "Our creators don’t get lucky spikes. They get consistent month-over-month growth, stronger engagement, and a brand that gains value over time. When you choose OnlyModels, you’re choosing an agency that evolves, adapts, and keeps you ahead, while everyone else is still trying to catch up.",
        image: "/assets/images/img4.jpeg",
        animation: "group-hover:-translate-y-2",
    },
];


function TiltCard({
    children,
    className,
    style,
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees
        const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`transform-gpu ${className}`}
            style={{
                ...style,
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX: isHovered ? rotation.x : 0,
                rotateY: isHovered ? rotation.y : 0,
                scale: isHovered ? 1.02 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    );
}

export function WhyOnlyModelsSection() {
    return (
        <section
            id="why-us"
            data-section="why-us"
            className="why-onlymodels-section relative z-10 mx-auto w-full max-w-6xl px-5 py-32"
        >
            <div className="space-y-16">
                {/* Heading */}
                <div className="text-center space-y-5">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="why-badge mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[0.75rem] tracking-[0.55em] text-foreground/70"
                    >
                        WHY US
                        <span className="h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent" />
                    </motion.p>
                    <div className="relative mx-auto max-w-4xl">
                        <div className="absolute inset-x-0 top-1/2 -z-10 h-16 -translate-y-1/2 blur-3xl">
                            <div className="h-full rounded-full bg-gradient-to-r from-accent/30 via-transparent to-accent-secondary/30" />
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="why-heading relative bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-5xl"
                        >
                            Why OnlyModels is the Agency Creators Trust
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="why-subtitle mx-auto max-w-3xl text-xl font-semibold text-foreground/85"
                    >
                        OnlyModels isn’t just another agency. We’re the team creators choose when they want real money, real growth, and real results. We focus on high-value markets, modern systems, and long-term performance that compounds month after month. No shortcuts. No outdated tactics. Just elite execution.
                    </motion.p>
                </div>

                {/* Trust Points Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="why-grid grid gap-8 md:grid-cols-2"
                >
                    {trustPoints.map((point) => (
                        <motion.div
                            key={point.title}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.9 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 15
                                    }
                                }
                            }}
                        >
                            <TiltCard
                                className="why-card group relative cursor-pointer overflow-hidden rounded-2xl border border-border/30 bg-surface/80 p-8 shadow-xl hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 -z-10 h-full w-full">
                                    <img
                                        src={point.image}
                                        alt=""
                                        className="h-full w-full object-cover opacity-20 transition-opacity duration-700 group-hover:opacity-75"
                                    />
                                    {/* Gradient Overlay to ensure text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
                                </div>

                                {/* Icon */}
                                <div className="why-card-icon mb-6">
                                    <div className="relative flex h-16 w-16 items-center justify-center">
                                        <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/25 via-transparent to-accent-secondary/25 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />
                                        <span className="absolute inset-0 rounded-2xl  opacity-60 transition duration-500 group-hover:border-accent/60 group-hover:opacity-100" />
                                        <span className="absolute inset-0 rounded-2xl border border-accent/30 opacity-50 transition duration-500 group-hover:opacity-80 animate-[spin_9s_linear_infinite]" />
                                        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-accent shadow-inner transition-all duration-500 group-hover:shadow-accent/40">
                                            <point.icon
                                                className={`h-7 w-7 text-foreground transition-transform duration-500 ${point.animation}`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="why-card-body relative space-y-3">
                                    <h3 className="why-card-title text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
                                        {point.title}
                                    </h3>
                                    <p className="why-card-description leading-relaxed text-muted transition-colors duration-300 group-hover:text-muted-foreground">
                                        {point.description}
                                    </p>
                                </div>

                                {/* Hover glow */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 to-accent-secondary/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:from-accent/10 group-hover:to-accent-secondary/10 group-hover:opacity-100" />
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
