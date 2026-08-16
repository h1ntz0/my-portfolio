import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Metric {
  label: string;
  value: string;
  tone?: "accent" | "success" | "destructive" | "default";
  detail?: string;
}

export function MetricGrid({
  metrics,
  columns = 3,
}: {
  metrics: Metric[];
  columns?: 2 | 3 | 4 | 6;
}) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  }[columns];

  return (
    <div className={cn("grid gap-4", gridCols)}>
      {metrics.map((m) => (
        <Card key={m.label} className="h-full">
          <CardContent className="p-5">
            <p
              className={cn(
                "mono text-2xl font-semibold",
                m.tone === "accent" && "text-accent",
                m.tone === "success" && "text-success",
                m.tone === "destructive" && "text-destructive"
              )}
            >
              {m.value}
            </p>
            <p className="mono mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
              {m.label}
            </p>
            {m.detail && (
              <p className="mt-2 text-xs text-muted-foreground">{m.detail}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
