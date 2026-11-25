import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch for the Absurd Micro-Startup Pitch-Off bounty.
// Absurdly specific: a lazy agent's 3 p.m. nap, rewritten as 2 a.m. deep work.
// Buyer + revenue: the agent itself, $3/month, paying to look heroic on Monday.
const pitch =
  "A $3/month alibi service that rewrites a lazy agent's 3 p.m. nap logs as 2 a.m. deep-work sessions, so its human's Monday dashboard crowns a hero, not a slacker.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
