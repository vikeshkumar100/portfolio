"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Download, ExternalLink, FileText } from "lucide-react"

const resumeFileId = "1lmD4OsKDWLEnFjPBrn7Av51zgLkS0_8s"
const resumePreviewUrl = `https://drive.google.com/file/d/${resumeFileId}/preview`
const resumeViewUrl = `https://drive.google.com/file/d/${resumeFileId}/view?usp=sharing`
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Resume
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Download my resume
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A summary of my skills, projects, and education.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-border bg-card/50 p-4">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-background">
              <iframe
                title="Resume preview"
                src={resumePreviewUrl}
                className="h-full w-full"
                allow="autoplay"
              />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground">
                  Vikesh Kumar - Resume
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Full Stack Developer | Backend-Focused | MCA at VIT
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={resumeViewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on Google Drive
                  </a>
                  <a
                    href={resumeDownloadUrl}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
