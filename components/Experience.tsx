"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
            staggerChildren: 0.12,
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

const techTags = [
    "XGBoost",
    "Python",
    "pandas",
    "scikit-learn",
    "GridSearchCV",
    "Machine Learning",
    "Regression",
];

const bullets = [
    "Built an end-to-end real estate price prediction pipeline using XGBoost with GridSearchCV hyperparameter tuning, achieving R² = 0.77 and measurable MAE improvements through geospatial feature engineering.",
    "Designed a robust preprocessing and validation pipeline in Python (pandas, scikit-learn) handling missing values, outliers, categorical encoding, and automated data leakage prevention.",
    "Benchmarked and evaluated regression models (XGBoost, ElasticNet, Dummy Regressor) using MAE, RMSE, and R² with repeated k-fold cross-validation to support data-driven model selection.",
];

export default function Experience() {
    return (
        <section id="experience" className="py-[120px] px-6" style={{ background: "#1d1d1f" }}>
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-content mx-auto"
            >
                {/* Section Title */}
                <motion.h2
                    variants={itemVariants}
                    className="text-[48px] font-bold text-white tracking-tight mb-12"
                >
                    Experience
                </motion.h2>

                {/* Content — no card wrapper */}
                <motion.div variants={itemVariants}>
                    {/* Header — Role on left, Logo on right */}
                    <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-[22px] font-bold text-white mb-1">
                                Data Science Intern
                            </h3>
                            <p className="text-[15px]" style={{ color: "#86868b" }}>
                                June – August 2025 · Remote
                            </p>
                        </div>
                        <Image
                            src="/assets/logos/rubius.svg"
                            alt="Rubius logo"
                            width={100}
                            height={40}
                            className="object-contain flex-shrink-0 ml-auto"
                        />
                    </div>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-4 mb-8">
                        {bullets.map((bullet, index) => (
                            <li
                                key={index}
                                className="text-[15px] leading-relaxed pl-5 relative"
                                style={{ letterSpacing: "-0.01em", color: "#a1a1a6" }}
                            >
                                <span className="absolute left-0 top-[9px] w-[5px] h-[5px] rounded-full" style={{ background: "#86868b" }} />
                                {bullet}
                            </li>
                        ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                        {techTags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[13px] font-medium px-3 py-1 rounded-tag text-white"
                                style={{ background: "rgba(255,255,255,0.08)" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
