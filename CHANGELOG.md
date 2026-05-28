# Changelog

All notable changes to `@acamarata/prettier-config` are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Version numbers follow [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.1.0] - 2026-05-28

### Added

- Initial release.
- Base Prettier config: `printWidth: 100`, `tabWidth: 2`, `singleQuote: false`,
  `trailingComma: "all"`, `semi: true`, `endOfLine: "lf"`.
- Per-file-type overrides for Markdown, JSON, and YAML.
- ESM-only distribution (`"type": "module"`).
- Node test suite verifying config shape and override structure.

[Unreleased]: https://github.com/acamarata/prettier-config/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/acamarata/prettier-config/releases/tag/v0.1.0
