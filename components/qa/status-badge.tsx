import { Badge } from "@/components/ui/badge";
import type { Severity, TestStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const testStatusVariant: Record<TestStatus, "success" | "destructive" | "warning" | "muted"> = {
  Passed: "success",
  Failed: "destructive",
  Blocked: "warning",
  Skipped: "muted",
  Fixed: "success",
};

const severityVariant: Record<Severity, "destructive" | "warning" | "muted" | "accent"> = {
  Critical: "destructive",
  High: "warning",
  Medium: "accent",
  Low: "muted",
};

const priorityVariant: Record<string, "destructive" | "warning" | "accent" | "muted"> = {
  P0: "destructive",
  P1: "warning",
  P2: "accent",
  P3: "muted",
};

export function StatusBadge({
  status,
  dot = false,
}: {
  status: TestStatus;
  dot?: boolean;
}) {
  return (
    <Badge variant={testStatusVariant[status]}>
      {dot && (
        <span
          className={cn(
            "mr-1.5 inline-block h-1.5 w-1.5 rounded-full",
            status === "Passed" && "bg-success",
            status === "Failed" && "bg-destructive",
            status === "Blocked" && "bg-warning",
            status === "Skipped" && "bg-muted-foreground",
            status === "Fixed" && "bg-success"
          )}
        />
      )}
      {status}
    </Badge>
  );
}

export function SeverityBadge({ severity }: { severity: Severity }) {
  return <Badge variant={severityVariant[severity]}>{severity}</Badge>;
}

export function PriorityBadge({ priority }: { priority: string }) {
  return <Badge variant={priorityVariant[priority]}>{priority}</Badge>;
}

export function MethodBadge({ method }: { method: string }) {
  const variant =
    method === "GET"
      ? "accent"
      : method === "POST" || method === "PUT" || method === "PATCH"
      ? "warning"
      : "destructive";
  return <Badge variant={variant}>{method}</Badge>;
}
