import type { Metadata } from "next";
import { site } from "@/lib/site";
import { experience, skillGroups, certifications } from "@/content/profile";
import { Container } from "@/components/layout/container";
import { DownloadCV } from "@/components/resume/download-cv";

export const metadata: Metadata = {
  title: "CV",
  description: `Download ${site.name}'s QA CV as a PDF.`,
};

export default function ResumePage() {
  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">CV</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Preview, then download it as a PDF with one click.
          </p>
        </div>
        <DownloadCV />
      </div>

      <div className="rounded-lg border bg-card p-6 sm:p-10 print:border-0 print:p-0 print:shadow-none">
        <ResumeDoc />
      </div>
    </Container>
  );
}

function ResumeDoc() {
  return (
    <div className="space-y-8 print:space-y-6">
      <header className="border-b pb-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          {site.name}
        </h2>
        <p className="mt-1 text-sm font-medium text-accent">{site.role}</p>
        <div className="mono mt-2 text-xs text-muted-foreground">
          {site.email} · {site.location} · github.com/benn · linkedin.com/in/benn
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          QA Tester focused on functional testing, API validation, automation,
          and finding defects before users do. Documents every result with
          evidence.
        </p>
      </header>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Experience
        </h3>
        <div className="mt-4 space-y-6">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-semibold">{job.company}</h4>
                <span className="mono text-xs text-muted-foreground">{job.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{job.role}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {job.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Skills
        </h3>
        <div className="mt-4 space-y-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <span className="mono text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {group.title}:{" "}
              </span>
              <span className="text-sm">
                {group.skills.map((s) => s.name).join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Certifications
        </h3>
        <div className="mt-4 space-y-2">
          {certifications.map((cert) => (
            <p key={cert.name} className="text-sm">
              <span className="font-medium">{cert.name}</span>
              <span className="text-muted-foreground">
                {" "}· {cert.issuer}, {cert.year}
              </span>
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
