"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section
            id="contact"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative bg-white py-[140px] px-6 overflow-hidden group"
        >
            {/* Mouse follow radial gradient */}
            <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(0, 113, 227, 0.04), transparent 40%)`,
                }}
            />

            <div className="max-w-content mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-[48px] md:text-[56px] font-bold text-[#1d1d1f] tracking-tight mb-4">
                        Let&apos;s build something great.
                    </h2>
                    <p className="text-[21px] text-[#6e6e73] max-w-2xl mx-auto">
                        Open to internships, research, and collaboration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* Email */}
                    <motion.a
                        href="mailto:sarthak38j@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center justify-center p-10 bg-[#fbfbfd] border border-[#d2d2d7] rounded-[24px] shadow-sm hover:shadow-hover transition-all duration-300 group/card relative overflow-hidden"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#0071e3]/10 flex items-center justify-center text-[#0071e3] mb-6 group-hover/card:scale-110 transition-transform duration-300">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-[20px] font-bold text-[#1d1d1f] mb-2">Email</h3>
                        <p className="text-[15px] text-[#6e6e73]">sarthak38j@gmail.com</p>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/in/jndlsarthak"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="flex flex-col items-center justify-center p-10 bg-[#fbfbfd] border border-[#d2d2d7] rounded-[24px] shadow-sm hover:shadow-hover transition-all duration-300 group/card relative overflow-hidden"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] mb-6 group-hover/card:scale-110 transition-transform duration-300">
                            <Linkedin className="w-8 h-8" />
                        </div>
                        <h3 className="text-[20px] font-bold text-[#1d1d1f] mb-2">LinkedIn</h3>
                        <p className="text-[15px] text-[#6e6e73]">Connect with me</p>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                        href="https://www.github.com/jndlsarthak"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="flex flex-col items-center justify-center p-10 bg-[#fbfbfd] border border-[#d2d2d7] rounded-[24px] shadow-sm hover:shadow-hover transition-all duration-300 group/card relative overflow-hidden"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#333]/10 flex items-center justify-center text-[#333] mb-6 group-hover/card:scale-110 transition-transform duration-300">
                            <Github className="w-8 h-8" />
                        </div>
                        <h3 className="text-[20px] font-bold text-[#1d1d1f] mb-2">GitHub</h3>
                        <p className="text-[15px] text-[#6e6e73]">View my repositories</p>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
