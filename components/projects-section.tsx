"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Github, ExternalLink, Clock, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

const featuredProjects = [
  {
    title: "PowerKnock",
    subtitle: "IoT Smart Access Control System",
    badge: "In Development",
    problem:
      "Smart access control that goes beyond RFID — requires both a card AND a secret knock pattern.",
    description:
      "Edge devices authenticate with a Node.js backend using HMAC-SHA256 signed requests and timestamp validation to prevent replay attacks.",
    featureGrid: [
      "HMAC-SHA256 Device Authentication",
      "Two-Factor Access Verification",
      "Replay Attack Protection",
      "Real-Time Occupancy Automation",
    ],
    technicalBullets: null,
    tech: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT", "ESP32"],
    tags: [],
    featureTags: null,
    github: "https://github.com/vikeshkumar100/PowerKnock",
    demo: null,
    isLead: true,
  },
  {
    title: "VITChat",
    subtitle: null,
    badge: null,
    problem:
      "Campus communication platform built for VIT students featuring real-time messaging, anonymous random chat pairing, and an AI assistant for common college queries.",
    description: null,
    featureGrid: null,
    technicalBullets: null,
    tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    tags: ["Real-time", "WebSockets", "Full Stack"],
    featureTags: ["VIT-Only Login", "Global Chat", "Random Chat", "AI Chatbot", "No Chat Logs"],
    github: "https://github.com/vikeshkumar100/VITChat_frontend",
    demo: "https://vitchat.vikesh.dev",
    isLead: false,
  },
]

const moreProjects = [
  {
    title: "Vehicle Tracking",
    description: "Live vehicle location tracking with map updates and email alerts.",
    tech: ["React", "Google Maps API", "EmailJS"],
    github: "https://github.com/vikeshkumar100/vehicletracking",
    demo: "https://vehicletracking-vk.vercel.app/",
  },
  {
    title: "Event Management",
    description: "Event registration with Google/email login and dynamic data handling.",
    tech: ["React", "Auth0", "Firebase"],
    github: "https://github.com/vikeshkumar100/eventReg",
    demo: "https://eventreg-vk.vercel.app",
  },
  {
    title: "VITeve",
    description: "College event listing platform for VIT students.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/vikeshkumar100/viteve",
    demo: "https://viteve.vercel.app/",
  },
]

export function ProjectsSection() {
  return (
    <>
      {/* Featured Projects */}
      <SectionWrapper id="projects" className="py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
            // 02 Featured Projects
          </p>
          <h2 className="mt-3 font-mono text-[2.5rem] font-bold tracking-tight text-foreground">
            What I have built
          </h2>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className={cn(
                  "group relative flex flex-col rounded-[10px] border p-6 transition-all duration-200 hover:-translate-y-1",
                  project.isLead
                    ? "border-[rgba(0,212,170,0.35)] bg-[#111111] pt-12 pb-8 shadow-[0_0_20px_rgba(0,212,170,0.08)] hover:border-[rgba(0,212,170,0.5)] hover:shadow-[0_0_30px_rgba(0,212,170,0.15)]"
                    : "border-[#1e1e1e] bg-[#111111] shadow-[0_0_0_1px_#1e1e1e] hover:border-[rgba(0,212,170,0.3)] hover:shadow-lg hover:shadow-primary/5"
                )}
              >
                {project.isLead && (
                  <span className="absolute top-4 left-4 rounded-full border border-[#f59e0b]/50 bg-[#f59e0b]/10 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#f59e0b]">
                    Flagship Project
                  </span>
                )}
                {project.badge && (
                  <span className="absolute top-4 right-4 rounded-full border border-primary/50 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
                    {project.badge}
                  </span>
                )}

                <h3 className="font-mono text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="mt-1 mb-1.5 text-[13px] text-[#9ca3af]">
                    {project.subtitle}
                  </p>
                )}
                <p className="mt-2 text-[13px] leading-[1.7] text-muted-foreground">
                  {project.problem}
                </p>

                {project.description && (
                  <p className="mt-3 text-[13px] leading-[1.7] text-muted-foreground/80">
                    {project.description}
                  </p>
                )}

                {project.featureGrid && (
                  <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                    {project.featureGrid.map((item: string, i: number) => (
                      <p key={i} className="flex items-start gap-2 text-[13px] leading-[1.6] text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </p>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {project.featureTags && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.featureTags.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-0.5 font-mono text-[12px] text-[#aaa]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex items-center gap-3 pt-5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      Coming Soon
                    </span>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 font-mono text-xs font-medium text-primary-foreground transition-colors hover:opacity-90"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  ) : project.badge ? (
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 px-3 py-1.5 font-mono text-xs text-primary/70">
                      In Development
                    </span>
                  ) : null}
                  {project.isLead && (
                    <a
                      href="/blogs/powerknock"
                      className="inline-flex items-center gap-1.5 rounded-md border border-[#00d4aa] px-3 py-1.5 font-mono text-xs font-medium text-[#00d4aa] transition-colors hover:bg-[rgba(0,212,170,0.1)]"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Blog
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* More Projects */}
      <SectionWrapper className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
            // 03 More Projects
          </p>
          <h2 className="mt-3 font-mono text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            More work
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((project) => (
              <div
                key={project.title}
                className="group rounded-[10px] border border-[#1e1e1e] bg-[#111111] p-6 shadow-[0_0_0_1px_#1e1e1e] transition-all duration-200 hover:scale-[1.02] hover:border-[rgba(0,212,170,0.3)] hover:bg-[#111111]"
              >
                <h3 className="font-mono text-sm font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.7] text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
