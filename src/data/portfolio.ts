export const profile = {
  name: "Harsh Vishnoi",
  initials: "HV",
  role: "AI Software Engineer & Full-Stack Developer",
  location: "Noida, Uttar Pradesh, India",
  email: "vishnoiharsh793@gmail.com",
  phone: "+91 78957 67272",
  github: "https://github.com/HarshVshnoi",
  linkedin: "https://www.linkedin.com/in/harshvishnoi17",
  resume: "/resume.pdf",
  portrait: "/portrait.png",
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
  "I'm an <b>AI Software Engineer</b> passionate about building software where modern engineering meets artificial intelligence. My work focuses on designing scalable systems that transform business processes into intelligent digital experiences.",
  "Whether it's developing high-performance backend APIs, architecting AI-powered workflows, integrating Large Language Models, provisioning cloud infrastructure, or creating responsive enterprise interfaces — I enjoy solving challenging engineering problems with clean, maintainable code.",
  "Professionally, I've contributed to enterprise SaaS platforms used in <b>construction intelligence, project controls</b>, and <b>AI-assisted decision making</b> — giving me a strong end-to-end understanding of complete product development, from the first line of code to monitoring it in production.",
  "I'm hands-on with Amazon Bedrock, LLM integrations, LangGraph-based multi-agent systems, RAG pipelines, and MCP integrations — and currently expanding my expertise in Agentic AI and cloud-native AI solutions.",
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
    label: "Languages",
    tag: "01",
    blurb: "Core languages I write daily",
    skills: ["Python", "TypeScript", "JavaScript (ES6)", "SQL", "HTML5", "CSS3"],
  },
  {
    label: "AI / Agentic Engineering",
    tag: "02",
    blurb: "Building intelligent, reasoning systems",
    skills: [
      "LLMs & AI Agents",
      "LangGraph",
      "LangChain",
      "RAG & Embeddings",
      "Vector Search",
      "Amazon Bedrock & Nova",
      "OpenAI API",
      "MCP / FastMCP",
    ],
  },
  {
    label: "Frontend",
    tag: "03",
    blurb: "Interfaces people actually enjoy using",
    skills: ["React.js", "Next.js", "React Native (Expo)", "Tailwind CSS", "DaisyUI"],
  },
  {
    label: "Backend",
    tag: "04",
    blurb: "APIs and services that hold up at scale",
    skills: ["FastAPI", "Flask", "Express.js", "Node.js", "NestJS", "REST APIs"],
  },
  {
    label: "Databases & Cloud",
    tag: "05",
    blurb: "Where the data lives and scales",
    skills: ["MongoDB", "MySQL", "S3 Vectors", "AWS EC2 & Lambda", "API Gateway", "IAM & S3"],
  },
  {
    label: "DevOps & Tools",
    tag: "06",
    blurb: "Shipping reliably, again and again",
    skills: ["Docker", "Linux", "Git & Bitbucket", "GitHub Actions", "CI/CD", "Vercel", "Postman", "Jira"],
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
      "Architected a scalable mobile (React Native) and web (React.js) application, Palms, visualizing construction project performance on an interactive map for real-time site updates.",
      "Designed and built high-performance backend REST APIs using Node.js, Express.js, Flask, and FastAPI, powering AI-enabled workflows for the ExecutiveEye enterprise platform.",
      "Developed modern, responsive React.js and Next.js interfaces integrating AI-powered backend services with Tailwind CSS and DaisyUI.",
      "Optimized application performance using React hooks, Context API, and lazy loading — improving load times and UX by 30%.",
      "Built the Xeye-Intelligence cross-platform app with React Native (Expo), integrating TanStack Query for fast data fetching, caching, and state management.",
      "Followed Agile methodology using Jira, Git, and Bitbucket, maintaining CI/CD pipelines for efficient, high-quality delivery.",
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
};

export const projects: Project[] = [
  {
    featured: true,
    name: "XEYE-NEXTGEN",
    tagline: "Multi-Agent AI Platform · Full Stack / AI",
    description:
      "A multi-tenant enterprise SaaS platform unifying project controls and AI-driven automation, powered by a LangGraph-orchestrated multi-agent system with strict tenant isolation.",
    highlights: [
      "LangGraph text agent + Amazon Nova Sonic voice agent with intent classification and out-of-scope guardrails",
      "RAG-based retrieval using AWS Bedrock and S3 Vectors, project-scoped and workspace-wide",
      "97-tool FastMCP server integrating Oracle Primavera P6 and Unifier with a sync engine and encrypted credentials",
      "AI conversational assistants with intelligent query routing, tool calling, and contextual retrieval",
    ],
    stack: ["LangGraph", "AWS Bedrock", "Amazon Nova Sonic", "MCP / FastMCP", "Next.js", "FastAPI", "MongoDB", "Docker"],
  },
  {
    name: "CertifySphere",
    tagline: "Software Innovation & Learning Platform · Full Stack",
    description:
      "An AI-powered mock test system for certification prep, alongside pre-built fintech UIs and a marketplace for SaaS tools and templates.",
    highlights: [
      "AI-powered mock tests with multi-level assessments",
      "Banking UI, trading interfaces, and a news aggregation platform",
      "Product marketplace for SaaS tools, templates, and ready-to-use software",
    ],
    stack: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.certifysphere.com",
    linkLabel: "Visit Site",
  },
  {
    name: "Xeye-Intelligence",
    tagline: "Cross-Platform Mobile App · React Native",
    description:
      "A React Native (Expo) mobile companion to the Xeye platform, built for fast data fetching, caching, and real-time project intelligence on the go.",
    highlights: [
      "TanStack Query for efficient caching and state management",
      "Live on the Google Play Store",
    ],
    stack: ["React Native", "Expo", "TanStack Query", "TypeScript"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.insynchro.xeye",
    linkLabel: "Play Store",
  },
  {
    name: "Bunny Boba",
    tagline: "Full-Stack Business Website",
    description:
      "A modern, fast, and responsive business platform for Bunny Boba LLP, built to strengthen its digital presence with dynamic content management.",
    highlights: ["Responsive, mobile-first UI development", "Backend API integration & performance optimization"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://www.bunny-boba.com",
    linkLabel: "Visit Site",
  },
  {
    name: "Event-Driven Serverless API",
    tagline: "Serverless Cloud Backend · AWS",
    description:
      "A serverless REST API on AWS Lambda and API Gateway, eliminating server management with automatic demand-based scaling.",
    highlights: ["Reduced operational overhead by ~60% vs. traditional server-based APIs"],
    stack: ["AWS Lambda", "API Gateway", "Node.js", "Serverless"],
  },
  {
    name: "Real Estate Marketplace",
    tagline: "MERN-Stack Property Platform",
    description:
      "A complete property marketplace with authentication, listings, image uploads, and advanced filtering, built with a scalable architecture.",
    highlights: ["Secure authentication & full CRUD operations", "Image upload pipeline with advanced search"],
    stack: ["MongoDB", "Express", "React", "Node.js"],
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
