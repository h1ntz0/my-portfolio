export function Intro() {
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">01</span>
      <div className="max-w-2xl space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          A little about me
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I&apos;m interested in what happens when software meets real users.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          I enjoy exploring edge cases, breaking flows, checking APIs, querying
          databases, and figuring out why something doesn&apos;t behave the way
          it should. For me, testing is less about a checklist and more about
          curiosity: asking &ldquo;what if?&rdquo; and following the thread until
          I understand the actual cause.
        </p>
      </div>
    </div>
  );
}
