import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { LeetCodeSection } from "@/components/leetcode-section"
import { GitHubSection } from "@/components/github-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-2">
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-border" />
        <div className="h-1 w-1 rounded-full bg-primary/40" />
        <div className="h-1 w-1 rounded-full bg-primary/60" />
        <div className="h-1 w-1 rounded-full bg-primary/40" />
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ExperienceSection />
      <EducationSection />
      <SectionDivider />
      <LeetCodeSection />
      <SectionDivider />
      <GitHubSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </main>
  )
}
