import { experience } from "@/content/profile";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      {experience.map((item) => (
        <Card key={item.company} className="relative">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-base font-semibold">{item.company}</p>
                <p className="text-sm text-accent">{item.role}</p>
              </div>
              <span className="mono text-xs text-muted-foreground">
                {item.period}
              </span>
            </div>

            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  Responsibilities
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
                  {item.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    Testing Activities
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.testingActivities.map((a) => (
                      <Badge key={a} variant="outline">
                        {a}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    Impact
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
                    {item.impact.map((imp) => (
                      <li key={imp}>{imp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
                Tools:
              </span>
              {item.tools.map((t) => (
                <Badge key={t} variant="muted">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
