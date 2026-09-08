# Startup Guide — Mary Denman Photography Website

Developer setup for this Mac. Two directories matter, and they are not the same one:

| Role | Path |
|---|---|
| **Repo root** — git root, Claude Code hooks, `start.sh` | `/Users/marydenman/Documents/Claude Website` |
| **App dir** — Next.js project, `package.json`, all `pnpm` commands | `hotsauce-dev-v7/photography-website` |

Run `git` and `claude` from the **repo root**. Run `pnpm` from the **app dir**.

---

## TL;DR

```bash
# Terminal 1 — dev server
cd "/Users/marydenman/Documents/Claude Website/hotsauce-dev-v7/photography-website"
pnpm install && pnpm dev:stable        # → http://localhost:3100

# Terminal 2 — Claude Code
cd "/Users/marydenman/Documents/Claude Website"
claude
```

Or let the wrapper do the first half: `cd "/Users/marydenman/Documents/Claude Website" && ./start.sh`
(verifies node/pnpm, installs if needed, frees ports 3100–3200, runs `dev:stable`, opens the browser).

Quote the paths — `Claude Website` has a space in it.

---

## Prerequisites

Already installed on this machine:

| Tool | Version | Path |
|---|---|---|
| Node | v24.7.0 | `/opt/homebrew/bin/node` |
| pnpm | 10.15.0 (pinned via `packageManager`) | `/opt/homebrew/bin/pnpm` |
| Claude Code | — | `~/.local/bin/claude` |
| gh | — | `/opt/homebrew/bin/gh` |

If pnpm goes missing after a Node upgrade: `corepack enable && corepack prepare pnpm@10.15.0 --activate`.

---

## Launching Claude Code

```bash
cd "/Users/marydenman/Documents/Claude Website"
claude
```

**Launch from the repo root, not the app dir.** The root is where the git repo and
`.claude/` live, so launching there gives you:

- the `PostToolUse` auto-push hook (see below),
- git operations rooted at the actual repo,
- read/write access to the sibling asset folders (`My LOGO`, `My notes`, `Stored Claude Work`).

**Config, and where it actually applies:**

| File | Contents | Active from repo root? | Tracked? |
|---|---|---|---|
| `.claude/settings.local.json` | auto-push hook wiring | yes | gitignored |
| `.claude/hooks/auto-push.sh` | the hook itself | yes | tracked |
| `hotsauce-dev-v7/.claude/settings.local.json` | Bash/pnpm permission allowlist | **no** — settings load from cwd upward, not from subdirectories | **tracked (public)** |
| `hotsauce-dev-v7/CLAUDE.md` | project spec: stack, conventions, intended content model | loads when Claude reads that subtree | tracked |

Two things that trip people up:

- The permission allowlist under `hotsauce-dev-v7/` is **inert** when you launch from the repo
  root, so expect more approval prompts there than a past session in that subdir had. Consolidate
  it into the root settings if the prompting gets tedious.
- That same file is **committed**, unlike the root one — the root `.gitignore` entry
  `.claude/settings.local.json` contains a slash, so it is anchored to the repo root and does not
  match nested copies. Check with `git check-ignore -v <path>` before assuming a local settings
  file is private.

Note that `CLAUDE.md` sits at `hotsauce-dev-v7/`, one level *below* the repo root — it is
picked up when Claude reads files in that subtree, not at launch. If you want it in context
from the first turn, say so in your opening prompt or `@`-mention it.

Useful in-session: `/hooks` (review or disable auto-push), `/permissions`, `/exit`.

---

## Running the dev server

All from `hotsauce-dev-v7/photography-website`:

```bash
pnpm install       # first run, or after package.json / pnpm-lock.yaml changes
pnpm dev:stable    # recommended
```

`dev:stable` runs `scripts/dev-stable.js` — a supervisor that cleans build artifacts, restarts
the server on crash, and tees output to `logs/dev-server.log` and `logs/dev-server-errors.log`.
Plain `pnpm dev` is `next dev -p 3100` with none of that.

**Dev and build use separate build directories.** `next dev` writes to `.next-dev`
(set via `NEXT_DIST_DIR` in the `dev` script and in `scripts/dev-stable.js`); `next build`
is left on the default `.next`. They previously shared `.next`, so running `pnpm build`
while the dev server was up overwrote the chunks it held open and left every route
returning 500 with a misleading `MODULE_NOT_FOUND`. Building while developing is now safe.
`next build` deliberately keeps the default path so Vercel needs no configuration.

Ready output:

```
✓ Ready in 2.3s
- Local: http://localhost:3100
```

Routes: `/` · `/about` · `/pricing` · `/contact`

The 4 GB heap and telemetry-off come from `scripts/dev-stable.js`, which sets them in the child
env — **not** from `.env.development`. That file (gitignored) is mostly decorative: Next loads it
for app-level vars, but `NODE_OPTIONS` can't be set from an env file (it's a Node startup flag),
`GENERATE_SOURCEMAP` is a Create-React-App variable Next ignores, and the dev port comes from the
`-p 3100` flag regardless of `PORT`. Under plain `pnpm dev` you get the default heap.

