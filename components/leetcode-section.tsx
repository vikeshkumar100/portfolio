"use client"

import { useEffect, useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Code2, Trophy, Target, ExternalLink } from "lucide-react"

interface LeetCodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  ranking: number | null
  contestRating: number | null
}

const fallbackStats: LeetCodeStats = {
  totalSolved: 0,
  easySolved: 0,
  mediumSolved: 0,
  hardSolved: 0,
  ranking: null,
  contestRating: null,
}

export function LeetCodeSection() {
  const [stats, setStats] = useState<LeetCodeStats>(fallbackStats)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/leetcode-stats")
        if (!res.ok) throw new Error("Failed")
        const data = await res.json()
        setStats(data)
      } catch {
        // Use fallback stats
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <SectionWrapper id="leetcode" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Problem Solving & DSA
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          LeetCode Progress
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Consistent problem-solving practice with strong foundation in Data
          Structures & Algorithms.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Solved */}
          <div className="rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20">
            <div className="mb-3 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Total Solved
              </h3>
            </div>
            {loading ? (
              <div className="h-8 w-16 animate-pulse rounded bg-muted" />
            ) : (
              <p className="text-3xl font-bold text-foreground">
                {stats.totalSolved}
              </p>
            )}
          </div>

          {/* Difficulty Breakdown */}
          <div className="rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20">
            <div className="mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Breakdown
              </h3>
            </div>
            {loading ? (
              <div className="space-y-2">
                <div className="h-5 w-24 animate-pulse rounded bg-muted" />
                <div className="h-5 w-24 animate-pulse rounded bg-muted" />
                <div className="h-5 w-24 animate-pulse rounded bg-muted" />
              </div>
            ) : (
              <div className="space-y-1 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-green-500">Easy</span>
                  <span className="font-mono font-semibold text-foreground">
                    {stats.easySolved}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-500">Medium</span>
                  <span className="font-mono font-semibold text-foreground">
                    {stats.mediumSolved}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-500">Hard</span>
                  <span className="font-mono font-semibold text-foreground">
                    {stats.hardSolved}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Ranking */}
          {stats.ranking && (
            <div className="rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20">
              <div className="mb-3 flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Ranking
                </h3>
              </div>
              {loading ? (
                <div className="h-8 w-20 animate-pulse rounded bg-muted" />
              ) : (
                <p className="text-3xl font-bold text-foreground">
                  {stats.ranking.toLocaleString()}
                </p>
              )}
            </div>
          )}

          {/* Contest Rating */}
          {stats.contestRating && (
            <div className="rounded-xl border border-border bg-card/50 p-6 transition-colors duration-200 hover:border-primary/20">
              <div className="mb-3 flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Contest Rating
                </h3>
              </div>
              {loading ? (
                <div className="h-8 w-16 animate-pulse rounded bg-muted" />
              ) : (
                <p className="text-3xl font-bold text-foreground">
                  {stats.contestRating}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://leetcode.com/u/vikeshkapoor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline"
          >
            View LeetCode Profile
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
