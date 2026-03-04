"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Github, ExternalLink, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const featuredProjects = [
  {
    title: "PowerKnock",
    badge: "In Development",
    problem:
      "Smart access control — RFID + knock pattern verified by backend using HMAC SHA256 authentication.",
    description:
      "Handles device authentication using HMAC-SHA256 signed requests with timestamp validation to prevent replay attacks.",
    technicalBullets: [
      "ESP32 devices authenticate via HMAC-SHA256 signed payloads with timestamp-based replay protection",
      "Node.js backend verifies RFID + knock pattern + cryptographic signature before granting access",
      "Admin dashboard for real-time device management, user enrollment, and access log monitoring",
    ],
    tech: ["ESP32", "Node.js", "Express", "MongoDB", "HMAC SHA256", "JWT", "REST APIs", "React"],
    tags: ["Secure Device Auth", "System Design", "REST API", "Full Stack", "IoT"],
    featureTags: null,
    github: "https://github.com/vikeshkumar100/PowerKnock",
    demo: null,
    isLead: true,
  },
  {
    title: "VITChat",
    badge: null,
    problem:
      "Real-time campus chat platform with global chat, random chat pairing, and AI chatbot.",
    description: null,
    technicalBullets: null,
    tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    tags: ["Real-time", "WebSockets", "Full Stack"],
    featureTags: ["AI Chatbot", "Random Pairing", "Global Chat", "Campus Platform"],
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
                  "group relative flex flex-col rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1",
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
                <p className="mt-2 text-[13px] leading-[1.7] text-muted-foreground">
                  {project.problem}
                </p>

                {project.description && (
                  <p className="mt-3 text-[13px] leading-[1.7] text-muted-foreground/80">
                    {project.description}
                  </p>
                )}

                {project.technicalBullets && (
                  <ul className="mt-3 space-y-2">
                    {project.technicalBullets.map((bullet: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] leading-[1.7] text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
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

                {project.featureTags && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.featureTags.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/50 px-2 py-0.5 font-mono text-[10px] text-[#888]"
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
                className="group rounded-xl border border-[#1e1e1e] bg-[#111111] p-5 shadow-[0_0_0_1px_#1e1e1e] transition-all duration-200 hover:scale-[1.02] hover:border-[rgba(0,212,170,0.3)] hover:bg-[#111111]"
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
