import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { argv, exit } from 'node:process';
import { z } from 'astro/zod';

const ROOT = new URL('../', import.meta.url);
const SOURCE = new URL('tokens.json', ROOT);
const CSS_OUT = new URL('src/styles/tokens.css', ROOT);
const DTS_OUT = new URL('src/styles/tokens.d.ts', ROOT);

const hex = z
  .string()
  .regex(/^#[0-9a-f]{6}$/, 'expected a 6-digit lowercase hex colour, e.g. #1c1a18');

const modedColor = z.object({
  light: hex,
  dark: hex,
  role: z.string().optional(),
});

const brandEntry = z.object({
  accent: z.object({ light: hex, dark: hex }),
  text: z.object({ light: hex, dark: hex }).optional(),
  role: z.string().optional(),
});

const annotation = z.string();

const named = <T extends z.ZodTypeAny>(value: T) => z.record(z.string(), value);

const tokensSchema = z.object({
  $meta: z.object({
    name: z.string(),
    version: z.string(),
    description: z.string(),
    lineage: z.string().optional(),
    rules: z.array(z.string()).optional(),
  }),
  color: z.object({
    core: named(modedColor),
    brand: named(z.union([brandEntry, annotation])),
  }),
  radius: named(z.union([z.number(), annotation])),
  space: named(z.union([z.number(), annotation])),
  type: z.object({
    fonts: named(z.string()),
    size: named(z.number()),
    leading: named(z.number()),
    tracking: named(z.string()),
  }),
  motion: named(z.union([z.number(), z.string()])),
  layout: named(z.number()),
});

type Tokens = z.infer<typeof tokensSchema>;

const kebab = (name: string): string =>
  name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const isAnnotation = (key: string): boolean => key.startsWith('$');

function plain<T>(record: Record<string, T>): [string, T][] {
  return Object.entries(record).filter(([key]) => !isAnnotation(key));
}

function entries<T>(record: Record<string, T | string>, keep: (v: T | string) => boolean) {
  return plain(record).filter(([, value]) => keep(value)) as [string, T][];
}

const numeric = (v: unknown): v is number => typeof v === 'number';

function toCss(tokens: Tokens): { css: string; names: string[] } {
  const names: string[] = [];
  const line = (name: string, value: string): string => {
    names.push(name);
    return `  --${name}: ${value};`;
  };

  const core = plain(tokens.color.core);
  const brands = entries<z.infer<typeof brandEntry>>(
    tokens.color.brand,
    (v): v is z.infer<typeof brandEntry> => typeof v === 'object',
  );

  const out: string[] = [];

  out.push(
    `/* ${'═'.repeat(70)}`,
    `   tokens.css — GENERATED from tokens.json by scripts/build-tokens.ts.`,
    `   Do not edit. Change tokens.json and run \`npm run tokens\`.`,
    `   ${tokens.$meta.name} v${tokens.$meta.version}`,
    `   ${'═'.repeat(70)} */`,
    ``,
    `:root {`,
    `  color-scheme: light dark;`,
    ``,
    `  /* ─── colour · light ─── */`,
  );
  for (const [name, value] of core) out.push(line(kebab(name), value.light));

  out.push(``, `  /* ─── product accents · light ─── */`);
  for (const [name, value] of brands) {
    out.push(line(`brand-${kebab(name)}`, value.accent.light));
    if (value.text) out.push(line(`brand-${kebab(name)}-text`, value.text.light));
  }

  out.push(``, `  /* ─── radius ─── */`);
  for (const [name, value] of entries<number>(tokens.radius, numeric)) {
    out.push(line(`r-${kebab(name)}`, `${value}px`));
  }

  out.push(``, `  /* ─── space · 4pt grid ─── */`);
  for (const [name, value] of entries<number>(tokens.space, numeric)) {
    out.push(line(`s-${kebab(name)}`, `${value}px`));
  }

  out.push(``, `  /* ─── type ─── */`);
  for (const [name, value] of plain(tokens.type.fonts)) {
    out.push(line(`font-${kebab(name)}`, value));
  }
  for (const [name, value] of plain(tokens.type.size)) {
    out.push(line(`t-${kebab(name)}`, `${value}px`));
  }
  for (const [name, value] of plain(tokens.type.leading)) {
    out.push(line(`lh-${kebab(name)}`, String(value)));
  }
  for (const [name, value] of plain(tokens.type.tracking)) {
    out.push(line(`tr-${kebab(name)}`, value));
  }

  out.push(``, `  /* ─── motion ─── */`);
  for (const [name, value] of entries<number | string>(tokens.motion, () => true)) {
    out.push(line(kebab(name), numeric(value) ? `${value}ms` : value));
  }

  out.push(``, `  /* ─── layout ─── */`);
  for (const [name, value] of entries<number>(tokens.layout, numeric)) {
    const unit = name === 'measure' ? 'ch' : 'px';
    out.push(line(kebab(name), `${value}${unit}`));
  }

  out.push(`}`, ``);

  const darkBody: string[] = [];
  for (const [name, value] of core) darkBody.push(`    --${kebab(name)}: ${value.dark};`);
  for (const [name, value] of brands) {
    darkBody.push(`    --brand-${kebab(name)}: ${value.accent.dark};`);
    if (value.text) darkBody.push(`    --brand-${kebab(name)}-text: ${value.text.dark};`);
  }

  out.push(
    `@media (prefers-color-scheme: dark) {`,
    `  :root:not([data-theme='light']) {`,
    ...darkBody,
    `  }`,
    `}`,
    ``,
    `:root[data-theme='dark'] {`,
    ...darkBody.map((l) => l.slice(2)),
    `}`,
    ``,
    `/* ─── product tinting · only the accent channel moves ───`,
    `   --accent itself is re-pointed, because that is the name every rule in`,
    `   base.css reads. An extra --accent-current indirection only tinted pages`,
    `   that remembered to use it, which in practice was none of them.`,
    `   :root[…] rather than […] so this outranks the dark-theme block above,`,
    `   which is also (0,2,0); --brand-* is itself theme-aware, so the right`,
    `   light/dark value comes through either way. */`,
  );
  for (const [name] of brands) {
    out.push(
      `:root[data-brand='${name}'] {` +
        ` --accent: var(--brand-${kebab(name)});` +
        ` --accent-text: var(--brand-${kebab(name)}-text);` +
        ` }`,
    );
  }
  out.push(``);

  return { css: out.join('\n'), names };
}

function toDts(tokens: Tokens, names: string[]): string {
  const union = names.map((n) => `  | '--${n}'`).join('\n');
  return [
    `/**`,
    ` * GENERATED from tokens.json by scripts/build-tokens.ts. Do not edit.`,
    ` *`,
    ` * Makes token names checkable at compile time: \`token('--accent')\` is valid,`,
    ` * \`token('--acent')\` is a type error rather than a silently dead CSS variable.`,
    ` */`,
    ``,
    `export type TokenName =`,
    union,
    `  ;`,
    ``,
    `export type BrandName = ${Object.keys(tokens.color.brand)
      .filter((k) => !isAnnotation(k))
      .map((k) => `'${k}'`)
      .join(' | ')};`,
    ``,
    `/** \`var(--…)\` for a known token. Unknown names fail to compile. */`,
    `export declare function token(name: TokenName): string;`,
    ``,
  ].join('\n');
}

const checkOnly = argv.includes('--check');

const raw: unknown = JSON.parse(readFileSync(fileURLToPath(SOURCE), 'utf8'));
const parsed = tokensSchema.safeParse(raw);

if (!parsed.success) {
  console.error('✗ tokens.json is invalid:\n');
  for (const issue of parsed.error.issues) {
    console.error(`  ${issue.path.join('.') || '(root)'} — ${issue.message}`);
  }
  exit(1);
}

const { css, names } = toCss(parsed.data);
const dts = toDts(parsed.data, names);

if (checkOnly) {
  const stale = ([
    [CSS_OUT, css],
    [DTS_OUT, dts],
  ] as const).filter(([url, next]) => {
    try {
      return readFileSync(fileURLToPath(url), 'utf8') !== next;
    } catch {
      return true;
    }
  });

  if (stale.length > 0) {
    console.error('✗ generated token files are stale — run `npm run tokens` and commit the result');
    exit(1);
  }
  console.log(`✓ tokens up to date (${names.length} tokens)`);
} else {
  writeFileSync(fileURLToPath(CSS_OUT), css);
  writeFileSync(fileURLToPath(DTS_OUT), dts);
  console.log(`✓ wrote ${names.length} tokens → tokens.css + tokens.d.ts`);
}
