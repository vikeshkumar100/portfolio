"use client"

import { Github, Linkedin, Mail, Download, Eye, Code2 } from "lucide-react"

const resumeFileId = "1lmD4OsKDWLEnFjPBrn7Av51zgLkS0_8s"
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`
const resumeViewUrl = `https://drive.google.com/file/d/${resumeFileId}/view`

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-20 pb-16">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1
          className="animate-fade-up font-mono text-4xl font-bold uppercase tracking-wider text-foreground sm:text-5xl lg:text-7xl"
          style={{ animationDelay: "0ms" }}
        >
          Vikesh Kumar
        </h1>

        <p
          className="animate-fade-up mt-6 font-mono text-sm font-medium uppercase tracking-[0.25em] text-primary sm:text-base"
          style={{ animationDelay: "150ms" }}
        >
          Backend-Focused Full Stack Developer
        </p>

        <div
          className="animate-fade-up mt-10 flex items-center justify-center gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="https://github.com/Vikeshkumar100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-5.5 w-5.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vikesh-kumar-vk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="h-5.5 w-5.5" />
          </a>
          <a
            href="https://leetcode.com/u/vikeshkapoor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            <Code2 className="h-5.5 w-5.5" />
          </a>
          <a
            href="mailto:vikeshkapoor100@gmail.com"
            aria-label="Email"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-5.5 w-5.5" />
          </a>
        </div>

        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "450ms" }}
        >
          <a
            href={resumeViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-6 py-3 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/10"
          >
            <Eye className="h-4 w-4" />
            View Resume
          </a>
          <a
            href={resumeDownloadUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-6 py-3 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/10"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <p
          className="animate-fade-up mt-8 whitespace-nowrap font-mono text-xs tracking-wide text-muted-foreground sm:text-sm"
          style={{ animationDelay: "600ms" }}
        >
          <span className="text-primary/70">MCA @ VIT</span>{" "}
          <span className="text-primary/50">·</span>{" "}
          <span className="text-primary/70">CGPA 9.46</span>{" "}
          <span className="text-primary/50">·</span>{" "}
          <span className="text-primary/70">Backend</span>{" "}
          <span className="text-primary/50">·</span>{" "}
          <span className="text-primary/70">Real-Time Apps</span>{" "}
          <span className="text-primary/50">·</span>{" "}
          <span className="text-primary/70">Cloud Learning</span>
        </p>
      </div>
    </section>
  )
}
