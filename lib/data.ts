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

export const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
            { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
            { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        ],
    },
    {
        category: "ML & Data Science",
        items: [
            { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
            { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
            { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
            { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
            { name: "Seaborn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        ],
    },
    {
        category: "Frameworks",
        items: [
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
            { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
            { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        ],
    },
    {
        category: "Databases & BI",
        items: [
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            { name: "Tableau", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" },
            { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        ],
    },
    {
        category: "DevOps & Tools",
        items: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
            { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
            { name: "JUnit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" },
        ],
    },
];
