import type { Linter } from "eslint";

import { ESLINT_IGNORES } from "./config/eslint/eslint.constants";
import { ESLINT_GLOBAL_CONFIG } from "./config/eslint/flat-configs/eslint.global-config";
import { ESLINT_IMPORT_CONFIG } from "./config/eslint/flat-configs/eslint.import-config";
import { ESLINT_TYPESCRIPT_CONFIG } from "./config/eslint/flat-configs/eslint.typescript-config";
import { ESLINT_DECLARATIONS_CONFIG } from "./config/eslint/flat-configs/eslint.declarations-config";
import { ESLINT_TYPESCRIPT_DECLARATION_CONFIG } from "./config/eslint/flat-configs/eslint.typescript-declaration-config";
import { ESLINT_STYLISTIC_CONFIG } from "./config/eslint/flat-configs/eslint.stylistic-config";
import { ESLINT_CONFIG_FILES_CONFIG } from "./config/eslint/flat-configs/eslint.config-files-config";
import { ESLINT_CLASSES_CONFIG } from "./config/eslint/flat-configs/eslint.classes-config";
import { ESLINT_TESTS_CONFIG } from "./config/eslint/flat-configs/eslint.tests-config";

export default [
  {
    name: "global-ignores",
    ignores: ESLINT_IGNORES,
  },
  ESLINT_GLOBAL_CONFIG,
  ESLINT_IMPORT_CONFIG,
  ESLINT_TYPESCRIPT_CONFIG,
  ESLINT_DECLARATIONS_CONFIG,
  ESLINT_TYPESCRIPT_DECLARATION_CONFIG,
  ESLINT_STYLISTIC_CONFIG,
  ESLINT_CONFIG_FILES_CONFIG,
  ESLINT_CLASSES_CONFIG,
  ESLINT_TESTS_CONFIG,
] satisfies Linter.Config[];