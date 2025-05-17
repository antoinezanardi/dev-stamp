import type { Linter } from "eslint";

const ESLINT_CLASSES_CONFIG = {
  name: "classes",
  files: [
    "**/*.class.ts",
    "**/*.dto.ts",
  ],
  rules: { "new-cap": ["off", { capIsNewExceptions: ["Type", "Expose"] }] },
} satisfies Linter.Config;

export { ESLINT_CLASSES_CONFIG };