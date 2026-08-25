import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function Section({
  id,
  className,
  children,
  containerClassName,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
