# Images in this folder

Audited 2026-09-08. **86 files: 17 referenced by the site, 69 kept deliberately.**

## Referenced by `src/`

| Folder | Files | Used by |
|---|---|---|
| `gallery/` | 10 | `Gallery.tsx` (portfolio grid) — one of these is also the hero photo in `Hero.tsx` |
| `laughing/` | 6 | `LaughingCarousel.tsx` ("Real Sessions, Real Joy") |
| `about/` | 1 of 3 | `AboutSection.tsx` |

## The other 69

67 files sit at the top level of this folder, plus 2 of the 3 in `about/`.
Nothing in `src/` references them.

**Mary asked for these to be kept for future use (2026-09-08).** They are not
dead files to be cleaned up — leave them in place. A likely use is an expanded
portfolio page drawing on a curated subset.

Two things to know about keeping them here:

- Everything under `public/` is copied into the deployed site, so these files
  ride along on every deploy even though no page links to them. If that ever
  matters, the fix is to move the unused ones out of `public/` into an archive
  folder in the repo — they stay available, they just stop being deployed.
- Five pairs are byte-identical duplicates of each other:

  | Copy | Duplicate of |
  |---|---|
  | `mary-denman-business-headshot-greenville-sc-3.jpg` | `...-sc-4.jpg` |
  | `mary-denman-professional-headshots-greenville-sc.jpg` | `gallery/mary-denman-professional-headshots-greenville-sc.jpg` |
  | `mary-denman-candid-headshot-session-greenville-sc.jpg` | `mary-denman-professional-headshot-greenville-sc-10.jpg` |
  | `mary-denman-headshot-session-greenville-sc-3.jpeg` | `...-2.jpeg` |
  | `mary-denman-model-headshot-greenville-sc-2.jpg` | `...-model-headshot-greenville-sc.jpg` |

## Wanted, not yet placed

`about/mary-denman-photography-studio-taylors-mill.jpg` — the Taylors Mill
studio photo. README.md and the progress notes both list "add studio photo to
the About page" as outstanding. The file is here and ready; `AboutSection.tsx`
does not reference it yet.

## Naming

`mary-denman-[service-type]-[description]-[location].jpg`

## Client names removed from filenames

On 2026-09-10, 37 filenames that contained a client's first name (for example
`...-greenville-sc-richard.jpg`) were renamed to numbered equivalents. This
repository is public, so those names were readable by anyone. The photographs
themselves are unchanged; only the filenames moved.

Note that the old names remain in the git history. Removing them from history
would mean rewriting it, which has not been done.
