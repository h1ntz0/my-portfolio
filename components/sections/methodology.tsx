import { practicalWorkflow, testingCompetencies } from "@/content/methodology";
import { CheckCircle2, Check } from "lucide-react";

export function MethodologyAccordion() {
  return (
    <div className="space-y-4">
      {practicalWorkflow.map((step) => (
        <div
          key={step.title}
          className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all hover:border-accent/50"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="mono text-xs font-semibold text-accent uppercase tracking-wider">
              {step.category}
            </span>
          </div>
          <h4 className="mt-1.5 font-semibold text-foreground">{step.title}</h4>
          <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
          <ul className="mt-3 space-y-1.5 border-t border-border/50 pt-3 text-xs text-muted-foreground">
            {step.practicalTasks.map((task) => (
              <li key={task} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function RiskMatrix() {
  return (
    <div className="space-y-4">
      {testingCompetencies.map((comp) => (
        <div
          key={comp.title}
          className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all hover:border-accent/50"
        >
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-semibold text-sm text-foreground">{comp.title}</h4>
            <span className="mono rounded-full bg-accent/10 border border-accent/30 px-2.5 py-0.5 text-[10px] font-medium text-accent">
              {comp.badge}
            </span>
          </div>
          <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
            {comp.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
