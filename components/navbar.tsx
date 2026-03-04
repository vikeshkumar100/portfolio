"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Download, Menu, X, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

const resumeFileId = "1lmD4OsKDWLEnFjPBrn7Av51zgLkS0_8s"
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`

const navLinks = [
  { label: "Stack", href: "/#tech" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
]

const sectionIds = ["tech", "projects", "experience", "contact"]

export function Navbar() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const lastScrollY = useRef(0)
  const pathname = usePathname()

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

      if (pathname === "/") {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i])
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 120) {
              setActiveSection(sectionIds[i])
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/blogs") return pathname.startsWith("/blogs")
    if (href.startsWith("/#")) return pathname === "/" && activeSection === href.substring(2)
    return false
  }

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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Left – Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-mono text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            VK
          </Link>
        </div>

        {/* Center – Nav links (hidden on mobile) */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 font-mono text-xs font-medium uppercase tracking-wider transition-colors",
                isActive(link.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right – Blog + Resume (desktop) / Hamburger (mobile) */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/blogs"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-mono text-xs font-medium transition-all",
                pathname.startsWith("/blogs")
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              )}
            >
              <BookOpen className="h-3.5 w-3.5" />
              Blog
            </Link>
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
      </div>

      {mobileOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 font-mono text-sm font-medium uppercase tracking-wider transition-colors",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/blogs"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-md px-3 py-2.5 font-mono text-sm font-medium uppercase tracking-wider transition-colors",
                pathname.startsWith("/blogs")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Blogs
            </Link>
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
