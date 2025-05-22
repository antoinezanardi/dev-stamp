import type { StampOptions } from "@/index.types";

const DEFAULT_STAMP_OPTIONS: StampOptions = {
  mode: "comment",
  targetSelector: "body",
} as const;

export { DEFAULT_STAMP_OPTIONS };