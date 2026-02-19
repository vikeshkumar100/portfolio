"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { GraduationCap, Code2, Server, Zap } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "MCA at VIT",
    description: "Master of Computer Applications with a CGPA of 9.46",
  },
  {
    icon: Code2,
    title: "DSA Practice",
    description: "Regular problem-solving with data structures and algorithms",
  },
  {
    icon: Server,
    title: "Backend-Focused",
    description: "Comfortable with Node.js, Express.js, and MongoDB",
  },
  {
    icon: Zap,
    title: "Full Stack Builder",
    description: "Enjoys building complete web applications from frontend to backend",
  },
]

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          About
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Building for the real world
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {"I'm a backend-focused Full Stack Developer currently pursuing MCA at VIT. I enjoy building web applications, learning new technologies, and writing clean, reliable code."}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
