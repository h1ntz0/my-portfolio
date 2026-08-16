import type { TestRun } from "@/lib/types";
import { cn, formatDuration } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export function TestRunCard({ run }: { run: TestRun }) {
  const passRate = Math.round((run.passed / run.total) * 100);
  return (
    <Card className="h-full">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="mono text-sm font-semibold text-accent">#{run.id}</span>
          <span className="mono text-xs text-muted-foreground">{run.project}</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <Stat label="Started" value={run.started} />
          <Stat label="Duration" value={formatDuration(run.durationSec)} />
          <Stat label="Total" value={String(run.total)} />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <Stat label="Passed" value={String(run.passed)} tone="success" />
          <Stat label="Failed" value={String(run.failed)} tone={run.failed > 0 ? "destructive" : undefined} />
          <Stat label="Skipped" value={String(run.skipped)} tone="muted" />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs">
            <span className="mono uppercase tracking-wide text-muted-foreground">Pass Rate</span>
            <span className="mono font-semibold text-success">{passRate}%</span>
          </div>
          <div
            className="mt-1.5 flex h-2 w-full overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={passRate}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Pass rate ${passRate} percent`}
          >
            <div className="h-full bg-success" style={{ width: `${passRate}%` }} />
            <div
              className="h-full bg-destructive"
              style={{ width: `${(run.failed / run.total) * 100}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "success" | "destructive" | "muted";
}) {
  return (
    <div>
      <p
        className={cn(
          "mono text-base font-semibold",
          tone === "success" && "text-success",
          tone === "destructive" && "text-destructive",
          tone === "muted" && "text-muted-foreground"
        )}
      >
        {value}
      </p>
      <p className="mono text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  );
}
