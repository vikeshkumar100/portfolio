"use client"

import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center px-6 pt-24 pb-16">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for opportunities
        </div>

        <h1 className="text-balance text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <span className="font-medium text-foreground/90">
            Backend-Focused{" "}
          </span>
          <span className="font-bold text-primary/80">
            Full Stack Developer
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Building clean APIs, real-time systems, and production-ready web
          applications -- while expanding into cloud and DevOps practices.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Vikeshkumar100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/vikesh-kumar-vk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            aria-label="Contact"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-12 text-xs font-medium uppercase tracking-widest text-muted-foreground/70">
          {"MCA @ VIT · CGPA 9.46 · Backend · Real-Time Apps · Cloud Learning"}
        </p>
      </div>
    </section>
  )
}
