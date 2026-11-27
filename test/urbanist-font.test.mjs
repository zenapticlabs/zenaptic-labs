import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const localFont = path.join(root, "public/fonts/urbanist-latin-variable.woff2");
const layouts = [
  path.join(root, "src/layouts/Layout.astro"),
  path.join(root, "src/components/Layout.astro"),
];
const globalStyles = path.join(root, "src/styles/global.css");

test("site layouts serve Urbanist from a local, preloaded font file", async () => {
  const [layoutSources, styleSource, font] = await Promise.all([
    Promise.all(layouts.map((layout) => readFile(layout, "utf8"))),
    readFile(globalStyles, "utf8"),
    stat(localFont),
  ]);

  assert.ok(font.size > 0, "the bundled Urbanist font must not be empty");
  for (const [index, layoutSource] of layoutSources.entries()) {
    assert.match(
      layoutSource,
      /rel="preload"\s+href="\/fonts\/urbanist-latin-variable\.woff2"\s+as="font"/,
      `${layouts[index]} must preload its local Urbanist file`,
    );
    assert.doesNotMatch(
      layoutSource,
      /fonts\.googleapis\.com\/css2\?family=Urbanist|fonts\.gstatic\.com\/s\/urbanist/i,
      `${layouts[index]} must not depend on a browser-specific Google-hosted Urbanist file`,
    );
  }
  assert.match(
    styleSource,
    /@font-face\s*\{[^}]*font-family:\s*["']Urbanist["'][^}]*font-style:\s*normal[^}]*font-weight:\s*100\s+900[^}]*font-display:\s*swap[^}]*url\(["']\/fonts\/urbanist-latin-variable\.woff2["']\)/s,
    "the local variable font must be available for every normal Urbanist weight",
  );
});
