import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { chromium } from 'playwright';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, 'public', 'og');

const tokens = JSON.parse(await readFile(path.join(root, 'tokens.json'), 'utf8'));
const core = tokens.color.core;
const brands = tokens.color.brand;

interface Card {
  slug: string;
  brand: keyof typeof brands;
  eyebrow: string;
  title: string;
  kanji?: string;
  subtitle: string;
}

const CARDS: Card[] = [
  {
    slug: 'default',
    brand: 'nonbiri',
    eyebrow: 'Nonbiri — のんびり',
    title: 'Small apps,\nunhurried.',
    subtitle: 'Two apps for studying in Japan',
  },
  {
    slug: 'suji',
    brand: 'suji',
    eyebrow: 'In development',
    title: 'Suji',
    kanji: '筋',
    subtitle: 'One iPad app for studying Japanese',
  },
  {
    slug: 'gokaku',
    brand: 'gokaku',
    eyebrow: 'Final testing',
    title: 'Gokaku',
    kanji: '合格',
    subtitle: 'A trainer for Japan’s written driving exam',
  },
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
