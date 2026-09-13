"use client";

import { site } from "@/lib/site";
import { certifications } from "@/content/profile";
import { useLang } from "@/components/lang-provider";
import { PageHeader } from "@/components/qa/page-header";
import { Section } from "@/components/layout/section";
import { WorkflowSteps, TestingCompetencies } from "@/components/sections/methodology";

const focus: Record<"en" | "id", string[]> = {
  en: [
    "Manual and exploratory testing",
    "Test case design and documentation",
    "API and functional testing",
    "Bug reporting and tracking",
    "Playwright automation",
    "Linux system administration (Debian and Ubuntu)",
  ],
  id: [
    "Pengujian manual dan eksploratori",
    "Perancangan dan dokumentasi test case",
    "Pengujian API dan fungsional",
    "Pelaporan dan pelacakan bug",
    "Otomasi Playwright",
    "Administrasi sistem Linux (Debian dan Ubuntu)",
  ],
};

export function AboutClient() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHeader title={t("about_title")} description={t("about_desc")} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <p className="lead measure text-foreground">{t("about_p1")}</p>
            <p className="body-text measure mt-6 text-muted-foreground">
              {t("about_p2")}
            </p>

            <h2 className="label mt-10 text-accent">{t("about_focus_heading")}</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {(focus[lang] ?? focus.en).map((item) => (
                <li key={item} className="body-text text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-fit">
            <p className="label border-t border-border pt-4 text-muted-foreground">
              {t("about_snapshot")}
            </p>
            <dl>
              <Row label={t("about_role")} value={t("role_full")} />
              <Row label={t("about_location")} value={site.location} />
              <Row label="Email" value={site.email} />
            </dl>
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <h2 className="h2">{t("about_methodology_title")}</h2>
        <p className="lead measure mt-4 text-muted-foreground">
          {t("about_methodology_desc")}
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <WorkflowSteps />
          <TestingCompetencies />
        </div>
      </Section>

      {certifications.length > 0 && (
        <Section>
          <h2 className="h2">{t("about_creds_title")}</h2>
          <p className="lead measure mt-4 text-muted-foreground">
            {t("about_creds_desc")}
          </p>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.name}>
                <h3 className="h3">{cert.name}</h3>
                <p className="label mt-2 text-accent">
                  {cert.issuer} · {cert.year}
                </p>
                <p className="body-text mt-3 text-muted-foreground">
                  {cert.description}
                </p>
                {cert.credential && (
                  <p className="mono mt-3 text-xs text-muted-foreground">
                    {cert.credential}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border py-4">
      <dt className="label text-muted-foreground">{label}</dt>
      <dd className="mt-1.5 text-sm font-medium">{value}</dd>
    </div>
  );
}
