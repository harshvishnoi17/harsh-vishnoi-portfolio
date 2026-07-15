export const profile = {
  name: "Harsh Vishnoi",
  initials: "HV",
  role: "AI Software Engineer & Full-Stack Developer",
  location: "Noida, Uttar Pradesh, India",
  email: "vishnoiharsh17@gmail.com",
  phone: "+91 78957 67272",
  github: "https://github.com/HarshVshnoi",
  linkedin: "https://www.linkedin.com/in/harshvishnoi17",
  resume: "/resume.pdf",
  portrait: "/portrait.jpg",
};

export const rotatingRoles = [
  "AI Engineer",
  "Full Stack Developer",
  "Problem Solver",
  "Backend Engineer",
  "Cloud Developer",
  "Open Source Enthusiast",
];

export const heroStats = [
  { value: "2+", label: "Years Building" },
  { value: "4", label: "Production Platforms" },
  { value: "10+", label: "AI Systems Shipped" },
];

export const aboutParagraphs = [
  "I'm an <b>AI Software Engineer</b> passionate about building intelligent, scalable software that combines modern engineering with artificial intelligence. Over the past <b>2+ years</b>, I've developed enterprise-grade web and mobile applications, AI-powered platforms, and cloud-native solutions that streamline workflows, automate decision-making, and deliver real business value.",
  "My expertise spans <b>full-stack development</b>, <b>AI application engineering</b>, and <b>cloud technologies</b> — with hands-on experience building scalable backend APIs, integrating <b>Large Language Models (LLMs)</b>, designing <b>RAG pipelines</b>, and creating responsive, high-performance user experiences.",
  "I've contributed to enterprise <b>SaaS platforms</b> focused on <b>construction intelligence</b>, <b>project controls</b>, <b>business analytics</b>, and <b>AI-assisted decision support</b> — giving me a strong end-to-end understanding of complete product development, from the first line of code to monitoring it in production.",
  "I enjoy owning products end-to-end — from architecture and development to deployment, monitoring, and continuous improvement — while building software that is scalable, maintainable, and genuinely impactful.",
];

export const aboutFacts = [
  { label: "Full-Stack", value: "React · Next.js · FastAPI · Node.js" },
  { label: "AI Engineering", value: "LangGraph · RAG · Bedrock" },
  { label: "Cloud & DevOps", value: "AWS · Docker · CI/CD" },
  { label: "Based in", value: "Noida, India" },
];

export type SkillCategory = {
  label: string;
  tag: string;
  blurb: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    tag: "01",
    blurb: "Interfaces people actually enjoy using",
    skills: ["React.js", "Next.js", "React Native (Expo)", "Tailwind CSS", "DaisyUI"],
  },
  {
    label: "Backend",
    tag: "02",
    blurb: "APIs and services that hold up at scale",
    skills: ["Python FastAPI", "Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Languages",
    tag: "03",
    blurb: "Core languages I write daily",
    skills: ["Python", "TypeScript", "JavaScript (ES6)", "HTML5", "CSS3"],
  },
  {
    label: "AI / Agentic Engineering",
    tag: "04",
    blurb: "Building intelligent, reasoning systems",
    skills: [
      "Large Language Models (LLMs)",
      "AI Agents",
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Embeddings",
      "Vector Search",
      "Amazon Bedrock",
      "OpenAI API",
      "MCP / FastMCP",
      "Cursor AI",
      "Claude Code",
    ],
  },
  {
    label: "Databases & Cloud",
    tag: "05",
    blurb: "Where the data lives and scales",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Amazon DynamoDB",
      "Amazon EC2",
      "AWS IAM",
      "AWS Lambda",
      "Amazon API Gateway",
      "Amazon S3",
      "Amazon Bedrock",
    ],
  },
  {
    label: "DevOps & Tools",
    tag: "06",
    blurb: "Shipping reliably, again and again",
    skills: [
      "Docker",
      "Linux",
      "Git",
      "Bitbucket",
      "GitHub Actions",
      "CI/CD",
      "Terraform",
      "Grafana",
      "Vercel",
      "Postman",
      "Jira",
      "UAT",
    ],
  },
];

