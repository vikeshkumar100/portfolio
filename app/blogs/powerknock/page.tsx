import Link from "next/link"
import { ArrowLeft, Camera } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PowerKnock – IoT Smart Access Control System using ESP32 and RFID",
  description:
    "PowerKnock is a secure IoT access control system using ESP32, RFID authentication, knock pattern verification, and HMAC-SHA256 device authentication with a Node.js backend.",
  keywords: [
    "IoT access control system",
    "ESP32 RFID door lock",
    "smart lock ESP32 project",
    "IoT authentication Node.js",
    "HMAC SHA256 device authentication",
    "RFID smart access system",
  ],
  openGraph: {
    title: "PowerKnock – IoT Smart Access Control System using ESP32 and RFID",
    description:
      "PowerKnock is a secure IoT access control system using ESP32, RFID authentication, knock pattern verification, and HMAC-SHA256 device authentication with a Node.js backend.",
    type: "article",
    url: "https://vikesh.dev/blogs/powerknock",
    siteName: "Vikesh Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerKnock – IoT Smart Access Control System using ESP32 and RFID",
    description:
      "Secure IoT access control using ESP32, RFID, knock patterns, and HMAC-SHA256 device authentication.",
  },
  alternates: {
    canonical: "/blogs/powerknock",
  },
}

const systemFlow = [
  { step: "RFID Card Scanned", detail: "ESP32 reads UID and verifies authorized card" },
  { step: "User performs knock pattern", detail: "ESP32 verifies knock sequence" },
  { step: "Authentication successful", detail: "Both RFID and knock checks passed" },
  { step: "Servo motor unlocks door", detail: "Physical lock mechanism activated" },
  { step: "IR sensors detect entry/exit", detail: "Direction-based people counting" },
  { step: "ESP32 updates occupancy count", detail: "Running total of occupants maintained" },
  { step: "Relay activates if people are present", detail: "Ventilation/power automation" },
]

const components = [
  {
    name: "ESP32",
    description: "Main microcontroller managing authentication logic and sensors.",
  },
  {
    name: "PN532 RFID Reader",
    description: "Reads RFID cards and sends UID data to ESP32.",
  },
  {
    name: "Knock Sensor",
    description: "Detects knock vibrations used as second-factor authentication.",
  },
  {
    name: "IR Sensors",
    description: "Two sensors detect entry and exit direction to track occupancy.",
  },
  {
    name: "Servo Motor",
    description: "Controls the door locking mechanism.",
  },
  {
    name: "Relay Module",
    description: "Activates ventilation or power depending on room occupancy.",
  },
]

const techTags = [
  "ESP32",
  "Arduino",
  "PN532 RFID",
  "Servo Motor",
  "Node.js",
  "Express",
  "MongoDB",
  "HMAC-SHA256",
]

