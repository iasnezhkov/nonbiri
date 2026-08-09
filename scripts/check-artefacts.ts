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

async function newest(path: string): Promise<number> {
  const info = await stat(path);
  if (!info.isDirectory()) return info.mtimeMs;
  let latest = 0;
  for (const entry of await readdir(path, { withFileTypes: true })) {
    latest = Math.max(latest, await newest(`${path}/${entry.name}`));
  }
  return latest;
}

async function oldest(path: string): Promise<number> {
  const info = await stat(path);
  if (!info.isDirectory()) return info.mtimeMs;
  let earliest = Infinity;
  for (const entry of await readdir(path, { withFileTypes: true })) {
    earliest = Math.min(earliest, await oldest(`${path}/${entry.name}`));
  }
  return earliest === Infinity ? 0 : earliest;
}

let stale = 0;

for (const artefact of ARTEFACTS) {
  const built = await oldest(artefact.out).catch(() => 0);
  if (!built) {
    console.error(`✗ ${artefact.out} is missing — run \`${artefact.command}\``);
    stale += 1;
    continue;
  }

  for (const source of artefact.sources) {
    const changed = await newest(source);
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
