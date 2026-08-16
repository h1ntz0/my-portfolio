import type { Metadata } from "next";
import { Github, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/site";
import { githubProfile } from "@/content/github";
import { testCases, bugs, apiEndpoints, testRuns } from "@/content/testing";
import { projects } from "@/content/projects";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { MetricGrid } from "@/components/qa/metric-grid";
import { TestCaseExplorer } from "@/components/qa/test-case-explorer";
import { BugExplorer } from "@/components/qa/bug-explorer";
import { ApiShowcase } from "@/components/qa/api-showcase";
import { TestRunCard } from "@/components/qa/test-run-card";
import { AutomationFlow } from "@/components/qa/automation-flow";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = buildMetadata({
  title: "Testing Lab",
  description:
    "An interactive dashboard of test cases, bug reports, API validation, automation, and test runs.",
});

export default function TestingLabPage() {
  const totalAutomated = projects.reduce((acc, p) => acc + p.metrics.automated, 0);
  const totalCases = projects.reduce((acc, p) => acc + p.metrics.testCases, 0);
  const critical = bugs.filter((b) => b.severity === "Critical").length;

  return (
    <>
      <PageHeader
        eyebrow="Testing Lab"
        title="A live window into my QA work"
        description="How I test: test cases, defects, API checks, automation, and test runs. The evidence below uses sample projects; the real code lives on my GitHub."
      >
        <a
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline"
        >
          <Github className="h-4 w-4" />
          Source on GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </PageHeader>

      <Section>
        <SectionHeading title="Overview Metrics" />
        <div className="mt-6">
          <MetricGrid
            columns={4}
            metrics={[
              { label: "Test Cases", value: String(testCases.length), detail: "across all projects", tone: "accent" },
              { label: "Automated Tests", value: String(totalAutomated), detail: `of ${totalCases} total` },
              { label: "Defects Found", value: String(bugs.length), detail: "documented with evidence", tone: "destructive" },
              { label: "Critical Defects", value: String(critical), detail: "caught before release", tone: "success" },
            ]}
          />
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading
          eyebrow="Explorer"
          title="Test Case Explorer"
          description="Sample test cases across functional, regression, smoke, negative, and boundary testing."
        />
        <div className="mt-6">
          <TestCaseExplorer cases={testCases} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Explorer"
          title="Bug Report Explorer"
          description="Real documented defects with severity, priority, and reproduction steps."
        />
        <div className="mt-6">
          <BugExplorer bugs={bugs} />
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading
          eyebrow="API Validation"
          title="API Testing Showcase"
          description="Endpoint checks with assertions, status, and response time."
        />
        <div className="mt-6">
          <ApiShowcase endpoints={apiEndpoints} />
        </div>
        <div className="mt-6 overflow-hidden rounded-lg border bg-card">
          <div className="border-b bg-muted/50 px-4 py-3">
            <p className="mono text-xs font-semibold uppercase tracking-wider text-accent">Sample Response</p>
          </div>
          <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-muted-foreground" tabIndex={0}>{`{
  "status": 200,
  "endpoint": "GET /api/products",
  "tests": 12,
  "passed": 12,
  "response_time_ms": 142
}`}</pre>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Automation"
          title="Automation Showcase"
          description="A layered, maintainable test architecture that runs in CI."
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <AutomationFlow
            layers={[
              "Tests",
              "Page Objects",
              "Fixtures",
              "Assertions",
              "HTML Report",
              "CI Pipeline",
            ]}
          />
          <div className="space-y-4">
            <Spec label="Framework" value="Playwright" />
            <Spec label="Language" value="TypeScript / JavaScript" />
            <Spec label="Coverage" value="UI + API" />
            <Spec label="Execution" value="Local + CI (GitHub Actions)" />
            <Spec label="Report" value="HTML + trace, pass/fail per run" />
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading
          eyebrow="Executions"
          title="Test Run Dashboard"
          description="Recent test executions with informative progress bars."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testRuns.map((run) => (
            <TestRunCard key={run.id} run={run} />
          ))}
        </div>
      </Section>

      <Separator className="m-0" />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-4 py-3">
      <span className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
