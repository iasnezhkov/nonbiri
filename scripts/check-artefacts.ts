import { execFileSync } from 'node:child_process';
import { readdir, stat } from 'node:fs/promises';

interface Artefact {
  out: string;
  sources: string[];
  command: string;
}

const ARTEFACTS: Artefact[] = [
  {
    out: 'public/cv.pdf',
    sources: ['src/data/cv.ts', 'src/pages/cv.astro', 'src/styles/fresh.css', 'tokens.json'],
    command: 'npm run cv:pdf',
  },
  {
    out: 'public/og',
    sources: ['scripts/build-og.ts', 'tokens.json', 'src/content/apps'],
    command: 'npm run og',
  },
];

function git(args: string[]): string | null {
  try {
    return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return null;
  }
}

const inRepo = git(['rev-parse', '--is-inside-work-tree']) !== null;

/**
 * A checkout gives every file the same mtime in arbitrary order, so on CI the
 * filesystem cannot say which of two files changed first. History can: for a
 * path with no pending edits, the commit that last touched it is the answer.
 * Anything dirty or untracked is still measured from the filesystem, which is
 * what makes this useful while working.
 */
function committedAt(path: string): number | null {
  if (!inRepo) return null;
  if ((git(['status', '--porcelain', '--', path]) ?? '').trim() !== '') return null;
  const seconds = (git(['log', '-1', '--format=%ct', '--', path]) ?? '').trim();
  return seconds ? Number(seconds) * 1000 : null;
}

async function fsTime(path: string, pick: 'newest' | 'oldest'): Promise<number> {
  const info = await stat(path);
  if (!info.isDirectory()) return info.mtimeMs;

  const entries = await readdir(path, { withFileTypes: true });
  const times = await Promise.all(entries.map((entry) => fsTime(`${path}/${entry.name}`, pick)));
  if (times.length === 0) return 0;
  return pick === 'newest' ? Math.max(...times) : Math.min(...times);
}

async function timeOf(path: string, pick: 'newest' | 'oldest'): Promise<number> {
  return committedAt(path) ?? (await fsTime(path, pick));
}

let stale = 0;

for (const artefact of ARTEFACTS) {
  const built = await timeOf(artefact.out, 'oldest').catch(() => 0);
  if (!built) {
    console.error(`✗ ${artefact.out} is missing — run \`${artefact.command}\``);
    stale += 1;
    continue;
  }

  for (const source of artefact.sources) {
    const changed = await timeOf(source, 'newest');
    if (changed > built) {
      const days = Math.round((changed - built) / 86_400_000);
      console.error(
        `✗ ${artefact.out} is older than ${source}` +
          `${days ? ` by ${days}d` : ''} — run \`${artefact.command}\``,
      );
      stale += 1;
      break;
    }
  }
}

console.log(stale ? `\n${stale} stale artefact(s)` : '✓ generated artefacts are current');
process.exit(stale ? 1 : 0);
