import { NextResponse } from "next/server"

const LEETCODE_USERNAME = "vikeshkapoor"

interface LeetCodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  ranking: number | null
  contestRating: number | null
}

async function fetchLeetCodeStats(): Promise<LeetCodeStats | null> {
  try {
    // Try using alfa-leetcode-api proxy first (more reliable)
    const proxyRes = await fetch(
      `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`,
      {
        next: { revalidate: 3600 },
      }
    )

    if (proxyRes.ok) {
      const data = await proxyRes.json()
      return {
        totalSolved: data.solvedProblem || 0,
        easySolved: data.easySolved || 0,
        mediumSolved: data.mediumSolved || 0,
        hardSolved: data.hardSolved || 0,
        ranking: data.ranking || null,
        contestRating: data.contributionPoint || null,
      }
    }

    // Fallback to direct GraphQL query
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
            reputation
          }
        }
      }
    `

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query,
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error("LeetCode API error:", res.status, await res.text())
      return null
    }

    const data = await res.json()

    if (data.errors) {
      console.error("LeetCode GraphQL errors:", data.errors)
      return null
    }

    const matchedUser = data?.data?.matchedUser

    if (!matchedUser) {
      console.error("No matched user found")
      return null
    }

    const submissions = matchedUser.submitStatsGlobal?.acSubmissionNum || []
    const allSubmission = submissions.find((s: any) => s.difficulty === "All")
    const easySubmission = submissions.find((s: any) => s.difficulty === "Easy")
    const mediumSubmission = submissions.find(
      (s: any) => s.difficulty === "Medium"
    )
    const hardSubmission = submissions.find((s: any) => s.difficulty === "Hard")

    return {
      totalSolved: allSubmission?.count || 0,
      easySolved: easySubmission?.count || 0,
      mediumSolved: mediumSubmission?.count || 0,
      hardSolved: hardSubmission?.count || 0,
      ranking: matchedUser.profile?.ranking || null,
      contestRating: matchedUser.profile?.reputation || null,
    }
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error)
    return null
  }
}

export async function GET() {
  try {
    const stats = await fetchLeetCodeStats()

    if (!stats) {
      return NextResponse.json(
        { error: "Failed to fetch LeetCode stats" },
        { status: 500 }
      )
    }

    return NextResponse.json(stats)
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch LeetCode stats" },
      { status: 500 }
    )
  }
}
