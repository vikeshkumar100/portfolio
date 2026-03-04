"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-8 px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          Designed & built by Vikesh Kumar
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Vikeshkumar100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vikesh-kumar-vk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:vikeshkapoor100@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
