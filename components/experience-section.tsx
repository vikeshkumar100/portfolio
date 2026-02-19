"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Briefcase } from "lucide-react"

const experience = [
  {
    title: "Frontend Developer",
    org: "Synchub",
    period: "Sep 2024 - Jan 2025",
    bullets: [
      "Built responsive UI components with React and Tailwind CSS",
      "Worked with a team to ship production features",
      "Managed code using Git and GitHub workflows",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Work
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Professional work experience that has shaped how I build software.
        </p>

        <div className="mt-12 space-y-6">
          {experience.map((item) => (
            <div
              key={item.title}
              className="flex gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              <div className="flex-1 rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
