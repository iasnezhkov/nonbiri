import { readdir, readFile } from 'node:fs/promises';

const css = await readFile('src/styles/fresh.css', 'utf8');
const defined = new Set([...css.matchAll(/\.([a-zA-Z][\w-]*)/g)].map((m) => m[1]!));

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else if (path.endsWith('.astro')) out.push(path);
  }
  return out;
}

const files = [...(await walk('src/pages')), ...(await walk('src/layouts'))];

let bad = 0;
for (const file of files) {
  const src = await readFile(file, 'utf8');
  const used = new Set<string>();

  for (const m of src.matchAll(/\sclass="([^"]*)"/g)) {
    for (const token of m[1]!.replace(/\{[^}]*\}/g, ' ').split(/\s+/)) {
      if (/^[a-zA-Z][\w-]*$/.test(token)) used.add(token);
    }
  }

  for (const m of src.matchAll(/class:list=\{\[([\s\S]*?)\]\}/g)) {
    const body = m[1]!.replace(/[!=]==?\s*['"`][^'"`]+['"`]/g, ' ');
    for (const lit of body.matchAll(/['"`]([^'"`]+)['"`]/g)) {
      for (const token of lit[1]!.split(/\s+/)) {
        if (/^[a-zA-Z][\w-]*$/.test(token)) used.add(token);
      }
    }
  }
  const missing = [...used].filter((c) => !defined.has(c));
  if (missing.length) {
    bad += missing.length;
    console.error(`✗ ${file}: ${missing.join(', ')}`);
  }
}

console.log(bad ? `\n${bad} undefined class(es)` : '✓ every class used in the pages is defined in fresh.css');
process.exit(bad ? 1 : 0);
