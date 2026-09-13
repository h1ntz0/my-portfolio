import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function PageHeader({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-border/60", className)}>
      <Container className="py-14 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="title">{title}</h1>
          {description && (
            <p className="lead mt-5 text-muted-foreground">{description}</p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
