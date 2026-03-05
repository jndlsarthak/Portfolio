"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "border-b border-black/10" : ""
                    }`}
                style={{
                    height: "44px",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    background: "var(--color-nav-bg)",
                }}
                aria-label="Global"
            >
                <div className="max-w-content mx-auto px-4 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-[18px] font-bold text-text-primary tracking-tight z-50"
                        aria-label="Home"
                    >
                        SJ
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[14px] text-text-primary hover:text-text-secondary transition-colors"
                                style={{ letterSpacing: "-0.01em" }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Desktop */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="bg-accent hover:bg-accent-hover text-white text-[14px] px-4 py-1 rounded-pill transition-colors"
                            aria-label="Hire Me"
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 p-1 text-text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-bg pt-20 px-6 flex flex-col gap-6 md:hidden"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-semibold text-text-primary border-b border-border pb-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 bg-accent text-white text-center py-3 rounded-card font-semibold text-lg"
                        >
                            Hire Me
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
