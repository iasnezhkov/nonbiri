# Security policy

## Reporting

Email **iasnezhkov@gmail.com**. The same address is published at
[`/.well-known/security.txt`](https://nonbiri.dev/.well-known/security.txt).

Include the URL or file, what you did, and what happened. A proof of concept is
welcome but not required. Expect an acknowledgement within a few days; this is a
personal project, not a staffed inbox.

Please do not open a public issue for anything exploitable.

## Scope

In scope — this repository and the site it builds:

- the built pages at `nonbiri.dev`
- the response headers in `public/_headers`, including the Content Security
  Policy and HSTS
- the two hand-written scripts, `public/theme.js` and `public/lang.js`
- the build scripts under `scripts/`

Out of scope:

- the Suji and Gokaku applications, which live in their own repositories
- Cloudflare Pages itself — report those to Cloudflare
- findings that require a compromised device or a modified browser
- missing headers with no demonstrated impact on a site that ships no bundled
  JavaScript, sets no cookies and stores nothing but two `localStorage` keys

## What this site does not do

Useful context before testing: there is no backend, no database, no login, no
form, no cookie, no analytics and no third-party script. Every page is static
and content-hashed at build time. The CSP is `default-src 'none'` with no
`'unsafe-inline'`.

That removes most of the usual surface, and it means a finding here is more
likely to be a header or a build-pipeline issue than an injection.
