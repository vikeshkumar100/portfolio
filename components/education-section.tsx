"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "VIT",
    cgpa: "9.46",
    years: "2025 – 2027",
    bullets: [
      "Currently pursuing MCA with focus on backend development and DSA",
      "Building full stack projects and IoT systems alongside coursework",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "VIT",
    cgpa: "9.20",
    years: "2022 – 2025",
    bullets: [
      "Built strong foundation in programming and web development",
      "Studied data structures, algorithms, and databases",
    ],
  },
]

export function EducationSection() {
  return (
    <SectionWrapper id="education" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
          // 05 Academics
        </p>
        <h2 className="mt-3 font-mono text-[2.5rem] font-bold tracking-tight text-foreground">
          Education
        </h2>

        <div className="mt-10 flex flex-col gap-5">
          {education.map((item) => (
            <div
              key={item.degree}
              className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch"
            >
              {/* Icon */}
              <div className="flex shrink-0 items-center justify-center sm:self-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(0,212,170,0.1)]">
                  <GraduationCap className="h-5 w-5 text-[#00d4aa]" />
                </div>
              </div>

              {/* Card */}
              <div className="w-full rounded-[10px] border border-[#1e1e1e] bg-[#111111] px-7 py-6 transition-[border-color] duration-200 ease-in-out hover:border-[rgba(0,212,170,0.25)]">
                {/* Row 1: Degree + CGPA/Year */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-foreground">
                    {item.degree}
                  </h3>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="rounded-md bg-primary/15 px-3 py-1 font-mono text-xs font-medium text-primary">
                      CGPA: {item.cgpa}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.years}
                    </span>
                  </div>
                </div>

                {/* Row 2: Institution */}
                <p className="mt-1 text-sm text-[#888]">
                  {item.institution}
                </p>

                {/* Row 3: Bullets */}
                <ul className="mt-3 flex flex-col gap-2">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#888]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00d4aa]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
