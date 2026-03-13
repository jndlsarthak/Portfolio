"use client";

import { motion } from "framer-motion";
import {
    MessageSquareText,
    BrainCircuit,
    Network,
    Cloud,
    GitBranch,
    Bot,
    DatabaseZap,
    Gamepad2
} from "lucide-react";

const interestsData = [
    {
        name: "NLP",
        description: "Extracting meaning and structure from raw text data.",
        icon: MessageSquareText
    },
    {
        name: "Deep Learning",
        description: "Training multi-layered networks to solve complex problems.",
        icon: BrainCircuit
    },
    {
        name: "Neural Networks",
        description: "Architecting models inspired by biological systems.",
        icon: Network
    },
    {
        name: "Cloud Computing",
        description: "Deploying and scaling applications globally.",
        icon: Cloud
    },
    {
        name: "MLFlow",
        description: "Tracking ML experiments and managing model lifecycles.",
        icon: GitBranch
    },
    {
        name: "AI Agents",
        description: "Building autonomous systems that execute tasks.",
        icon: Bot
    },
    {
        name: "RAG Systems",
        description: "Augmenting generation with external knowledge retrieval.",
        icon: DatabaseZap
    },
    {
        name: "Reinforcement Learning",
        description: "Teaching agents through reward-driven environments.",
        icon: Gamepad2
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
};

export default function Interests() {
    return (
        <section id="interests" className="bg-[#1d1d1f] py-[120px] px-6">
            <div className="max-w-content mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[48px] font-bold text-white tracking-tight mb-4">
                        What I&apos;m Exploring
                    </h2>
                    <p className="text-[21px] text-[#86868b] max-w-2xl mx-auto">
                        Curiosity drives everything.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {interestsData.map((interest) => (
                        <motion.div
                            key={interest.name}
                            variants={itemVariants}
                            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 transition-all duration-300 hover:border-[rgba(255,255,255,0.25)] hover:shadow-[0_0_20px_rgba(255,255,255,0.07)] group"
                        >
                            <div className="mb-4 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                                <interest.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-[17px] font-bold text-white mb-2">
                                {interest.name}
                            </h3>
                            <p className="text-[14px] text-[#86868b] leading-relaxed">
                                {interest.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
