import { methodology, riskItems } from "@/content/testing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function MethodologyAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {methodology.map((step, i) => (
        <AccordionItem key={step.title} value={step.title}>
          <AccordionTrigger>
            <span className="mono mr-3 text-xs text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-semibold">{step.title}</span>
            <span className="ml-2 text-xs font-normal text-muted-foreground">
              {step.description}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="pl-9 text-sm text-muted-foreground">{step.detail}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const riskTone: Record<string, "destructive" | "warning" | "muted"> = {
  HIGH: "destructive",
  MEDIUM: "warning",
  LOW: "muted",
};

export function RiskMatrix() {
  return (
    <Card>
      <CardContent className="p-5">
        <p className="mono text-[11px] uppercase tracking-wide text-accent">
          Risk Thinking
        </p>
        <ul className="mt-3 space-y-3">
          {riskItems.map((risk) => (
            <li
              key={risk.area}
              className="flex flex-wrap items-center gap-2 rounded-md border bg-muted/40 px-3 py-2.5"
            >
              <span className="flex-1 text-sm font-medium">{risk.area}</span>
              <span className="mono text-[11px] uppercase text-muted-foreground">
                Risk
              </span>
              <Badge variant={riskTone[risk.risk]}>{risk.risk}</Badge>
              <span className="mono text-[11px] uppercase text-muted-foreground">
                Impact
              </span>
              <Badge variant={riskTone[risk.impact]}>{risk.impact}</Badge>
              <span className="mono text-[11px] uppercase text-muted-foreground">
                Priority
              </span>
              <Badge variant="outline">{risk.priority}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
