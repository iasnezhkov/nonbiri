# Contributing

This is one person's website, published so the work can be read rather than to
gather contributors. Pull requests changing the design, the copy or the
structure will be declined — not because they are unwelcome in spirit, but
because the whole point of the thing is that one person decided all of it.

Two kinds of report are genuinely useful, and both are better as an issue than
as a patch.

## A factual error

Especially in Gokaku. Every question in that app carries a verbatim quote from
the 教則 and the chapter it came from, pinned to the 49th revision of
13 November 2024. If a question and its citation disagree, that is a real defect
and I want to know. Quote the question and the reference.

The same goes for anything wrong in the Japanese, in the CV, or in the figures
on the app pages.

## Something broken

A page that renders wrong at some width, a link that goes nowhere, a header that
does not arrive. Say which browser and which width.

For anything exploitable, see [SECURITY.md](SECURITY.md) and email instead.

## If you want to reuse the code

You do not need to ask. The software is MIT — see [LICENSE](LICENSE) for what
that covers and what it does not. The content, the screenshots and the
curriculum vitae are not part of it.

## Running it

```bash
npm install
npm run dev            # localhost:4321
npm run check          # tokens · classes · artefacts · types
```

`npm run check` is what CI runs. If it passes locally it will pass there.
