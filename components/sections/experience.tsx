"use client";

import { experience } from "@/content/profile";
import { useLang } from "@/components/lang-provider";

export function ExperienceTimeline() {
  const { lang, t } = useLang();
  const isId = lang === "id";

  return (
    <div className="mt-10 space-y-12">
      {experience.map((item) => {
        const period = isId && item.periodId ? item.periodId : item.period;
        const role = isId && item.roleId ? item.roleId : item.role;
        const responsibilities = isId && item.responsibilitiesId ? item.responsibilitiesId : item.responsibilities;
        const activities = isId && item.testingActivitiesId ? item.testingActivitiesId : item.testingActivities;
        const impact = isId && item.impactId ? item.impactId : item.impact;

        return (
          <div
            key={`${item.company}-${item.period}`}
            className="grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-10"
          >
            <span className="mono pt-1 text-sm text-accent">{period}</span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{role}</h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>

              <ul className="mt-4 space-y-2">
                {responsibilities.map((r) => (
                  <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {t("exp_what_i_did")}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {activities.map((a) => (
                    <span
                      key={a}
                      className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {impact.length > 0 && (
                <div className="mt-4">
                  <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    {t("exp_impact")}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {impact.map((imp) => (
                      <li key={imp} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
