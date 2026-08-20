#!/usr/bin/env node
// Runs the ACP Issue Bridge test suite under .github/scripts/issue-bridge/.
//
// Deliberately does NOT rely on `node --test <directory>` or a `**` glob
// string passed as a CLI argument — `node --test`'s handling of a
// dot-directory is NOT stable across Node versions, in two different,
// mutually-incompatible ways (both verified directly, 2026-08-19 — see
// arrakis-control-panel's scripts/run-tests.js for the full writeup of
// the same fix, needed there for the identical reason):
//   - Node 20: a bare directory path recurses into it correctly (dot-dirs
//     included), but a `**` glob string passed as a CLI arg is NOT
//     expanded — treated as a literal, nonexistent path.
//   - Node 22: the reverse — a bare dot-directory path is NOT recursed
//     into by default, but `--test` DOES expand a `**` glob string itself.
// This walks the directory itself (plain fs, no glob syntax) and passes
// the resulting file list explicitly, which is identical on both.

import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const ISSUE_BRIDGE_DIR = ".github/scripts/issue-bridge";

function findTestFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findTestFiles(full));
    } else if (entry.isFile() && entry.name.endsWith(".test.js")) {
      files.push(full);
    }
  }
  return files;
}

const files = findTestFiles(ISSUE_BRIDGE_DIR);
if (files.length === 0) {
  console.error(`FAIL: found 0 test files under ${ISSUE_BRIDGE_DIR} — this almost certainly means discovery is broken, not that there are no tests`);
  process.exit(1);
}

const result = spawnSync("node", ["--test", "--test-reporter=spec", ...files], { stdio: "inherit" });
process.exit(result.status ?? 1);
