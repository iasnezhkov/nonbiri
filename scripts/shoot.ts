import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import { serveDist } from './serve.ts';

const server = await serveDist(4331);

const BASE = process.env.BASE ?? 'http://127.0.0.1:4331';
const OUT = '.shots';

const ROUTES = [
  '/',
  '/suji',
  '/gokaku',
  '/about',
  '/cv',
  '/gokaku/privacy',
  '/gokaku/terms',
  '/gokaku/support',
  '/suji/privacy',
  '/suji/terms',
  '/suji/support',
  '/404',
  '/ja',
  '/ja/suji',
  '/ja/gokaku',
  '/ja/about',
  '/ja/cv',
  '/ja/gokaku/privacy',
  '/ja/gokaku/terms',
  '/ja/gokaku/support',
  '/ja/suji/privacy',
  '/ja/suji/terms',
  '/ja/suji/support',
  '/ja/404',
];
const WIDTHS = [2560, 1920, 1440, 1100, 820, 390, 320];

const PROBE = [
  '.micro',
  '.note',
  '.read',
  '.mag-1',
  '.mag-2',
  '.mag-3',
  '.entry__n',
  '.figure',
  '.plate figcaption',
  '.statement__t',
  '.cv__role-title',
  '.cv__role-meta',
].join(',');

const COVERAGE = `(() => {
  const out = [];
  document.querySelectorAll('main section').forEach((sec, i) => {
    const box = sec.getBoundingClientRect();
    let ink = 0;
    let top = Infinity;
    const walker = document.createTreeWalker(sec, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (!n.textContent.trim()) continue;
      const range = document.createRange();
      range.selectNodeContents(n);
      for (const r of range.getClientRects()) {
        if (!r.width || !r.height) continue;
        ink += r.width * r.height;
        top = Math.min(top, r.top);
      }
    }
    sec.querySelectorAll('img').forEach((img) => {
      const r = img.getBoundingClientRect();
      if (r.width && r.height) { ink += r.width * r.height; top = Math.min(top, r.top); }
    });
    out.push({
      i,
      height: Math.round(box.height),
      padTop: Number.isFinite(top) ? Math.round(top - box.top) : -1,
      coverage: +((ink / (box.width * box.height)) * 100).toFixed(1),
      label: sec.querySelector('.micro')?.textContent?.trim().slice(0, 24) ?? '—',
    });
  });
  return out;
})()`;

const wantShots = process.argv.includes('--shots');
const wantCoverage = process.argv.includes('--coverage');
if (wantShots) await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
let failures = 0;

for (const width of WIDTHS) {
  const context = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await context.newPage();
  await page.addInitScript(() => localStorage.setItem('nonbiri-theme', 'light'));

  const problems: string[] = [];

  for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: 'networkidle' });

    const report = await page.evaluate((selector) => {
      const boxes = [...document.querySelectorAll(selector)]
        .map((el) => ({ el, rect: el.getBoundingClientRect() }))
        .filter((entry) => entry.rect.width > 0 && entry.rect.height > 0);

      const hits: string[] = [];
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i]!;
          const b = boxes[j]!;
          if (a.el.contains(b.el) || b.el.contains(a.el)) continue;
          const dx = Math.min(a.rect.right, b.rect.right) - Math.max(a.rect.left, b.rect.left);
          const dy = Math.min(a.rect.bottom, b.rect.bottom) - Math.max(a.rect.top, b.rect.top);
          if (dx > 2 && dy > 2) {
            hits.push(`${a.el.className.split(' ')[0]}×${b.el.className.split(' ')[0]}`);
          }
        }
      }

      return {
        hits: [...new Set(hits)],
        overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        height: document.body.scrollHeight,
      };
    }, PROBE);

    if (report.hits.length) problems.push(`${route} ${report.hits.join(',')}`);
    if (report.overflow) problems.push(`${route} H-OVERFLOW`);

    if (wantCoverage && width === 1440) {
      const sections = (await page.evaluate(COVERAGE)) as Array<{
        i: number;
        height: number;
        padTop: number;
        coverage: number;
        label: string;
      }>;
      console.log(`\n  ${route}`);
      for (const s of sections) {
        const flag = s.coverage < 15 ? '  ← thin' : '';
        console.log(
          `    §${s.i} h=${String(s.height).padStart(4)} padTop=${String(s.padTop).padStart(3)}` +
            ` ink=${String(s.coverage).padStart(5)}%  "${s.label}"${flag}`,
        );
      }
    }

    if (wantShots) {
      await page.evaluate(async () => {
        document.querySelectorAll('img').forEach((img) => img.setAttribute('loading', 'eager'));
        await Promise.all(
          [...document.querySelectorAll('img')].map((img) =>
            (img as HTMLImageElement).decode().catch(() => {}),
          ),
        );
      });
      const name = route === '/' ? 'home' : route.replace(/\//g, '-').slice(1);
      await page.screenshot({ path: `${OUT}/${width}-${name}.png`, fullPage: true });
    }
  }

  failures += problems.length;
  console.log(
    `${String(width).padStart(4)}px  ${problems.length ? `⚠ ${problems.join(' | ')}` : 'clean'}`,
  );

  await context.close();
}

await browser.close();
server.close();
process.exit(failures ? 1 : 0);
