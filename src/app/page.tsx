import Link from "next/link";

const EXPERIENCE = [
  {
    role: "Engineering Lead",
    team: "Cards / Spend Adoption",
    company: "Wise",
    period: "Oct 2023 → Present",
    location: "Singapore",
    summary: "I lead engineering for Wise's card adoption and early customer experience domain. My team owns systems across card ordering, card availability, manufacturing integrations, PCI-sensitive card data handling, market expansion, and product growth initiatives for both consumer and business customers.",
    subtitle: "This is a high-trust fintech domain where backend reliability, compliance, operational readiness, customer experience, and product growth all have to work together.",
    areas: [
      {
        title: "Global card platform",
        bullets: [
          "I work on the systems that allow Wise to scale cards globally, including card ordering, availability, fulfilment, manufacturing integrations, back-office tooling, alerting, monitoring, and incident management",
        ],
      },
      {
        title: "Regulated card systems",
        bullets: [
          "I own PCI-sensitive card systems, including encryption and decryption flows for sensitive card data, and support multiple yearly compliance audit cycles",
          "For India, I helped shape a scalable approach for operating card systems in a data-regulated environment, balancing local regulatory requirements with Wise's global platform model",
        ],
      },
      {
        title: "Market expansion",
        bullets: [
          "I support Wise card launches and expansion work across markets including the US, India, Brazil, Malaysia, and others",
          "This work supports both consumer and business customers, helping Wise scale card availability across different customer segments and regulatory environments",
        ],
      },
      {
        title: "Product growth",
        bullets: [
          "I supported engineers leading Auto Top-up and Bill Split, two initiatives aimed at improving first customer experience and increasing meaningful card adoption",
          "My role was to provide technical direction, unblock delivery, help navigate stakeholders, and grow the engineers leading the work",
        ],
      },
      {
        title: "Engineering leadership",
        bullets: [
          "I coach engineers through RFC writing, technical ownership, stakeholder alignment, global approvals, and promotion growth",
          "I believe engineers closest to the systems should have a real voice in technical direction, because they often understand best what needs to improve",
          "My role is to create the environment, context, and accountability for engineers to turn that ground-level knowledge into clear proposals, better systems, and successful delivery",
        ],
      },
    ],
    tags: ["Engineering Leadership", "Cards", "PCI Compliance", "Market Expansion", "Product Growth"],
  },
  {
    role: "Software Engineer II",
    team: "Spend Issuance",
    company: "Wise",
    period: "Oct 2022 → Oct 2023",
    location: "Singapore",
    highlights: [
      "Core engineer on card issuance infrastructure — systems that provision and lifecycle-manage debit cards across Wise's global card programmes",
      "Built issuance flows for new market expansions, handling regulatory requirements and card network integrations (Mastercard, Visa)",
      "Reduced card issuance failure rates by diagnosing and fixing edge cases across the card lifecycle pipeline",
      "Operated high-throughput backend services with on-call rotation, incident response, and post-mortem culture",
    ],
    tags: ["Backend", "Cards Infrastructure", "Payments", "On-call"],
  },
  {
    role: "Software Engineer",
    team: "Spend Issuance",
    company: "Wise",
    period: "Jun 2021 → Oct 2022",
    location: "Singapore",
    highlights: [
      "Early engineer on Spend Issuance — helped build and scale the card issuance platform from greenfield to production",
      "Shipped core card lifecycle features: issuance, activation, pin management, and card controls used by millions of customers",
      "Worked across the stack (Kotlin, Java, Terraform) with exposure to payment processing, card network APIs, and infrastructure-as-code",
    ],
    tags: ["Full-Stack", "Payments", "Kotlin", "Terraform"],
  },
  {
    role: "Software Engineer Intern",
    company: "GovTech Singapore",
    period: "May 2020 → Jul 2020",
    location: "Singapore",
    highlights: [
      "Built a Dockerized form submission platform handling 100+ form types for government digital services",
      "Integrated Camunda workflow engine for automated form verification and routing",
      "Wrote test suites and CI pipelines with git hooks — shipped to production during the internship",
    ],
    tags: ["Docker", "Workflow Automation", "CI/CD"],
  },
  {
    role: "Software Engineer Intern",
    company: "Edison Software",
    period: "Jan 2019 → Dec 2019",
    location: "San Jose, California",
    highlights: [
      "Built a full-stack calendar plugin integrating with 8 email providers (Google, Microsoft, CalDAV) used by 100k+ users",
      "Designed a recurrence engine handling timezones, daylight savings, and offline SQLite storage",
      "Mentored fellow interns on React, Redux, and engineering best practices",
    ],
    tags: ["React", "Redux", "Calendar", "Full-Stack"],
  },
];

