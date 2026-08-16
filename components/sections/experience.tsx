import { experience } from "@/content/profile";

export function ExperienceTimeline() {
  return (
    <div className="mt-10 space-y-12">
      {experience.map((item, i) => {
        const year = item.period.split(" ")[0];
        return (
          <div key={item.company} className="grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-10">
            <span className="mono pt-1 text-sm text-accent">{year}</span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
              <p className="text-sm text-muted-foreground">
                {item.company} · {item.period}
              </p>
              <ul className="mt-4 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
                {item.testingActivities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
              {i < experience.length - 1 && (
                <div className="mt-6 h-px w-10 bg-border" aria-hidden />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
