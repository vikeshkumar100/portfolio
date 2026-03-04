"use client"

import { useEffect, useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { ExternalLink } from "lucide-react"

interface LeetCodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  contestRating: number | null
}

const fallbackStats: LeetCodeStats = {
  totalSolved: 289,
  easySolved: 145,
  mediumSolved: 133,
  hardSolved: 11,
  contestRating: null,
}

export function LeetCodeSection() {
  const [stats, setStats] = useState<LeetCodeStats>(fallbackStats)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/leetcode-stats")
        const data = await res.json()

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch stats")
        }

        if (data.totalSolved > 0) {
          setStats(data)
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to fetch stats"
        console.error("LeetCode API error:", message)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statItems = [
    { label: "Solved", value: stats.totalSolved, color: "text-foreground" },
    { label: "Easy", value: stats.easySolved, color: "text-green-400" },
    { label: "Medium", value: stats.mediumSolved, color: "text-yellow-400" },
    { label: "Hard", value: stats.hardSolved, color: "text-red-400" },
  ]

  return (
    <SectionWrapper id="leetcode" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
              // 06 Problem Solving
            </p>
            <h2 className="mt-3 font-mono text-[2.5rem] font-bold tracking-tight text-foreground">
              Problem Solving
            </h2>
          </div>
          <a
            href="https://leetcode.com/u/vikeshkapoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-medium text-primary transition-colors hover:underline"
          >
            Profile
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {statItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#1e1e1e] bg-[#111111] p-5 text-center shadow-[0_0_0_1px_#1e1e1e] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(0,212,170,0.3)]"
            >
              {loading ? (
                <div className="mx-auto h-9 w-14 animate-pulse rounded bg-muted" />
              ) : (
                <p className={`font-mono text-3xl font-bold ${item.color}`}>
                  {item.value}
                </p>
              )}
              <p className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
