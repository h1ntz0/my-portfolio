const learning = [
  "Playwright",
  "API automation",
  "CI/CD",
  "Advanced SQL",
  "Test architecture",
];

export function CurrentlyLearning() {
  return (
    <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="mono text-sm text-accent sm:pt-2">07</span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Currently learning
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          I&apos;m always trying to get better at the parts of testing that are
          hardest to do well.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {learning.map((item) => (
            <span
              key={item}
              className="mono rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
