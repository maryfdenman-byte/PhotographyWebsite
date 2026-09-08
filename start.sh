#!/bin/bash
#
# start.sh — one-command startup for the Mary Denman Photography website.
# Does automatically what STARTUP.md walks through by hand.
#
# Usage:
#   cd "/Users/marydenman/Documents/Claude Website" && ./start.sh
#
# Press Control + C to stop the server.
#

set -u

# ---------------------------------------------------------------- settings ---
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$PROJECT_ROOT/hotsauce-dev-v7/photography-website"
PORT="${PORT:-3100}"
URL="http://localhost:$PORT"
PNPM_VERSION="10.15.0"

# ------------------------------------------------------------------ output ---
if [ -t 1 ]; then
  BOLD=$'\033[1m'; GREEN=$'\033[32m'; YELLOW=$'\033[33m'
  RED=$'\033[31m'; DIM=$'\033[2m'; RESET=$'\033[0m'
else
  BOLD=""; GREEN=""; YELLOW=""; RED=""; DIM=""; RESET=""
fi

step() { printf "\n%s==> %s%s\n" "$BOLD" "$*" "$RESET"; }
ok()   { printf "    %s✓%s %s\n" "$GREEN" "$RESET" "$*"; }
info() { printf "    %s%s%s\n"   "$DIM"   "$*" "$RESET"; }
warn() { printf "    %s!%s %s\n" "$YELLOW" "$RESET" "$*"; }
die()  { printf "\n%s✗ %s%s\n\n" "$RED" "$*" "$RESET" >&2; exit 1; }

printf "\n%s📸  Mary Denman Photography — starting up%s\n" "$BOLD" "$RESET"

# --------------------------------------------------- 1. find the app folder ---
step "Step 1 of 5 — Locating the website folder"
[ -d "$APP_DIR" ] || die "Can't find the website folder at:
    $APP_DIR
  Is this script sitting in the project root?"
cd "$APP_DIR" || die "Could not open $APP_DIR"
ok "$APP_DIR"

# -------------------------------------------------------- 2. check the tools ---
step "Step 2 of 5 — Checking your tools"

if ! command -v node >/dev/null 2>&1; then
  die "Node.js is not installed.
  Install it with:  brew install node
  Then close Terminal, reopen it, and run this script again."
fi
ok "Node.js $(node -v)"

if ! command -v pnpm >/dev/null 2>&1; then
  warn "pnpm is not installed — trying to install it now..."
  if command -v corepack >/dev/null 2>&1; then
    corepack enable >/dev/null 2>&1
    corepack prepare "pnpm@$PNPM_VERSION" --activate >/dev/null 2>&1
  fi
  command -v pnpm >/dev/null 2>&1 || die "Could not install pnpm automatically.
  Run this yourself, then try again:
    corepack enable && corepack prepare pnpm@$PNPM_VERSION --activate"
fi
ok "pnpm $(pnpm -v)"

# ------------------------------------------------------- 3. install packages ---
step "Step 3 of 5 — Checking the website's building blocks"

if [ ! -d node_modules ]; then
  info "First run — this takes a minute or two. Grab a coffee."
  pnpm install || die "Install failed. Try:  rm -rf node_modules && pnpm install"
  ok "Installed"
elif [ pnpm-lock.yaml -nt node_modules ]; then
  info "Something changed — updating..."
  pnpm install || die "Update failed. Try:  rm -rf node_modules && pnpm install"
  ok "Updated"
else
  ok "Already up to date"
fi

# ------------------------------------------------------- 4. clear the runway ---
step "Step 4 of 5 — Clearing out anything still running"

freed=0
for p in $(seq 3100 3200); do
  pids="$(lsof -ti ":$p" 2>/dev/null)"
  if [ -n "$pids" ]; then
    echo "$pids" | xargs kill -9 2>/dev/null
    freed=$((freed + 1))
  fi
done

if [ "$freed" -gt 0 ]; then
  ok "Stopped $freed leftover process(es)"
  sleep 1
else
  ok "Nothing in the way"
fi

# ----------------------------------------------------------- 5. start it up ---
step "Step 5 of 5 — Starting the website"
info "Your browser will open by itself once the site is ready."
info "Leave this window open. Press Control + C here to stop the site."
printf "\n    %sAddress:%s %s\n\n" "$BOLD" "$RESET" "$URL"

# Wait in the background for the server to answer, then open the browser.
(
  for _ in $(seq 1 90); do
    if curl -s -o /dev/null --max-time 2 "$URL"; then
      sleep 1
      open "$URL" 2>/dev/null
      exit 0
    fi
    sleep 1
  done
) &

# Hand the terminal over to the dev server so Control + C reaches it directly.
exec pnpm dev:stable
