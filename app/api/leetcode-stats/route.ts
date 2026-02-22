import { NextResponse } from "next/server"

const LEETCODE_USERNAME = "vikeshkapoor"

interface LeetCodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  contestRating: number | null
}

async function fetchLeetCodeStats(): Promise<LeetCodeStats | null> {
  try {
    // Try using alfa-leetcode-api proxy first (more reliable)
    try {
      const proxyRes = await fetch(
        `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`,
        {
          next: { revalidate: 3600 },
          timeout: 5000,
        }
      )

      if (proxyRes.ok) {
        const data = await proxyRes.json()
        console.log("LeetCode stats fetched from proxy API")
        return {
          totalSolved: data.solvedProblem || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          contestRating: data.contributionPoint || null,
        }
      }
    } catch (proxyError) {
      console.warn("Proxy API failed, trying GraphQL:", proxyError)
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
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify({
        query,
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 },
      timeout: 5000,
    })

    if (!res.ok) {
      console.error("LeetCode GraphQL error:", res.status, await res.text())
      return null
    }

    const data = await res.json()

    if (data.errors) {
      console.error("LeetCode GraphQL errors:", data.errors)
      return null
    }

    const matchedUser = data?.data?.matchedUser

    if (!matchedUser) {
      console.error("No matched user found for username:", LEETCODE_USERNAME)
      return null
    }

    const submissions = matchedUser.submitStatsGlobal?.acSubmissionNum || []
    const allSubmission = submissions.find((s: any) => s.difficulty === "All")
    const easySubmission = submissions.find((s: any) => s.difficulty === "Easy")
    const mediumSubmission = submissions.find(
      (s: any) => s.difficulty === "Medium"
    )
    const hardSubmission = submissions.find((s: any) => s.difficulty === "Hard")

    console.log("LeetCode stats fetched from GraphQL")
    return {
      totalSolved: allSubmission?.count || 0,
      easySolved: easySubmission?.count || 0,
      mediumSolved: mediumSubmission?.count || 0,
      hardSolved: hardSubmission?.count || 0,
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
      // Return 200 with null data instead of 500 error
      // This allows the frontend to handle missing data gracefully
      return NextResponse.json(
        {
          totalSolved: 0,
          easySolved: 0,
          mediumSolved: 0,
          hardSolved: 0,
          contestRating: null,
        },
        { status: 200 }
      )
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("LeetCode route error:", error)
    // Return 200 with empty data instead of 500 error
    return NextResponse.json(
      {
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        contestRating: null,
      },
      { status: 200 }
    )
  }
}
