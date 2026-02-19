import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { LeetCodeSection } from "@/components/leetcode-section"
import { ProjectsSection } from "@/components/projects-section"
import { GitHubSection } from "@/components/github-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <AboutSection />
      <SkillsSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <LeetCodeSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <ProjectsSection />
      <GitHubSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <ArchitectureSection />
      <ExperienceSection />
      <EducationSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
