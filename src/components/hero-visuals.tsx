"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export function HeroVisuals() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const modelCardX = useTransform(x, [-300, 300], [-18, 18]);
    const modelCardY = useTransform(y, [-300, 300], [-18, 18]);

    const topCreatorCardX = useTransform(x, [-300, 300], [-26, 26]);
    const topCreatorCardY = useTransform(y, [-300, 300], [-22, 22]);

    const topCreatorGraphX = useTransform(x, [-300, 300], [-32, 32]);
    const topCreatorGraphY = useTransform(y, [-300, 300], [-28, 28]);

    const twitterCardX = useTransform(x, [-300, 300], [-20, 20]);
    const twitterCardY = useTransform(y, [-300, 300], [-25, 25]);

    const twitterGraphX = useTransform(x, [-300, 300], [-24, 24]);
    const twitterGraphY = useTransform(y, [-300, 300], [-28, 28]);

    const messagesCardX = useTransform(x, [-300, 300], [-22, 22]);
    const messagesCardY = useTransform(y, [-300, 300], [-18, 18]);

    const messagesGraphX = useTransform(x, [-300, 300], [-28, 28]);
    const messagesGraphY = useTransform(y, [-300, 300], [-24, 24]);

    const payoutCardX = useTransform(x, [-300, 300], [-14, 14]);
    const payoutCardY = useTransform(y, [-300, 300], [-18, 18]);

    const connectorImgX = useTransform(x, [-300, 300], [-8, 8]);
    const connectorImgY = useTransform(y, [-300, 300], [-8, 8]);

    const rotateXSpring = useSpring(useTransform(y, [-300, 300], [5, -5]), springConfig);
    const rotateYSpring = useSpring(useTransform(x, [-300, 300], [-5, 5]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hidden md:block relative h-[500px] w-full max-w-[600px] md:mx-auto xl:mx-0 origin-center scale-[0.65] sm:scale-75 md:h-[600px] md:scale-100"
            style={{ perspective: "1200px" }}
        >
            {/* Connector background */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-[5] overflow-visible"
                style={{ x: connectorImgX, y: connectorImgY }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
                <Image
                    src="/assets/hero-visual-images/connector.svg"
                    alt="Hero connector background"
                    fill
                    className="object-contain opacity-90"
                    priority
                />
            </motion.div>

            {/* Central creator photo */}
            <motion.div
                className="absolute md:left-[5.5rem] lg:left-18 top-55 z-30 -translate-x-1/2 -translate-y-1/2 will-change-transform "
                style={{
                    x: modelCardX,
                    y: modelCardY,
                    rotateX: rotateXSpring,
                    rotateY: rotateYSpring,
                }}
                initial={{ opacity: 0, scale: 0.7, rotateY: -70 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.1, ease: "easeOut", type: "spring", bounce: 0.35 }}
            >
                <div className="relative h-[200px] w-[220px]">
                    <Image
                        // src="/assets/hero-visual-images/model-card.webp"
                        src="/assets/images/cute.png"
                        alt="Creator snapshot"
                        fill
                        className="object-contain dark:drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                        sizes="(max-width: 768px) 220px, 320px"
                        priority
                    />
                </div>
            </motion.div>

            {/* Top creator stats card */}
            <motion.div
                className="absolute z-40 will-change-transform md:right-[48%] md:top-[52.5%] lg:right-[48%] lg:top-[51%]"
                style={{
                    x: topCreatorCardX,
                    y: topCreatorCardY,
                }}
                initial={{ opacity: 0, x: -80, y: 60 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.2, duration: 0.9, type: "spring", bounce: 0.45 }}
            >
                <div className="relative h-[180px] w-[260px]">
                    <Image
                        src="/assets/hero-visual-images/top-creator-card.webp"
                        alt="Top creator badge"
                        fill
                        sizes="260px"
                        className="object-contain dark:drop-shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                    />
                    <motion.div
                        className="absolute left-33 top-24 h-[90px] w-[110px]"
                        style={{ x: topCreatorGraphX, y: topCreatorGraphY }}
                    >
                        <Image
                            src="/assets/hero-visual-images/top-creator-graph.png"
                            alt="Creator growth trend"
                            fill
                            sizes="110px"
                            className="object-contain dark:drop-shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Twitter analytics */}
            <motion.div
                className="absolute z-20 will-change-transform"
                style={{
                    x: twitterCardX,
                    y: twitterCardY,
                    right: "38%",
                    top: "10%",
                }}
                initial={{ opacity: 0, x: 120, y: -60 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.35, duration: 0.85, type: "spring", bounce: 0.45 }}
            >
                <div className="relative h-[220px] w-[220px]">
                    <Image
                        src="/assets/hero-visual-images/xcard.webp"
                        alt="Twitter analytics card"
                        fill
                        sizes="220px"
                        className="object-contain dark:drop-shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
                    />
                    <motion.div
                        className="absolute right-9 bottom-15 h-[65px] w-[150px]"
                        style={{ x: twitterGraphX, y: twitterGraphY }}
                    >
                        <Image
                            src="/assets/hero-visual-images/xgraph.png"
                            alt="Twitter line chart"
                            fill
                            sizes="150px"
                            className="object-contain dark:drop-shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Messages revenue */}
            <motion.div
                className="absolute z-30 will-change-transform md:right-0 md:top-[27%] lg:right-[-5.5%] lg:top-[27%]"
                style={{
                    x: messagesCardX,
                    y: messagesCardY,
                }}
                initial={{ opacity: 0, x: 100, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.45, duration: 0.85, type: "spring", bounce: 0.4 }}
            >
                <div className="relative h-[110px] w-[280px]">
                    <Image
                        src="/assets/hero-visual-images/messages-card.webp"
                        alt="Messages revenue card"
                        fill
                        sizes="280px"
                        className="object-contain dark:drop-shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
                    />
                    <motion.div
                        className="absolute -bottom-6 left-1/2 h-[90px] w-[180px] -translate-x-1/2"
                        style={{ x: messagesGraphX, y: messagesGraphY }}
                    >
                        <Image
                            src="/assets/hero-visual-images/messages-card-graph.png"
                            alt="Messages revenue graph"
                            fill
                            sizes="180px"
                            className="object-contain dark:drop-shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Payout notification */}
            <motion.div
                className="absolute z-20 will-change-transform md:right-[12%] md:bottom-[7%] lg:right-[8.5%] lg:bottom-[10%]"
                style={{
                    x: payoutCardX,
                    y: payoutCardY,
                }}
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.9, type: "spring", bounce: 0.4 }}
            >
                <div className="relative h-[130px] w-[170px]">
                    <Image
                        src="/assets/hero-visual-images/payout1.png"
                        alt="Payout cleared badge"
                        fill
                        sizes="170px"
                        className="object-contain dark:drop-shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
                    />
                </div>
            </motion.div>
        </div>
    );
}
