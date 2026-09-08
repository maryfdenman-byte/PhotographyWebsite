# Startup Guide — Mary Denman Photography Website

How to get from a **fresh macOS login** to a running website preview in your browser.

There are two ways to do this:

- **The fast way** — run one script. See [Quick Start](#quick-start).
- **The manual way** — type each step yourself, so you understand what's happening. See [Step-by-Step](#step-by-step).

Both do exactly the same thing.

---

## Quick Start

1. Press **⌘ + Space**, type `Terminal`, press **Return**.
2. Copy the line below, paste it into Terminal, press **Return**:

   ```bash
   cd "/Users/marydenman/Documents/Claude Website" && ./start.sh
   ```

3. Wait about 10–30 seconds. Your browser opens to <http://localhost:3100> automatically.

To stop the site, click back on the Terminal window and press **Control + C**.

---

## Step-by-Step

### Step 1 — Open Terminal

- Press **⌘ + Space** (Command and Spacebar together). Spotlight search opens.
- Type `Terminal`.
- Press **Return**.

A window opens with a line of text ending in `%`. That's the prompt — it's waiting for you to type.

> **Tip:** In Terminal you press **Return** after every command to run it. Nothing happens until you do.

### Step 2 — Go to the website folder

Copy and paste this, then press **Return**:

```bash
cd "/Users/marydenman/Documents/Claude Website/hotsauce-dev-v7/photography-website"
```

> **Why the quotation marks?** The folder name `Claude Website` has a space in it. Without the quotes, Terminal thinks you mean two separate things and gives an error.

To confirm you're in the right place, type `pwd` and press **Return**. It should print:

```
/Users/marydenman/Documents/Claude Website/hotsauce-dev-v7/photography-website
```

### Step 3 — Check your tools are installed

These only need to be installed once, ever. To check they're there:

```bash
node -v
pnpm -v
```

You should see version numbers, something like:

```
v24.7.0
10.15.0
```

**If you see `command not found`,** install the missing tool:

| Missing | Run this |
|---|---|
| `node` | `brew install node` |
| `pnpm` | `corepack enable && corepack prepare pnpm@10.15.0 --activate` |
| `brew` | `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` |

Close Terminal and reopen it after installing, then check again.

### Step 4 — Install the website's building blocks

```bash
pnpm install
```

This downloads the code libraries the site is built from (Next.js, React, Tailwind).

- **First time:** takes 1–3 minutes.
- **After that:** takes a few seconds and usually says `Already up to date`.

You only need to re-run this if the `package.json` file changes.

### Step 5 — Start the website

```bash
pnpm dev:stable
```

This is the recommended way to start. It cleans up old files, watches for crashes, restarts automatically if something breaks, and writes a log of everything.

Wait for a message like:

```
✓ Ready in 2.3s
- Local: http://localhost:3100
```

**Leave this Terminal window open.** The website only runs while this is running. If you close the window or press Control + C, the site stops.

### Step 6 — Open the site in your browser

Go to:

**<http://localhost:3100>**

You can ⌘-click that link right in Terminal, or type the address into Safari or Chrome.

You should see your homepage. The four pages are:

| Page | Address |
|---|---|
| Home | http://localhost:3100 |
| About | http://localhost:3100/about |
| Pricing | http://localhost:3100/pricing |
| Contact | http://localhost:3100/contact |

> **`localhost` means "this computer only."** Nobody else on the internet can see this. It's your private preview until the site is deployed.

---

## Making Changes While It's Running

Leave the server running. Edit a file, save it, and the browser refreshes by itself within a second or two.

**To edit page text**, open the matching file in this folder:

```
hotsauce-dev-v7/photography-website/content/
├── home.md
├── about.md
├── pricing.md
└── contact.md
```

You can open these in TextEdit, or ask Claude Code to change them for you.

**To add photos**, drop image files into:

```
hotsauce-dev-v7/photography-website/public/images/
```

Then refer to them in your content as `/images/your-photo.jpg`.

---

## Starting Claude Code

To have Claude help you with the site, open a **second** Terminal window (**⌘ + N**) so the website keeps running in the first one, then:

```bash
cd "/Users/marydenman/Documents/Claude Website"
claude
```

Type your request and press Return. To leave Claude, type `/exit`.

---

## Stopping the Site

Click on the Terminal window running the server and press **Control + C**.

You'll get your prompt back. The site at localhost:3100 will stop loading — that's expected.

---

## Troubleshooting

### "Port 3100 is already in use"

An old copy of the site is still running in the background. Clear it out:

```bash
cd "/Users/marydenman/Documents/Claude Website/hotsauce-dev-v7/photography-website"
pnpm clean
pnpm dev:stable
```

### The page is blank, broken, or stuck on an old version

Clear the saved build files and start fresh:

```bash
pnpm dev:clean
```

### Something crashed and I want to see why

```bash
pnpm logs         # everything the server printed
pnpm logs:error   # errors only
```

Press **Control + C** to stop watching the log.

### "command not found: pnpm"

Terminal doesn't know where pnpm is. Run `corepack enable`, then close and reopen Terminal.

### Nothing above worked

The nuclear option — delete everything downloaded and reinstall it:

```bash
cd "/Users/marydenman/Documents/Claude Website/hotsauce-dev-v7/photography-website"
pnpm clean
rm -rf node_modules
pnpm install
pnpm dev:stable
```

---

## Command Cheat Sheet

Run these from the `photography-website` folder.

| Command | What it does |
|---|---|
| `pnpm dev:stable` | **Start the site** (recommended — auto-recovers from crashes) |
| `pnpm dev` | Start the site, plain and simple |
| `pnpm dev:clean` | Start after wiping old build files |
| `pnpm clean` | Free up port 3100 and delete build files |
| `pnpm build` | Build the finished site for deployment |
| `pnpm logs` | Watch the server log |
| `pnpm logs:error` | Watch errors only |
| **Control + C** | Stop whatever is running |

---

## Reference

- **Project root:** `/Users/marydenman/Documents/Claude Website`
- **Website code:** `hotsauce-dev-v7/photography-website`
- **Local address:** http://localhost:3100
- **GitHub:** https://github.com/maryfdenman-byte/PhotographyWebsite
- **Technical spec:** `hotsauce-dev-v7/CLAUDE.md`