export type TimelineItem = {
  type: "work" | "education";
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

export const timeline: TimelineItem[] = [
  {
    type: "work",
    role: "Software Engineer",
    org: "inSynchro Group of Companies",
    period: "Jan 2025 — Present",
    location: "Remote, India",
    bullets: [
      "Developed and maintained enterprise-scale AI-powered web and mobile applications using <b>React.js</b>, <b>Next.js</b>, <b>React Native (Expo)</b>, <b>TypeScript</b>, <b>FastAPI</b>, <b>Node.js</b>, and <b>Express.js</b>, delivering scalable solutions for project intelligence and business analytics.",
      "Engineered AI-driven features including <b>AI Chat Agent</b>, <b>AI Voice Agent</b>, <b>AI Insights</b>, and <b>Executive Reporting</b> by integrating <b>Amazon Bedrock</b>, <b>LLMs</b>, <b>RAG</b>, <b>LangChain</b>, and <b>LangGraph</b> into production applications.",
      "Built scalable <b>REST APIs</b>, reusable frontend components, and responsive dashboards using <b>Tailwind CSS</b>, <b>DaisyUI</b>, <b>TanStack Query</b>, <b>MongoDB</b>, and <b>MySQL</b>, improving application performance, maintainability, and user experience.",
      "Contributed to the <b>Executive Eye</b> platform by developing modules for project management, media management, analytics dashboards, workflow automation, real-time monitoring, and AI-powered decision support.",
      "Owned the complete feature lifecycle — requirement analysis, <b>Jira</b> story and bug creation, solution design, development, code reviews, integration testing, <b>UAT</b>, deployment, and post-release production support.",
      "Automated application delivery through <b>Docker</b>, <b>GitHub Actions</b>, <b>Terraform</b>, and <b>AWS</b>, while monitoring production environments using <b>Grafana</b> and <b>Prometheus</b> to ensure system reliability and operational health.",
      "Collaborated within <b>Agile/Scrum</b> teams using <b>Jira</b>, <b>Git</b>, <b>Bitbucket</b>, and <b>CI/CD</b> pipelines, working closely with product managers, designers, and QA engineers to deliver high-quality enterprise software on schedule.",
    ],
  },
  {
    type: "education",
    role: "B.Tech, Computer Science",
    org: "Teerthanker Mahaveer University, Moradabad",
    period: "Aug 2021 — May 2025",
    location: "Moradabad, India",
    bullets: ["Graduated with a GPA of 8.1 / 10."],
  },
];

export const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "Introduction to Prompt Engineering with GitHub Copilot — Simplilearn",
  "Introduction to GitOps (LFS169) — The Linux Foundation",
  "Advanced Project Management: Strategies For Success — Udemy",
];

export type Project = {
  featured?: boolean;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  linkLabel?: string;
  hideRepo?: boolean;
};

