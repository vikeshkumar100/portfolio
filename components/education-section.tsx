"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { GraduationCap } from "lucide-react"

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    org: "VIT",
    period: "2025 - 2027",
    detail: "CGPA: 9.46",
    bullets: [
      "Currently pursuing MCA with focus on backend development and DSA",
      "Building full stack projects alongside coursework",
    ],
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    org: "VIT",
    period: "2022 - 2025",
    detail: "CGPA: 9.20",
    bullets: [
      "Built a strong foundation in programming and web development",
      "Studied data structures, algorithms, and databases",
    ],
  },
  {
    title: "Class 12",
    org: "Kids Camp Public School",
    period: "HP Board",
    detail: "86%",
    bullets: [],
  },
]

export function EducationSection() {
  return (
    <SectionWrapper id="education" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Academics
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Education
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Academic background and qualifications.
        </p>

        <div className="mt-12 space-y-6">
          {education.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>

              <div className="flex-1 rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                      {item.detail}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                </div>
                {item.bullets.length > 0 && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
