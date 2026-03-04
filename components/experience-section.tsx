"use client"

import { SectionWrapper } from "@/components/section-wrapper"

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-16 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
          // 04 Experience
        </p>
        <h2 className="mt-3 font-mono text-2xl sm:text-[2.5rem] font-bold tracking-tight text-foreground">
          Work
        </h2>

        <div className="mt-10">
            <div className="rounded-xl border border-[#1e1e1e] bg-[#111111] p-4 sm:p-6 shadow-[0_0_0_1px_#1e1e1e] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(0,212,170,0.3)] hover:shadow-lg hover:shadow-primary/5">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-1 sm:gap-2">
              <div>
                <h3 className="font-mono text-sm sm:text-base font-semibold text-foreground">
                  Frontend Developer Intern
                </h3>
                <p className="text-sm font-semibold text-[#00d4aa]">Synchubb</p>
              </div>
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                Sep 2024 – Jan 2025
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-[13px] leading-[1.7] text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                Built scalable, responsive web apps using React.js, Tailwind CSS, and ShadCN for production features.
              </li>
              <li className="flex items-start gap-2 text-[13px] leading-[1.7] text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                Integrated APIs and collaborated with designers and backend developers using Git workflows.
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["React.js", "Tailwind CSS", "ShadCN", "Git", "REST APIs"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
