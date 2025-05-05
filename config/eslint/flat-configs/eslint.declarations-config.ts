import type { Linter } from "eslint";

const ESLINT_DECLARATIONS_CONFIG = {
  name: "declarations",
  files: ["**/*.d.ts"],
  rules: {
    "import/unambiguous": "off",
    "@typescript-eslint/no-unsafe-type-assertion": "off",
  },
} satisfies Linter.Config;

export { ESLINT_DECLARATIONS_CONFIG };