export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  photoUrl: string;
  bio: string;
  typingStrings: string[];
  stats: { label: string; value: string; icon: string; description: string }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: number; icon: string; experience: string }[];
}

export interface LanguageSpoken {
  name: string;
  proficiency: string;
  level: string;
  flag: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  description: string;
  bullets: string[];
  technologies: string[];
  metrics: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  longDescription: string;
  bullets: string[];
  techStack: string[];
  featured: boolean;
  metrics: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeColor: string;
  category: string;
  credentialUrl?: string;
  imageUrl?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "C Santhi Swaroop",
    shortName: "Santhi Swaroop",
    title: "AI & Machine Learning Specialist",
    headline: "Building Scalable AI, Agentic Systems & Data-Driven Solutions",
    location: "Chennai, Tamil Nadu, India",
    email: "csan.aiml2024@rmd.ac.in",
    phone: "8838955211",
    github: "github.com/swaroopckm7-droid",
    githubUrl: "https://github.com/swaroopckm7-droid",
    linkedin: "linkedin.com/in/santhi-swaroop-139900331",
    linkedinUrl: "https://linkedin.com/in/santhi-swaroop-139900331",
    photoUrl: "/profile.jpg",
    bio: "Motivated B.Tech Artificial Intelligence and Machine Learning (AIML) student (2024–2028) with hands-on internship experience in Python programming and data analytics. Certified in Generative AI, Agentic AI, and Oracle Cloud Development, with strong knowledge of Python, Java, C++, Data Structures, and Machine Learning fundamentals. Successfully completed the German Language A1 course, demonstrating strong communication skills and a commitment to continuous learning. Passionate about building scalable AI and ML solutions, solving real-world problems, and contributing to innovative, data-driven technologies.",
    typingStrings: [
      "AI & Machine Learning Engineer",
      "Generative AI & Agentic AI Specialist",
      "Oracle APEX Cloud Certified Developer",
      "Data Analytics & ML Pipeline Builder"
    ],
    stats: [
      { label: "ML Model Accuracy", value: "85%+", icon: "Target", description: "Achieved on test classification datasets" },
      { label: "Insight Automation", value: "40%", icon: "Zap", description: "Reduced manual reporting time using GenAI" },
      { label: "Certifications", value: "6+", icon: "Award", description: "Oracle, NPTEL & Industry badges" },
      { label: "Internships", value: "2", icon: "Briefcase", description: "Data Analytics & Python Engineering" },
    ]
  } as PersonalInfo,

  education: [
    {
      id: "btech-aiml",
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      institution: "R.M.D Engineering College",
      location: "Chennai, Tamil Nadu",
      period: "2024 – 2028",
      description: "Comprehensive curriculum covering Artificial Intelligence, Neural Networks, Supervised & Unsupervised Machine Learning, Data Analytics, Object-Oriented Programming, and Cloud Computing.",
      highlights: [
        "Focused on Generative AI and Agentic AI workflow automation",
        "Hands-on implementation of ML algorithms and data preprocessing pipelines",
        "Active contributor to college technical coding communities"
      ]
    },
    {
      id: "hsc-12th",
      degree: "Higher Secondary Education (12th)",
      institution: "RMK Matriculation Higher Secondary School",
      location: "Tamil Nadu, India",
      period: "2024",
      description: "Strong foundational education in Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
      highlights: [
        "High academic performance in analytical and mathematical coursework",
        "Solid grounding in core science and logic foundations"
      ]
    }
  ] as EducationItem[],

  languagesSpoken: [
    { name: "English", proficiency: "Professional Proficiency", level: "Professional", flag: "🇬🇧" },
    { name: "Telugu", proficiency: "Native / Bilingual", level: "Native", flag: "🇮🇳" },
    { name: "Tamil", proficiency: "Professional Proficiency", level: "Professional", flag: "🇮🇳" },
    { name: "German", proficiency: "Basic Certificate", level: "A1 - Basic", flag: "🇩🇪" },
  ] as LanguageSpoken[],

  skillCategories: [
    {
      category: "Programming Languages",
      description: "Core languages for software engineering, algorithmic solving, and data structures.",
      skills: [
        { name: "Python", level: 92, icon: "Code2", experience: "Advanced" },
        { name: "C++", level: 85, icon: "Cpu", experience: "Intermediate" },
        { name: "Java", level: 80, icon: "Terminal", experience: "Intermediate" },
        { name: "C", level: 78, icon: "Binary", experience: "Foundational" },
      ]
    },
    {
      category: "Tools & Technologies",
      description: "Development environments, version control, and web services.",
      skills: [
        { name: "VS Code", level: 95, icon: "Laptop", experience: "Daily IDE" },
        { name: "Git & GitHub", level: 88, icon: "GitBranch", experience: "Version Control" },
        { name: "REST APIs", level: 82, icon: "Network", experience: "Data Integration" },
        { name: "Data Analytics Libraries (Pandas/NumPy)", level: 90, icon: "Table", experience: "EDA & Modeling" }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "exp-1",
      role: "Data Analytics Intern",
      company: "Innovation Tech Tree",
      location: "Remote, India",
      type: "Internship",
      period: "May 2026 – June 2026",
      description: "Engineered automated data cleaning pipelines and interactive dashboards to extract actionable business insights from raw complex datasets.",
      bullets: [
        "Analyzed real-world datasets using Python, applying data cleaning, transformation, and exploratory data analysis to identify trends and actionable insights.",
        "Developed interactive data visualizations to communicate findings, improving stakeholder understanding of key business metrics.",
        "Collaborated with cross-functional teams to validate data quality and streamline analytics workflows, reducing manual reporting effort."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Exploratory Data Analysis", "Data Visualization", "Analytics Pipelines"],
      metrics: "Reduced manual reporting effort and improved stakeholder metric clarity"
    },
    {
      id: "exp-2",
      role: "Python Programming Intern",
      company: "CodeAlpha",
      location: "Remote, India",
      type: "Internship",
      period: "June 2025 – July 2025",
      description: "Focused on building robust automation scripts, optimizing core data structures, and solving complex algorithmic challenges.",
      bullets: [
        "Built and debugged Python applications focusing on automation scripts, data handling, and algorithmic problem solving.",
        "Applied OOP principles and data structure optimization to improve code efficiency, reducing execution time by 20%.",
        "Delivered multiple project modules demonstrating proficiency in Python fundamentals, file I/O, and modular design."
      ],
      technologies: ["Python", "Algorithms", "OOP", "File I/O", "Data Structures", "Automation"],
      metrics: "Reduced execution time by 20% via algorithmic optimization"
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "proj-1",
      title: "AI-Powered Data Analytics Dashboard",
      subtitle: "Automated Insight Generation & Predictive Analytics Pipeline",
      year: "2026",
      category: "AI & Data Science",
      description: "A Python-based analytics pipeline integrating data cleaning, interactive visualization, and ML-based trend prediction for real-world business datasets.",
      longDescription: "This project features an end-to-end data processing system built with Python. By applying Generative AI concepts, the dashboard automates raw data interpretation and generates plain-language business insights, cutting down manual reporting time by 40%. The interactive visual interface allows non-technical stakeholders to effortlessly explore key business KPIs and predictive trends.",
      bullets: [
        "Developed a Python-based analytics pipeline integrating data cleaning, visualization, and ML-based trend prediction for real-world datasets.",
        "Applied Generative AI concepts to automate insight generation, reducing manual analysis time by 40%.",
        "Built interactive dashboards to communicate findings, improving stakeholder understanding of key business metrics."
      ],
      techStack: ["Python", "Generative AI", "Machine Learning", "Data Analytics", "Pandas", "Plotly / Matplotlib"],
      featured: true,
      metrics: "40% reduction in manual analysis time",
      githubUrl: "https://github.com/swaroopckm7-droid"
    }
  ] as ProjectItem[],

  certifications: [
    {
      id: "cert-oracle-genai",
      title: "Oracle Generative AI Professional",
      issuer: "Oracle",
      year: "2025",
      badgeColor: "from-blue-500 to-indigo-600",
      category: "Artificial Intelligence",
      imageUrl: "/certificates/oracle_genai.png"
    },
    {
      id: "cert-oracle-apex",
      title: "Oracle APEX Cloud Developer",
      issuer: "Oracle",
      year: "2025",
      badgeColor: "from-purple-500 to-pink-600",
      category: "Cloud & Web Apps",
      imageUrl: "/certificates/oracle_apex.png"
    },
    {
      id: "cert-oracle-agentic",
      title: "Agentic AI Certified Foundations Associate",
      issuer: "Oracle",
      year: "2026",
      badgeColor: "from-cyan-500 to-blue-600",
      category: "AI & Autonomous Systems",
      imageUrl: "/certificates/oracle_agentic_ai.png"
    },
    {
      id: "cert-nptel-iiot",
      title: "Industry 4.0 and IIoT (Elite)",
      issuer: "NPTEL / IIT Kharagpur",
      year: "2026",
      badgeColor: "from-emerald-500 to-teal-600",
      category: "Industrial IoT & Automation",
      imageUrl: "/certificates/nptel_iiot.png"
    },
    {
      id: "cert-nptel-softskills",
      title: "Soft Skill Development",
      issuer: "NPTEL / IIT Kharagpur",
      year: "2025",
      badgeColor: "from-amber-500 to-orange-600",
      category: "Professional Communication",
      imageUrl: "/certificates/nptel_soft_skills.png"
    },
    {
      id: "cert-apollo-msa",
      title: "Master in Software Application",
      issuer: "Apollo Computer Education",
      year: "2025",
      badgeColor: "from-violet-600 to-purple-600",
      category: "Software Fundamentals",
      imageUrl: "/certificates/apollo_msa.jpg"
    }
  ] as CertificationItem[],

  achievements: [
    "Completed multiple professional certifications in AI, Cloud, and Programming from Oracle and NPTEL.",
    "Active learner and contributor in AI/ML and software development communities.",
    "Participated in coding practice and problem-solving on platforms including Skillrack.",
    "Demonstrated continuous learning through self-paced courses in Generative AI, Agentic AI, and Industry 4.0."
  ]
};
