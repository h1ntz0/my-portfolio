import type { ExperienceItem, SkillGroup, Certification } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    company: "WISECON (Wisesa Consulting Indonesia)",
    role: "Software Quality Assurance Tester · Internship",
    period: "Jul 2026 · Present",
    responsibilities: [
      "Perform end-to-end software testing on internal applications to ensure quality, reliability, and a smooth user experience.",
      "Design test cases and execute manual and exploratory testing.",
      "Document bugs with clear reproduction steps so developers can act quickly.",
      "Collaborate with cross-functional teams to resolve issues and improve product quality.",
      "Leverage AI-powered tools to streamline regression testing and improve test efficiency.",
    ],
    tools: ["Software Testing", "Software Quality", "AI testing tools"],
    impact: [
      "Reduced escaped issues by designing structured test cases for internal applications.",
      "Streamlined regression testing with AI-powered tooling.",
    ],
    testingActivities: [
      "End-to-end testing",
      "Test case design",
      "Manual testing",
      "Exploratory testing",
      "Bug documentation",
      "Regression testing",
    ],
  },
  {
    company: "WISECON (Wisesa Consulting Indonesia)",
    role: "Information Technology Application Support",
    period: "Feb 2026 · Jul 2026",
    responsibilities: [
      "Handle user issues related to Wisecon's internal applications as part of the DCT Support division.",
      "Investigate reported issues, verify fixes, and guide users back to a working state.",
      "Use SQL and communication skills to trace and explain data-related problems.",
    ],
    tools: ["MySQL", "Application support", "Communication"],
    impact: [
      "Resolved daily user issues for Wisecon's internal applications.",
      "Built a working understanding of how real users hit real bugs.",
    ],
    testingActivities: [
      "Application support",
      "Issue investigation",
      "User support",
      "SQL validation",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Testing",
    skills: [
      { name: "Functional Testing", usedIn: ["E-Commerce Web Application", "SaaS Billing & Dashboard"] },
      { name: "Regression Testing", usedIn: ["E-Commerce Web Application"] },
      { name: "Smoke Testing", usedIn: ["E-Commerce Web Application"] },
      { name: "Exploratory Testing", usedIn: ["SaaS Billing & Dashboard"] },
      { name: "Integration Testing", usedIn: ["Inventory Management System"] },
      { name: "Negative Testing", usedIn: ["E-Commerce Web Application"] },
      { name: "Boundary Testing", usedIn: ["Inventory Management System"] },
    ],
  },
  {
    title: "Automation",
    skills: [
      { name: "Playwright", usedIn: ["E-Commerce Web Application"] },
      { name: "Cypress", usedIn: ["SaaS Billing & Dashboard"] },
      { name: "Selenium", description: "Foundational automation knowledge" },
    ],
  },
  {
    title: "API",
    skills: [
      { name: "Postman", usedIn: ["E-Commerce Web Application", "Inventory Management System"] },
      { name: "REST API", usedIn: ["Inventory Management System"] },
      { name: "JSON", usedIn: ["Inventory Management System"] },
      { name: "HTTP", description: "Methods, status codes, headers" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", usedIn: ["Inventory Management System"] },
      { name: "MySQL", usedIn: ["Inventory Management System"] },
      { name: "SQL Server", usedIn: ["SaaS Billing & Dashboard"] },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "Git", usedIn: ["E-Commerce Web Application"] },
      { name: "GitHub", usedIn: ["E-Commerce Web Application"] },
      { name: "CI/CD", usedIn: ["E-Commerce Web Application"] },
      { name: "Docker", usedIn: ["E-Commerce Web Application"] },
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "ISTQB Foundation Level (CTFL)",
    issuer: "ISTQB",
    year: "2024",
    credential: "CTFL-2024-000123",
    description:
      "Core testing concepts: test levels, test design techniques, defect management, and test management.",
  },
  {
    name: "Postman API Fundamentals",
    issuer: "Postman",
    year: "2024",
    description: "API requests, collections, environments, and automated API testing.",
  },
  {
    name: "Playwright Testing with JavaScript",
    issuer: "Online Course",
    year: "2024",
    description: "Building maintainable end-to-end test suites with Playwright.",
  },
];
