import type { Linter } from "eslint";

const ESLINT_CONFIG_FILES_CONFIG = {
  name: "config-files",
  files: [
    "release.config.mjs",
    "eslint.config.ts",
    "nuxt.config.ts",
    "config/**/*.{js,mjs,ts}",
    "modules/**/*.config.{js,mjs,ts}",
    "tests/unit/unit-setup.ts",
  ],

  languageOptions: { globals: { CustomMatchers: "readonly" } },
  rules: {
    "@typescript-eslint/no-restricted-imports": "off",
    "import/no-default-export": "off",
    "import/no-internal-modules": "off",
    "import/no-anonymous-default-export": "off",
  },
} satisfies Linter.Config;

export { ESLINT_CONFIG_FILES_CONFIG };