import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { foldCjk } from './lib/cjk.ts';

const japaneseProse = () => z.string().transform(foldCjk);

const brand = z.enum(['suji', 'gokaku']);
const platform = z.enum(['iOS', 'iPadOS', 'macOS', 'Android']);
const status = z.enum(['in-development', 'testing', 'released']);
const device = z.enum(['iphone', 'ipad', 'ipad-landscape']);

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      kanji: z.string().optional(),
      tagline: z.string(),
      summary: z.string(),
      brand,
      platforms: z.array(platform).nonempty(),
      status,
      features: z.array(z.object({ title: z.string(), body: z.string() })).nonempty(),
      statement: z.string().optional(),
      facts: z
        .array(z.object({ label: z.string(), value: z.string(), group: z.string().optional() }))
        .default([]),
      /** The long-form capability list. Suji uses it instead of `facts`. */
      capabilities: z
        .array(z.object({ group: z.string(), items: z.array(z.string()).nonempty() }))
        .default([]),
      shots: z
        .array(
          z.object({
            src: image(),
            srcDark: image().optional(),
            alt: z.string(),
            caption: z.string(),
            device,
            /** True when the image already includes the device body. */
            framed: z.boolean().default(false),
          }),
        )
        .default([]),
      /** Index into `shots`: the frame that leads on the home and app pages. */
      hero: z.number().int().nonnegative().default(0),
      notes: z.array(z.object({ term: z.string(), body: z.string() })).default([]),
      sample: z
        .object({
          claim: z.string(),
          correct: z.boolean(),
          note: z.string(),
          ruleEn: z.string(),
          /** The 教則's own wording, transcribed verbatim — never translated. */
          ruleJa: z.string().optional(),
          reference: z.string(),
          edition: z.string(),
        })
        .optional(),
      disclaimer: z.string().optional(),
      tech: z.array(z.string()).nonempty(),
      languages: z.array(z.string()).default([]),
      links: z
        .object({
          appStore: z.url().optional(),
          playStore: z.url().optional(),
          testFlight: z.url().optional(),
        })
        .default({}),
      /**
       * Prose only. Numbers, screenshots and the tech list are language-neutral
       * and are never duplicated here. Absent means no Japanese page is built.
       */
      ja: z
        .object({
          name: z.string(),
          tagline: japaneseProse(),
          summary: japaneseProse(),
          statement: japaneseProse().optional(),
          features: z
            .array(z.object({ title: japaneseProse(), body: japaneseProse() }))
            .nonempty(),
          /** Keyed by the English group name and label respectively. */
          factGroups: z.record(z.string(), z.string()).default({}),
          factLabels: z.record(z.string(), z.string()).default({}),
          captions: z.array(japaneseProse()).default([]),
          capabilities: z
            .array(z.object({ group: z.string(), items: z.array(japaneseProse()).nonempty() }))
            .default([]),
          body: japaneseProse(),
          disclaimer: japaneseProse().optional(),
          sample: z.object({ claim: japaneseProse(), note: japaneseProse() }).optional(),
          notes: z.array(z.object({ term: z.string(), body: japaneseProse() })).default([]),
        })
        .optional(),
      order: z.number().int().default(99),
    }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    app: brand.optional(),
    kind: z.enum(['privacy', 'terms', 'support']),
    lang: z.enum(['en', 'ja']).default('en'),
    effectiveDate: z.coerce.date(),
    version: z.string(),
  }),
});

export const collections = { apps, legal };
