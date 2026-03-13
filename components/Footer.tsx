"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] pt-12 pb-8 px-6">
            <div className="max-w-content mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-8">
                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                        {[
                            { name: "About", href: "#about" },
                            { name: "Experience", href: "#experience" },
                            { name: "Projects", href: "#projects" },
                            { name: "Skills", href: "#skills" },
                            { name: "Interests", href: "#interests" },
                            { name: "Leadership", href: "#leadership" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Action */}
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-1 text-[13px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                    >
                        Contact Me <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                </div>

                <div className="border-t border-[#d2d2d7]/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-[12px] text-[#86868b]">
                        &copy; 2026 Sarthak Jindal. Built with passion in Toronto.
                    </p>
                    <p className="text-[12px] text-[#86868b]">
                        Designed faithfully in the spirit of great hardware.
                    </p>
                </div>
            </div>
        </footer>
    );
}
