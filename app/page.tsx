import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/content/projects";
import { testCases, bugs, apiEndpoints, testRuns } from "@/content/testing";
import { Hero } from "@/components/home/hero";
import { ModeSwitch } from "@/components/home/mode-switch";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/qa/project-card";
import { MetricGrid } from "@/components/qa/metric-grid";
import { TestCaseExplorer } from "@/components/qa/test-case-explorer";
import { BugExplorer } from "@/components/qa/bug-explorer";
import { ApiShowcase } from "@/components/qa/api-showcase";
import { TestRunCard } from "@/components/qa/test-run-card";
import {
  MethodologyAccordion,
  RiskMatrix,
} from "@/components/sections/methodology";
import { SkillGroups, SkillToProjectHint } from "@/components/sections/skills";
import { ExperienceTimeline } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

const totalMetrics = (() => {
  const tc = testCases.length;
  const automated = projects.reduce((acc, p) => acc + p.metrics.automated, 0);
  const defects = bugs.length;
  const critical = bugs.filter((b) => b.severity === "Critical").length;
  return { tc, automated, defects, critical };
})();

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Viewing mode: recruiter vs QA deep dive */}
      <Section className="py-8 sm:py-10">
        <ModeSwitch />
      </Section>

      {/* Quick credibility metrics */}
      <Section id="metrics" className="py-10 sm:py-12">
        <MetricGrid
          columns={4}
          metrics={[
            { label: "Test Cases", value: String(totalMetrics.tc), detail: "documented across projects", tone: "accent" },
            { label: "Automated", value: String(totalMetrics.automated), detail: "UI + API regression steps" },
            { label: "Defects Found", value: String(totalMetrics.defects), detail: "documented with evidence", tone: "destructive" },
            { label: "Critical Defects", value: String(totalMetrics.critical), detail: "caught before release", tone: "success" },
          ]}
        />
      </Section>

      {/* Featured projects */}
      <Section id="projects">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected QA Work"
            title="Featured Projects"
            description="Evidence-driven case studies covering manual, API, automation, and database testing."
          />
          <Button asChild variant="ghost" className="hidden shrink-0 sm:inline-flex">
            <Link href="/projects">
              All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* QA methodology */}
      <Section id="methodology">
        <SectionHeading
          eyebrow="How I Test"
          title="A repeatable QA methodology"
          description="Understand, plan, design, execute, report, verify, and improve."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <MethodologyAccordion />
          <RiskMatrix />
        </div>
      </Section>

      {/* Testing lab preview */}
      <Section id="testing-lab">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Testing Lab"
            title="Proof of work, in action"
            description="Interactive test cases, bug reports, API validation, and test runs."
          />
          <Button asChild variant="ghost" className="hidden shrink-0 sm:inline-flex">
            <Link href="/testing-lab">
              Open Testing Lab
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 space-y-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Recent Test Cases
            </h3>
            <div className="mt-3">
              <TestCaseExplorer cases={testCases.slice(0, 6)} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Documented Defects
            </h3>
            <div className="mt-3">
              <BugExplorer bugs={bugs.slice(0, 4)} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              API Validation
            </h3>
            <div className="mt-3">
              <ApiShowcase endpoints={apiEndpoints.slice(0, 3)} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Latest Test Runs
            </h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {testRuns.slice(0, 2).map((run) => (
                <TestRunCard key={run.id} run={run} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills tied to evidence"
          description="Grouped by discipline, each with the projects it was used in."
        />
        <div className="mt-8">
          <SkillGroups />
          <SkillToProjectHint />
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Where I&apos;ve tested"
          description="Focus on outcomes and the testing activities behind each role."
        />
        <div className="mt-8">
          <ExperienceTimeline />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <ContactSection />
      </Section>
    </>
  );
}
