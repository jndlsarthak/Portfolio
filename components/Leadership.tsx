"use client";

import { motion } from "framer-motion";

const roles = [
    {
        title: "Social Media Manager",
        org: "PACS Club, TMU",
        dates: "July 2024 \u2013 June 2025",
        bullets: [
            "Crafted and executed strategic social media content plans for the club.",
            "Managed online community engagement and analyzed performance metrics.",
            "Increased awareness and participation within the university community.",
        ],
    },
    {
        title: "Volunteer",
        org: "UofT Hacks",
        dates: "January 2026",
        bullets: [
            "Supported event operations and participant coordination at a large-scale hackathon.",
            "Ensured smooth logistics and a positive experience for hackers and sponsors.",
        ],
    },
    {
        title: "Community Ambassador",
        org: "TMU Basketball Society",
        dates: "Fall 2024",
        bullets: [
            "Spread awareness about the club across the university community.",
            "Actively organized engaging and fun events with the team throughout the semester.",
        ],
    },
    {
        title: "Orientation Crew Member",
        org: "TMU SLLC",
        dates: "August 2024",
        bullets: [
            "Guided new students during campus tours to familiarize them with university resources.",
            "Supported the organization of orientation events to create a welcoming atmosphere.",
            "Addressed student inquiries to ensure a smooth first-year transition.",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

export default function Leadership() {
    return (
        <section id="leadership" className="bg-[#f5f5f7] py-[120px] px-6">
            <div className="max-w-content mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[48px] font-bold text-[#1d1d1f] tracking-tight mb-4">
                        Leadership & Extracurriculars
                    </h2>
                    <p className="text-[21px] text-[#6e6e73] max-w-2xl mx-auto">
                        Building community beyond the classroom.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {roles.map((role, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="bg-white rounded-[18px] border border-[#d2d2d7] border-l-4 border-l-[#0071e3] p-8 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-4">
                                <h3 className="text-[17px] font-bold text-[#1d1d1f] mb-1">
                                    {role.title}
                                </h3>
                                <p className="text-[14px] text-[#6e6e73]">
                                    {role.org} &middot; {role.dates}
                                </p>
                            </div>
                            <ul className="space-y-2 mt-auto">
                                {role.bullets.map((bullet, bulletIdx) => (
                                    <li
                                        key={bulletIdx}
                                        className="text-[14px] text-[#6e6e73] leading-relaxed flex gap-2"
                                    >
                                        <span className="text-[#0071e3] mt-1 text-[10px]">&#9679;</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
