import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/home/reveal";

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
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}
