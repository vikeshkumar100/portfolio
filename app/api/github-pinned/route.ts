import { NextResponse } from "next/server"

const GITHUB_USERNAME = "Vikeshkumar100"

// Fetch pinned repos via GitHub GraphQL API
async function fetchPinnedRepos(token: string) {
  const query = `{
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            primaryLanguage { name }
            stargazerCount
            forkCount
          }
        }
      }
    }
  }`

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 },
  })

  if (!res.ok) return null

  const json = await res.json()
  const nodes = json?.data?.user?.pinnedItems?.nodes
  if (!Array.isArray(nodes) || nodes.length === 0) return null
  return nodes
}

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN

    if (!token) {
      return NextResponse.json(
        { error: "GitHub token missing" },
        { status: 500 }
      )
    }

    const pinned = await fetchPinnedRepos(token)
    if (!pinned) {
      return NextResponse.json([], { status: 200 })
    }

    return NextResponse.json(pinned)
  } catch {
    return NextResponse.json([], { status: 500 })
  }
}
