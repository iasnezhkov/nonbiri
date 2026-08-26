import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { chromium } from 'playwright';
import { STATUS, type Status } from '../src/lib/status.ts';
import type { BrandName } from '../src/styles/tokens.d.ts';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, 'public', 'og');
const appsDir = path.join(root, 'src', 'content', 'apps');

interface Shade {
  light: string;
}

type Ink = 'paper' | 'paperDeep' | 'ink' | 'inkSoft' | 'faint';

const tokens = JSON.parse(await readFile(path.join(root, 'tokens.json'), 'utf8'));
const core: Record<Ink, Shade> = tokens.color.core;
const brands: Record<BrandName, { accent: Shade }> = tokens.color.brand;

interface Card {
  slug: string;
  brand: BrandName;
  eyebrow: string;
  title: string;
  kanji?: string;
  subtitle: string;
}

const FOLDED = new Set(['>', '>-', '|', '|-']);

const field = (frontmatter: string, key: string): string => {
  const opening = new RegExp(`^${key}: +(.+)$`, 'm').exec(frontmatter);
  if (!opening) return '';

  const value = opening[1]!.trim();
  if (!FOLDED.has(value)) return value.replace(/^["']|["']$/g, '');

  const after = frontmatter.slice(opening.index + opening[0].length).split('\n').slice(1);

  const lines: string[] = [];
  for (const line of after) {
    if (!/^\s+\S/.test(line)) break;
    lines.push(line.trim());
  }
  return lines.join(' ');
};

const appCards = async (): Promise<Card[]> => {
  const files = (await readdir(appsDir)).filter((name) => name.endsWith('.md'));

  const cards = await Promise.all(
    files.map(async (name) => {
      const source = await readFile(path.join(appsDir, name), 'utf8');
      const frontmatter = /^---\n([\s\S]*?)\n---/.exec(source)?.[1] ?? '';
      const brand = field(frontmatter, 'brand') as BrandName;
      const kanji = field(frontmatter, 'kanji');
      const eyebrow = STATUS.en[field(frontmatter, 'status') as Status];
      const title = field(frontmatter, 'name');
      const subtitle = field(frontmatter, 'tagline');

      if (!brand || !eyebrow || !title || !subtitle) {
        throw new Error(`${name}: needs a brand, a status, a name and a tagline to make a card`);
      }

      return {
        slug: brand,
        brand,
        eyebrow,
        title,
        ...(kanji ? { kanji } : {}),
        subtitle,
        order: Number(field(frontmatter, 'order')),
      };
    }),
  );

  return cards.sort((a, b) => a.order - b.order).map(({ order, ...card }) => card);
};

const CARDS: Card[] = [
  {
    slug: 'default',
    brand: 'nonbiri',
    eyebrow: 'Nonbiri — のんびり',
    title: 'Small apps,\nunhurried.',
    subtitle: 'Two apps for studying in Japan',
  },
  ...(await appCards()),
  {
    slug: 'about',
    brand: 'nonbiri',
    eyebrow: 'About',
    title: 'Ilia Snezhkov',
    subtitle: 'Backend and platform engineer — application security',
  },
];

const WIDTH = 1200;
const HEIGHT = 630;

const page = (card: Card): string => {
  const accent = brands[card.brand].accent.light;

  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin: 0; box-sizing: border-box; }
    body {
      width: ${WIDTH}px; height: ${HEIGHT}px;
      background: ${core.paper.light};
      color: ${core.ink.light};
      font-family: -apple-system, BlinkMacSystemFont, system-ui, 'Hiragino Sans', sans-serif;
      position: relative; overflow: hidden;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 72px 80px;
    }
    .print {
      position: absolute; inset: 0; opacity: .3;
      background-image:
        linear-gradient(to right,  ${accent}30 1px, transparent 1px),
        linear-gradient(to bottom, ${accent}30 1px, transparent 1px),
        linear-gradient(to right,  ${accent}55 1px, transparent 1px);
      background-size: 52px 52px, 52px 52px, 104px 100%;
      -webkit-mask-image: linear-gradient(to bottom, #000, rgba(0,0,0,.4) 55%, transparent 88%);
    }
    .wash {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 44% 48% at 78% 62%, ${core.paperDeep.light}, transparent 68%);
    }
    .kanji {
      position: absolute; right: -20px; top: 50%; translate: 0 -50%;
      font-family: ui-serif, 'Hiragino Mincho ProN', serif;
      font-size: ${card.kanji && card.kanji.length > 1 ? '210px' : '400px'};
      line-height: ${card.kanji && card.kanji.length > 1 ? '1' : '.8'};
      color: ${core.ink.light}; opacity: .07;
      ${card.kanji && card.kanji.length > 1 ? 'writing-mode: vertical-rl; white-space: nowrap;' : ''}
    }
    .body { position: relative; }
    .eyebrow {
      font-size: 19px; letter-spacing: .22em; text-transform: uppercase;
      color: ${core.faint.light}; display: flex; align-items: center; gap: 20px;
    }
    .eyebrow::before {
      content: ''; width: 54px; height: 1px; background: currentColor; opacity: .6;
    }
    h1 {
      font-family: 'Didot', 'Bodoni 72', ui-serif, Georgia, serif;
      font-weight: 400; font-size: 104px; line-height: .94; letter-spacing: -.02em;
      margin-top: 26px; white-space: pre-line;
    }
    .sub {
      margin-top: 28px; font-size: 26px; line-height: 1.5;
      color: ${core.inkSoft.light}; max-width: 30ch;
    }
    .mark {
      position: absolute; top: 60px; left: 80px;
      font-family: 'Didot', 'Bodoni 72', ui-serif, serif; font-size: 27px;
      letter-spacing: .04em;
    }
    .mark span {
      display: block; font-family: ui-serif, 'Hiragino Mincho ProN', serif;
      font-size: 14px; letter-spacing: .3em; color: ${core.faint.light}; margin-top: 3px;
    }
  </style></head><body>
    <div class="print"></div>
    <div class="wash"></div>
    ${card.kanji ? `<div class="kanji">${card.kanji}</div>` : ''}
    <div class="mark">Nonbiri<span>のんびり</span></div>
    <div class="body">
      <div class="eyebrow">${card.eyebrow}</div>
      <h1>${card.title}</h1>
      <div class="sub">${card.subtitle}</div>
    </div>
  </body></html>`;
};

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
const context = await browser.newContext({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 1,
});

for (const card of CARDS) {
  const tab = await context.newPage();
  await tab.setContent(page(card), { waitUntil: 'load' });
  await tab.evaluate(() => document.fonts.ready);
  const shot = await tab.screenshot({ type: 'png' });
  await writeFile(path.join(outDir, `${card.slug}.png`), shot);
  await tab.close();
  console.log(`✓ og/${card.slug}.png`);
}

await browser.close();
