"use client";

import { motion, useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Custom Hook for Count Up Animation ---
function AnimatedNumber({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Spring to animate the number from 0 to 'value'
    const spring = useSpring(0, { stiffness: 50, damping: 20 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    useEffect(() => {
        return spring.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [spring]);

    return <span ref={ref}>{displayValue}</span>;
}

// --- Animation Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
};

// --- About Section Component ---
export default function About() {
    return (
        <section
            id="about"
            className="bg-bg-secondary py-[120px] px-6"
        >
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-content mx-auto flex flex-col md:flex-row gap-[60px]"
            >
                {/* Left Column: Story (60%) */}
                <div className="md:w-[60%] flex flex-col gap-6">
                    <motion.h2
                        variants={itemVariants}
                        className="text-[40px] font-bold text-text-primary tracking-tight"
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col gap-4 text-[17px] text-text-secondary leading-relaxed"
                        style={{ letterSpacing: "-0.01em" }}
                    >
                        <p>
                            I&apos;m Sarthak Jindal, a Computer Science student at Toronto
                            Metropolitan University, specializing in Artificial Intelligence,
                            Data Science, and Machine Learning.
                        </p>
                        <p>
                            My passion lies in architecting intelligent systems that extract
                            meaningful insights from complex data. Whether it&apos;s predicting
                            real estate prices, building conversational AI agents, or designing
                            robust data pipelines, I believe in bridging the gap between raw
                            data and actionable strategy.
                        </p>
                        <p>
                            Based in Toronto, I am constantly exploring the bleeding edge of
                            deep learning, cloud computing, and RAG systems, driven by a
                            curiosity to understand how things work beneath the surface.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column: Stat Cards (40%) */}
                <div className="md:w-[40%] grid grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-card p-6 shadow-card hover:shadow-hover transition-shadow flex flex-col justify-center items-center text-center"
                    >
                        <div className="text-[48px] font-bold text-text-primary tracking-tight leading-none mb-2">
                            <AnimatedNumber value={2024} />–25
                        </div>
                        <div className="text-[14px] text-text-secondary font-medium">
                            Dean&apos;s List
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-card p-6 shadow-card hover:shadow-hover transition-shadow flex flex-col justify-center items-center text-center"
                    >
                        <div className="text-[48px] font-bold text-text-primary tracking-tight leading-none mb-2">
                            <AnimatedNumber value={10} />+
                        </div>
                        <div className="text-[14px] text-text-secondary font-medium">
                            Projects Built
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-card p-6 shadow-card hover:shadow-hover transition-shadow flex flex-col justify-center items-center text-center"
                    >
                        <div className="text-[48px] font-bold text-text-primary tracking-tight leading-none mb-2">
                            <AnimatedNumber value={1} />
                        </div>
                        <div className="text-[14px] text-text-secondary font-medium">
                            Internship @ Rubius
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-card p-6 shadow-card hover:shadow-hover transition-shadow flex flex-col justify-center items-center text-center"
                    >
                        <div className="text-[48px] font-bold text-text-primary tracking-tight leading-none mb-2">
                            <AnimatedNumber value={10} />+
                        </div>
                        <div className="text-[14px] text-text-secondary font-medium">
                            Languages & Tools
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
