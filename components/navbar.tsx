"use client"

import { useState, useEffect, useRef } from "react"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const resumeFileId = "1lmD4OsKDWLEnFjPBrn7Av51zgLkS0_8s"
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`

const navLinks = [
  { label: "Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)

      if (currentY > lastScrollY.current && currentY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScrollY.current = currentY

      const sections = navLinks.map((link) => link.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          VK
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 font-mono text-xs font-medium uppercase tracking-wider transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <a
            href={resumeDownloadUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 font-mono text-xs font-medium text-primary transition-all hover:bg-primary/10"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 font-mono text-sm font-medium uppercase tracking-wider transition-colors",
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href={resumeDownloadUrl}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2.5 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/10"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
