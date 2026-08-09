# nonbiri.dev

[![CI](https://github.com/iasnezhkov/nonbiri/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/iasnezhkov/nonbiri/actions/workflows/ci.yml?query=branch%3Amain)

The site of a one-person studio, at [nonbiri.dev](https://nonbiri.dev).

Twelve routes, each in English at the root and in Japanese under `/ja`. Astro
and TypeScript at its strictest, zero bundled JavaScript, hand-written CSS
driven by generated design tokens, and no webfonts.

**Suji** — dictionary, kanji, grammar, reading, exam practice and spaced
repetition in one offline-first iPad app, all running on a single progress
record. A six-section teacher side sits on the same data.

**Gokaku** — a free offline trainer for Japan's written driving exams. Each of
its 774 true/false questions carries a verbatim quote from the National Police
Agency rulebook the exam is written from.

```bash
npm install
npm run dev            # localhost:4321
npm run check          # tokens · classes · language · artefacts · types
npm run build
```

## What it ships

**No bundled JavaScript.** Two hand-written files, both `<head>`-blocking so
they run before first paint: `public/theme.js` sets the colour theme and
`public/lang.js` decides the language. No framework runtime, no bundle. CI fails
the build if anything lands in `dist/_astro/*.js`.

**The theme follows the clock, not the OS.** Light from 07:00 to 19:00 local,
dark outside it, re-checked on the hour that flips it so a tab left open through
the evening follows. `prefers-color-scheme` is the fallback for readers with
JavaScript off, not the default: it records what someone wanted once, not what
the room looks like now. Light and Dark sit either side of the automatic setting
for anyone who disagrees, and that choice is remembered.

**English is the default, and `navigator.languages` is never consulted.** A
Japanese browser is a fact about the machine, not a request; a reader who
followed a link and got a different page has been overruled by a guess. The only
thing that redirects is the EN · 日本語 switch in the masthead — pressed once, it
holds in both directions until it is changed. Every route exists in both
languages, so the switch is never a dead control.

**No webfonts.** Type is a system stack — Didot for display, the system sans for
everything else, Hiragino Mincho for Japanese. Zero font files and zero requests.
It is also why old-style figures are not used anywhere: only the display face
carries `onum`, and the sans that sets every paragraph does not.

**A strict CSP.** `default-src 'none'`, no `'unsafe-inline'`, set in
`public/_headers`. That is why there is not one `style=` attribute in the source:
the browser silently drops them, so such a page breaks *only in production*.
`astro check` cannot see it; `npm run shoot` can.

## Both languages, and how they are kept in step

Two mechanisms, chosen by the shape of what is being translated.

**Prose in a schema** — the app pages — uses a `ja:` block inside the same entry.
The numbers, screenshots, tech lists and ordering are language-neutral and are
written once; only prose is duplicated, so the two versions cannot disagree about
how many questions ship. Same idea in `src/data/cv.ts`, where each role carries a
`ja` half and the dates stay in the machine-readable field both pages format.

**Prose that IS the document** — the legal pages — uses a parallel file under
`src/content/legal/ja/`. A privacy policy is markdown all the way down, and the
only honest translation of one is another document. The frontmatter is the seam:
`kind`, `app`, `version` and `effectiveDate` are the same facts in both, and a
Japanese policy carrying a different effective date is exactly the drift a store
reviewer would catch.

**Japanese paragraphs are written on one line.** YAML's folded scalar, a markdown
paragraph and JSX text all join wrapped lines with a space — the word break in
English, a hole in the middle of a word in Japanese. Frontmatter is repaired in
the schema (`src/lib/cjk.ts`, applied by `content.config.ts`); markdown bodies and
`.astro` templates have no hook to do that in, so they are written unwrapped.

## Design tokens are the source of truth

`tokens.json` is the only place a colour, radius, spacing step or type size is
written down. `scripts/build-tokens.ts` validates it against a Zod schema and
emits two projections:

| Output | Purpose |
| --- | --- |
| `src/styles/tokens.css` | CSS custom properties, light + dark, plus the `[data-brand]` accent switch |
| `src/styles/tokens.d.ts` | A `TokenName` union, so a mistyped token is a compile error rather than dead CSS |

Neither is edited by hand; `npm run tokens -- --check` fails on drift. The same
approach runs in both apps — Suji projects its tokens into SwiftUI, Gokaku into
Dart. This site is the third target of the same idea.

Each product supplies an accent, and it moves **two** variables: `--accent` for
marks at display size and `--accent-text` for the same hue at caption sizes,
where the display value measures about 2.5:1 on paper.

## Layout

One stylesheet, `src/styles/fresh.css`, reading only from `tokens.css`. The
system is a magazine rather than a document: **one dominant element per screen,
everything else small**, and the jump between them carries the hierarchy. Images
lead; type is placed against them. Flat fields of ink are content, not
background.

Filled fields are **greyscale on purpose.** A field in the product's accent was
built and dropped: it forced the text colour to change per product — white
carries on indigo and green and fails on gold at 3.4:1 — so one component read as
three different things, and an accent covering a third of the page has stopped
being an accent. Colour is reserved for marks: numbers, rules, small labels.

## Content is schema-checked

`src/content.config.ts` defines the shape of every app page and legal document.
The schemas are load-bearing: a privacy policy missing its effective date fails
the build rather than reaching the App Store review queue.

## Checks

| Command | Action |
| --- | --- |
| `npm run check` | tokens current · every class defined · no working notes · artefacts current · `astro check` |
| `npm run shoot` | geometry sweep — overlaps and overflow, 24 routes × 7 widths |
| `npm run shoot -- --shots --coverage` | the above, plus screenshots and ink coverage |
| `npm run theme` | paired screenshots: right capture shown, only it fetched |
| `npm run tokens` | regenerate `tokens.css` and `tokens.d.ts` |
| `npm run cv:pdf` | reprint `/cv` to `public/cv.pdf`, and fail past three pages |
| `npm run og` | redraw the four social cards |

`scripts/check-classes.ts` fails if a page uses a class the stylesheet does not
define. It exists because a stylesheet rewrite once left one page on the old
class names: it rendered completely unstyled, and the build, the typecheck and
the geometry sweep all reported success. A missing class is neither a type error
nor a layout error — it is only visible by looking, which is the step that gets
skipped.

`scripts/shoot.ts` measures rather than looks. Keep its `PROBE` list in step with
the stylesheet: pointed at deleted class names it matches nothing and reports
"clean" forever.

`scripts/theme-check.ts` pins the browser clock rather than reading the machine's
— the automatic theme depends on the hour, and a check whose result depends on
when it runs is not a check. Each of its four cases also runs against the
*opposite* `prefers-color-scheme`, so passing proves the OS no longer decides.
It covers the one thing a screenshot cannot show: a shot
that ships in both themes must also *cost* one. Both halves are `loading=lazy`
so the hidden one is never fetched, and that saving is invisible on screen —
marking either half eager silently reinstates the download for every reader on
the other theme. It drives a real browser against the built site, so it needs
`npm run build` and a running `astro preview` first.

## Invariants

The code carries almost no comments — the reasoning lives here instead, in one
place a reader finds before touching anything. These six are the ones a change can
break silently, without a failing check:

**Both halves of a paired screenshot stay `loading="lazy"`.** An eager `<img>`
is fetched even at `display: none`, so marking either half eager reinstates the
download of the capture the reader is never shown. `Shot.astro` passes
`fetchpriority` instead, and `npm run theme` is the only thing that catches a
regression.

**No `style=` attribute, anywhere.** `default-src 'none'` with no
`'unsafe-inline'` makes the browser drop them, so an inline style breaks *only*
in production. Neither `astro check` nor the geometry sweep can see it.

**Masthead and footer links go through `root` and `appHref`.** A hardcoded
`/about` on a Japanese page throws the reader into English, and the language
preference is only written by the switch, so nothing carries them back.

**`PROBE` in `scripts/shoot.ts` tracks the stylesheet.** Pointed at class names
that no longer exist it matches nothing and reports "clean" forever.

**TypeScript stays on 6.x.** The version is pinned exactly, not caret-ranged. The
7.x native compiler does not expose the programmatic Language Service API that
`astro check` is built on, so upgrading silently removes the project's only type
gate — the command fails outright rather than passing emptily, but only in CI.

**`npm run og` and `npm run cv:pdf` after changing the palette, the type, or any
copy that reaches a card.** They are local-only and their output is committed;
`npm run check` fails when either is stale.

## Local-only build steps

`npm run og` and `npm run cv:pdf` drive the system Chrome (`channel: 'chrome'`)
because they need Didot, which ships with macOS and is bundled nowhere. They do
not run in CI and their output is committed. **Re-run both after changing the
palette, the type, or any copy that appears on a card.**

## Repository map

```
tokens.json              single source of truth for every visual value
scripts/
  build-tokens.ts        validate → emit CSS + types
  build-og.ts            social cards → public/og/*.png     (local only)
  build-cv-pdf.ts        print /cv → public/cv.pdf          (local only)
  check-classes.ts       every class used must be defined
  check-language.ts      no Cyrillic in anything that would be committed
  check-artefacts.ts     cv.pdf and the social cards are not stale
  shoot.ts               geometry sweep + ink coverage
  theme-check.ts         paired screenshots follow the theme, and only one loads
src/
  content.config.ts      Zod schemas for apps and legal documents
  content/apps/*.md      product copy and screenshots, with a `ja:` block
  content/legal/*.md     privacy, terms, support — `ja/` holds the translations
  data/cv.ts             one typed record → /cv, /about, /ja/*, cv.pdf
  lib/apps.ts            narrows an app entry to one with a Japanese block
  lib/cjk.ts             undo line folding inside Japanese sentences
  styles/tokens.css      GENERATED — do not edit
  styles/fresh.css       the whole component layer
  layouts/Fresh.astro    masthead, theme + language switches, veil, footer
  pages/                 index · [app] · [app]/[doc] · about · cv
public/llms.txt          what the site is, for agents that read it
public/theme.js          colour theme, resolved from the clock
public/lang.js           language, resolved from the browser
public/_headers          CSP and security headers
```

## Reporting something

This is a personal site and pull requests changing it will be declined — see
[CONTRIBUTING.md](CONTRIBUTING.md) for the two kinds of report that are
genuinely useful, chiefly a question in Gokaku that disagrees with the rule it
cites. Anything exploitable goes to [SECURITY.md](SECURITY.md) instead of a
public issue.

## Licence

The software is MIT — everything under `scripts/`, `src/components/`,
`src/layouts/`, `src/lib/`, `src/pages/`, `src/styles/`, `public/*.js` and the
configuration at the root. See [LICENSE](LICENSE).

The content is not: `src/content/`, the screenshots under
`src/content/apps/shots/`, `src/data/cv.ts`, `tokens.json`, `public/og/`,
and `public/cv.pdf` are all rights reserved. Take the code,
not the curriculum vitae.
