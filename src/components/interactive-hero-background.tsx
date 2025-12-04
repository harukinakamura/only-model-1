"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseVx: number;
    baseVy: number;
    radius: number;
    opacity: number;
}

export function InteractiveHeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = [];
            const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));

            for (let i = 0; i < particleCount; i++) {
                const baseVx = (Math.random() - 0.5) * 0.4;
                const baseVy = (Math.random() - 0.5) * 0.4;
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: baseVx,
                    vy: baseVy,
                    baseVx,
                    baseVy,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.3,
                });
            }
        };

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY,
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Get theme colors
            const isDark = document.documentElement.getAttribute("data-theme") !== "light";
            const primaryColor = isDark ? "255, 87, 182" : "220, 50, 140";
            const secondaryColor = isDark ? "255, 121, 199" : "244, 114, 182";

            particlesRef.current.forEach((particle, i) => {
                // Calculate distance from mouse
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const repelRadius = 200;

                // Mouse repulsion
                if (distance < repelRadius && distance > 0) {
                    const force = (repelRadius - distance) / repelRadius;
                    const angle = Math.atan2(dy, dx);
                    particle.vx -= Math.cos(angle) * force * 1.5;
                    particle.vy -= Math.sin(angle) * force * 1.5;
                }

                // Apply friction
                particle.vx *= 0.98;
                particle.vy *= 0.98;

                // Add base drift to keep particles moving
                particle.vx += particle.baseVx * 0.02;
                particle.vy += particle.baseVy * 0.02;

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.vx *= -1;
                    particle.x = Math.max(0, Math.min(canvas.width, particle.x));
                }
                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.vy *= -1;
                    particle.y = Math.max(0, Math.min(canvas.height, particle.y));
                }

                // Draw particle
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.radius * 4
                );

                const color = i % 2 === 0 ? primaryColor : secondaryColor;
                gradient.addColorStop(0, `rgba(${color}, ${particle.opacity})`);
                gradient.addColorStop(1, `rgba(${color}, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius * 4, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections to nearby particles
                particlesRef.current.forEach((otherParticle, j) => {
                    if (i >= j) return;

                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 150;

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.3;
                        ctx.strokeStyle = `rgba(${primaryColor}, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Initialize
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        // Start animation
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full"
            style={{
                pointerEvents: "none",
                zIndex: -1
            }}
        />
    );
}
