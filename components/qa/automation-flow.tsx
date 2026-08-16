import { ChevronDown } from "lucide-react";

export function AutomationFlow({ layers }: { layers: string[] }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div className="border-b bg-muted/50 px-4 py-3">
        <p className="mono text-xs font-semibold uppercase tracking-wider text-accent">
          Automation Architecture
        </p>
      </div>
      <div className="flex flex-col items-center p-6">
        {layers.map((layer, i) => (
          <div key={layer} className="flex flex-col items-center">
            <div className="w-48 rounded-md border bg-muted/40 px-4 py-2.5 text-center text-sm font-medium">
              {layer}
            </div>
            {i < layers.length - 1 && (
              <ChevronDown className="my-1 h-4 w-4 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
