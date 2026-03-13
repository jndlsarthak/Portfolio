"use client";

import { motion } from "framer-motion";

// --- Custom Component for "Currently" Block ---
function CurrentlyBlock() {
    const rows = [
        { icon: "🎓", label: "Studying", value: "BSc Computer Science @ TMU" },
        { icon: "💼", label: "Last role", value: "Data Science Intern · Rubius" },
        { icon: "🔨", label: "Building", value: "AI Agents & RAG Systems" },
        { icon: "📖", label: "Learning", value: "MLFlow · Cloud · Deep Learning" },
        { icon: "📍", label: "Location", value: "Toronto, Ontario" },
        // Status row handled explicitly below
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const,
                staggerChildren: 0.06,
                delayChildren: 0.2
            }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full bg-white rounded-[18px] border border-[#d2d2d7] shadow-card hover:shadow-hover transition-shadow p-8 flex flex-col"
        >
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <div className="relative flex items-center justify-center w-2 h-2">
                    <span className="absolute w-full h-full rounded-full bg-[#34c759] opacity-75 animate-ping" style={{ animationDuration: '2s' }}></span>
                    <span className="relative w-2 h-2 rounded-full bg-[#34c759]"></span>
                </div>
                <span className="text-[12px] uppercase text-[#86868b] font-bold tracking-wider">
                    Currently
                </span>
            </div>

            {/* Rows */}
            <div className="flex flex-col">
                {rows.map((row, index) => (
                    <motion.div key={index} variants={rowVariants} className="flex flex-col">
                        <div className="flex items-center py-3">
                            <div className="flex items-center gap-4 flex-1">
                                <span className="text-[16px] leading-none shrink-0">{row.icon}</span>
                                <span className="text-[12px] uppercase text-[#86868b] font-bold tracking-wider w-[80px] shrink-0">
                                    {row.label}
                                </span>
                                <span className="text-[14px] text-[#1d1d1f] font-medium truncate">
                                    {row.value}
                                </span>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-[#f5f5f7]" />
                    </motion.div>
                ))}

                {/* Status Row */}
                <motion.div variants={rowVariants} className="flex flex-col">
                    <div className="flex items-center py-3">
                        <div className="flex items-center gap-4 flex-1">
                            <span className="text-[16px] leading-none shrink-0">🟢</span>
                            <span className="text-[12px] uppercase text-[#86868b] font-bold tracking-wider w-[80px] shrink-0">
                                Status
                            </span>
                            <span className="text-[14px] text-[#34c759] font-medium flex items-center gap-2 truncate">
                                {/* Offset pulse animation */}
                                <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
                                    <span className="absolute w-full h-full rounded-full bg-[#34c759] opacity-75 animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }}></span>
                                    <span className="relative w-2 h-2 rounded-full bg-[#34c759]"></span>
                                </div>
                                Open to internships &amp; co-ops
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
}

// --- About Section Component ---
export default function About() {
    return (
        <section
            id="about"
            className="bg-bg-secondary py-[120px] px-6"
        >
            <div className="max-w-content mx-auto flex flex-col md:flex-row gap-[60px] md:gap-[80px]">

                {/* Mobile: Text first, Currently block below. Desktop: Side-by-side */}

                {/* Left Column: Story (60%) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="md:w-[60%] flex flex-col gap-6 order-1 md:order-1"
                >
                    <h2
                        className="text-[48px] font-bold text-[#1d1d1f] leading-tight"
                        style={{ letterSpacing: "-0.02em" }}
                    >
                        The person behind the projects.
                    </h2>

                    <div className="flex flex-col gap-5 text-[17px] text-[#6e6e73] leading-[1.7]">
                        <p>
                            I&apos;m Sarthak &mdash; a third-year Computer Science student at Toronto Metropolitan University who got hooked on AI the moment a model I trained actually worked. That was it. No going back.
                        </p>
                        <p>
                            I build things at the intersection of data, machine learning, and real-world problems. Whether it&apos;s an AI agent that turns plain English into SQL, a churn predictor that helps businesses hold onto their customers, or a pipeline that survived genuinely terrible real estate data &mdash; I care about making models that ship, not just models that score well on paper.
                        </p>
                        <p>
                            When I&apos;m not building, I&apos;m learning. Currently down a rabbit hole of RAG systems, AI agents, and what it actually takes to deploy ML that doesn&apos;t fall apart in production. Based in Toronto. Dean&apos;s List. Perpetually curious.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column: Currently Block (40%) */}
                <div className="md:w-[40%] flex justify-center order-2 md:order-2">
                    <CurrentlyBlock />
                </div>

            </div>
        </section>
    );
}
