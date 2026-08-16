import { Badge } from "@/components/ui/badge";

export function BrowserVisual({
  url,
  title,
  subtitle,
  tags,
  accent,
}: {
  url: string;
  title: string;
  subtitle?: string;
  tags: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={
        "overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-200 " +
        (accent ? "border-accent/40" : "border-border")
      }
    >
      {/* browser chrome */}
      <div className="flex items-center gap-3 border-b bg-muted/40 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        </div>
        <div className="mono flex-1 truncate rounded-md bg-background px-3 py-1 text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>
      {/* body */}
      <div className="p-6">
        <p className="mono text-[11px] uppercase tracking-wide text-muted-foreground">
          {subtitle}
        </p>
        <h4 className="mt-2 text-lg font-semibold tracking-tight">{title}</h4>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
