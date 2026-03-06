"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goTo = useCallback(
        (index: number) => {
            if (index < 0) setActiveIndex(projects.length - 1);
            else if (index >= projects.length) setActiveIndex(0);
            else setActiveIndex(index);
        },
        []
    );

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goTo(activeIndex - 1);
            if (e.key === "ArrowRight") goTo(activeIndex + 1);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [activeIndex, goTo]);

    // Auto-scroll every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) =>
                prev >= projects.length - 1 ? 0 : prev + 1
            );
        }, 6000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const getCardStyle = (index: number) => {
        const diff = index - activeIndex;

        if (diff === 0) {
            return {
                scale: 1,
                rotateY: 0,
                opacity: 1,
                x: 0,
                zIndex: 10,
            };
        }
        if (Math.abs(diff) === 1) {
            return {
                scale: 0.85,
                rotateY: diff * -8,
                opacity: 0.6,
                x: diff * 420,
                zIndex: 5,
            };
        }
        if (Math.abs(diff) === 2) {
            return {
                scale: 0.72,
                rotateY: diff * -14,
                opacity: 0.3,
                x: diff * 500,
                zIndex: 1,
            };
        }
        return {
            scale: 0.6,
            rotateY: diff > 0 ? -18 : 18,
            opacity: 0,
            x: diff > 0 ? 700 : -700,
            zIndex: 0,
        };
    };


    return (
        <section id="projects" className="bg-bg py-[120px] px-6 overflow-hidden">
            <div className="max-w-content mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-[48px] font-bold text-text-primary tracking-tight mb-16 text-center"
                >
                    Projects
                </motion.h2>
            </div>

            {/* Carousel Container */}
            <div className="relative" style={{ perspective: "1200px" }}>
                {/* Cards */}
                <div className="relative h-[440px] md:h-[460px] flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                        {projects.map((project, index) => {
                            const style = getCardStyle(index);
                            if (Math.abs(index - activeIndex) > 2) return null;

                            return (
                                <motion.div
                                    key={project.id}
                                    animate={style}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                    className="absolute cursor-pointer"
                                    style={{
                                        width: "560px",
                                        maxWidth: "85vw",
                                        transformStyle: "preserve-3d",
                                    }}
                                    onClick={() => goTo(index)}
                                >
                                    {/* Card */}
                                    <div className="bg-white rounded-card border border-border overflow-hidden shadow-card hover:shadow-hover transition-shadow">
                                        {/* Cover Image */}
                                        <div className="relative w-full" style={{ height: "242px" }}>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                                sizes="560px"
                                            />
                                        </div>

                                        {/* Card Content */}
                                        <div className="px-6 pb-6 pt-2">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="bg-bg-secondary text-text-secondary text-[12px] font-medium px-2.5 py-0.5 rounded-tag"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            {/* Title */}
                                            <h3 className="text-[22px] font-bold text-text-primary mb-1 leading-tight">
                                                {project.title}
                                            </h3>
                                            {/* Description */}
                                            <p
                                                className="text-[14px] text-text-secondary mb-3 line-clamp-2"
                                                style={{ letterSpacing: "-0.01em" }}
                                            >
                                                {project.description}
                                            </p>
                                            {/* GitHub link */}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-accent text-[14px] font-medium hover:underline inline-flex items-center gap-1"
                                                    aria-label={`View ${project.title} on GitHub`}
                                                >
                                                    View on GitHub
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Arrow Buttons */}
                <button
                    onClick={() => goTo(activeIndex - 1)}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center hover:bg-border transition-colors z-20"
                    aria-label="Previous project"
                >
                    <ChevronLeft className="w-5 h-5 text-text-primary" />
                </button>
                <button
                    onClick={() => goTo(activeIndex + 1)}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center hover:bg-border transition-colors z-20"
                    aria-label="Next project"
                >
                    <ChevronRight className="w-5 h-5 text-text-primary" />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex
                            ? "bg-text-primary"
                            : "bg-border"
                            }`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
