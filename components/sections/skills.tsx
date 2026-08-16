import Link from "next/link";

import { skillGroups } from "@/content/profile";
import { ToolIcon } from "@/components/qa/tool-icon";

// Methodology types render as plain tags; tools/languages render as logo tiles.
const plainTagGroups = new Set(["Testing"]);

export function SkillGroups() {
  return (
    <div className="mt-10 space-y-10">
      {skillGroups.map((group) => {
        const isPlain = plainTagGroups.has(group.title);
        return (
          <div key={group.title}>
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              {group.title}
            </h3>

            {isPlain ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            ) : (
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                  >
                    <ToolIcon name={skill.name} />
                    <div className="min-w-0">
                      <span className="block text-sm font-medium">{skill.name}</span>
                      {skill.usedIn && skill.usedIn.length > 0 && (
                        <span className="block truncate text-[11px] text-muted-foreground">
                          used in {skill.usedIn.join(", ")}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function SkillToProjectHint() {
  return (
    <p className="mt-8 text-sm text-muted-foreground">
      Every skill is tied to real work.{" "}
      <Link href="/projects" className="font-medium text-accent hover:underline">
        Browse the projects →
      </Link>
    </p>
  );
}
