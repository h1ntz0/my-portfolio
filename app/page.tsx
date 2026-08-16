import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { SelectedWork } from "@/components/home/selected-work";
import { WhatITest } from "@/components/home/what-i-test";
import { QaLabPreview } from "@/components/home/qa-lab-preview";
import { CurrentlyLearning } from "@/components/home/currently-learning";
import { GitHubSection } from "@/components/home/github-section";
import { LocalizedHeading } from "@/components/home/localized-heading";
import { Section } from "@/components/layout/section";
import { ExperienceTimeline } from "@/components/sections/experience";
import { SkillGroups, SkillToProjectHint } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="intro">
        <Intro />
      </Section>

      <Section id="work" className="bg-card">
        <SelectedWork />
      </Section>

      <Section id="what">
        <WhatITest />
      </Section>

      <Section id="lab" className="bg-card">
        <QaLabPreview />
      </Section>

      <Section id="experience">
        <LocalizedHeading numKey="exp_num" titleKey="exp_title" descKey="exp_desc">
          <ExperienceTimeline />
        </LocalizedHeading>
      </Section>

      <Section id="tools" className="bg-card">
        <LocalizedHeading numKey="tools_num" titleKey="tools_title" descKey="tools_desc">
          <SkillGroups />
          <SkillToProjectHint />
        </LocalizedHeading>
      </Section>

      <Section id="github" className="bg-card">
        <GitHubSection />
      </Section>

      <Section id="learning">
        <CurrentlyLearning />
      </Section>

      <Section id="contact" className="bg-card">
        <ContactSection />
      </Section>
    </>
  );
}