const PROJECTS = [
  {
    title: "SignalForge",
    description: "A personal trading research and execution system for tracking market signals, investment ideas, paper trades, portfolio exposure, and eventually live trading decisions. Built with OpenClaw-assisted workflows, the system is designed around dashboards, audit trails, decision records, and repeatable trading processes — moving beyond ad-hoc investing by creating a structured environment for testing ideas, reviewing outcomes, and supporting real-money decisions with better context and discipline.",
    areas: [
      { title: "Decision records", detail: "Structured logs for trade ideas, investment theses, assumptions, and changes in conviction" },
      { title: "Signal tracking", detail: "Multiple data points tracked over time to support or invalidate trade ideas" },
      { title: "Paper trading", detail: "Simulated positions and portfolio performance before committing real capital" },
      { title: "Live trading foundation", detail: "Data and workflow design intended to support eventual production use" },
      { title: "Audit trail", detail: "Clear history of why decisions were made, what changed, and how outcomes compared against expectations" },
      { title: "AI-assisted research", detail: "OpenClaw workflows for summarising context, exploring ideas, and supporting repeatable review processes" },
    ],
    stack: ["Trading Systems", "Dashboards", "Audit Trails", "Paper Trading", "Live Trading", "OpenClaw", "AI Workflows"],
    status: "Active — 18 tracked tickers, 7 paper positions, 42 automated guardrail tests",
    link: "https://github.com/Lexzt/signal-forge",
  },
  {
    title: "Homelab",
    description: "A long-term personal infrastructure project focused on data ownership, self-hosting, networking, and smart home experimentation. Built around Unraid, Docker, Ubiquiti networking, private access through Tailscale, and 10GbE local networking, the homelab runs private services for media management, photo backup, remote access, and home infrastructure. It also acts as a real-world learning environment for server hardware, storage design, PCIe planning, reverse proxying, monitoring, and incident-style troubleshooting.",
    stack: ["Unraid", "Docker", "Ubiquiti", "Tailscale", "10GbE", "Self-hosting", "Data Ownership"],
    status: "Active — Unraid NAS (~60TB), Ubiquiti networking, Tailscale remote access",
    link: null,
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

const INTERESTS = [
  { emoji: "🎱", label: "Pool / Billiards" },
  { emoji: "🏋️", label: "Gym" },
  { emoji: "🖥️", label: "Homelab" },
  { emoji: "🤖", label: "AI Agents" },
  { emoji: "✈️", label: "Miles Hacking" },
  { emoji: "💰", label: "Financial Optimization" },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-mono text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity">
          ~/keith
        </Link>
        <div className="flex gap-6 font-mono text-xs text-[var(--color-text-muted)]">
          <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">about</a>
          <a href="#experience" className="hover:text-[var(--color-accent)] transition-colors">work</a>
          <a href="#projects" className="hover:text-[var(--color-accent)] transition-colors">projects</a>
          <a href="#connect" className="hover:text-[var(--color-accent)] transition-colors">connect</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[var(--color-accent)] rounded-full filter blur-[120px] opacity-10 animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[var(--color-accent-secondary)] rounded-full filter blur-[120px] opacity-10 animate-blob animation-delay-400" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="animate-fade-in-up">
          <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-wider">
            hello world 👋
          </p>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
          I&apos;m <span className="text-gradient">Keith</span>.
          <br />
          <span className="text-3xl sm:text-5xl text-[var(--color-text-muted)] font-light">
            I build things that move money.
          </span>
        </h1>

        <p className="text-lg text-[var(--color-text-muted)] max-w-xl mb-8 animate-fade-in-up animation-delay-400">
          Engineering Lead at <span className="text-[var(--color-text)]">Wise</span>. 
          Currently on sabbatical, automating my life with AI agents, 
          optimizing credit card points, and occasionally sinking pool balls.
        </p>

        <div className="flex gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#experience"
            className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            See my work →
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-text-muted)] font-mono text-sm rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
          >
            Projects →
          </a>
        </div>

        <div className="mt-16 p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg max-w-md animate-fade-in-up animation-delay-800">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-xs text-[var(--color-text-muted)]">keith@wise</span>
          </div>
          <p className="font-mono text-sm">
            <span className="text-[var(--color-accent-secondary)]">$</span>{" "}
            <span className="text-[var(--color-text-muted)]">cat status.txt</span>
          </p>
          <p className="font-mono text-sm text-[var(--color-text-muted)] mt-1">
            Sabbatical until Jun 2026 🌴<br />
            Honeymoon: USA road trip 🇺🇸<br />
            Building: AI agents &amp; investment trackers 🤖
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-4">// about</h2>
      <div className="grid sm:grid-cols-2 gap-12">
        <div>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            Engineering Lead at Wise, working on Cards &amp; Spend Adoption. My team works on the systems that help customers order cards, access card details securely, launch cards across new markets, and adopt card products through initiatives like Auto Top-up and Bill Split.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            A large part of my role is scaling delivery through people — working with engineers to shape RFCs, lead global approval processes, own complex initiatives, and grow into stronger technical leaders.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Outside work: I&apos;m into pool, AI/tech rabbit holes, optimizing every financial product I touch, 
            and convincing my homelab server it doesn&apos;t need to run 24/7.
          </p>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg">
            <p className="font-mono text-xs text-[var(--color-accent)] mb-1">current_focus</p>
            <p className="text-sm text-[var(--color-text-muted)]">Sabbatical · AI agents · USA honeymoon planning · Investment automation</p>
          </div>
          <div className="p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg">
            <p className="font-mono text-xs text-[var(--color-accent-secondary)] mb-1">stack_i_enjoy</p>
            <p className="text-sm text-[var(--color-text-muted)]">Next.js · Tailwind · TypeScript · Python · Docker · Tailscale · Unraid</p>
          </div>
          <div className="p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg">
            <p className="font-mono text-xs text-[var(--color-accent)] mb-1">fun_fact</p>
            <p className="text-sm text-[var(--color-text-muted)]">Lost 5kg for my wedding. Now trying to keep it off. Send help (or gym motivation).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-12">// experience</h2>
      <div className="space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="group p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg card-hover"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {exp.role}
                  {exp.team && (
                    <span className="text-[var(--color-text-muted)] font-normal"> @ {exp.team}</span>
                  )}
                </h3>
                <p className="font-mono text-sm text-[var(--color-accent)]">{exp.company}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-mono text-xs text-[var(--color-text-muted)]">{exp.period}</p>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">{exp.location}</p>
              </div>
            </div>

            {exp.summary && (
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">{exp.summary}</p>
            )}
            {exp.subtitle && (
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 italic">{exp.subtitle}</p>
            )}

            {exp.areas && (
              <div className="space-y-4 mb-4">
                {exp.areas.map((area) => (
                  <div key={area.title}>
                    <h4 className="font-mono text-xs text-[var(--color-accent-secondary)] tracking-wider mb-2">{area.title}</h4>
                    <ul className="space-y-1.5">
                      {area.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-[var(--color-text-muted)] pl-4 border-l-2 border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {exp.highlights && (
              <ul className="space-y-1.5 mb-4">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-[var(--color-text-muted)] pl-4 border-l-2 border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors">
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] rounded border border-[var(--color-border)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-12">// projects</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg card-hover flex flex-col"
          >
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3 flex-1">
              {project.description}
            </p>
            {project.areas && (
              <div className="space-y-1.5 mb-3">
                {project.areas.map((area) => (
                  <div key={area.title} className="text-sm">
                    <span className="font-mono text-xs text-[var(--color-accent-secondary)]">{area.title}</span>
                    <span className="text-[var(--color-text-muted)]"> — {area.detail}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] rounded border border-[var(--color-border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--color-text-muted)] font-mono">{project.status}</span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--color-accent)] font-mono hover:underline"
                >
                  View ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-12">// skills & interests</h2>
      <div className="grid sm:grid-cols-2 gap-12">
        <div className="space-y-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs text-[var(--color-accent-secondary)] mb-2">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-sm bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="font-mono text-xs text-[var(--color-text-muted)] mb-4">things_i_do_for_fun</p>
          <div className="grid grid-cols-2 gap-3">
            {INTERESTS.map((interest) => (
              <div
                key={interest.label}
                className="p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-center card-hover"
              >
                <span className="text-2xl">{interest.emoji}</span>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">{interest.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg">
            <p className="font-mono text-xs text-[var(--color-accent-secondary)] mb-1">currently_building</p>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-1">
              <li>📈 SignalForge — investment research and paper trading</li>
              <li>🖥️ Homelab remote access setup</li>
              <li>🌐 This website (obviously)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-8">// connect</h2>
      <div className="max-w-lg">
        <h3 className="text-3xl font-bold mb-4">
          Want to chat? <span className="text-gradient">Let&apos;s talk.</span>
        </h3>
        <p className="text-[var(--color-text-muted)] mb-8">
          Whether it&apos;s about engineering, cards, AI, pool, or unsolicited financial optimization tips — 
          I&apos;m always up for a conversation.
        </p>
        <div className="space-y-3">
          <a
            href="https://www.linkedin.com/in/fong-keith/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg card-hover group"
          >
            <span className="text-xl">💼</span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">LinkedIn</p>
              <p className="font-mono text-xs text-[var(--color-text-muted)]">linkedin.com/in/fong-keith</p>
            </div>
          </a>
          <a
            href="https://github.com/Lexzt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg card-hover group"
          >
            <span className="text-xl">🐙</span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">GitHub</p>
              <p className="font-mono text-xs text-[var(--color-text-muted)]">github.com/Lexzt</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-[var(--color-text-muted)]">
          Built with ☕ and questionable financial decisions
        </p>
        <p className="font-mono text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} Keith Fong
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Connect />
        <Footer />
      </main>
    </>
  );
}
