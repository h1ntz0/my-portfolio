"use client";

import * as React from "react";

export interface TypewriterSegment {
  text: string;
  className?: string;
}

/**
 * Types out segments (one per line) character by character, keeping each
 * segment's own color. A blinking cursor follows the last typed character.
 * Honors prefers-reduced-motion by rendering the full text immediately.
 */
export function Typewriter({
  segments,
  speed = 95,
  pause = 2400,
  className,
}: {
  segments: TypewriterSegment[];
  speed?: number;
  pause?: number;
  className?: string;
}) {
  const totalChars = segments.reduce((a, s) => a + s.text.length, 0);
  // Start at full so SSR/static HTML always contains the complete headline.
  const [count, setCount] = React.useState(totalChars);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const red = mq.matches;
    setReduced(red);
    if (red) {
      setCount(totalChars);
      return;
    }
    let interval: number | undefined;
    let timeout: number | undefined;
    const run = () => {
      let i = 0;
      setCount(0);
      interval = window.setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= totalChars) {
          window.clearInterval(interval);
          timeout = window.setTimeout(run, pause);
        }
      }, speed);
    };
    run();
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [totalChars, speed, pause]);

  if (reduced) {
    return (
      <span className={className}>
        {segments.map((seg, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <br />}
            <span className={seg.className}>{seg.text}</span>
          </React.Fragment>
        ))}
      </span>
    );
  }

  // Build visible output; place the cursor right after the last typed char.
  const nodes: React.ReactNode[] = [];
  let budget = count;
  let cursorPlaced = false;

  segments.forEach((seg, idx) => {
    const len = seg.text.length;
    const take = Math.max(0, Math.min(len, budget));
    budget -= len;
    const showCursor = !cursorPlaced && budget <= 0 && count < totalChars;
    if (showCursor) cursorPlaced = true;
    const isDone = count >= totalChars;

    nodes.push(
      <React.Fragment key={idx}>
        {idx > 0 && <br />}
        <span className={seg.className}>
          {seg.text.slice(0, take)}
          {showCursor && <Cursor />}
        </span>
      </React.Fragment>
    );

    // After the last segment, if fully typed, add a persistent blinking cursor.
    if (idx === segments.length - 1 && isDone) {
      nodes.push(<Cursor key="done" persistent />);
    }
  });

  return (
    <span className={className} aria-label={segments.map((s) => s.text).join(" ")}>
      {nodes}
    </span>
  );
}

function Cursor({ persistent = false }: { persistent?: boolean }) {
  return (
    <span
      className={`inline-block w-[0.55ch] select-none text-left ${persistent ? "cursor-blink" : ""}`}
      aria-hidden
      style={{ color: "inherit" }}
    >
      |
    </span>
  );
}
