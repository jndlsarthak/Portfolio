export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    github?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "AI Agent for Data Analytics",
        description:
            "Conversational AI agent that queries databases, generates Python code, and delivers insights via natural language.",
        tags: ["GPT-4o", "DuckDB", "Streamlit", "Agno/Phidata"],
        image: "/assets/projects/ai-agent.png",
        github: "https://github.com/jndlsarthak",
    },
    {
        id: 2,
        title: "Customer Churn Predictor",
        description:
            "End-to-end ML pipeline predicting customer churn with Random Forest, served via FastAPI.",
        tags: ["Python", "Pandas", "Scikit-learn", "FastAPI"],
        image: "/assets/projects/churn-predictor.svg",
        github: "https://github.com/jndlsarthak",
    },
    {
        id: 3,
        title: "ServicePulse: Toronto 311 Analytics",
        description:
            "City-scale analytics dashboard analyzing 400k+ Toronto 311 service requests by ward and response time.",
        tags: ["PostgreSQL", "Tableau", "SQL", "Data Analytics"],
        image: "/assets/projects/servicepulse.svg",
        github: "https://github.com/jndlsarthak",
    },
    {
        id: 4,
        title: "Real Estate Price Predictor",
        description:
            "XGBoost regression pipeline with GridSearchCV tuning achieving R² = 0.77 on real estate data.",
        tags: ["XGBoost", "GridSearchCV", "Python", "scikit-learn"],
        image: "/assets/projects/real-estate.svg",
        github: "https://github.com/jndlsarthak",
    },
    {
        id: 5,
        title: "FocusFlow",
        description:
            "Productivity app with Pomodoro timer and task management, built at Hackhive Hackathon 2026.",
        tags: ["TypeScript", "React", "Hackathon"],
        image: "/assets/projects/focusflow.svg",
        github: "https://github.com/jndlsarthak",
    },
    {
        id: 6,
        title: "Railway Reservation System",
        description:
            "Full-stack reservation management system with SQL backend and admin dashboard.",
        tags: ["HTML", "SQL", "Database Design"],
        image: "/assets/projects/railway-reservation.svg",
        github: "https://github.com/jndlsarthak",
    },
    {
        id: 7,
        title: "SmartQR",
        description:
            "Python-based QR code generator with customization options and batch generation support.",
        tags: ["Python", "Automation", "CLI"],
        image: "/assets/projects/smartqr.svg",
        github: "https://github.com/jndlsarthak",
    },
    {
        id: 8,
        title: "Power BI Dashboards",
        description:
            "Business intelligence dashboards for data storytelling with KPIs, charts, and interactive filters.",
        tags: ["Power BI", "Data Visualization", "Business Intelligence"],
        image: "/assets/projects/power-bi.svg",
        github: "https://github.com/jndlsarthak",
    },
    {
        id: 9,
        title: "SEED Labs: Cybersecurity",
        description:
            "Hands-on labs covering packet sniffing, spoofing, PKI, and secret key encryption techniques.",
        tags: ["Cybersecurity", "Networking", "Wireshark", "Linux"],
        image: "/assets/projects/seed-labs.svg",
        github: "https://github.com/jndlsarthak",
    },
];
