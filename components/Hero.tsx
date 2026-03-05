"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const title = "Sarthak Jindal.";

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const charVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-bg flex flex-col items-center justify-center px-6 pt-11">
            <div className="max-w-content w-full flex flex-col items-center text-center z-10">
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center mt-[-10vh]"
                >
                    {/* Headline */}
                    <h1
                        className="text-[64px] md:text-[96px] font-bold text-text-primary leading-tight mb-2 flex flex-wrap justify-center"
                        style={{ letterSpacing: "-0.03em" }}
                    >
                        {title.split("").map((char, index) => (
                            <motion.span key={index} variants={charVariant}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    <motion.h2
                        variants={fadeUpVariant}
                        className="text-[20px] md:text-[28px] text-text-secondary font-medium mb-6"
                        style={{ letterSpacing: "-0.01em" }}
                    >
                        CS Student. Data Scientist. Future ML Engineer.
                    </motion.h2>

                    {/* Body */}
                    <motion.p
                        variants={fadeUpVariant}
                        className="text-[17px] text-text-secondary max-w-[500px] mb-12"
                    >
                        Building intelligent systems at the intersection of data, code, and
                        curiosity. Based in Toronto.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Link href="#projects" passHref legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-accent hover:bg-accent-hover text-white text-[17px] font-medium px-8 py-3 rounded-pill transition-colors w-full sm:w-auto text-center"
                            >
                                View My Work
                            </motion.a>
                        </Link>
                        <Link href="#contact" passHref legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-transparent text-accent border border-accent hover:bg-accent hover:text-white text-[17px] font-medium px-8 py-3 rounded-pill transition-colors w-full sm:w-auto text-center"
                            >
                                Get In Touch
                            </motion.a>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Chevron */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 text-text-primary"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </motion.div>
        </section>
    );
}
