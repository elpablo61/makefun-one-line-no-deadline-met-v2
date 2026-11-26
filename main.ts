// One Line, No Deadline Met — v2
// Writes one single-line joke excusing a missed deadline to /output/entry.txt.
// The line is a single sentence: a named room, a concrete scene, one turn,
// and the punch lands at the end — nothing explained, nothing extra.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I missed it because I was early for the wrong meeting — I sat in Room 4 for an hour, nodding along to a budget review for a team I have never met.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
