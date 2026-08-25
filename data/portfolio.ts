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
  location?: string;
  description: string[];
  techStack: string[];
  certUrl?: string;
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

export interface Education {
  school: string;
  degree: string;
  period: string;
  grade: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl?: string;
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
    role: "Cloud & Backend Engineer",
    company: "Vigilantia Praesidium Pvt. Ltd.",
    period: "Apr 2025 - Jun 2026",
    location: "Baranagar, Kolkata",
    description: [
      "Designed and deployed full-stack web platforms using Django and AWS.",
      "Architected cloud infrastructure using AWS EC2, S3, RDS (Aurora), IAM, and VPC.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time and manual errors.",
      "Containerized applications using Docker for consistent and scalable deployments.",
      "Optimized cloud resource usage and reduced operational costs using AWS Cost Optimizer."
    ],
    techStack: ["Django", "AWS EC2", "AWS S3", "AWS RDS (Aurora)", "VPC", "Docker", "GitHub Actions", "AWS Cost Optimizer"],
    certUrl: "/documents/certs/CIO_intern_vppl.png"
  },
  {
    role: "Cloud Engineer",
    company: "atrium pvt. ltd.",
    period: "Jul 2025 - Mar 2026",
    location: "Koramangala, Bangalore",
    description: [
      "Managed and deployed AWS-based infrastructure for international clients (USA, UK & Australia).",
      "Developed and maintained backend systems integrated with cloud services (EC2, Lambda, RDS, S3, SNS).",
      "Collaborated on .NET-based applications and cloud architecture improvements.",
      "Automated workflows and deployments using GitHub Actions.",
      "Ensured high availability and performance of cloud-hosted applications."
    ],
    techStack: ["AWS EC2", "AWS Lambda", "AWS RDS", "AWS S3", "AWS SNS", ".NET", "GitHub Actions"]
  },
  {
    role: "IoT Intern",
    company: "atrium pvt. ltd.",
    period: "Dec 2023 - Jun 2024",
    location: "Koramangala, Bangalore",
    description: [
      "Developed a real-time IoT-based Smart Lift Monitoring System integrated with AWS cloud services.",
      "Designed dynamic WiFi-based communication module for seamless device connectivity.",
      "Implemented OTA updates and real-time synchronization between devices and cloud infrastructure.",
      "Improved system responsiveness and enabled remote monitoring capabilities."
    ],
    techStack: ["IoT", "WiFi Modules", "OTA Updates", "AWS IoT Core", "C/C++", "AWS Integrations"],
    certUrl: "/documents/certs/iot-intern-blr.pdf"
  }
];

export const educationList: Education[] = [
  {
    school: "Ramakrishna Mission Vivekananda Centenary College",
    degree: "M.Sc. in Computer Science",
    period: "Aug 2025 - Present",
    grade: "CGPA: Ongoing"
  },
  {
    school: "Ramakrishna Mission Vivekananda Centenary College",
    degree: "B.Sc. in Computer Science Hons.",
    period: "Jul 2022 - Jun 2025",
    grade: "CGPA: 8.68"
  }
];

export const certificationsList: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    date: "Nov 2025",
    description: "Verified foundational knowledge of cloud concepts, security, technology, and billing within the AWS ecosystem.",
    verifyUrl: "https://www.credly.com/badges/ec761005-cb62-43f1-b873-5a2e9b015112"
  }
];

export const projects: Project[] = [
  {
    title: "Nirdesh Tech-Fest Portal",
    description: "Full-featured registration, event portal, and interactive mystery game platform built for college tech-fests.",
    problem: "College tech-fests need registration structures with automated verification, secure verification check-ins for food vendors, and dynamic online competition stages without operational latency.",
    solution: "Developed a responsive web platform utilizing Hostinger hPanel Git pipelines for deployment. Implemented email signups, real-time ticket scanning for food coupons, and built Rahasyabhedi—an interactive crime-solving web game with leaderboards logging progress dynamically.",
    techStack: ["PHP", "JavaScript", "HTML", "CSS", "XAMPP", "phpMyAdmin", "Hostinger", "Git", "GitHub Pipelines"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar/nirdesh-techfest"
  },
  {
    title: "Django Cloud Task Manager",
    description: "Automated task management application deployed on cloud virtual machines with full CI/CD delivery pipelines.",
    problem: "Deploying and managing simple web applications manually on cloud instances often results in domain configuration issues, slow updates, and security exposure.",
    solution: "Configured a Django application hosted on AWS EC2, mapping static IP records using AWS Elastic IPs. Constructed a pipeline in GitHub Actions that automatically runs unit tests and deploys code pushes to target virtual instances upon commit.",
    techStack: ["Python", "Django", "AWS EC2", "AWS Elastic IP", "GitHub Actions", "HTML", "CSS", "VS Code"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar/django-todo-list"
  },
  {
    title: "Novel Heart Beat Monitor",
    description: "Embedded IoT system calibration and telemetry monitor, with findings published at the 5th RSTC, West Bengal.",
    problem: "Measuring heartbeat intervals reliably in low-power and cost-efficient environments requires precise signal calibration and physical-to-digital sensor sync.",
    solution: "Constructed an IoT heartbeat monitor using Arduino and analogue sensor arrays. Calibrated sensor thresholds to reduce telemetry reading errors, and compiled data sheets that were peer-reviewed and published by the Research Scholar Training Congress.",
    techStack: ["Arduino", "C/C++", "Sensors", "IoT Core", "Data Logging", "Circuit Design"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar/arduino-heart-monitor"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript", "C", "C++", "Java"]
  },
  {
    category: "Backend & Frontend",
    skills: ["Django", "FastAPI", "REST API Development", "React", "Tailwind CSS"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS, Lambda, VPC, IAM)", "Docker", "CI/CD (GitHub Actions)"]
  },
  {
    category: "Databases & Tools",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Git", "GitHub", "Linux"]
  },
  {
    category: "Computer Science Core",
    skills: ["Data Structures & Algorithms", "OOP", "OS", "DBMS", "Computer Networks"]
  },
  {
    category: "System Design & Practices",
    skills: ["Microservices", "API Design", "Scalability", "Security (JWT, OAuth)", "Problem Solving", "Requirement Analysis"]
  }
];
