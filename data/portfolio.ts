export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface MetricHighlight {
  title: string;
  value: string;
  description: string;
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  subheadline: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Suvam Naskar",
  subheadline: "Founding Engineer & Cloud Architect | Scalable Systems & Full-Stack Development",
  tagline: "Architecting robust backend systems, cloud pipelines, and scalable web/mobile applications.",
  email: "suvamnaskar.dev@gmail.com",
  github: "https://github.com/SuvamNaskar",
  linkedin: "https://linkedin.com/in/suvamnaskar",
  resumeUrl: "/documents/resume.pdf"
};

export const metricHighlights: MetricHighlight[] = [
  {
    title: "Full-Stack & Cloud Focus",
    value: "Production Scale",
    description: "Designing end-to-end applications with secure APIs, optimized databases, and microservices architecture.",
    iconName: "Cpu"
  },
  {
    title: "Startup Architecture",
    value: "Founding Lead",
    description: "Driving engineering decisions, containerizing infrastructures, and building CI/CD deployment pipelines from scratch.",
    iconName: "Layers"
  },
  {
    title: "Self-Hosted Infra & Homelab",
    value: "Secure & Connected",
    description: "Managing private cloud overlays, overlay networks (Tailscale), CUPS servers, and reverse proxies.",
    iconName: "Terminal"
  }
];

export const experiences: Experience[] = [
  {
    role: "Founding Engineer / CIO / Technical Lead",
    company: "Industrial Logistics & Automation Startup",
    period: "Jan 2024 - Present",
    description: [
      "Architect backend services, manage cloud infrastructure, and direct high-availability technical strategy.",
      "Led transition of legacy Django monolith to containerized Docker microservices, reducing cloud costs by 40%.",
      "Supervised a small team of engineers building React Native mobile applications and Next.js internal portals.",
      "Designed automated GitHub Actions CI/CD pipelines, accelerating delivery speed while maintaining 99.9% uptime."
    ],
    techStack: ["AWS", "Django", "React Native", "Next.js", "Docker", "PostgreSQL", "Tailscale", "GitHub Actions"]
  },
  {
    role: "Software Developer",
    company: "Tech Automation Solutions",
    period: "Aug 2022 - Dec 2023",
    description: [
      "Developed full-stack web platforms and native mobile applications with Django and React / React Native.",
      "Built a computer vision inventory counter module integrated directly with edge camera feeds.",
      "Optimized PostgreSQL query speeds via indexes and query rewriting, reducing database bottlenecks by 50%.",
      "Implemented secure OAuth integrations and payment processing pipelines for core applications."
    ],
    techStack: ["Django", "React", "PostgreSQL", "Docker", "AWS Rekognition", "Linux", "OpenCV"]
  }
];

export const projects: Project[] = [
  {
    title: "Computer Vision Inventory Counter",
    description: "Real-time object detection and inventory counting pipeline using edge cameras and cloud models.",
    problem: "Manual inventory auditing in warehouse environments was slow, error-prone, and failed to integrate with legacy ERP systems, causing stock discrepancies.",
    solution: "Built a lightweight Python edge client capturing camera frames, performing local filtering, and uploading optimized batches to AWS Rekognition. Results are synced to a PostgreSQL database and a Django/React dashboard with real-time WebSockets.",
    techStack: ["Django", "React", "AWS Rekognition", "PostgreSQL", "OpenCV", "WebSockets", "Docker", "AWS EC2"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar/cv-inventory-counter"
  },
  {
    title: "Cloud-Native Print & Automation Server",
    description: "Secure, self-hosted headless print automation server with instant routing and multi-format conversions.",
    problem: "Distributed warehouse and office nodes needed to send print jobs to thermal and standard printers securely without public IP exposures or complex VPN configurations.",
    solution: "Designed a microservices-based system running in Docker containers connected via a private Tailscale overlay network. A Node.js API orchestrates PDF conversions, manages spooling via CUPS, and reports print status back to a central Django hub.",
    techStack: ["Node.js", "Django", "Docker", "Tailscale", "Linux/CUPS", "Bash", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar/print-automation-server"
  },
  {
    title: "SaaS API Engine",
    description: "High-throughput, distributed API engine with rate-limiting, tenant isolation, and automated webhook delivery.",
    problem: "Third-party developers needed a low-latency, resilient API platform with transparent usage metrics, robust developer logs, and multi-tenant data isolation.",
    solution: "Architected a Go-inspired Django REST backend sitting behind an NGINX reverse proxy with Redis for caching and token-bucket rate limiting. Webhook deliveries are managed via Celery tasks and monitored for failures.",
    techStack: ["Python", "Django", "REST APIs", "Redis", "Celery", "PostgreSQL", "NGINX", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar/saas-api-engine"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend & APIs",
    skills: ["Python", "Django", "Node.js", "REST APIs", "FastAPI", "WebSockets", "Go (basics)"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Linux", "Self-Hosting", "Homelab", "NGINX", "Tailscale"]
  },
  {
    category: "Frontend & Mobile",
    skills: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Git", "GitHub Actions"]
  }
];
