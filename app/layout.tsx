import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Vikesh Kumar | Backend-Focused Full Stack Developer | VIT MCA",
  description:
    "Vikesh Kumar is a Backend-Focused Full Stack Developer and MCA student at VIT. Skilled in Node.js, Express, MongoDB, real-time systems, and strong problem-solving with DSA practice on LeetCode.",
  keywords: [
    "Vikesh Kumar",
    "Vikesh Kumar VIT",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "MCA student VIT",
    "LeetCode problem solving",
    "MongoDB",
    "Express.js",
    "Real-time applications",
    "Socket.IO",
  ],
  authors: [{ name: "Vikesh Kumar" }],
  creator: "Vikesh Kumar",
  metadataBase: new URL("https://vikesh.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vikesh Kumar | Backend-Focused Full Stack Developer | VIT MCA",
    description:
      "Vikesh Kumar is a Backend-Focused Full Stack Developer and MCA student at VIT. Skilled in Node.js, Express, MongoDB, real-time systems, and strong problem-solving with DSA practice on LeetCode.",
    url: "https://vikesh.dev",
    siteName: "Vikesh Kumar Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikesh Kumar | Backend-Focused Full Stack Developer | VIT MCA",
    description:
      "Vikesh Kumar is a Backend-Focused Full Stack Developer and MCA student at VIT. Skilled in Node.js, Express, MongoDB, real-time systems, and strong problem-solving with DSA practice on LeetCode.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
    apple: "/icon",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vikesh Kumar",
    url: "https://vikesh.dev",
    image: "https://vikesh.dev/opengraph-image",
    sameAs: [
      "https://github.com/Vikeshkumar100",
      "https://www.linkedin.com/in/vikesh-kumar-vk",
      "https://leetcode.com/u/vikeshkapoor/",
    ],
    jobTitle: "Backend-Focused Full Stack Developer",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "VIT",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "VIT",
    },
    description:
      "Backend-Focused Full Stack Developer and MCA student at VIT. Skilled in Node.js, Express, MongoDB, real-time systems, and problem-solving.",
    knowsAbout: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Next.js",
      "Socket.IO",
      "RESTful APIs",
      "Data Structures",
      "Algorithms",
      "Cloud Computing",
      "AWS",
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
