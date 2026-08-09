import { chromium, type Browser } from 'playwright';

const BASE = process.env.BASE ?? 'http://localhost:4321';
const ROUTE = process.env.ROUTE ?? '/gokaku';

const SHOTS = `[...document.querySelectorAll('img')]
  .filter((img) => img.className.startsWith('shot--'))
  .map((img) => {
    const box = img.getBoundingClientRect();
    return {
      file: img.currentSrc ? decodeURIComponent(img.currentSrc.split('/').pop()).split('.')[0] : null,
      dark: img.className.includes('shot--dark'),
      shown: getComputedStyle(img).display !== 'none',
      inView: box.bottom > 0 && box.top < window.innerHeight && box.width > 0,
    };
  })`;

type Shot = { file: string | null; dark: boolean; shown: boolean; inView: boolean };

const browser: Browser = await chromium.launch({ channel: 'chrome' });
let failures = 0;

function check(label: string, ok: boolean, detail: string) {
  if (!ok) failures++;
  console.log(`  ${ok ? '✓' : '✗'} ${label.padEnd(28)} ${detail}`);
}

const MIDDAY = '2026-03-11T13:00:00Z';
const EVENING = '2026-03-11T21:00:00Z';

async function scenario(name: string, os: 'light' | 'dark', stored: string | null, at: string) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: os,
    timezoneId: 'UTC',
  });
  await context.clock.setFixedTime(new Date(at));

  const fetched: string[] = [];
  context.on('request', (request) => {
    if (request.resourceType() === 'image') fetched.push(decodeURIComponent(request.url()));
  });

  const page = await context.newPage();
  await page.addInitScript(
    ([key, value]) => {
      if (value === null) localStorage.removeItem(key as string);
      else localStorage.setItem(key as string, value as string);
    },
    ['nonbiri-theme', stored] as const,
  );
  await page.goto(BASE + ROUTE, { waitUntil: 'networkidle' });

  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((done) => setTimeout(done, 120));
    }
  });
  await page.waitForLoadState('networkidle');

  const hour = new Date(at).getUTCHours();
  const wantsDark = stored ? stored === 'dark' : hour < 7 || hour >= 19;
  const shots = (await page.evaluate(SHOTS)) as Shot[];
  const shown = shots.filter((shot) => shot.shown);

  console.log(`\n${name}  (${String(hour).padStart(2, '0')}:00, OS ${os}, stored ${stored ?? 'none'})`);

  check(
    'right theme shown',
    shown.length > 0 && shown.every((shot) => shot.dark === wantsDark),
    `${shown.length} visible, all ${wantsDark ? 'dark' : 'light'}`,
  );

  const unwanted = fetched.filter((url) => /\/_astro\/\d\d-/.test(url) && /-dark\./.test(url) !== wantsDark);
  check(
    'hidden copy not fetched',
    unwanted.length === 0,
    unwanted.length === 0
      ? 'none'
      : unwanted.map((url) => url.split('/').pop()!.split('.')[0]).join(', '),
  );

  check('pairs actually loaded', shown.some((shot) => shot.file !== null), `${shown.filter((s) => s.file).length} decoded`);

  await context.close();
}

await scenario('midday, no override', 'dark', null, MIDDAY);
await scenario('evening, no override', 'light', null, EVENING);
await scenario('midday, forced dark', 'light', 'dark', MIDDAY);
await scenario('evening, forced light', 'dark', 'light', EVENING);

{
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: 'light',
    timezoneId: 'UTC',
  });
  await context.clock.setFixedTime(new Date(MIDDAY));
  const page = await context.newPage();
  await page.goto(BASE + ROUTE, { waitUntil: 'networkidle' });
  const before = (await page.evaluate(SHOTS)) as Shot[];
  await page.click('[data-theme-switch] button[data-theme-value="dark"]');
  await page.waitForFunction(
    () =>
      [...document.querySelectorAll('img.shot--dark')].some(
        (img) => getComputedStyle(img).display !== 'none' && (img as HTMLImageElement).complete,
      ),
    undefined,
    { timeout: 5000 },
  ).catch(() => {});
  const after = (await page.evaluate(SHOTS)) as Shot[];

  console.log('\nruntime toggle  (light → dark)');
  check(
    'swaps on click',
    before.filter((s) => s.shown).every((s) => !s.dark) && after.filter((s) => s.shown).every((s) => s.dark),
    'visible captures inverted',
  );
  const arrived = after.filter((shot) => shot.shown && shot.inView);
  check(
    'newly shown copy loads',
    arrived.length > 0 && arrived.every((shot) => shot.file !== null),
    `${arrived.filter((shot) => shot.file).length}/${arrived.length} in view decoded`,
  );
  await context.close();
}

await browser.close();
console.log(`\n${failures ? `✗ ${failures} failed` : '✓ all checks passed'}`);
process.exit(failures ? 1 : 0);
