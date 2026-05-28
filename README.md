# @acamarata/prettier-config

[![npm](https://img.shields.io/npm/v/@acamarata/prettier-config)](https://www.npmjs.com/package/@acamarata/prettier-config)
[![CI](https://github.com/acamarata/prettier-config/actions/workflows/ci.yml/badge.svg)](https://github.com/acamarata/prettier-config/actions/workflows/ci.yml)

Shared [Prettier](https://prettier.io) configuration for acamarata JavaScript and TypeScript packages.

## Install

```bash
npm install --save-dev @acamarata/prettier-config prettier
```

Or with pnpm:

```bash
pnpm add -D @acamarata/prettier-config prettier
```

Prettier 3.x is required as a peer dependency.

## Usage

Reference the package in your `package.json`:

```json
{
  "prettier": "@acamarata/prettier-config"
}
```

That is all you need for the defaults. Prettier reads the `prettier` field and loads the config automatically.

## Defaults

| Option | Value |
|---|---|
| `printWidth` | `100` |
| `tabWidth` | `2` |
| `useTabs` | `false` |
| `singleQuote` | `false` |
| `trailingComma` | `"all"` |
| `semi` | `true` |
| `bracketSpacing` | `true` |
| `arrowParens` | `"always"` |
| `endOfLine` | `"lf"` |

### File-type overrides

| File pattern | Override |
|---|---|
| `*.md`, `*.mdx` | `printWidth: 80`, `proseWrap: "always"`, `trailingComma: "none"` |
| `*.json`, `*.jsonc` | `trailingComma: "none"` |
| `*.yaml`, `*.yml` | `singleQuote: true`, `trailingComma: "none"` |

## Extending

If you need to override specific options, use a `prettier.config.mjs` file in your project:

```js
import acamarataConfig from "@acamarata/prettier-config";

/** @type {import("prettier").Config} */
export default {
  ...acamarataConfig,
  // Your overrides here
  printWidth: 120,
};
```

Note: the `prettier` field in `package.json` does not support extending. Use a config file
when you need project-specific overrides.

## License

MIT