export const projects: Project[] = [
  {
    featured: true,
    name: "XEYE-NEXTGEN",
    tagline: "Enterprise AI Project Intelligence Platform · Full Stack / AI",
    description:
      "Executive Eye is a centralized enterprise project intelligence platform that unifies project data from multiple systems into a single source of truth. It enables executives, project managers, and stakeholders to monitor project health, construction progress, financial performance, contract status, risks, quality metrics, and AI-generated insights through an interactive dashboard — integrating project schedules, cost management, contracts, geospatial visualization, IoT devices, IP camera feeds, timelapse videos, and BI dashboards for real-time visibility into large-scale infrastructure projects.",
    highlights: [
      "Engineered scalable frontend modules with <b>React</b>, <b>Next.js</b>, <b>TypeScript</b> & <b>Tailwind CSS</b> delivering responsive enterprise dashboards and data visualization interfaces",
      "Developed high-performance backend APIs using <b>Python FastAPI</b>, <b>Node.js</b> & <b>Express.js</b> supporting secure data processing, integration, and analytics across multiple project data sources",
      "Built <b>AI Chat Assistant</b>, <b>Voice Agent</b> & <b>AI Insights</b> using <b>LangGraph</b>, <b>Amazon Bedrock</b> & <b>RAG</b> — generating intelligent project summaries, contextual recommendations, and executive reports",
      "Built interactive workspace modules for project overviews, <b>GIS visualization</b>, media galleries, executive reporting, analytics, and intelligent dashboards",
      "Integrated enterprise data from <b>Oracle Primavera P6</b> & <b>Unifier</b> into a centralized analytics platform via a 97-tool <b>FastMCP</b> server with encrypted credentials and a sync engine",
      "Implemented <b>multi-tenant architecture</b> with strict tenant isolation, project-scoped and workspace-wide <b>RAG</b> retrieval, and AI query routing with out-of-scope guardrails",
      "Centralized fragmented project information — reducing manual reporting efforts by providing AI-generated executive summaries and intelligent project insights",
      "Improved decision-making through unified visualization of project schedules, costs, risks, contracts, quality metrics, and site progress",
      "Participated in architecture design, feature development, debugging, testing, deployment, and production support within <b>Agile Scrum</b> teams",
    ],
    stack: [
      "React.js", "Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "TanStack Query",
      "Python", "FastAPI", "Node.js", "Express.js", "Pydantic",
      "LangGraph", "LangChain", "Amazon Bedrock", "RAG", "LLMs", "MCP / FastMCP",
      "MongoDB", "MySQL",
      "AWS", "Docker", "GitHub Actions", "CI/CD",
    ],
    liveUrl: "https://portal.executive-eye.com",
    linkLabel: "Visit Portal",
    hideRepo: true,
  },
  {
    name: "CertifySphere",
    tagline: "Software Innovation & Learning Platform · Full Stack",
    description:
      "An AI-powered software innovation platform combining certification prep tools, pre-built fintech solutions, software templates, and a product marketplace for SaaS tools and enterprise applications.",
    highlights: [
      "Built an <b>AI-powered</b> mock test system for certification preparation with multi-level assessments using <b>OpenAI API</b>",
      "Developed pre-built fintech solutions including <b>banking UI</b>, trading platform interfaces, and a news aggregation platform",
      "Created software templates and admin dashboard solutions for <b>SaaS</b> and enterprise applications",
      "Designed a product marketplace to showcase and distribute <b>SaaS</b> tools, templates, and ready-to-use software products",
    ],
    stack: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.certifysphere.com",
    linkLabel: "Visit Site",
    hideRepo: true,
  },
  {
    name: "Xeye-Intelligence",
    tagline: "Cross-Platform Mobile App · React Native",
    description:
      "A React Native (Expo) mobile companion to the Xeye platform, built for fast data fetching, caching, and real-time project intelligence on the go.",
    highlights: [
      "<b>TanStack Query</b> for efficient caching and state management",
      "Live on the <b>Google Play Store</b>",
    ],
    stack: ["React Native", "Expo", "TanStack Query", "TypeScript"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.insynchro.xeye",
    linkLabel: "Play Store",
    hideRepo: true,
  },
  {
    name: "Bunny Boba",
    tagline: "Full-Stack Business Website",
    description:
      "A modern, fast, and responsive business platform for Bunny Boba LLP, built to strengthen its digital presence with dynamic content management.",
    highlights: ["Responsive, mobile-first UI development", "<b>Backend API</b> integration & performance optimization"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://www.bunny-boba.com",
    linkLabel: "Visit Site",
    hideRepo: true,
  },
  {
    name: "Event-Driven Serverless API",
    tagline: "Serverless Cloud Backend · AWS",
    description:
      "A serverless REST API on AWS Lambda and API Gateway, eliminating server management with automatic demand-based scaling.",
    highlights: ["Reduced operational overhead by ~60% vs. traditional server-based APIs via <b>AWS Lambda</b> & <b>API Gateway</b>"],
    stack: ["AWS Lambda", "API Gateway", "Node.js", "Serverless"],
    hideRepo: true,
  },
  {
    name: "Real Estate Marketplace",
    tagline: "MERN-Stack Property Platform",
    description:
      "A complete property marketplace with authentication, listings, image uploads, and advanced filtering, built with a scalable architecture.",
    highlights: ["Secure authentication & full <b>CRUD</b> operations", "Image upload pipeline with advanced search"],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    repoUrl: "https://github.com/harshvishnoi17/mern-estate",
  },
];

export const aiLabItems = [
  "Multi-Agent Systems",
  "LangGraph Workflows",
  "LangChain Applications",
  "Retrieval-Augmented Generation",
  "AI Automation",
  "Amazon Bedrock & Nova",
  "Prompt Engineering",
  "AI-Powered SaaS",
  "Workflow Orchestration",
  "MCP Integrations",
  "AI Voice Agents",
  "Autonomous AI Systems",
];

export const streamTokens = [
  "<inference>",
  "{tokens: n+1}",
  "0x6967E1",
  "P(next|ctx)",
  "→ embed",
  "→ retrieve",
  "→ generate",
  "0110",
  "vector[1536]",
  "attn(Q,K,V)",
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-lab", label: "AI Lab" },
  { href: "#contact", label: "Contact" },
];
