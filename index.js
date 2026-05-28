/**
 * Purpose: Shared Prettier configuration for all acamarata JS/TS packages.
 * Inputs: none — this file is consumed via the "prettier" field in package.json.
 * Outputs: a Prettier config object with base settings and per-file-type overrides.
 * Constraints: Prettier 3.x required (see peerDependencies). The overrides array
 *   is evaluated in order; later entries win on conflict.
 * SPORT: packages.md — @acamarata/prettier-config
 */

/** @type {import("prettier").Config} */
const config = {
  // Base formatting rules
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "all",
  semi: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",

  // Per-file-type overrides
  overrides: [
    {
      // Markdown: narrower width, no trailing comma, preserve prose wrapping
      files: ["*.md", "*.mdx"],
      options: {
        printWidth: 80,
        proseWrap: "always",
        trailingComma: "none",
      },
    },
    {
      // JSON: no trailing comma (JSON spec disallows it)
      files: ["*.json", "*.jsonc"],
      options: {
        trailingComma: "none",
      },
    },
    {
      // YAML: single quotes match most YAML authoring conventions
      files: ["*.yaml", "*.yml"],
      options: {
        singleQuote: true,
        trailingComma: "none",
      },
    },
  ],
};

export default config;
