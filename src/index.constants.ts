import type { StampCommentOptions, StampMetaTagOptions, StampOptions } from "@/index.types";

const DEFAULT_COMMENT_OPTIONS: StampCommentOptions = {
  innerDisplay: "inline",
} as const;

const DEFAULT_META_TAG_OPTIONS: StampMetaTagOptions = {
  name: "dev-stamp",
  overwrite: true,
} as const;

const DEFAULT_STAMP_OPTIONS: StampOptions = {
  mode: "comment",
  targetSelector: "body",
  comment: DEFAULT_COMMENT_OPTIONS,
  metaTag: DEFAULT_META_TAG_OPTIONS,
} as const;

export { DEFAULT_STAMP_OPTIONS };