"use client"

import { SectionWrapper } from "@/components/section-wrapper"

const techStack = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "ShadCN", icon: null },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "REST API Design", icon: null },
      { name: "JWT Auth", icon: null },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Vercel", icon: "devicon-vercel-plain" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Auth0", icon: null },
      { name: "EmailJS", icon: null },
      { name: "Cloudflare DNS", icon: null },
      { name: "Linux CLI", icon: "devicon-linux-plain colored" },
    ],
  },
]

const languages = [
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
]

const learningItems = [
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Nginx", icon: "devicon-nginx-plain colored" },
  { name: "System Design (HLD→LLD)", icon: null },
]

export function SkillsSection() {
  return (
    <SectionWrapper id="tech" className="py-16 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
          // 01 Tech Stack
        </p>
        <h2 className="mt-3 font-mono text-2xl sm:text-[2.5rem] font-bold tracking-tight text-foreground">
          What I build with
        </h2>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((cat) => (
            <div
              key={cat.category}
              className="group rounded-xl border border-[#1e1e1e] bg-[#111111] p-5 sm:p-8 shadow-[0_0_0_1px_#1e1e1e] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(0,212,170,0.3)] hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground/80 transition-all hover:scale-105 hover:border-primary/40 hover:text-primary"
                  >
                    {skill.icon && (
                      <i className={`${skill.icon} text-base`} />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-8 grid gap-4 sm:gap-8 sm:grid-cols-2">
          <div className="group rounded-xl border border-[#1e1e1e] bg-[#111111] p-5 sm:p-8 shadow-[0_0_0_1px_#1e1e1e] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(0,212,170,0.3)] hover:shadow-lg hover:shadow-primary/5">
            <h3 className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground/80 transition-all hover:scale-105 hover:border-primary/40 hover:text-primary"
                >
                  {skill.icon && <i className={`${skill.icon} text-base`} />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="group rounded-xl border border-[#1e1e1e] bg-[#111111] p-5 sm:p-8 shadow-[0_0_0_1px_#1e1e1e] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(0,212,170,0.3)] hover:shadow-lg hover:shadow-primary/5">
            <h3 className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              Learning
            </h3>
            <div className="flex flex-wrap gap-3">
              {learningItems.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground/80 transition-all hover:scale-105 hover:border-primary/40 hover:text-primary"
                >
                  {item.icon && <i className={`${item.icon} text-base`} />}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
