import type { Linter } from "eslint";

const ESLINT_TYPESCRIPT_DECLARATION_CONFIG = {
  name: "typescript-declaration",
  files: ["**/*.d.ts"],
  rules: {
    "@typescript-eslint/naming-convention": "off",
  },
} satisfies Linter.Config;

export { ESLINT_TYPESCRIPT_DECLARATION_CONFIG };