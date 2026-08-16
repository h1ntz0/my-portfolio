import type { MethodologyStep, RiskItem } from "@/lib/types";

export const methodology: MethodologyStep[] = [
  {
    title: "Understand",
    description: "Requirements and acceptance criteria.",
    detail:
      "I read the requirement, clarify the acceptance criteria, and identify the business impact before writing any test.",
  },
  {
    title: "Plan",
    description: "Scope, risk, environment, and priority.",
    detail:
      "I decide what is in scope, what is high-risk, and what environment each scenario needs, so effort goes where defects are likely.",
  },
  {
    title: "Design",
    description: "Scenarios and test cases.",
    detail:
      "I turn the plan into test scenarios and test cases with clear expected results that can be verified.",
  },
  {
    title: "Execute",
    description: "Functional, regression, exploratory, API, or automation.",
    detail:
      "I run the planned tests, plus exploratory checks on the riskiest areas, and record evidence for every result.",
  },
  {
    title: "Report",
    description: "Defects and evidence.",
    detail:
      "I document defects with reproduction steps, expected vs actual, and severity so developers can act quickly.",
  },
  {
    title: "Verify",
    description: "Retest and regression.",
    detail:
      "After a fix, I re-test the defect and run regression to confirm nothing else broke.",
  },
  {
    title: "Improve",
    description: "Evaluate the quality process.",
    detail:
      "I review what slipped through and adjust the strategy, test data, or automation to prevent the same defect next time.",
  },
];

export const riskItems: RiskItem[] = [
  { area: "Payment", risk: "HIGH", impact: "HIGH", priority: "P0" },
  { area: "Authentication", risk: "HIGH", impact: "HIGH", priority: "P0" },
  { area: "Profile", risk: "MEDIUM", impact: "MEDIUM", priority: "P1" },
  { area: "Reporting", risk: "MEDIUM", impact: "MEDIUM", priority: "P1" },
  { area: "Notifications", risk: "LOW", impact: "LOW", priority: "P2" },
];
