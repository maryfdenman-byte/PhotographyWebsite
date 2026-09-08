#!/bin/bash
#
# auto-push.sh — Claude Code PostToolUse hook.
#
# After Claude writes or edits a file inside this repo, stage everything,
# commit it, and push to GitHub. Runs asynchronously so edits aren't blocked
# on the network.
#
# Wired up in .claude/settings.local.json (PostToolUse, matcher Write|Edit|MultiEdit).
# Review or disable it with the /hooks command.
#
# Never exits non-zero: a failed push must not fail Claude's edit.
#

REPO="/Users/marydenman/Documents/Claude Website"
LOCK="$REPO/.git/claude-autopush.lock"
LOG="$REPO/.git/claude-autopush.log"

# ---- which file did Claude just touch? -------------------------------------
FILE="$(/usr/bin/python3 -c '
import sys, json
try:
    d = json.load(sys.stdin)
except Exception:
    sys.exit(0)
p = ""
tr = d.get("tool_response")
if isinstance(tr, dict):
    p = tr.get("filePath") or ""
if not p:
    ti = d.get("tool_input")
    if isinstance(ti, dict):
        p = ti.get("file_path") or ""
print(p or "")
' 2>/dev/null)"

[ -n "$FILE" ] || exit 0

# Only act on files inside this repo — scratchpad and system files are ignored.
case "$FILE" in
  "$REPO"/*) ;;
  *) exit 0 ;;
esac

cd "$REPO" || exit 0

# ---- serialize, so rapid edits don't race each other -----------------------
acquired=0
for _ in $(seq 1 90); do
  if mkdir "$LOCK" 2>/dev/null; then acquired=1; break; fi
  sleep 1
done
[ "$acquired" = "1" ] || exit 0
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

{
  echo "----- $(date '+%Y-%m-%d %H:%M:%S') $FILE"
} >>"$LOG" 2>&1

# ---- stage and commit ------------------------------------------------------
git add -A >>"$LOG" 2>&1

if git diff --cached --quiet 2>/dev/null; then
  echo "nothing to commit" >>"$LOG" 2>&1
  exit 0
fi

NAME="$(basename "$FILE")"
if ! git commit -q -m "Auto-commit: $NAME

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>" >>"$LOG" 2>&1; then
  echo "commit failed" >>"$LOG" 2>&1
  printf '{"systemMessage":"Auto-push: commit failed. See .git/claude-autopush.log"}\n'
  exit 0
fi

# ---- push ------------------------------------------------------------------
BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null)"
if [ -z "$BRANCH" ] || [ "$BRANCH" = "HEAD" ]; then
  echo "detached HEAD - committed but not pushed" >>"$LOG" 2>&1
  printf '{"systemMessage":"Auto-push: committed locally, but HEAD is detached so nothing was pushed."}\n'
  exit 0
fi

if git push -q origin "$BRANCH" >>"$LOG" 2>&1; then
  echo "pushed $NAME to origin/$BRANCH" >>"$LOG" 2>&1
else
  echo "push failed" >>"$LOG" 2>&1
  printf '{"systemMessage":"Auto-push: committed locally, but the push to GitHub failed (offline, or the remote moved ahead). Run: git push origin %s"}\n' "$BRANCH"
fi

exit 0
