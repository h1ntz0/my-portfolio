import { experience } from "@/content/profile";

export function ExperienceTimeline() {
  return (
    <div className="mt-10 space-y-12">
      {experience.map((item) => (
        <div
          key={`${item.company}-${item.period}`}
          className="grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-10"
        >
          <span className="mono pt-1 text-sm text-accent">{item.period}</span>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
            <p className="text-sm text-muted-foreground">{item.company}</p>

            <ul className="mt-4 space-y-2">
              {item.responsibilities.map((r) => (
                <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
                What I did
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.testingActivities.map((a) => (
                  <span
                    key={a}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {item.impact.length > 0 && (
              <div className="mt-4">
                <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  Impact
                </p>
                <ul className="mt-2 space-y-1.5">
                  {item.impact.map((imp) => (
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
      ))}
    </div>
  );
}
