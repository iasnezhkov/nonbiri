import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { exit } from 'node:process';

const CYRILLIC = /[\u0400-\u052F]/;
const BINARY = /\.(png|jpe?g|webp|gif|ico|pdf|zip|woff2?|ttf|otf)$/i;

let files: string[];
try {
  files = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], {
    encoding: 'utf8',
  })
    .split('\n')
    .filter((name) => name && !BINARY.test(name));
} catch {
  console.log('· not a git repository — language check skipped');
  exit(0);
}

const offenders = files.filter((name) => {
  try {
    return CYRILLIC.test(readFileSync(name, 'utf8'));
  } catch {
    return false;
  }
});

if (offenders.length > 0) {
  console.error('✗ Cyrillic found in files that would be committed:');
  for (const name of offenders) console.error(`    ${name}`);
  console.error('  The site ships English and Japanese. Working notes belong in notes/ or TODO.md.');
  exit(1);
}

console.log(`✓ no working notes among the ${files.length} files that would be committed`);