export default function PowerKnockBlog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "PowerKnock – IoT Smart Access Control System",
    author: {
      "@type": "Person",
      name: "Vikesh Kumar",
      url: "https://vikesh.dev",
    },
    datePublished: "2025-03-01",
    dateModified: "2025-03-01",
    url: "https://vikesh.dev/blogs/powerknock",
    description:
      "IoT smart access control system using ESP32, RFID authentication, knock patterns and backend device verification.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vikesh.dev/blogs/powerknock",
    },
  }

  return (
    <main className="min-h-screen px-6 pt-28 pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Blogs
        </Link>

        {/* Header */}
        <h1 className="mt-8 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          PowerKnock — IoT Smart Access Control System
        </h1>
        <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
          A secure smart access system combining RFID authentication, knock
          pattern verification, and occupancy detection using ESP32.
        </p>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          Last updated: March 2025
        </p>

        {/* Overview */}
        <section className="mt-14">
          <h2 className="font-mono text-xl font-bold text-foreground">
            Overview
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            PowerKnock is a smart access control system designed to improve
            security beyond traditional RFID door locks. Instead of relying only
            on a card, the system requires two factors of authentication: an
            authorized RFID card and a specific knock pattern.
          </p>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            An ESP32 microcontroller processes authentication locally and
            controls the door lock mechanism, occupancy tracking, and relay
            automation.
          </p>
        </section>

        {/* System Flow */}
        <section className="mt-14">
          <h2 className="font-mono text-xl font-bold text-foreground">
            System Flow
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {systemFlow.map((item, i) => (
              <div key={i} className="relative flex items-start gap-4">
                {i < systemFlow.length - 1 && (
                  <div className="absolute left-[15px] top-10 h-full w-px bg-primary/20" />
                )}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary">
                  {i + 1}
                </div>
                <div className="rounded-[10px] border border-[#1e1e1e] bg-[#111111] px-5 py-4 flex-1">
                  <p className="font-mono text-sm font-semibold text-foreground">
                    {item.step}
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.7] text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware Components */}
        <section className="mt-14">
          <h2 className="font-mono text-xl font-bold text-foreground">
            Hardware Components
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((comp) => (
              <div
                key={comp.name}
                className="rounded-[10px] border border-[#1e1e1e] bg-[#111111] p-4 transition-[border-color] duration-200 hover:border-[rgba(0,212,170,0.25)]"
              >
                <div className="flex h-40 items-center justify-center rounded-lg border border-[#1e1e1e] bg-[#1a1a1a]">
                  <div className="flex flex-col items-center gap-2 text-[#555]">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">Image coming soon</span>
                  </div>
                </div>
                <h3 className="mt-3 font-mono text-sm font-bold text-foreground">
                  {comp.name}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.7] text-muted-foreground">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Authentication Logic */}
        <section className="mt-14">
          <h2 className="font-mono text-xl font-bold text-foreground">
            Authentication Logic
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            PowerKnock uses a two-factor authentication model:
          </p>
          <ol className="mt-3 list-inside list-decimal space-y-1 text-[15px] leading-[1.7] text-muted-foreground">
            <li>RFID card verification</li>
            <li>Knock pattern verification</li>
          </ol>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            When a valid RFID card is scanned, the system loads the required
            knock pattern associated with that card. The user must perform the
            correct knock sequence within a short time window. Only when both
            checks pass will the ESP32 unlock the door using the servo motor.
          </p>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            This prevents unauthorized access even if a card is cloned — without
            the correct knock sequence.
          </p>
        </section>

        {/* Occupancy Tracking */}
        <section className="mt-14">
          <h2 className="font-mono text-xl font-bold text-foreground">
            Occupancy Tracking
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            Two IR sensors placed at the entrance detect the direction of
            movement.
          </p>
          <div className="mt-4 rounded-[10px] border border-[#1e1e1e] bg-[#111111] px-5 py-4">
            <p className="font-mono text-sm text-foreground">
              IR A → IR B = Entry
            </p>
            <p className="font-mono text-sm text-foreground">
              IR B → IR A = Exit
            </p>
          </div>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            The ESP32 maintains a running count of total occupants inside the
            room. If occupants &gt; 0, relay activates to control ventilation or
            other devices. When room is empty, relay turns off.
          </p>
        </section>

        {/* Embedded Firmware */}
        <section className="mt-14">
          <h2 className="font-mono text-xl font-bold text-foreground">
            Embedded Firmware
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            The ESP32 firmware manages several subsystems:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              "RFID authentication using PN532",
              "Knock detection with calibrated thresholds",
              "Servo motor control for door locking",
              "IR-based people counting",
              "Relay automation based on occupancy",
              "LED feedback for user interaction",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[15px] leading-[1.7] text-muted-foreground"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            Debounce logic and timing checks ensure stable knock detection and
            reliable sensor readings.
          </p>
        </section>

        {/* Future Improvements */}
        <section className="mt-14">
          <h2 className="font-mono text-xl font-bold text-foreground">
            Future Improvements
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            The next version will integrate with a Node.js backend to enable
            device authentication and remote monitoring.
          </p>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
            Planned features:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              "HMAC-SHA256 device authentication",
              "Timestamp validation to prevent replay attacks",
              "MongoDB access logging",
              "Web dashboard for device monitoring",
              "Remote access management",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[15px] leading-[1.7] text-muted-foreground"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Tags (B4) */}
        <div className="mt-14 flex flex-wrap gap-2">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
