export const personalInfo = {
  name: "Kunal",
  fullName: "Kunal Kumar Singh",
  title: "AI & Data Engineer",
  email: "official.kunal1001@gmail.com",
  phone: "+91-9204510177",
  location: "Phagwara, Punjab, India",
  displayLocation: "India",
  github: "https://github.com/DreamtoProgram",
  linkedin: "https://www.linkedin.com/in/kunal-kumar-singh--70189531859204510177",
  heroBio: "I enjoy building practical applications, solving real-world problems and working with data to create intelligent and impactful solutions.",
  aboutParagraphs: [
    "I'm Kunal, and I'm currently focused on building my skills in AI, data, and software development.",
    "I enjoy learning how things work and understanding the logic behind them. That's what initially made me interested in programming and problem-solving. I spend a lot of my time learning, practicing, and building things that help me understand concepts better.",
    "Right now, I'm exploring areas like Python, AI, data engineering, and problem-solving. I'm still early in my journey, so I don't want to pretend that I already know everything. What I can say is that I'm consistently working on improving my skills and trying to understand things properly instead of just memorizing them."
  ],
  stats: [
    { label: "CGPA", value: "9.03 / 10" },
    { label: "Core Focus", value: "AI & Data Engineering" },
    { label: "Certifications", value: "5+ Earned" },
    { label: "Status", value: "Open for Opportunities" }
  ]
};

export const skillsData = {
  programming: {
    title: "Programming",
    icon: "Code2",
    skills: [
      "Python",
      "C++",
      "Java",
      "SQL",
      "FastAPI",
      "REST API",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  dataAndAI: {
    title: "Data & AI",
    icon: "Cpu",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Azure AI",
      "AI Foundations",
      "PyMySQL",
      "Data Pipelines"
    ]
  },
  toolsAndTech: {
    title: "Tools & Technologies",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "MySQL",
      "PostgreSQL",
      "Snowflake",
      "Oracle Cloud",
      "VS Code",
      "Postman"
    ]
  }
};

