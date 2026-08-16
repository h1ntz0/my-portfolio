import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-border/60 bg-card", className)}>
      <Container className="py-14 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="text-sm text-accent">{eyebrow}</span>
          )}
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
