export interface WorkflowStep {
  title: string;
  category: string;
  description: string;
  practicalTasks: string[];
}

export const practicalWorkflow: WorkflowStep[] = [
  {
    title: "Requirement & Acceptance Criteria Analysis",
    category: "Step 01",
    description:
      "Review user stories and features, clarifying expected behavior before drafting tests.",
    practicalTasks: [
      "Understand happy path and negative boundary conditions",
      "Identify high-risk workflows (auth, data mutation, forms)",
      "Clarify ambiguous acceptance criteria with team",
    ],
  },
  {
    title: "Test Case & Scenario Design",
    category: "Step 02",
    description:
      "Draft structured, repeatable manual test cases with clear expected results.",
    practicalTasks: [
      "Write step-by-step reproduction steps and expected outcomes",
      "Prepare realistic test data and edge cases",
      "Map test cases into functional and regression suites",
    ],
  },
  {
    title: "Manual, API & Exploratory Execution",
    category: "Step 03",
    description:
      "Execute test cases and conduct unscripted exploratory testing across browsers and devices.",
    practicalTasks: [
      "Validate web UI responsiveness and form field constraints",
      "Perform REST API testing using Postman (payloads, status codes, headers)",
      "Query SQL databases (MySQL/PostgreSQL) to verify data integrity",
    ],
  },
  {
    title: "Bug Documentation & Defect Tracking",
    category: "Step 04",
    description:
      "Log detailed defect tickets with clear severity, steps to reproduce, and evidence.",
    practicalTasks: [
      "Document actual vs expected behavior with screenshots/logs",
      "Assign severity and priority (Critical, Major, Minor)",
      "Provide developers with exact payloads and network trace details",
    ],
  },
  {
    title: "Bug Verification & Regression Testing",
    category: "Step 05",
    description:
      "Retest resolved defects and execute regression test suites to safeguard unaffected areas.",
    practicalTasks: [
      "Verify bug fixes across staging environments",
      "Run regression suites manually or via Playwright automated tests",
      "Provide sign-off for release readiness",
    ],
  },
];

export const testingCompetencies = [
  {
    title: "Manual & Functional Testing",
    badge: "Core",
    points: [
      "Executing end-to-end user workflows",
      "Exploratory testing for edge-case defects",
      "Form validation and negative input boundary checks",
      "Cross-browser and responsive layout inspection",
    ],
  },
  {
    title: "API Testing & Validation",
    badge: "Hands-on",
    points: [
      "REST API endpoint validation with Postman",
      "Status code verification (200, 201, 400, 401, 404, 500)",
      "JSON response schema and field type checks",
      "Authentication token and header verification",
    ],
  },
  {
    title: "Automation Testing (Playwright)",
    badge: "Automation",
    points: [
      "Building E2E browser test suites with TypeScript",
      "Automating critical user flows and form submissions",
      "Automated regression checks to prevent escaped defects",
      "CI/CD and local headless test execution",
    ],
  },
  {
    title: "Database & Backend Validation",
    badge: "Investigation",
    points: [
      "Querying MySQL & PostgreSQL with SQL",
      "Verifying data mutations (INSERT, UPDATE, DELETE)",
      "Investigating data anomalies reported by application support",
      "Checking referential integrity and null constraints",
    ],
  },
];
