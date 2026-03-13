"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    // 1. "I teach computers"
    // 2. "to think. Sometimes"
    const headlineLines = [
        "Sarthak",
        "Jindal."
    ];

    const slideUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
        },
    };

    return (
        <section className="relative min-h-screen bg-bg flex flex-col items-center justify-center px-6 pt-11 overflow-hidden">
            <div className="max-w-content w-full flex flex-col items-center text-center z-10">
                <div className="flex flex-col items-center mt-[-10vh]">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[12px] uppercase text-[#86868b] mb-6"
                        style={{ letterSpacing: "0.08em" }}
                    >
                        Based in Toronto &middot; Open to opportunities
                    </motion.div>

                    {/* Headline (Staggered by word) */}
                    <h1
                        className="text-[52px] md:text-[88px] font-bold text-[#1d1d1f] mb-6 flex flex-col items-center justify-center"
                        style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
                    >
                        {headlineLines.map((line, lineIndex) => {
                            const words = line.split(" ");
                            return (
                                <div key={lineIndex} className="flex flex-wrap justify-center overflow-hidden">
                                    {words.map((word, wordIndex) => {
                                        // Calculate the global word index for staggering
                                        let globalWordIndex = wordIndex;
                                        for (let i = 0; i < lineIndex; i++) {
                                            globalWordIndex += headlineLines[i].split(" ").length;
                                        }

                                        return (
                                            <motion.span
                                                key={wordIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: [0.16, 1, 0.3, 1],
                                                    delay: 0.2 + (globalWordIndex * 0.07) // Start slightly after eyebrow
                                                }}
                                                className="inline-block mr-[0.25em]"
                                            >
                                                {word}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </h1>

                    {/* Subheadline */}
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={slideUpVariants}
                        transition={{ delay: 0.55 }}
                        className="text-[19px] text-[#6e6e73] font-normal mb-6"
                        style={{ letterSpacing: "-0.01em" }}
                    >
                        CS Student &middot; Data Scientist &middot; Future ML Engineer
                    </motion.h2>

                    {/* Body */}
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={slideUpVariants}
                        transition={{ delay: 0.75 }}
                        className="text-[17px] text-[#6e6e73] max-w-[480px] mb-12"
                        style={{ lineHeight: 1.6 }}
                    >
                        Building intelligent systems that actually do something useful &mdash; from AI agents that answer questions to models that predict markets.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideUpVariants}
                        transition={{ delay: 0.95 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Link href="#projects" passHref legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-accent hover:bg-accent-hover text-white text-[17px] font-medium px-8 py-3 rounded-pill transition-colors w-full sm:w-auto text-center"
                            >
                                See My Work
                            </motion.a>
                        </Link>
                        <Link href="#contact" passHref legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-transparent text-accent border border-accent hover:bg-accent hover:text-white text-[17px] font-medium px-8 py-3 rounded-pill transition-colors w-full sm:w-auto text-center"
                            >
                                Let&apos;s Talk
                            </motion.a>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-2"
            >
                <div className="text-[11px] uppercase text-[#86868b] tracking-wider font-medium">
                    Scroll to explore
                </div>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-[#86868b]"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
