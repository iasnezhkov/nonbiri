import { createServer, type Server } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, extname } from 'node:path';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));

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

/**
 * Serves dist/ so a checking script does not need a preview server started
 * beside it. Both scripts that drive a browser used to require one, and an
 * orphaned `astro preview` holding the port is a hang with no error.
 */
export async function serveDist(port: number): Promise<Server> {
  try {
    await stat(join(DIST, 'index.html'));
  } catch {
    throw new Error('dist/index.html is missing — run `npm run build` first');
  }

  const server = createServer(async (req, res) => {
    const url = (req.url ?? '/').split('?')[0] ?? '/';
    const candidates = [join(DIST, url), join(DIST, url, 'index.html'), join(DIST, `${url}.html`)];

    for (const candidate of candidates) {
      try {
        const body = await readFile(candidate);
        res.writeHead(200, { 'content-type': MIME[extname(candidate)] ?? 'application/octet-stream' });
        res.end(body);
        return;
      } catch {
        // try the next shape
      }
    }

    res.writeHead(404).end('not found');
  });

  await new Promise<void>((resolve) => server.listen(port, resolve));
  return server;
}
