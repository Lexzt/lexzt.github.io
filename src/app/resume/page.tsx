"use client";

import Link from "next/link";

const EXPERIENCE = [
  {
    role: "Engineering Lead",
    team: "Cards / Spend Adoption",
    company: "Wise",
    period: "Oct 2023 → Present",
    location: "Singapore",
    bullets: [
      "Lead engineering for Wise's card adoption and early customer experience domain — card ordering, availability, fulfilment, manufacturing integrations, back-office tooling, alerting, monitoring, and incident management",
      "Own PCI-sensitive card systems including encryption and decryption flows for sensitive card data, supporting multiple yearly compliance audit cycles",
      "Shaped a scalable approach for operating card systems in India's data-regulated environment, balancing local regulatory requirements with Wise's global platform model",
      "Support Wise card launches and expansion across markets including the US, India, Brazil, Malaysia, and others — both consumer and business segments",
      "Support engineers leading Auto Top-up and Bill Split initiatives — providing technical direction, unblocking delivery, navigating stakeholders, and growing engineers",
      "Coach engineers through RFC writing, technical ownership, stakeholder alignment, global approvals, and promotion growth",
    ],
  },
  {
    role: "Software Engineer II",
    team: "Spend Issuance",
    company: "Wise",
    period: "Oct 2022 → Oct 2023",
    location: "Singapore",
    bullets: [
      "Core engineer on card issuance infrastructure — systems that provision and lifecycle-manage debit cards across Wise's global card programmes",
      "Built issuance flows for new market expansions, handling regulatory requirements and card network integrations (Mastercard, Visa)",
      "Reduced card issuance failure rates by diagnosing and fixing edge cases across the card lifecycle pipeline",
      "Operated high-throughput backend services with on-call rotation, incident response, and post-mortem culture",
    ],
  },
  {
    role: "Software Engineer",
    team: "Spend Issuance",
    company: "Wise",
    period: "Jun 2021 → Oct 2022",
    location: "Singapore",
    bullets: [
      "Early engineer on Spend Issuance — helped build and scale the card issuance platform from greenfield to production",
      "Shipped core card lifecycle features: issuance, activation, pin management, and card controls used by millions of customers",
      "Worked across the stack (Kotlin, Java, Terraform) with exposure to payment processing, card network APIs, and infrastructure-as-code",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "GovTech Singapore",
    period: "May 2020 → Jul 2020",
    location: "Singapore",
    bullets: [
      "Built a Dockerized form submission platform handling 100+ form types for government digital services",
      "Integrated Camunda workflow engine for automated form verification and routing",
      "Wrote test suites and CI pipelines with git hooks — shipped to production during the internship",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Edison Software",
    period: "Jan 2019 → Dec 2019",
    location: "San Jose, California",
    bullets: [
      "Built a full-stack calendar plugin integrating with 8 email providers (Google, Microsoft, CalDAV) used by 100k+ users",
      "Designed a recurrence engine handling timezones, daylight savings, and offline SQLite storage",
      "Mentored fellow interns on React, Redux, and engineering best practices",
    ],
  },
];

const SKILL_GROUPS = [
  {
    label: "Backend & Systems",
    skills: ["Kotlin", "Java", "Python", "PostgreSQL", "Kafka", "gRPC", "REST APIs", "Microservices"],
  },
  {
    label: "Frontend & Web",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Infrastructure & DevOps",
    skills: ["Docker", "Terraform", "CI/CD", "GitHub Actions", "AWS", "Cloud Run", "Tailscale"],
  },
  {
    label: "Domain Expertise",
    skills: ["Cards & Payments", "Compliance & Regulatory", "Product Strategy", "Team Leadership", "IBKR API"],
  },
  {
    label: "AI & Automation",
    skills: ["OpenClaw / AI Agents", "LLM Integration", "Browser Automation", "Gmail/Calendar APIs"],
  },
];

export default function ResumePage() {
  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; font-size: 11pt; }
          body::before { display: none !important; }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          .print-container { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
          section { break-inside: avoid; }
          h1, h2, h3 { color: black !important; }
          .text-gradient {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: black !important;
          }
          .text-\\[var\\(--color-text-muted\\)\\],
          .text-\\[var\\(--color-text\\)\\] { color: #333 !important; }
          .font-mono { font-family: 'Courier New', monospace !important; }
          .border-\\[var\\(--color-border\\)\\] { border-color: #ccc !important; }
          .bg-\\[var\\(--color-bg-card\\)\\],
          .bg-\\[var\\(--color-bg-elevated\\)\\] { background: #f9f9f9 !important; }
        }
      `}</style>

      <div className="min-h-screen py-8 print-container">
        <div className="max-w-3xl mx-auto px-6 print-container">
          {/* Back link + Print button */}
          <div className="flex justify-between items-center mb-8 no-print">
            <Link
              href="/"
              className="font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              ← back to home
            </Link>
            <button
              onClick={() => typeof window !== "undefined" && window.print()}
              className="px-4 py-2 border border-[var(--color-border)] text-[var(--color-text-muted)] font-mono text-xs rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
            >
              Print / Save PDF
            </button>
          </div>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Keith <span className="text-gradient">Fong</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-4">
              Engineering Lead — Singapore
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-[var(--color-text-muted)]">
              <a href="mailto:keithfong@outlook.com" className="hover:text-[var(--color-accent)] transition-colors">
                keithfong@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/fong-keith/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                linkedin.com/in/fong-keith
              </a>
              <a
                href="https://github.com/Lexzt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                github.com/Lexzt
              </a>
            </div>
          </header>

          {/* Divider */}
          <hr className="border-[var(--color-border)] mb-8" />

          {/* Summary */}
          <section className="mb-8">
            <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-3">
              // summary
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Engineering Lead at Wise with ~5 years in cards, payments, and fintech infrastructure.
              I build and scale systems that move money across borders — from card issuance and PCI-compliant
              data flows to market expansion in regulated environments. Passionate about AI automation,
              developer tooling, and creating environments where engineers closest to the systems have a real
              voice in technical direction.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-6">
              // experience
            </h2>
            <div className="space-y-8">
              {EXPERIENCE.map((exp) => (
                <div key={`${exp.company}-${exp.period}`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="text-lg font-semibold">
                      {exp.role}
                      {exp.team && (
                        <span className="text-[var(--color-text-muted)] font-normal"> — {exp.team}</span>
                      )}
                    </h3>
                    <p className="font-mono text-xs text-[var(--color-text-muted)] whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-[var(--color-accent-secondary)] mb-3">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm text-[var(--color-text-muted)] pl-4 border-l-2 border-[var(--color-border)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-4">
              // skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label} className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg">
                  <p className="font-mono text-xs text-[var(--color-accent-secondary)] mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded font-mono text-[var(--color-text-muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-4">
              // education
            </h2>
            <div>
              <h3 className="text-lg font-semibold">Nanyang Technological University</h3>
              <p className="font-mono text-xs text-[var(--color-accent-secondary)] mb-1">
                Computer Science · Singapore
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Bachelor of Science in Computer Science
              </p>
            </div>
          </section>

          {/* Footer */}
          <hr className="border-[var(--color-border)] mb-4" />
          <p className="font-mono text-xs text-[var(--color-text-muted)] text-center no-print">
            Last updated May 2026
          </p>
        </div>
      </div>
    </>
  );
}
