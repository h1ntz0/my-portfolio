import Link from "next/link";

import type { SkillGroup } from "@/lib/types";
import { skillGroups } from "@/content/profile";
import { Card, CardContent } from "@/components/ui/card";

export function SkillGroups() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group) => (
        <SkillGroupCard key={group.title} group={group} />
      ))}
    </div>
  );
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <Card className="h-full">
      <CardContent className="p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
          {group.title}
        </h3>
        <ul className="mt-3 space-y-2">
          {group.skills.map((skill) => (
            <li key={skill.name}>
              <span className="text-sm font-medium">{skill.name}</span>
              {skill.description && (
                <p className="text-xs text-muted-foreground">{skill.description}</p>
              )}
              {skill.usedIn && skill.usedIn.length > 0 && (
                <p className="mono mt-0.5 text-[11px] text-muted-foreground">
                  Used in:{" "}
                  {skill.usedIn.map((u, i) => (
                    <span key={u}>
                      {i > 0 && " · "}
                      {u}
                    </span>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function SkillToProjectHint() {
  return (
    <p className="mt-6 text-sm text-muted-foreground">
      Every skill is tied to real work.{" "}
      <Link href="/projects" className="font-medium text-accent hover:underline">
        Browse the projects →
      </Link>
    </p>
  );
}
