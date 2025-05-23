import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    pool: "threads",
    root: fileURLToPath(new URL("../../", import.meta.url)),
    watch: false,
    include: ["./src/**/*.spec.ts"],
    coverage: {
      provider: "v8",
      exclude: [
        "src/**/*.spec.ts",
        "node_modules/**/*",
        "config/**/*",
        "**/*.types.ts",
        "**/*.constants.ts",
      ],
      include: ["src/**/*.ts"],
      reportsDirectory: "./tests/unit/coverage",
      reporter: [
        "clover",
        "json",
        "lcov",
        "text",
        "text-summary",
        "html",
      ],
      all: true,
      thresholds: {
        100: true,
      },
    },
    globals: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    setupFiles: ["./tests/unit/setup.ts"],
  },
  plugins: [tsconfigPaths()],
});