export const projectsData = [
  {
    id: "coprot",
    title: "CoProT – Coding Problem Tracker",
    subtitle: "Centralized Practice & Progress Platform",
    featured: true,
    description: "A full-stack coding practice platform enabling users to manage programming problems, track progress, and organize their problem-solving journey in a centralized platform.",
    longDescription: "CoProT (Coding Problem Tracker) is engineered to help software engineers and students systematically structure their algorithmic preparation. It features a multi-user architecture with complete user-specific data isolation, RESTful API endpoints for problem CRUD operations, and structured persistence using MySQL.",
    features: [
      "FastAPI backend with high-throughput RESTful endpoints for problem lifecycle and tags",
      "Multi-user architecture with secure user-specific data handling and state management",
      "MySQL database with PyMySQL drivers and environment-based configuration",
      "Topic categorization, difficulty tracking, and revision scheduling"
    ],
    techStack: ["Python", "FastAPI", "MySQL", "PyMySQL", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/DreamtoProgram",
    liveUrl: null,
    previewType: "coprot_mockup"
  },
  {
    id: "ai-assistant",
    title: "AI Chatbot & Query Engine",
    subtitle: "Context-Aware Intelligent Assistant",
    featured: false,
    isUpcoming: true,
    status: "Upcoming",
    statusBadge: "Upcoming Project",
    description: "An intelligent chatbot built using NLP techniques that answers user queries, analyzes input intent, and provides structured relevant information efficiently.",
    longDescription: "A conversational NLP application currently in active design and development, created to streamline information retrieval and automated response generation. Utilizes pattern matching, token classification, and retrieval-augmented mechanisms.",
    features: [
      "Natural language processing pipeline for intent recognition & entity parsing",
      "Lightweight FastAPI backend serving rapid contextual responses",
      "Structured SQLite logging for conversational history & feedback loops",
      "Planned integration with vector embeddings for semantic document search"
    ],
    techStack: ["Python", "FastAPI", "NLP", "SQLite", "Scikit-Learn"],
    githubUrl: "https://github.com/DreamtoProgram",
    liveUrl: null,
    previewType: "chatbot_mockup"
  },
  {
    id: "data-dashboard",
    title: "Data Analysis Dashboard",
    subtitle: "Exploratory Analytics & Visualizations",
    featured: false,
    isUpcoming: true,
    status: "Upcoming",
    statusBadge: "Upcoming Project",
    description: "Interactive dashboard for exploratory data analysis, trend identification, and visualization of key insights and performance indicators from complex datasets.",
    longDescription: "A comprehensive data exploration workspace designed to clean, transform, and aggregate raw datasets into actionable visual reports with dynamic filters, KPI telemetry, and statistical summaries.",
    features: [
      "Automated exploratory statistical summaries and distribution charts",
      "High-performance vectorized transformations with Pandas and NumPy",
      "Interactive data filtering, correlation heatmaps, and export tools",
      "Streamlit-powered responsive web interface with custom KPI widgets"
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    githubUrl: "https://github.com/DreamtoProgram",
    liveUrl: null,
    previewType: "dashboard_mockup"
  }
];

export const certificationsData = [
  {
    id: "azure-ai",
    name: "Microsoft Azure AI Essentials",
    fullName: "Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure",
    issuer: "LinkedIn Learning / Microsoft",
    date: "Jun 2026",
    credentialId: "ea724bd143d409644708580c1e9cd0c6f2d749505286367a94a1828fdb3ef919",
    skills: ["Machine Learning", "Azure AI Foundry", "Artificial Intelligence (AI)"],
    badgeColor: "from-blue-500 to-cyan-500",
    iconType: "microsoft",
    verifyUrl: "https://www.linkedin.com/learning/certificates/ea724bd143d409644708580c1e9cd0c6f2d749505286367a94a1828fdb3ef919"
  },
  {
    id: "oracle-ai",
    name: "Oracle Certified Foundations Associate",
    fullName: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "Oct 2025",
    credentialId: "323346543OCI25AICFA",
    skills: ["Oracle Cloud Infrastructure", "AI Foundations", "Machine Learning Concepts"],
    badgeColor: "from-red-600 to-amber-600",
    iconType: "oracle",
    verifyUrl: null
  },
  {
    id: "python-hackerrank",
    name: "Python Programming Certification",
    fullName: "Python (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "Mar 2026",
    credentialId: "A3B8E6F5FF21",
    skills: ["Python", "Data Structures", "Control Flow", "Object-Oriented Programming"],
    badgeColor: "from-amber-500 to-blue-500",
    iconType: "python",
    verifyUrl: "https://www.hackerrank.com/certificates/A3B8E6F5FF21"
  },
  {
    id: "snowflake-fastrack",
    name: "Snowflake SnowPro Core / Fastrack",
    fullName: "Data and AI Fastrack",
    issuer: "Snowflake",
    date: "Feb 2026",
    credentialId: "SNOW-DAI-2026-KUNAL",
    skills: ["Cloud Data Warehousing", "Data Cloud", "Data Analytics"],
    badgeColor: "from-sky-400 to-blue-600",
    iconType: "snowflake",
    verifyUrl: null
  },
  {
    id: "sql-hackerrank",
    name: "SQL Intermediate Certification",
    fullName: "SQL (Intermediate) Skill Certification",
    issuer: "HackerRank",
    date: "May 2026",
    credentialId: "SQL-HR-INT-2026",
    skills: ["Complex Queries", "Joins & Subqueries", "Aggregations", "Database Normalization"],
    badgeColor: "from-slate-700 to-blue-800",
    iconType: "sql",
    verifyUrl: null
  }
];

export const educationData = [
  {
    id: "btech",
    degree: "B.Tech in Artificial Intelligence & Data Engineering",
    institution: "Lovely Professional University, Phagwara, Punjab",
    period: "Aug 2025 - Present",
    displayPeriod: "2025 – Present",
    scoreBadge: "CGPA: 9.03",
    scoreType: "cgpa",
    description: "Specializing in AI architectures, Machine Learning pipelines, distributed data systems, and algorithmic problem solving."
  },
  {
    id: "class12",
    degree: "12th Class (Higher Secondary)",
    institution: "Swami Sant Dass Public School, Phagwara, Punjab",
    period: "Apr 2024 – Apr 2025",
    displayPeriod: "2024 – 2025",
    scoreBadge: "Percentage: 74%",
    scoreType: "percentage",
    description: "Senior secondary education under CBSE board curriculum with focus on Physics, Chemistry, and Mathematics."
  },
  {
    id: "class10",
    degree: "10th Class (Secondary Education)",
    institution: "Shri Mahavir Jain Model High School, Phagwara, Punjab",
    period: "Apr 2023 – Mar 2024",
    displayPeriod: "2023 – 2024",
    scoreBadge: "Percentage: 74.46%",
    scoreType: "percentage",
    description: "Foundation secondary schooling under PSEB curriculum with academic distinction in Science and Mathematics."
  }
];

export const hackathonsData = [
  {
    id: "code-flux-2026",
    event: "CODE FLUX 2026",
    tagline: "36-Hour Hackathon",
    date: "11th–13th September 2026",
    location: "Lovely Professional University",
    organizer: "CodingBlocks LPU",
    organizerDetail: "Division of Youth Affairs, Student Welfare Wing, LPU",
    participation: "Participant",
    summary: "A 36-hour hackathon bringing together students to solve practical challenges through rapid, collaborative software development.",
    project: {
      name: "Mess Management System",
      type: "Full-Stack Web Application",
      description: "A full-stack mess management platform designed around the college mess ecosystem to centralize mess-related operations and provide digital solutions to common student and administration problems.",
      contribution: "Worked as part of the team to design and develop the full-stack Mess Management System, contributing to the backend and overall web application development.",
      techStack: {
        backend: ["Python", "FastAPI"],
        database: ["MongoDB"],
        tools: ["Antigravity", "ChatGPT"]
      },
      team: [
        "Kunal Kumar Singh",
        "Divya Satya",
        "Sahil Kumar Singh",
        "Krishna Mehra"
      ]
    },
    certificates: [
      {
        id: "code-flux-cert",
        name: "CODE FLUX 2026 — Certificate of Participation",
        fullName: "Certificate of Participation - CODE FLUX 2026 (36-Hour Hackathon)",
        issuer: "CodingBlocks LPU · Lovely Professional University",
        date: "11th–13th September 2026",
        imageUrl: "/code_flux_2026_certificate.png",
        verifyUrl: "https://verification.givemycertificate.com/v/65a16dc7-35a1-4e57-b31d-b5da54387016",
        badge: "36-Hour Hackathon",
        type: "Hackathon Participation"
      },
      {
        id: "piyush-garg-cert",
        name: "Seminar Session by Piyush Garg",
        fullName: "Certificate of Participation - Seminar Session by Piyush Garg",
        issuer: "CodingBlocks LPU · Lovely Professional University",
        date: "September 2026",
        imageUrl: "/piyush_garg_seminar_certificate.png",
        verifyUrl: "https://verification.givemycertificate.com/v/e728ee02-85f3-471c-93d7-313550b1af62",
        badge: "Specialized Seminar",
        type: "Seminar Participation"
      }
    ]
  }
];

