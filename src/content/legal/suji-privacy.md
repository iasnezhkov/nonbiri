---
title: Privacy Policy
app: suji
kind: privacy
effectiveDate: 2026-08-01
version: '0.9'
---

Suji does not track you and does not sell or share anything with advertisers.
There are no advertising identifiers, no analytics SDKs and no tracking domains.
What follows is what it does store, and why.

## What stays on your device

The reference content ships inside the app: 13,108 kanji, 31,151 dictionary
entries, 684 grammar patterns and 613,270 proper-name readings. None of it is
fetched, and looking anything up requires no network at all.

Your work lives in a local database first — review history, handwriting attempts,
imported material and settings. The app is designed to be fully usable offline and
reconciles later.

## What is collected

Declared in the app's privacy manifest, all with tracking disabled:

| Data | Linked to you | Why |
| --- | --- | --- |
| Email address | Yes | Signing in with Apple or a magic link |
| User ID | Yes | Identifying your account for sync |
| Photos | No | Only pictures you pick for OCR import |
| Other user content | Yes | Your sets, homework, messages and attachments |

Your learning data synchronises to Supabase so it survives a lost device and so a
teacher you have connected to can see the progress you share with them.

## What a teacher can see

If you join a teacher, they see the progress and submissions relevant to your
lessons. Access is enforced at the database level by row-level security scoped to
the teacher-student relationship — one teacher cannot reach another's students.

## Permissions

Each is requested only in context, and the app works without them:

- **Camera and photo library** — capturing pages of text for OCR import. The app
  never reads photos you do not choose.
- **Microphone and speech recognition** — conversation practice, converting your
  spoken Japanese into text.
- **Calendar** — write-only, to add scheduled lessons. Existing events are never
  read.

## AI features

Some explanations and checks run on an on-device model, with no data leaving the
device. Where a cloud model is used, the request is validated first and only the
text needed for that request is sent.

## Deleting your account

Deletion is available inside the app. It removes your row on the backend, and a
foreign-key cascade erases every table of your data; the auth user is then deleted
and the app wipes its local database and signs out. Deleting the app alone removes
the local copy.

## Contact

[iasnezhkov@gmail.com](mailto:iasnezhkov@gmail.com)
