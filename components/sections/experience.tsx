"use client";

import { experience } from "@/content/profile";
import { useLang } from "@/components/lang-provider";

/**
 * Timeline section. One vertical rule with a mark per role, dates in the
 * gutter. The rule is the only structural device on the page, so it carries
 * the "these happened in order" claim without needing numbers.
 */
export function ExperienceTimeline() {
  const { lang, t } = useLang();
  const isId = lang === "id";

  return (
    <div className="mt-8">
      {experience.map((item) => {
        const period = isId && item.periodId ? item.periodId : item.period;
        const role = isId && item.roleId ? item.roleId : item.role;
        const responsibilities =
          isId && item.responsibilitiesId ? item.responsibilitiesId : item.responsibilities;
        const activities =
          isId && item.testingActivitiesId ? item.testingActivitiesId : item.testingActivities;
        const impact = isId && item.impactId ? item.impactId : item.impact;

        return (
          <div
            key={`${item.company}-${item.period}`}
            className="relative grid gap-4 border-l border-border pb-12 pl-6 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-10 sm:pl-8"
          >
            <span className="absolute -left-[3.5px] top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="label text-muted-foreground sm:pt-0.5">{period}</span>

            <div>
              <h3 className="h3">{role}</h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>

              <ul className="mt-5 space-y-2">
                {responsibilities.map((r) => (
                  <li key={r} className="body-text flex gap-3 text-muted-foreground">
                    <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-border" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <p className="label text-muted-foreground">{t("exp_what_i_did")}</p>
                <p className="mono mt-2 text-xs leading-relaxed">
                  {activities.join("  ·  ")}
                </p>
              </div>

              {impact.length > 0 && (
                <div className="mt-6">
                  <p className="label text-muted-foreground">{t("exp_impact")}</p>
                  <ul className="mt-2 space-y-1.5">
                    {impact.map((imp) => (
                      <li key={imp} className="body-text flex gap-3 text-muted-foreground">
                        <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-border" />
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
