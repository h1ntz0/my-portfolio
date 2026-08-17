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
      { name: "Functional Testing", usedIn: ["WISECON · QA Tester", "Ranime"] },
      { name: "Regression Testing", usedIn: ["WISECON · QA Tester"] },
      { name: "Smoke Testing", usedIn: ["WISECON · QA Tester"] },
      { name: "Exploratory Testing", usedIn: ["WISECON · QA Tester"] },
      { name: "End-to-End Testing", usedIn: ["WISECON · QA Tester"] },
      { name: "Test Case Design", usedIn: ["WISECON · QA Tester"] },
      { name: "Bug Documentation", usedIn: ["WISECON · QA Tester"] },
    ],
  },
  {
    title: "Automation",
    skills: [
      { name: "Playwright", description: "Learning and building E2E suites for my projects" },
      { name: "AI Testing Tools", usedIn: ["WISECON · QA Tester"] },
      { name: "Selenium", description: "Foundational automation knowledge" },
    ],
  },
  {
    title: "API",
    skills: [
      { name: "Postman", usedIn: ["Ranime"] },
      { name: "REST API", usedIn: ["Ranime"] },
      { name: "GraphQL", usedIn: ["Ranime"] },
      { name: "JSON", usedIn: ["Ranime"] },
      { name: "HTTP", description: "Methods, status codes, headers" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", usedIn: ["WISECON · Application Support"] },
      { name: "MySQL", usedIn: ["WISECON · Application Support"] },
      { name: "PostgreSQL", usedIn: ["Ranime"] },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "Git", usedIn: ["All GitHub projects"] },
      { name: "GitHub", usedIn: ["All GitHub projects"] },
      { name: "Terminal / CLI", usedIn: ["Todo-cli"] },
    ],
  },
];

// Certifications are intentionally empty until real ones are confirmed.
// The earlier entries (ISTQB, Postman, Playwright) were placeholders and
// have been removed so the site never claims a credential that isn't real.
export const certifications: Certification[] = [];
