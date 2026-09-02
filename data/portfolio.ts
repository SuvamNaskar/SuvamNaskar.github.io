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
  buttonLabel?: string;
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
  subheadline: "M.Sc. Computer Science Student | UGC NET Qualified (Assistant Professor / LS)",
  tagline: "Postgraduate student at Ramakrishna Mission Vivekananda Centenary College. Bridging core computer science, distributed cloud systems, and embedded IoT computing with an interest in academic teaching and applied systems research.",
  email: "suvamnaskar.dev@gmail.com",
  github: "https://github.com/SuvamNaskar",
  linkedin: "https://linkedin.com/in/suvamnaskar",
  resumeUrl: "/documents/resume.pdf"
};

export const metricHighlights: MetricHighlight[] = [
  {
    title: "National Academic Qualification",
    value: "UGC NET Qualified",
    description: "Qualified the National Eligibility Test (UGC NET) for Assistant Professorship and Lectureship (LS/AP) in Computer Science & Applications.",
    iconName: "GraduationCap"
  },
  {
    title: "Embedded & IoT Research",
    value: "RSTC Publication",
    description: "Conducted research on sensor telemetry and real-time biometric capture; abstract presented and published at the 5th Regional Science & Technology Congress (RSTC), West Bengal.",
    iconName: "Layers"
  },
  {
    title: "Cloud & Systems Engineering",
    value: "AWS Certified",
    description: "Certified Cloud Practitioner with hands-on experience in isolated VPC topologies, infrastructure automation, serverless architecture, and containerized clusters.",
    iconName: "Terminal"
  }
];

export const experiences: Experience[] = [
  {
    role: "Cloud & Backend Systems Engineer",
    company: "Vigilantia Praesidium Pvt. Ltd.",
    period: "Apr 2025 - Jun 2026",
    location: "Baranagar, Kolkata",
    description: [
      "Architected distributed cloud infrastructure using AWS EC2, S3, RDS Aurora, IAM policies, and isolated Virtual Private Clouds (VPC).",
      "Designed backend web services and REST APIs with Python (Django), optimizing relational database indexing and query latency.",
      "Implemented CI/CD pipelines via GitHub Actions and containerized microservices using Docker for reproducible deployment environments."
    ],
    techStack: ["Python", "Django", "AWS VPC", "AWS EC2", "AWS S3", "RDS Aurora", "Docker", "GitHub Actions"],
    certUrl: "/documents/certs/CIO_intern_vppl.png"
  },
  {
    role: "Cloud Systems Engineer",
    company: "atrium pvt. ltd.",
    period: "Jul 2025 - Mar 2026",
    location: "Koramangala, Bangalore",
    description: [
      "Maintained fault-tolerant, multi-region cloud infrastructure for global enterprise services using AWS EC2, Lambda, RDS, and SNS.",
      "Automated cloud deployment scripts and operational pipelines to enforce software verification and infrastructure testing standards."
    ],
    techStack: ["AWS EC2", "AWS Lambda", "AWS RDS", "AWS S3", "AWS SNS", ".NET", "GitHub Actions"]
  },
  {
    role: "IoT Research & Embedded Systems Intern",
    company: "atrium pvt. ltd.",
    period: "Dec 2023 - Jun 2024",
    location: "Koramangala, Bangalore",
    description: [
      "Designed dynamic Wi-Fi communication modules facilitating edge-to-cloud bidirectional communication for real-time telemetry monitoring.",
      "Implemented low-latency Over-The-Air (OTA) microcontroller firmware updates and cloud state synchronization mechanisms."
    ],
    techStack: ["Embedded C/C++", "ESP32", "Arduino", "OTA Updates", "AWS IoT Core", "Wi-Fi Telemetry"],
    certUrl: "/documents/certs/iot-intern-blr.pdf"
  }
];

export const educationList: Education[] = [
  {
    school: "Ramakrishna Mission Vivekananda Centenary College",
    degree: "M.Sc. in Computer Science",
    period: "Aug 2025 - Present",
    grade: "Status: Ongoing"
  },
  {
    school: "Ramakrishna Mission Vivekananda Centenary College",
    degree: "B.Sc. in Computer Science Hons.",
    period: "Jul 2022 - Jun 2025",
    grade: "CGPA: 8.68 / 10.0"
  }
];

export const certificationsList: Certification[] = [
  {
    name: "UGC NET – Assistant Professor / Lectureship",
    issuer: "University Grants Commission (UGC) / NTA",
    date: "Qualified (LS / AP)",
    description: "Qualified the National Eligibility Test (NET) for Assistant Professorship and Lectureship in Computer Science and Applications.",
    verifyUrl: "/documents/certs/ugc-net.png",
    buttonLabel: "View Certificate"
  },
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    date: "Nov 2025",
    description: "Certified knowledge of distributed cloud architecture, network topologies (VPC), IAM security controls, and high-availability systems.",
    verifyUrl: "https://www.credly.com/badges/5b706e6a-51b8-48f0-829a-f97ce26a2381/public_url",
    buttonLabel: "Verify Credential"
  }
];

