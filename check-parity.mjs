#!/usr/bin/env node
import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('.', import.meta.url).pathname;
const I18N_DIR = join(ROOT, 'i18n');
// Each English source tree and where its translations live under i18n/<locale>/ (the docs at /docs, the legal
// pages at /legal).
const TREES = [
  { src: 'docs', tr: 'docusaurus-plugin-content-docs/current' },
  { src: 'legal', tr: 'docusaurus-plugin-content-docs-legal/current' },
];

function walkMd(dir, base) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name.startsWith('.')) continue;
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...walkMd(join(dir, e.name), rel));
    else if (/\.mdx?$/.test(e.name)) out.push(rel);
  }
  return out.sort();
}

// Disabled, not removed: the pages stay, but a new English page no longer has to be added to them.
// Remove a code from this set to re-enable its parity check.
const DISABLED_LOCALES = new Set(['ar']);

const locales = readdirSync(I18N_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !DISABLED_LOCALES.has(d.name)).map((d) => d.name).sort();

let failed = false;
let sources = 0;
for (const tree of TREES) {
  const src = new Set(walkMd(join(ROOT, tree.src)));
  sources += src.size;
  for (const locale of locales) {
    const tr = new Set(walkMd(join(I18N_DIR, locale, tree.tr)));
    const miss = [...src].filter((f) => !tr.has(f));
    const ext  = [...tr].filter((f) => !src.has(f));
    if (miss.length) { console.error(`MISSING in ${locale}/${tree.tr}:`, miss.join(', ')); failed = true; }
    if (ext.length)  { console.error(`EXTRA in ${locale}/${tree.tr}:`, ext.join(', ')); failed = true; }
  }
}

if (failed) { console.error('\nFile parity check FAILED.'); process.exit(1); }
console.log(`File parity PASSED (${locales.length} locale(s), ${sources} source file(s); skipped disabled: ${[...DISABLED_LOCALES].join(', ') || 'none'}).`);
