"use client";

import { motion } from "framer-motion";

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
        <section id="experience" className="bg-bg py-[120px] px-6">
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
                    className="text-[48px] font-bold text-text-primary tracking-tight mb-12"
                >
                    Experience
                </motion.h2>

                {/* Featured Card */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-card shadow-hover border-l-4 p-8 md:p-10"
                    style={{ borderLeftColor: "var(--color-accent)" }}
                >
                    {/* Header */}
                    <div className="mb-6">
                        <h3 className="text-[22px] font-bold text-text-primary mb-1">
                            Data Science Intern @ Rubius
                        </h3>
                        <p className="text-[15px] text-text-secondary">
                            June – August 2025 · Remote
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-4 mb-8">
                        {bullets.map((bullet, index) => (
                            <li
                                key={index}
                                className="text-[15px] text-text-secondary leading-relaxed pl-5 relative"
                                style={{ letterSpacing: "-0.01em" }}
                            >
                                <span className="absolute left-0 top-[9px] w-[5px] h-[5px] rounded-full bg-text-tertiary" />
                                {bullet}
                            </li>
                        ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                        {techTags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-bg-secondary text-text-primary text-[13px] font-medium px-3 py-1 rounded-tag"
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
