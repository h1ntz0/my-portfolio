import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function BrowserVisual({
  url,
  title,
  subtitle,
  tags,
  accent,
  image,
  alt,
}: {
  url: string;
  title: string;
  subtitle?: string;
  tags: string[];
  accent?: boolean;
  image?: string;
  alt?: string;
}) {
  return (
    <div
      className={
        "group overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-200 " +
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
      {/* screenshot preview or text body */}
      {image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/20">
          <Image
            src={image}
            alt={alt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            priority={accent}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
}
