"use client";

import Link from "next/link";

import { skillGroups, learningNext, learningNextId } from "@/content/profile";
import { useLang } from "@/components/lang-provider";
import { ToolIcon } from "@/components/qa/tool-icon";

/**
 * Index section. Group name in a fixed gutter, skills on the right, one rule
 * per group. Cards here made four groups of six look like twenty four things.
 */
export function SkillGroups() {
  const { t, lang } = useLang();
  const learning = lang === "id" ? learningNextId : learningNext;

  return (
    <div className="mt-10 border-t border-border" data-reveal>
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="grid gap-4 border-b border-border py-6 sm:grid-cols-[9rem_1fr] sm:gap-10"
        >
          <h3 className="h3 text-muted-foreground">{group.title}</h3>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {group.skills.map((skill) => (
              <li key={skill.name} className="flex min-w-0 items-start gap-3">
                <ToolIcon name={skill.name} />
                <span className="min-w-0">
                  <span className="block text-sm font-medium leading-tight">
                    {skill.name}
                  </span>
                  {skill.usedIn && skill.usedIn.length > 0 ? (
                    <span className="block text-xs leading-snug text-muted-foreground">
                      {t("tools_used")} {skill.usedIn.join(", ")}
                    </span>
                  ) : skill.description ? (
                    <span className="block text-xs leading-snug text-muted-foreground">
                      {skill.description}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="grid gap-4 border-b border-border py-6 sm:grid-cols-[9rem_1fr] sm:gap-10">
        <h3 className="h3 text-muted-foreground">{t("tools_learning")}</h3>
        <p className="mono self-center text-sm">
          {learning.join("  ·  ")}
        </p>
      </div>
    </div>
  );
}

export function SkillToProjectHint() {
  const { t } = useLang();
  return (
    <p className="body-text mt-6 text-muted-foreground">
      <Link href="/projects" className="font-medium text-accent hover:underline">
        {t("tools_browse")} →
      </Link>
    </p>
  );
}
