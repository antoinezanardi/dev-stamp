import type { Linter } from "eslint";

const ESLINT_UNIT_TESTS_SETUP_CONFIG = {
  name: "unit-tests-setup",
  files: ["tests/unit/setup.ts"],
  rules: {
    "@typescript-eslint/no-unsafe-type-assertion": "off",
  },
} satisfies Linter.Config;

export { ESLINT_UNIT_TESTS_SETUP_CONFIG };