"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ComingSoonProps {
    title: string;
    description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 text-center">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />
                <div className="absolute top-0 left-0 h-full w-full bg-[url('/assets/noise.png')] opacity-[0.03]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-2xl"
            >
                <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                    <span className="ml-3 text-xs font-medium uppercase tracking-widest text-accent">
                        Coming Soon
                    </span>
                </div>

                <h1 className="mb-6 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
                    {title}
                </h1>

                <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
                    {description}
                </p>

                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
}
