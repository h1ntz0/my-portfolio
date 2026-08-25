import type { ExperienceItem, SkillGroup, Certification } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    company: "WISECON (Wisesa Consulting Indonesia)",
    role: "Software Quality Assurance Tester · Internship",
    roleId: "Software Quality Assurance Tester · Magang",
    period: "Jul 2026 · Present",
    periodId: "Jul 2026 · Sekarang",
    responsibilities: [
      "Perform end-to-end software testing on internal applications to ensure quality, reliability, and a smooth user experience.",
      "Design test cases and execute manual and exploratory testing.",
      "Document bugs with clear reproduction steps so developers can act quickly.",
      "Collaborate with cross-functional teams to resolve issues and improve product quality.",
      "Leverage AI-powered tools to streamline regression testing and improve test efficiency.",
    ],
    responsibilitiesId: [
      "Melakukan pengujian software end-to-end pada aplikasi internal untuk memastikan kualitas, keandalan, dan UX yang lancar.",
      "Merancang test case serta mengeksekusi pengujian manual dan exploratory testing.",
      "Mendokumentasikan bug dan defect dengan langkah reproduksi yang jelas agar developer dapat menanganinya dengan cepat.",
      "Berkolaborasi dengan tim lintas fungsi untuk menyelesaikan kendala teknis dan meningkatkan kualitas produk.",
      "Memanfaatkan AI-powered tools untuk mempercepat regression testing dan meningkatkan efisiensi pengujian.",
    ],
    tools: ["Playwright", "Software Testing", "Software Quality", "AI testing tools"],
    impact: [
      "Reduced escaped issues by designing structured test cases for internal applications.",
      "Streamlined regression testing with AI-powered tooling.",
    ],
    impactId: [
      "Mengurangi risiko defect lolos ke production melalui perancangan test case yang terstruktur.",
      "Mengefisienkan siklus regression testing menggunakan integrasi AI-assisted tools.",
    ],
    testingActivities: [
      "End-to-end testing",
      "Test case design",
      "Manual testing",
      "Exploratory testing",
      "Bug documentation",
      "Regression testing",
    ],
    testingActivitiesId: [
      "Pengujian End-to-End",
      "Perancangan Test Case",
      "Pengujian Manual",
      "Exploratory Testing",
      "Dokumentasi Bug",
      "Regression Testing",
    ],
  },
  {
    company: "WISECON (Wisesa Consulting Indonesia)",
    role: "Information Technology Application Support",
    roleId: "Information Technology Application Support",
    period: "Feb 2026 · Jul 2026",
    periodId: "Feb 2026 · Jul 2026",
    responsibilities: [
      "Handle user issues related to Wisecon's internal applications as part of the DCT Support division.",
      "Investigate reported issues, verify fixes, and guide users back to a working state.",
      "Use SQL and communication skills to trace and explain data-related problems.",
    ],
    responsibilitiesId: [
      "Menangani kendala pengguna terkait aplikasi internal Wisecon pada divisi DCT Support.",
      "Menginvestigasi masalah yang dilaporkan, memverifikasi perbaikan bug, dan memastikan aplikasi kembali berjalan normal.",
      "Menggunakan SQL query dan komunikasi efektif untuk melacak anomali data serta menjelaskan solusinya kepada tim.",
    ],
    tools: ["MySQL", "Application support", "Communication"],
    impact: [
      "Resolved daily user issues for Wisecon's internal applications.",
      "Built a working understanding of how real users hit real bugs.",
    ],
    impactId: [
      "Menyelesaikan kendala operasional harian pengguna aplikasi internal Wisecon secara tepat waktu.",
      "Memperdalam pemahaman praktis mengenai pola interaksi user dan bagaimana bug terjadi di lingkungan nyata.",
    ],
    testingActivities: [
      "Application support",
      "Issue investigation",
      "User support",
      "SQL validation",
    ],
    testingActivitiesId: [
      "Application Support",
      "Investigasi Isu",
      "Dukungan Pengguna",
      "Validasi Query SQL",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Testing & QA",
    skills: [
      { name: "Manual & Exploratory Testing", usedIn: ["WISECON · QA Tester", "Ranime"] },
      { name: "Test Case Design & Documentation", usedIn: ["WISECON · QA Tester"] },
      { name: "Bug Reporting & Tracking", usedIn: ["WISECON · QA Tester"] },
      { name: "Functional & Regression Testing", usedIn: ["WISECON · QA Tester"] },
      { name: "AI Powered Test Automation", usedIn: ["WISECON · QA Tester"] },
    ],
  },
  {
    title: "Automation & Tools",
    skills: [
      { name: "Playwright", usedIn: ["WISECON · QA Tester", "my-portfolio"] },
      { name: "AI Testing Tools", usedIn: ["WISECON · QA Tester"] },
      { name: "Postman / REST API", usedIn: ["Ranime", "WISECON"] },
      { name: "SQL Server Management Studio (SSMS)", usedIn: ["WISECON"] },
    ],
  },
  {
    title: "Systems & Cloud",
    skills: [
      { name: "Linux Administration (Debian/Ubuntu)", usedIn: ["Servers & Projects"] },
      { name: "AWS Cloud Essentials", description: "AWS Knowledge: Cloud Essentials Training Badge" },
      { name: "Cybersecurity Analyst Foundation", description: "Cisco Certified Junior Cybersecurity Analyst" },
    ],
  },
  {
    title: "Databases & Dev",
    skills: [
      { name: "SQL & MySQL", usedIn: ["WISECON · Application Support"] },
      { name: "PostgreSQL & GraphQL", usedIn: ["Ranime"] },
      { name: "Git & GitHub", usedIn: ["All Projects"] },
      { name: "Python & Go", usedIn: ["StickerBot", "Todo-cli"] },
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
    description: "Core cloud concepts, AWS services, security, pricing, and shared responsibility model.",
  },
  {
    name: "Cisco Certified Junior Cybersecurity Analyst",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description: "Cybersecurity fundamentals, network defense, threat detection, and security operations.",
  },
];
