import Link from "next/link";

const EXPERIENCE = [
  {
    role: "Engineering Lead",
    team: "Spend Adoption",
    company: "Wise",
    period: "Oct 2023 → Present",
    location: "Singapore",
    highlights: [
      "Leading the Spend Adoption team — building customer-facing products to drive card adoption",
      "Own backend systems, product strategy, compliance, and team execution across cards/spend",
    ],
    tags: ["Leadership", "Cards", "Product Strategy"],
  },
  {
    role: "Software Engineer II",
    team: "Spend Issuance",
    company: "Wise",
    period: "Oct 2022 → Oct 2023",
    location: "Singapore",
    highlights: [
      "Core engineer on Spend Issuance — shipping card issuance infrastructure at scale",
    ],
    tags: ["Backend", "Cards Infrastructure"],
  },
  {
    role: "Software Engineer",
    team: "Spend Issuance",
    company: "Wise",
    period: "Jun 2021 → Oct 2022",
    location: "Singapore",
    highlights: [
      "Built and scaled Spend Issuance systems from early days",
    ],
    tags: ["Full-Stack", "Payments"],
  },
  {
    role: "Software Engineer Intern",
    company: "GovTech Singapore",
    period: "May 2020 → Jul 2020",
    location: "Singapore",
    highlights: [
      "Built a Dockerized form submission platform handling 100+ form types",
      "Integrated Camunda workflow engine for automated verification",
      "Wrote test suites and CI pipelines with git hooks",
    ],
    tags: ["Docker", "Workflow Automation", "CI/CD"],
  },
  {
    role: "Software Engineer Intern",
    company: "Edison Software",
    period: "Jan 2019 → Dec 2019",
    location: "San Jose, California",
    highlights: [
      "Built a full-stack calendar plugin integrating with 8 email providers (Google, Microsoft, CalDAV)",
      "Designed recurrence engine handling timezones, daylight savings, and offline SQLite storage",
      "Mentored fellow interns on React, Redux, and engineering best practices",
    ],
    tags: ["React", "Redux", "Calendar", "Full-Stack"],
  },
];

const SKILLS = [
  { label: "Backend Systems", level: 95 },
  { label: "Product Thinking", level: 85 },
  { label: "Cards / Payments", level: 90 },
  { label: "Team Leadership", level: 80 },
  { label: "React / Next.js", level: 75 },
  { label: "Infrastructure & DevOps", level: 70 },
  { label: "Pool / Billiards", level: 60 },
];

const INTERESTS = [
  { emoji: "🎱", label: "Pool" },
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
          <a href="#skills" className="hover:text-[var(--color-accent)] transition-colors">skills</a>
          <a href="#connect" className="hover:text-[var(--color-accent)] transition-colors">connect</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
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
            href="#connect"
            className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-text-muted)] font-mono text-sm rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
          >
            Get in touch
          </a>
        </div>

        {/* Terminal teaser */}
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
            Engineering Lead at Wise, working on Cards &amp; Spend Adoption. I sit at the intersection of 
            backend systems, product strategy, compliance constraints, and team execution.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            I care about building things that have measurable impact. Not busywork. Not vanity metrics. 
            Real user-facing outcomes that move numbers.
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
      <div className="space-y-2">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="group p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg card-hover"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
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
            <ul className="space-y-1 mb-3">
              {exp.highlights.map((h, j) => (
                <li key={j} className="text-sm text-[var(--color-text-muted)] pl-4 border-l-2 border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors">
                  {h}
                </li>
              ))}
            </ul>
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

function Skills() {
  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-12">// skills & interests</h2>
      <div className="grid sm:grid-cols-2 gap-12">
        <div className="space-y-4">
          {SKILLS.map((skill) => (
            <div key={skill.label}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[var(--color-text)]">{skill.label}</span>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[var(--color-bg-elevated)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
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
              <li>🤖 AI personal assistant (OpenClaw + agents)</li>
              <li>📈 Investment tracker with paper trading</li>
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
        <Skills />
        <Connect />
        <Footer />
      </main>
    </>
  );
}
