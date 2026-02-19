"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import {
  Network,
  Shield,
  Radio,
  Database,
  Layers,
  Cloud,
  Rocket,
  Terminal,
  GitBranch,
} from "lucide-react"

const capabilities = [
  {
    icon: Network,
    title: "REST API Development",
    points: [
      "Designed and built RESTful APIs with Express.js",
      "Implemented CRUD operations with MongoDB",
      "Structured routes/controllers for clean backend organization",
    ],
  },
  {
    icon: Shield,
    title: "Authentication & Authorization",
    points: [
      "Implemented user authentication using Auth0",
      "Managed login flows and protected routes",
      "Handled user sessions and token-based access",
    ],
  },
  {
    icon: Radio,
    title: "Real-time Communication",
    points: [
      "Built real-time chat features using Socket.IO",
      "Managed event-based messaging between clients",
      "Handled multiple users in global/random chat rooms",
    ],
  },
  {
    icon: Database,
    title: "Database Handling (MongoDB)",
    points: [
      "Designed MongoDB schemas for chat and event systems",
      "Performed CRUD operations efficiently",
      "Used Mongoose models for structured data handling",
    ],
  },
  {
    icon: Layers,
    title: "Backend Structure & Best Practices",
    points: [
      "Modular backend structure (routes, controllers, models)",
      "Environment variable management",
      "Clean API response structure",
    ],
  },
]

const cloudDevOpsCards = [
  {
    icon: Cloud,
    title: "AWS Fundamentals",
    points: [
      "Understanding core AWS services (EC2, S3, IAM basics)",
      "Learning cloud architecture fundamentals",
      "Exploring deployment concepts",
    ],
  },
  {
    icon: Rocket,
    title: "Deployment & Hosting",
    points: [
      "Deploying projects on Vercel",
      "Managing environment variables",
      "Understanding production builds",
    ],
  },
  {
    icon: Terminal,
    title: "Linux & Server Basics",
    points: [
      "Basic Linux commands",
      "File system navigation",
      "Process management fundamentals",
    ],
  },
  {
    icon: GitBranch,
    title: "CI/CD Concepts (Learning)",
    points: [
      "Understanding CI/CD workflows",
      "Exploring automation basics",
      "Learning deployment pipelines conceptually",
    ],
  },
]

export function ArchitectureSection() {
  return (
    <>
      <SectionWrapper id="architecture" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Backend Depth
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I work with on the backend
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Core backend skills I apply when building projects -- from API design
            to real-time features and database management.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="group rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <cap.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {cap.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {cap.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary/70" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper id="cloud-devops" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Cloud & DevOps (Learning & Building)
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cloud & DevOps (Learning & Building)
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            I am currently expanding my backend knowledge into Cloud and DevOps by
            learning AWS fundamentals and deployment practices.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {cloudDevOpsCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <card.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary/70" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Building strong backend foundations while gradually transitioning into
            Cloud & DevOps.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
