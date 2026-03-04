import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Vikesh Kumar",
  description:
    "Technical write-ups, architecture breakdowns, and development insights from my projects.",
}

const blogs = [
  {
    title: "PowerKnock — IoT Smart Access Control System",
    description:
      "A secure smart access system combining RFID authentication, knock pattern verification, and occupancy detection using ESP32.",
    readTime: "8 min read",
    href: "/blogs/powerknock",
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
          Blog
        </p>
        <h1 className="mt-3 font-mono text-[2.5rem] font-bold tracking-tight text-foreground">
          Engineering Notes &amp; Project Case Studies
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground">
          Technical write-ups, architecture breakdowns, and development insights
          from my projects.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.href}
              href={blog.href}
              className="group flex flex-col rounded-[10px] border border-[#1e1e1e] bg-[#111111] p-5 transition-[border-color] duration-200 ease-in-out hover:border-[rgba(0,212,170,0.25)]"
            >
              <h2 className="font-mono text-base font-bold text-foreground transition-colors group-hover:text-primary">
                {blog.title}
              </h2>
              <p className="mt-2 text-[13px] leading-[1.7] text-muted-foreground">
                {blog.description}
              </p>
              <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                {blog.readTime}
              </p>
              <div className="mt-auto flex items-center gap-1.5 pt-5 font-mono text-xs font-medium text-primary transition-colors">
                Read Article
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
