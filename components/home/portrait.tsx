import Image from "next/image";

export function Portrait({
  alt,
  priority = false,
  className,
}: {
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={
        "relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-sm " +
        (className ?? "")
      }
    >
      <Image
        src="/images/portrait.jpg"
        alt={alt}
        width={986}
        height={1228}
        priority={priority}
        className="h-full w-full object-cover"
      />
      {/* Soft gradient at the bottom so the bright photo blends into the page */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent" />
      {/* Subtle dark-mode veil to tone down a bright/light photo */}
      <div className="absolute inset-0 bg-transparent dark:bg-black/10" aria-hidden />
    </div>
  );
}
