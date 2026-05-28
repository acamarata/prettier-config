/**
 * Tests for @acamarata/prettier-config.
 *
 * Verifies that the config object exports the expected keys and that
 * per-file-type overrides are structured correctly.
 */

import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import config from "./index.js";

describe("@acamarata/prettier-config — base config", () => {
  it("exports an object", () => {
    assert.strictEqual(typeof config, "object");
    assert.notStrictEqual(config, null);
  });

  it("has printWidth", () => {
    assert.strictEqual(typeof config.printWidth, "number");
    assert.strictEqual(config.printWidth, 100);
  });

  it("has tabWidth", () => {
    assert.strictEqual(typeof config.tabWidth, "number");
    assert.strictEqual(config.tabWidth, 2);
  });

  it("has singleQuote", () => {
    assert.strictEqual(typeof config.singleQuote, "boolean");
    assert.strictEqual(config.singleQuote, false);
  });

  it("has trailingComma", () => {
    assert.strictEqual(typeof config.trailingComma, "string");
    assert.strictEqual(config.trailingComma, "all");
  });

  it("has semi", () => {
    assert.strictEqual(typeof config.semi, "boolean");
    assert.strictEqual(config.semi, true);
  });

  it("has endOfLine lf", () => {
    assert.strictEqual(config.endOfLine, "lf");
  });
});

describe("@acamarata/prettier-config — overrides", () => {
  it("exports an overrides array", () => {
    assert.ok(Array.isArray(config.overrides));
    assert.ok(config.overrides.length >= 3);
  });

  it("has markdown override with proseWrap always", () => {
    const md = config.overrides.find((o) =>
      (Array.isArray(o.files) ? o.files : [o.files]).some((f) =>
        f.includes("*.md"),
      ),
    );
    assert.ok(md, "markdown override not found");
    assert.strictEqual(md.options.proseWrap, "always");
  });

  it("has JSON override with no trailing comma", () => {
    const json = config.overrides.find((o) =>
      (Array.isArray(o.files) ? o.files : [o.files]).some((f) =>
        f.includes("*.json"),
      ),
    );
    assert.ok(json, "JSON override not found");
    assert.strictEqual(json.options.trailingComma, "none");
  });

  it("has YAML override with no trailing comma", () => {
    const yaml = config.overrides.find((o) =>
      (Array.isArray(o.files) ? o.files : [o.files]).some((f) =>
        f.includes("*.yaml"),
      ),
    );
    assert.ok(yaml, "YAML override not found");
    assert.strictEqual(yaml.options.trailingComma, "none");
  });
});
