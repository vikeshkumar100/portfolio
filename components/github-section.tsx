"use client"

import { useEffect, useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Star, GitFork, ExternalLink } from "lucide-react"

interface PinnedRepo {
  name: string
  description: string | null
  url: string
  primaryLanguage: { name: string } | null
  stargazerCount: number
  forkCount: number
}


const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  Python: "bg-green-400",
  "C++": "bg-pink-400",
  HTML: "bg-orange-400",
  CSS: "bg-indigo-400",
}

export function GitHubSection() {
  const [repos, setRepos] = useState<PinnedRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPinned() {
      try {
        const res = await fetch("/api/github-pinned")
        if (!res.ok) throw new Error("Failed")
        const data = await res.json()
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data.slice(0, 6))
        }
      } catch {
        // fallback repos already set
      } finally {
        setLoading(false)
      }
    }

    fetchPinned()
  }, [])

  return (
    <SectionWrapper className="py-16 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
              // 07 GitHub
            </p>
            <h2 className="mt-3 font-mono text-2xl sm:text-[2.5rem] font-bold tracking-tight text-foreground">
              Open Source
            </h2>
          </div>
          <a
            href="https://github.com/Vikeshkumar100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-medium text-primary transition-colors hover:underline self-start sm:self-auto"
          >
            Profile
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-xl border border-[#1e1e1e] bg-[#111111] p-6"
                >
                  <div className="mb-3 h-5 w-32 rounded bg-muted" />
                  <div className="mb-2 h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-2/3 rounded bg-muted" />
                </div>
              ))
          ) : repos.length === 0 ? (
            <div className="col-span-full rounded-xl border border-[#1e1e1e] bg-[#111111] p-6 text-sm text-muted-foreground">
              No pinned repositories found. Pin projects on GitHub to show them
              here.
            </div>
          ) : (
            repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-[#1e1e1e] bg-[#111111] p-4 sm:p-6 shadow-[0_0_0_1px_#1e1e1e] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(0,212,170,0.3)] hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-mono text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                      {repo.name}
                    </h3>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <p className="mb-4 line-clamp-2 text-[13px] leading-[1.7] text-muted-foreground">
                    {repo.description || "No description"}
                  </p>

                  <div className="mt-auto flex items-center gap-4 font-mono text-xs text-muted-foreground">
                    {repo.primaryLanguage && (
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            languageColors[repo.primaryLanguage.name] ||
                            "bg-muted-foreground"
                          }`}
                        />
                        {repo.primaryLanguage.name}
                      </div>
                    )}
                    {repo.stargazerCount > 0 && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stargazerCount}
                      </div>
                    )}
                    {repo.forkCount > 0 && (
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forkCount}
                      </div>
                    )}
                  </div>
                </a>
              ))
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/Vikeshkumar100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm font-medium text-primary transition-colors hover:underline"
          >
            View all repositories on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
