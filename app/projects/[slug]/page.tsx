import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { buildMetadata } from "@/lib/site";
import { projects, getProject } from "@/content/projects";
import type { Project } from "@/lib/types";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricGrid } from "@/components/qa/metric-grid";
import { AutomationFlow } from "@/components/qa/automation-flow";
import { SeverityBadge, PriorityBadge, StatusBadge } from "@/components/qa/status-badge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.name,
    description: project.summary,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <Container className="py-12 sm:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <Badge key={c} variant="outline">
              {c}
            </Badge>
          ))}
          <Badge variant="accent">{project.status}</Badge>
          {project.demo && <Badge variant="muted">Sample Project Metrics</Badge>}
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{project.description}</p>
      </header>

      {/* 01 Overview */}
      <Overview project={project} />

      {/* 02 Application Under Test */}
      <CaseSection number="02" title="Application Under Test">
        <p className="text-muted-foreground">{project.summary}</p>
      </CaseSection>

      {/* 03 Testing Objective */}
      <CaseSection number="03" title="Testing Objective">
        <p className="text-muted-foreground">{project.description}</p>
      </CaseSection>

      {/* 04 Scope */}
      <CaseSection number="04" title="Scope">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mono text-[11px] uppercase tracking-wide text-success">
              In Scope
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
              {project.inScope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mono text-[11px] uppercase tracking-wide text-destructive">
              Out of Scope
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
              {project.outOfScope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </CaseSection>

      {/* 05 Test Strategy */}
      <CaseSection number="05" title="Test Strategy">
        <ul className="space-y-2 text-sm">
          {project.strategy.map((s) => (
            <li key={s} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span className="text-muted-foreground">{s}</span>
            </li>
          ))}
        </ul>
      </CaseSection>

      {/* 06 Test Scenarios */}
      <CaseSection number="06" title="Test Scenarios">
        <ol className="grid list-decimal gap-2 pl-5 text-sm sm:grid-cols-2">
          {project.scenarios.map((s) => (
            <li key={s} className="text-muted-foreground">
              {s}
            </li>
          ))}
        </ol>
      </CaseSection>

      {/* 07 Test Cases */}
      <CaseSection number="07" title="Test Cases">
        <div className="overflow-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Test cases for {project.name}</caption>
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="mono px-4 py-3 text-xs uppercase text-muted-foreground">ID</th>
                  <th className="px-4 py-3 text-xs uppercase text-muted-foreground">Scenario</th>
                  <th className="hidden px-4 py-3 text-xs uppercase text-muted-foreground md:table-cell">Expected</th>
                  <th className="px-4 py-3 text-xs uppercase text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {project.testCases.map((tc) => (
                  <tr key={tc.id} className="hover:bg-muted/40">
                    <td className="mono px-4 py-3 text-xs text-accent">{tc.id}</td>
                    <td className="px-4 py-3">{tc.title}</td>
                    <td className="hidden px-4 py-3 text-xs text-muted-foreground md:table-cell">
                      {tc.expected ?? "—"}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={tc.status} dot />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CaseSection>

      {/* 08 Defects */}
      <CaseSection number="08" title="Defects Found">
        <div className="overflow-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Defects found in {project.name}</caption>
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="mono px-4 py-3 text-xs uppercase text-muted-foreground">ID</th>
                  <th className="px-4 py-3 text-xs uppercase text-muted-foreground">Severity</th>
                  <th className="px-4 py-3 text-xs uppercase text-muted-foreground">Module</th>
                  <th className="px-4 py-3 text-xs uppercase text-muted-foreground">Summary</th>
                  <th className="px-4 py-3 text-xs uppercase text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {project.bugs.map((bug) => (
                  <tr key={bug.id} className="hover:bg-muted/40">
                    <td className="mono px-4 py-3 text-xs text-destructive">{bug.id}</td>
                    <td className="px-4 py-3"><SeverityBadge severity={bug.severity} /></td>
                    <td className="px-4 py-3 text-xs">{bug.module}</td>
                    <td className="px-4 py-3">{bug.summary}</td>
                    <td className="px-4 py-3"><PriorityBadge priority={bug.priority} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CaseSection>

      {/* 10 Automation */}
      {project.automationArchitecture.length > 0 && (
        <CaseSection number="10" title="Automation">
          <div className="grid gap-6 lg:grid-cols-2">
            <AutomationFlow layers={project.automationArchitecture} />
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Automated {project.metrics.automated} of {project.metrics.testCases} test
                cases ({project.metrics.automationCoverage}% coverage), focused on the
                highest-risk flows.
              </p>
              <div className="rounded-lg border bg-muted/40 p-4">
                <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">Tools</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CaseSection>
      )}

      {/* 11 Result */}
      <CaseSection number="11" title="Result">
        <MetricGrid
          columns={3}
          metrics={[
            { label: "Test Cases", value: String(project.metrics.testCases) },
            { label: "Automated", value: String(project.metrics.automated) },
            { label: "Defects Found", value: String(project.metrics.defects), tone: "destructive" },
            { label: "Critical Defects", value: String(project.metrics.criticalDefects), tone: "destructive" },
            { label: "Pass Rate", value: `${project.metrics.passRate}%`, tone: "success" },
            { label: "Automation Coverage", value: `${project.metrics.automationCoverage}%`, tone: "accent" },
          ]}
        />
      </CaseSection>

      {/* 12 Lessons Learned */}
      <CaseSection number="12" title="Lessons Learned">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {project.lessons.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </CaseSection>

      {/* 13 Improvements */}
      <CaseSection number="13" title="Improvements">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {project.improvements.map((imp) => (
            <li key={imp}>{imp}</li>
          ))}
        </ul>
      </CaseSection>
    </Container>
  );
}

function Overview({ project }: { project: Project }) {
  const rows: { label: string; value: string }[] = [
    { label: "Project", value: project.name },
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    { label: "Environment", value: project.environment },
  ];
  return (
    <CaseSection number="01" title="Overview">
      <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.label} className="bg-card p-4">
            <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
              {r.label}
            </p>
            <p className="mt-1 text-sm font-medium">{r.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">Tools</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tools.map((t) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
      </div>
    </CaseSection>
  );
}

function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 border-t pt-10">
      <div className="flex items-baseline gap-3">
        <span className="mono text-sm font-semibold text-accent">{number}</span>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      <Separator className="my-5" />
      {children}
    </section>
  );
}