export const projects: Project[] = [
  {
    title: "Novel Heart Beat Monitor Using Arduino",
    description: "Conducted research on embedded sensor telemetry, analog signal filtering, and real-time biometric data capture using Arduino microcontrollers.",
    problem: "Real-time biometric signal acquisition in resource-constrained environments suffers from sensor drift, analog baseline noise, and high latency during continuous monitoring.",
    solution: "Developed an embedded IoT hardware prototype with calibrated analog signal processing. Research abstract was peer-reviewed, accepted, and presented at the 5th Regional Science & Technology Congress (RSTC), West Bengal under the guidance of Prof. Manas Pal (RKMVCC).",
    techStack: ["Arduino", "Embedded C/C++", "Analog Sensors", "Biometric Telemetry", "Signal Processing", "Circuit Design"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar/arduino-heart-monitor"
  },
  {
    title: "Automated WireGuard VPN Infrastructure Control Panel",
    description: "On-demand network tunnel infrastructure on AWS using serverless execution to dynamically govern host instances and secure routing.",
    problem: "Maintaining persistent cloud VPN gateways incurs continuous server expenses, configuration drift, and complex key rotations across distributed nodes.",
    solution: "Architected a serverless control panel using AWS Lambda and API Gateway that provisions on-demand WireGuard instances. Automated secure endpoint-to-endpoint network tunnels and dynamic DNS routing via Cloudflare APIs.",
    techStack: ["WireGuard", "AWS Lambda", "API Gateway", "Cloudflare API", "Python", "Linux Kernel", "VPC"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar"
  },
  {
    title: "Upasthiti Campus",
    description: "Campus attendance-management Android application using Jetpack Compose and Firebase, verifying attendance with geofenced location validation.",
    problem: "Manual attendance taking in university lecture halls and labs is time-consuming, prone to human error, and vulnerable to proxy attendances.",
    solution: "Engineered a role-based mobile system in Kotlin with Jetpack Compose. Faculty initiate time-delimited, geofenced sessions with local QR codes. Students authenticate and record attendance only when verified within the 25-meter classroom radius.",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase Auth", "Cloud Firestore", "Fused Location", "ZXing", "Gradle DSL"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar/UpasthitiCampus"
  },
  {
    title: "BHKsplit.in",
    description: "Room-first rent and utility allocation application with localized privacy, WFH adjustments, and household chore management.",
    problem: "Splitting shared living expenses and chores among roommates is traditionally contentious due to varying room sizes, private amenities (balconies, attached baths), and WFH utility consumption.",
    solution: "Designed and launched a client-side Next.js web application utilizing an amenity-weighted, room-first mathematical pricing algorithm. Includes offline browser storage and instant Canvas PNG report generation.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Canvas API", "Local Storage"],
    liveUrl: "https://bhksplit.in",
    githubUrl: "https://github.com/SuvamNaskar/BHKsplit"
  },
  {
    title: "Nidhimarg Yuva",
    description: "React Native personal-finance application tailored for university students, featuring student budgeting, semester-fee tracking, and DynamoDB cloud sync.",
    problem: "Commercial budgeting tools fail to address student-specific needs such as recurring semester fee deadlines, pocket-money allowances, and stipend management.",
    solution: "Engineered a dark-themed native React Native application with offline-first local storage, AWS Cognito authentication, Notifee reminder schedules, and DynamoDB single-table cloud synchronization.",
    techStack: ["React Native", "React 19", "AWS Cognito", "AWS DynamoDB", "AsyncStorage", "Notifee", "React Navigation"],
    liveUrl: "#",
    githubUrl: "https://github.com/SuvamNaskar/dhansetu-yuva"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Core Computer Science (Teaching Competencies)",
    skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "System Design & Microservices"]
  },
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "SQL", "JavaScript"]
  },
  {
    category: "Cloud & Systems Engineering",
    skills: ["AWS (VPC, IAM, EC2, Lambda, S3, RDS)", "Docker", "Linux Kernel/Shell Scripting", "CI/CD (GitHub Actions)"]
  },
  {
    category: "Embedded & IoT Hardware",
    skills: ["ESP32", "Arduino", "Raspberry Pi", "Sensor Interfacing", "Edge Computing Telemetry"]
  },
  {
    category: "Web Frameworks & APIs",
    skills: ["Django", "FastAPI", "RESTful Architecture", "MVC/MVT Patterns", "React", "Next.js"]
  },
  {
    category: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "Aurora", "MongoDB", "DynamoDB"]
  }
];
