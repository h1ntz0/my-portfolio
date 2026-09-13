import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { SelectedWork } from "@/components/home/selected-work";
import { WhatITest } from "@/components/home/what-i-test";
import { GitHubSection } from "@/components/home/github-section";
import { LocalizedHeading } from "@/components/home/localized-heading";
import { Section } from "@/components/layout/section";
import { ExperienceTimeline } from "@/components/sections/experience";
import { SkillGroups, SkillToProjectHint } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";

/**
 * Section order, and the layout family each one uses so no two neighbours read
 * the same: split hero, prose, alternating media, ruled index, timeline,
 * grouped index, ruled index, closing statement.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="how" className="border-t border-border/60">
        <Intro />
      </Section>

      <Section id="work" className="bg-card">
        <SelectedWork />
      </Section>

      <Section id="what" className="border-t border-border/60">
        <WhatITest />
      </Section>

      <Section id="experience" className="py-14 sm:py-20">
        <LocalizedHeading titleKey="exp_title" descKey="exp_desc">
          <ExperienceTimeline />
        </LocalizedHeading>
      </Section>

      <Section id="tools" className="bg-card">
        <LocalizedHeading titleKey="tools_title" descKey="tools_desc">
          <SkillGroups />
          <SkillToProjectHint />
        </LocalizedHeading>
      </Section>

      <Section id="github" className="border-t border-border/60">
        <GitHubSection />
      </Section>

      <Section id="contact" className="bg-card">
        <ContactSection />
      </Section>
    </>
  );
}