Ctrl-C stops it. Its `SIGINT` handler exits the supervisor without explicitly killing the child,
so if the `next` process is ever orphaned the port stays held — `pnpm clean` clears that.

Keep it in its own terminal tab (⌘T) so Claude Code stays interactive.

---

## Codebase map

```
hotsauce-dev-v7/photography-website/
├── src/
│   ├── pages/          # Next.js Pages Router — index, about, pricing, contact, _app
│   ├── components/     # Header, Hero, Gallery, LaughingCarousel, Pricing, Contact, FAQ, …
│   └── styles/globals.css
├── content/            # home.md · about.md · pricing.md · contact.md (gray-matter frontmatter)
├── public/images/      # gallery/, about/, laughing/ + SEO-named headshots
├── public/videos/
├── scripts/            # dev-stable.js, cleanup.js, cleanup.sh
├── docs/               # tech-stack, deployment, tailwind-v4-guide, stability-scripts-guide, …
└── logs/               # gitignored
```

Stack: Next.js 15.5 (Pages Router) · React 19 · TypeScript 5.9 · Tailwind 4.1 (`@tailwindcss/postcss`)
· gray-matter · next-seo · lucide-react.

> **`content/*.md` is not wired up.** Nothing in `src/` imports `gray-matter` or defines
> `getStaticProps` — verify with `grep -rn "gray-matter\\|getStaticProps" src/` (no hits).
> All four files still hold scaffold placeholders ("Your Site Title Goes Here"), and every
> string you see in the browser is hardcoded in the components (page `<title>`/description in
> `src/pages/*.tsx`, body copy in `src/components/*.tsx`).
>
> **Editing `content/home.md` changes nothing on the page.** The frontmatter split described in
> `hotsauce-dev-v7/CLAUDE.md` is the intended design, not the current state — wiring it is
> outstanding work. Until then, edit the components; Fast Refresh picks those up on save.

---

## Auto-push hook

`.claude/hooks/auto-push.sh` fires on every `Write | Edit | MultiEdit`, asynchronously. It is
serialized with a lock dir, no-ops on paths outside the repo, and never exits non-zero — a failed
push won't fail Claude's edit. It pushes to `origin/<current branch>` (not hardcoded to `main`),
and stops with a message if HEAD is detached.

**It runs `git add -A`, not `git add <the edited file>.`** One Claude edit anywhere commits and
publishes your entire working tree — including unrelated files you were still deciding about.

- Log: `.git/claude-autopush.log`
- Disable: `/hooks` in-session, or edit `.claude/settings.local.json`
- Push failed (offline): the commit is still local — `git push origin main` to catch up
- Edits made through Bash (`sed`, heredocs) **do not** trigger it — commit those yourself

> **The repo is public.** `https://github.com/maryfdenman-byte/PhotographyWebsite` — anything
> Claude edits here is on GitHub within seconds. Do not put client contracts, unreleased
> galleries, or credentials in this tree. To flip it:
> `gh repo edit maryfdenman-byte/PhotographyWebsite --visibility private`

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `EADDRINUSE` / port 3100 busy | `pnpm clean` (frees 3100–3200, removes `.next`, `.next-dev` and `node_modules/.cache`), then `pnpm dev:stable`. `dev:stable`'s own pre-clean only frees 3100 and races its 1 s start delay, so it doesn't always clear a stuck port |
| Stale build / blank page | `pnpm dev:clean` |
| `Cannot find module './chunks/vendor-chunks/…'`, every route 500s | A build wiped the dev server's build directory. Should no longer happen — dev uses `.next-dev`, `next build` uses `.next` — but if it does: `pnpm clean && pnpm dev:stable` |
| Tailwind classes not applying | Tailwind 4 — check `postcss.config.js` uses `@tailwindcss/postcss`; see `docs/tailwind-v4-guide.md` |
| Crash, need the trace | `pnpm logs` / `pnpm logs:error` (Ctrl-C to stop tailing) |
| `command not found: pnpm` | `corepack enable`, then new shell |
| Everything is wedged | `pnpm clean && rm -rf node_modules && pnpm install && pnpm dev:stable` |

---

## Command reference

Run from `hotsauce-dev-v7/photography-website`:

| Command | Effect |
|---|---|
| `pnpm dev:stable` | Dev server with supervisor + logging (recommended) |
| `pnpm dev` | `next dev -p 3100`, no supervisor |
| `pnpm dev:clean` | `cleanup.sh` then `next dev` |
| `pnpm clean` | Free ports 3100–3200, delete `.next`, `.next-dev` and `node_modules/.cache` |
| `pnpm build` / `pnpm start` | Production build / serve on 3100 |
| `pnpm lint` | `next lint` |
| `pnpm logs` / `pnpm logs:error` | Tail server / error log |

`pnpm test` is not wired up — it exits 1 by design.

---

## Reference

- Repo root: `/Users/marydenman/Documents/Claude Website`
- App dir: `hotsauce-dev-v7/photography-website`
- Local: <http://localhost:3100>
- Remote: <https://github.com/maryfdenman-byte/PhotographyWebsite> (public, `main`)
- Spec: `hotsauce-dev-v7/CLAUDE.md` · Deep docs: `hotsauce-dev-v7/photography-website/docs/`
- Not yet deployed — see `docs/deployment.md`
