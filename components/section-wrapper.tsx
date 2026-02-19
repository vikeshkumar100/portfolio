"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    )

    const el = ref.current
    if (el) {
      observer.observe(el)
    }

    // Fallback: if section is never observed after 2s, force visible
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0",
        className
      )}
    >
      {children}
    </section>
  )
}
