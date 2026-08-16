import Link from "next/link";

import { skillGroups } from "@/content/profile";

export function SkillGroups() {
  return (
    <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-sm font-semibold tracking-tight text-foreground">
            {group.title}
          </h3>
          <ul className="mt-3 space-y-2.5">
            {group.skills.map((skill) => (
              <li key={skill.name} className="text-muted-foreground">
                <span className="text-foreground">{skill.name}</span>
                {skill.usedIn && skill.usedIn.length > 0 && (
                  <span className="text-muted-foreground">
                    {"  ·  used in "}
                    <span className="text-accent">{skill.usedIn.join(", ")}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
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
