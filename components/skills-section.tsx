"use client"

import { SectionWrapper } from "@/components/section-wrapper"

const skillCategories = [
  {
    category: "Languages",
    skills: ["C++", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS", "HTML", "CSS", "ShadCN","Spline"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySql"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Auth0", "EmailJS", "Linux", "Cloudflare"],
  },
]

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Skills
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technologies I work with
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Tools and technologies I use regularly in my projects.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20"
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
