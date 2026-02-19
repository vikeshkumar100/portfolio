"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Vitchat",
    subtitle: "Real-time Chat Application",
    description:
      "Users connect to chat rooms via Socket.IO. The server handles message broadcasting, random user pairing, and an AI chatbot endpoint. Messages flow in real time without page reloads.",
    tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    features: [
      "Global and private chat rooms",
      "Random user matching",
      "AI chatbot integration",
      "Live message delivery via WebSockets",
    ],
    github: "https://github.com/vikeshkumar100/VITChat_frontend",
    demo: "https://vitchat.vikesh.dev",
  },
  {
    title: "Event Management System",
    subtitle: "Full Stack Event Platform",
    description:
      "Users sign in with Google or email through Auth0. Events are stored in Firebase and rendered dynamically. Authenticated users can create, edit, and delete their own events.",
    tech: ["React", "Auth0", "Firebase", "Vercel"],
    features: [
      "Auth0-based Google and email login",
      "Create, edit, and delete events",
      "Firebase for real-time data storage",
      "Deployed on Vercel",
    ],
    github: "https://github.com/vikeshkumar100/eventReg",
    demo: "https://eventreg-vk.vercel.app",
  },
  {
    title: "Vehicle Tracking App",
    subtitle: "Location Monitoring Tool",
    description:
      "Fetches and displays vehicle locations on Google Maps. Users set a geofence and receive automated email alerts via EmailJS when a vehicle moves outside the defined area.",
    tech: ["React", "Google Maps API", "EmailJS", "Vercel"],
    features: [
      "Google Maps with live markers",
      "Geofence-based email alerts",
      "EmailJS for notifications",
      "Responsive map interface",
    ],
    github: "https://github.com/vikeshkumar100/vehicletracking",
    demo: "https://vehicletracking-vk.vercel.app/",
  },
]

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Projects
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured work
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Projects I have built to learn and apply full stack development,
          real-time communication, and authentication.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-primary">{project.subtitle}</p>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mb-6 space-y-1.5">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:opacity-90"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
