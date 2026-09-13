"use client";

import { practicalWorkflow, testingCompetencies } from "@/content/methodology";
import { useLang } from "@/components/lang-provider";
import { CheckCircle2, Check } from "lucide-react";

export function WorkflowSteps() {
  const { lang } = useLang();
  const isId = lang === "id";

  return (
    <ol className="border-t border-border">
      {practicalWorkflow.map((step) => (
        <li key={step.title} className="border-b border-border py-5">
          <p className="label text-accent">{step.category}</p>
          <h3 className="h3 mt-2">
            {isId && step.titleId ? step.titleId : step.title}
          </h3>
          <p className="body-text mt-2 text-muted-foreground">
            {isId && step.descriptionId ? step.descriptionId : step.description}
          </p>
          <ul className="mt-3 space-y-1.5">
            {(isId && step.practicalTasksId
              ? step.practicalTasksId
              : step.practicalTasks
            ).map((task) => (
              <li
                key={task}
                className="flex items-start gap-2.5 text-xs text-muted-foreground"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function TestingCompetencies() {
  const { lang } = useLang();
  const isId = lang === "id";

  return (
    <ul className="border-t border-border">
      {testingCompetencies.map((comp) => (
        <li key={comp.title} className="border-b border-border py-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="h3">
              {isId && comp.titleId ? comp.titleId : comp.title}
            </h3>
            <span className="label shrink-0 text-muted-foreground">
              {isId && comp.badgeId ? comp.badgeId : comp.badge}
            </span>
          </div>
          <ul className="mt-3 space-y-2">
            {(isId && comp.pointsId ? comp.pointsId : comp.points).map((pt) => (
              <li
                key={pt}
                className="flex items-start gap-2.5 text-xs text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
