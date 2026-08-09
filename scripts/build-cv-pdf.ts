import { createServer } from 'node:http';
import { readFile, writeFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, extname } from 'node:path';
import { argv, exit } from 'node:process';
import { chromium } from 'playwright';

const ROOT = new URL('../', import.meta.url);
const DIST = fileURLToPath(new URL('dist/', ROOT));
const OUT = fileURLToPath(new URL('public/cv.pdf', ROOT));
const PORT = 4399;

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

try {
  await stat(join(DIST, 'cv', 'index.html'));
} catch {
  console.error('✗ dist/cv/index.html is missing — run `npm run build` first');
  exit(1);
}

const server = createServer(async (req, res) => {
  const url = (req.url ?? '/').split('?')[0] ?? '/';
  const candidates = [join(DIST, url), join(DIST, url, 'index.html')];

  for (const candidate of candidates) {
    try {
      const body = await readFile(candidate);
      res.writeHead(200, { 'content-type': MIME[extname(candidate)] ?? 'application/octet-stream' });
      res.end(body);
      return;
    } catch {
    }
  }

  res.writeHead(404).end('not found');
});

await new Promise<void>((resolve) => server.listen(PORT, resolve));

const browser = await chromium.launch({ channel: 'chrome' });
try {
  const page = await browser.newPage();
  await page.emulateMedia({ media: 'print', colorScheme: 'light' });
  await page.goto(`http://127.0.0.1:${PORT}/cv/`, { waitUntil: 'networkidle' });

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: false,
    preferCSSPageSize: true,
  });

  await writeFile(OUT, pdf);

  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
  console.log(`✓ wrote public/cv.pdf — ${pages} page(s), ${Math.round(pdf.length / 1024)} KB`);

  if (argv.includes('--check') && pages > 3) {
    console.error(`✗ ${pages} pages — a CV that runs past 3 pages stops being read`);
    exit(1);
  }
} finally {
  await browser.close();
  server.close();
}
