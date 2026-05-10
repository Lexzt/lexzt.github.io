import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keith Fong — Blog",
  description:
    "Thoughts, ideas, and things I'm learning — AI agents, fintech, homelab, and financial optimization.",
};

const POSTS = [
  {
    title: "Why I Built an AI Investment Tracker",
    description:
      "How missing trade alerts led me to build SignalForge — a structured system for tracking investment signals, paper trading, and making better decisions with AI-assisted research.",
    tags: ["AI Agents", "Trading", "OpenClaw", "SignalForge"],
    date: "Coming Soon",
    status: "draft" as const,
  },
  {
    title: "Moving from Manager Back to IC — My Sabbatical Experiment",
    description:
      "After 2+ years as an Engineering Lead, I'm using my sabbatical to rebuild my technical depth. Here's what I'm learning about AI, automation, and whether I actually want to go back to management.",
    tags: ["Career", "Engineering", "Sabbatical"],
    date: "Coming Soon",
    status: "draft" as const,
  },
  {
    title: "10GbE Homelab Networking Lessons",
    description:
      "What I learned building a 10-gigabit home network — from NIC selection and PCIe lane planning to the Unraid tuning that actually made it work. Spoiler: it's not just about buying fast hardware.",
    tags: ["Homelab", "Networking", "Unraid", "10GbE"],
    date: "Coming Soon",
    status: "draft" as const,
  },
  {
    title: "Optimizing Credit Card Points in Singapore — A Framework",
    description:
      "A practical framework for maximizing miles and cashback across 30+ cards in Singapore. Includes decision trees, opportunity cost calculations, and the traps that aren't worth your time.",
    tags: ["Finance", "Credit Cards", "Singapore", "Optimization"],
    date: "Coming Soon",
    status: "draft" as const,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/"
            className="font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← back to home
          </Link>
        </div>

        {/* Header */}
        <section className="mb-12">
          <p className="font-mono text-sm text-[var(--color-accent)] tracking-wider mb-4">
            // blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Thoughts, ideas, and things<br />
            I&apos;m <span className="text-gradient">learning</span>.
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl">
            AI agents, fintech infrastructure, homelab adventures, and unsolicited financial optimization tips.
            Mostly technical, occasionally opinionated.
          </p>
        </section>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg card-hover relative"
            >
              {/* Status badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 text-xs font-mono bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded text-[var(--color-text-muted)]">
                  {post.date}
                </span>
                <span className="px-2 py-0.5 text-xs font-mono bg-[var(--color-accent-secondary)]/10 border border-[var(--color-accent-secondary)]/20 rounded text-[var(--color-accent-secondary)]">
                  Draft
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="p-6 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg text-center">
          <p className="text-[var(--color-text-muted)] mb-2">
            Posts coming soon. I&apos;m writing them during my sabbatical.
          </p>
          <a
            href="https://github.com/Lexzt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
          >
            Follow me on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
