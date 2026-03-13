"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

export default function Skills() {
    return (
        <section id="skills" className="bg-[#0a0a0a] py-[140px] px-6">
            <div className="max-w-content mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-[48px] md:text-[56px] font-bold text-[#f5f5f7] tracking-tight mb-4">
                        Skills & Tools
                    </h2>
                    <p className="text-[#a1a1a6] text-[18px] md:text-[20px] max-w-2xl mx-auto font-medium">
                        The technologies I use to build data pipelines, analyze complex datasets, and deploy modern applications.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {skills.map((category) => (
                        <motion.div
                            key={category.category}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <h3 className="text-[#a1a1a6] text-[15px] font-semibold tracking-widest uppercase mb-8">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                {category.items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="group relative flex items-center gap-3 bg-[#1d1d1f] border border-[#333336] rounded-full px-5 py-3 md:px-6 md:py-3.5 hover:bg-[#2d2d2f] hover:border-[#444446] transition-all duration-300 cursor-default"
                                    >
                                        <div className="w-6 h-6 md:w-7 md:h-7 relative flex items-center justify-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-[#f5f5f7] text-[15px] md:text-[16px] font-medium tracking-tight">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
