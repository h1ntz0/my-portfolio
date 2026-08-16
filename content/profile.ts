import type { ExperienceItem, SkillGroup, Certification } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    company: "Retail Solutions Co.",
    role: "QA / Application Support",
    period: "2024 — Present",
    responsibilities: [
      "Design and execute functional and regression test suites for web applications.",
      "Investigate production issues and validate fixes with re-tests.",
      "Write and run SQL queries to validate data integrity and reporting.",
      "Document defects with clear reproduction steps and evidence.",
    ],
    tools: ["Postman", "MySQL", "Jira", "Git"],
    impact: [
      "Reduced escaped defects by prioritising risk-based regression on checkout flows.",
      "Cut investigation time by producing structured bug reports with logs.",
    ],
    testingActivities: [
      "Application testing",
      "Issue investigation",
      "SQL validation",
      "Defect analysis",
      "Regression testing",
    ],
  },
  {
    company: "Freelance & Personal Projects",
    role: "QA Automation Learner → Automation Engineer",
    period: "2023 — 2024",
    responsibilities: [
      "Built automation suites for demo applications using Playwright.",
      "Learned API testing with Postman and Newman.",
      "Practised defect management and test documentation.",
    ],
    tools: ["Playwright", "Cypress", "Postman", "GitHub Actions", "Docker"],
    impact: [
      "Automated the highest-risk flows of a demo e-commerce storefront.",
      "Established a repeatable CI workflow that runs the suite on every push.",
    ],
    testingActivities: [
      "UI automation",
      "API testing",
      "CI/CD setup",
      "Test documentation",
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
