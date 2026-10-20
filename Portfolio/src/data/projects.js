const projects = [
  {
    id: "nexora",
    title: "Nexora",
    subtitle: "Drug Distribution & Regulatory Analytics",
    patent: "Indian Patent Application No. 202641101039 | Published 2026",
    category: "devops",
    year: "2026",
    summary:
      "A pharmaceutical supply chain management web platform with role-based access for wholesalers, retailers, and drug inspectors. Features digital billing, inventory tracking, and automated Jenkins CI/CD with Docker containerization deployed on Amazon EKS using Kubernetes and Ingress. Infrastructure provisioned using Terraform.",
    technologies: [
      "Jenkins",
      "GitHub",
      "Docker",
      "Kubernetes",
      "AWS ECR",
      "AWS EKS",
      "Terraform",
      "React",
      "Node.js",
      "Express.js",
      "Firebase"
    ],
    github: "https://github.com/vikas-ss0407/Nexora_Devops.git",
    live: "https://drugguard-dotf.onrender.com"
  },
  {
    id: "onionguard",
    title: "OnionGuard",
    subtitle: "IoT Automation for Onion Warehouse Monitoring",
    category: "iot",
    year: "2026",
    summary:
      "A real-time storage monitoring system using IoT sensor data from ThingSpeak API with automated exhaust fan control and scheduled alerts. Containerized frontend and backend services using Docker and deployed them on Kubernetes with Minikube, integrated with Prometheus and Grafana for monitoring.",
    technologies: [
      "Jenkins",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Minikube",
      "Prometheus",
      "Grafana",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    github: "https://github.com/vikas-ss0407/OnionGuard_Devops.git",
    live: "https://onionguard.onrender.com"
  },
  {
    id: "emeterseva",
    title: "eMeterSeva",
    subtitle: "AI-Powered Electricity Meter Reading and Billing",
    patent: "Indian Patent Application No. 202641101037 | Published 2026",
    category: "fullstack",
    year: "2025",
    summary:
      "A web application featuring Tesseract OCR-based electricity meter reading extraction from consumer photos, online payment processing, billing history tracking, and administration dashboards for tariff and consumer management.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tesseract OCR",
      "JWT Authentication"
    ],
    github: "https://github.com/vikas-ss0407/SmartEB.git",
    live: "https://emeterseva.onrender.com"
  }
];

export default projects;
