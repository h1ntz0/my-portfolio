export type TestStatus = "Passed" | "Failed" | "Blocked" | "Skipped" | "Fixed";
export type TestType =
  | "Functional"
  | "Regression"
  | "Smoke"
  | "Negative"
  | "Boundary"
  | "API"
  | "Automation";
export type Severity = "Critical" | "High" | "Medium" | "Low";
export type ProjectCategory =
  | "Manual Testing"
  | "Automation"
  | "API Testing"
  | "Database"
  | "Web Testing";

export interface TestCase {
  id: string;
  title: string;
  type: TestType;
  status: TestStatus;
  project: string;
  priority: "P0" | "P1" | "P2" | "P3";
  expected?: string;
  executionTimeMs?: number;
}

export interface BugReport {
  id: string;
  summary: string;
  severity: Severity;
  priority: "P0" | "P1" | "P2" | "P3";
  status: string;
  environment: string;
  module: string;
  project: string;
  steps: string[];
  expected: string;
  actual: string;
  preconditions?: string;
  rootCause?: string;
  regressionResult?: string;
}

export interface ApiEndpoint {
  id: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  status: number;
  responseTimeMs: number;
  assertions: number;
  passed: number;
  scenario: string;
  project: string;
}

export interface ProjectMetric {
  testCases: number;
  automated: number;
  defects: number;
  criticalDefects: number;
  passRate: number;
  automationCoverage: number;
}

export interface Project {
  slug: string;
  name: string;
  applicationType: string;
  summary: string;
  description: string;
  categories: ProjectCategory[];
  testingScope: string[];
  testingTypes: string[];
  tools: string[];
  metrics: ProjectMetric;
  status: "Complete" | "In Progress" | "Demo";
  demo?: boolean;
  featured?: boolean;
  duration: string;
  role: string;
  environment: string;
  inScope: string[];
  outOfScope: string[];
  strategy: string[];
  scenarios: string[];
  testCases: TestCase[];
  bugs: BugReport[];
  automationArchitecture: string[];
  lessons: string[];
  improvements: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  tools: string[];
  impact: string[];
  testingActivities: string[];
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  usedIn?: string[];
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credential?: string;
  credentialUrl?: string;
  description: string;
}

export interface TestRun {
  id: string;
  started: string;
  durationSec: number;
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  project: string;
}

export interface MethodologyStep {
  title: string;
  description: string;
  detail: string;
}

export interface RiskItem {
  area: string;
  risk: "HIGH" | "MEDIUM" | "LOW";
  impact: "HIGH" | "MEDIUM" | "LOW";
  priority: "P0" | "P1" | "P2";
}
