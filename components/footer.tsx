"use client"

import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Vikeshkumar100",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vikesh-kumar-vk",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:vikeshkapoor100@gmail.com",
    label: "Email",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {"Designed & built by Vikesh"}
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
