import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { SelectedWork } from "@/components/home/selected-work";
import { WhatITest } from "@/components/home/what-i-test";
import { QaLabPreview } from "@/components/home/qa-lab-preview";
import { CurrentlyLearning } from "@/components/home/currently-learning";
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
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
          <span className="mono text-sm text-accent sm:pt-2">05</span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Experience
            </h2>
            <p className="mt-3 text-muted-foreground">
              Where I&apos;ve built quality so far.
            </p>
            <ExperienceTimeline />
          </div>
        </div>
      </Section>

      <Section id="tools" className="bg-card">
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
          <span className="mono text-sm text-accent sm:pt-2">06</span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Tools I use
            </h2>
            <p className="mt-3 text-muted-foreground">
              No invented percentages. Just the tools and the work they were used in.
            </p>
            <SkillGroups />
            <SkillToProjectHint />
          </div>
        </div>
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
