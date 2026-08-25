"use client";

import Link from "next/link";

import { skillGroups } from "@/content/profile";
import { useLang } from "@/components/lang-provider";
import { ToolIcon } from "@/components/qa/tool-icon";

export function SkillGroups() {
  const { t } = useLang();
  return (
    <div className="mt-10 space-y-10">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-sm font-semibold tracking-tight text-foreground">
            {group.title}
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-accent/30 hover:bg-card/80"
              >
                <ToolIcon name={skill.name} />
                <div className="min-w-0">
                  <span className="block text-sm font-medium leading-tight">{skill.name}</span>
                  {skill.usedIn && skill.usedIn.length > 0 ? (
                    <span className="block truncate text-[11px] text-muted-foreground">
                      {t("tools_used")} {skill.usedIn.join(", ")}
                    </span>
                  ) : skill.description ? (
                    <span className="block truncate text-[11px] text-muted-foreground">
                      {skill.description}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SkillToProjectHint() {
  const { t } = useLang();
  return (
    <p className="mt-8 text-sm text-muted-foreground">
      {t("tools_every")}{" "}
      <Link href="/projects" className="font-medium text-accent hover:underline">
        {t("tools_browse")} →
      </Link>
    </p>
  );
}
