import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Metric {
  label: string;
  value: string;
  detail: string;
  accent?: boolean;
}

const metrics: Metric[] = [
  {
    label: "Test Suites",
    value: "24",
    detail: "Functional, regression, smoke, and API suites executed.",
  },
  {
    label: "Passed",
    value: "21",
    detail: "Functional test cases successfully executed.",
    accent: true,
  },
  {
    label: "Failed",
    value: "2",
    detail: "Cases failed; defects documented in the bug tracker.",
  },
  {
    label: "Blocked",
    value: "1",
    detail: "Cases blocked by an environment or data dependency.",
  },
  {
    label: "Defects",
    value: "3",
    detail: "Unique defects logged with reproduction steps.",
  },
  {
    label: "Automation",
    value: "87%",
    detail: "Share of the regression suite covered by automation.",
  },
];

export function TestPanel() {
  return (
    <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b px-5 py-3">
        <span className="mono text-xs font-semibold uppercase tracking-wider text-accent">
          Test Run #QA-024
        </span>
        <span className="mono text-[11px] text-muted-foreground">
          E-Commerce Platform
        </span>
      </div>
      <div className="p-5">
        <p className="mono text-xs uppercase tracking-wide text-muted-foreground">
          Application
        </p>
        <p className="mt-1 text-sm font-medium">E-Commerce Platform</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {metrics.map((m) => (
            <Tooltip key={m.label}>
              <TooltipTrigger asChild>
                <button
                  className="rounded-md border bg-muted/40 px-3 py-2.5 text-left transition-colors hover:border-accent/40"
                  aria-label={`${m.label}: ${m.value}. ${m.detail}`}
                >
                  <p
                    className={`mono text-lg font-semibold ${
                      m.accent ? "text-accent" : ""
                    }`}
                  >
                    {m.value}
                  </p>
                  <p className="mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    {m.label}
                  </p>
                </button>
              </TooltipTrigger>
              <TooltipContent>{m.detail}</TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
              Pass Rate
            </span>
            <span className="mono text-xs font-semibold text-success">91%</span>
          </div>
          <div
            className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-label="Pass rate 91 percent"
            aria-valuenow={91}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="h-full w-[91%] rounded-full bg-success" />
          </div>
        </div>
      </div>
    </div>
  );
}
