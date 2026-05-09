# lexzt.github.io

Personal portfolio website for Keith Fong — Engineering Lead at Wise.

Built with Next.js, Tailwind CSS, and TypeScript. Deploys to GitHub Pages.

**Live at:** [lexzt.github.io](https://lexzt.github.io)

## Sections

- **About** — current focus, tech stack, personal context
- **Experience** — Wise (Engineering Lead, SE II, SE), GovTech, Edison Software
- **Projects** — SignalForge, Homelab
- **Skills** — grouped tag clouds (Backend, Frontend, Infra, Domain, AI)
- **Connect** — links

## Tech stack

- [Next.js 16](https://nextjs.org/) with App Router and static export
- [Tailwind CSS](https://tailwind.dev/) for styling
- TypeScript, React
- Custom theme with CSS variables (dark mode)
- Fonts: Space Mono (mono) + Sora (sans)
- GitHub Actions CI/CD → GitHub Pages

## Development

```bash
npm install
npm run dev      # dev server at localhost:3000
npm run build    # static export to ./out
```

## Deployment

Pushes to `main` trigger GitHub Actions:
1. `bun install --frozen-lockfile`
2. `bun run build`
3. Deploy to GitHub Pages

## Structure

```
src/app/
  page.tsx       — single-page app, all sections
  layout.tsx     — root layout, fonts, metadata
  globals.css    — theme variables, base styles
```

All content lives in `page.tsx` as typed arrays (`EXPERIENCE`, `PROJECTS`, `SKILL_GROUPS`, `INTERESTS`).

## License

Personal project. All rights reserved.
