type StampMode = "comment" | "meta-tag";

type CommentInnerDisplay = "inline" | "spaced-inline" | "block";

type StampCommentOptions = {
  innerDisplay: CommentInnerDisplay;
};

type StampMetaTagOptions = {
  name: string;
  overwrite: boolean;
};

type StampOptions = {
  mode: StampMode;
  targetSelector: string;
  comment: StampCommentOptions;
  metaTag: StampMetaTagOptions;
};

type PartialStampOptions = Omit<Partial<StampOptions>, "metaTag" | "comment"> & {
  comment?: Partial<StampCommentOptions>;
  metaTag?: Partial<StampMetaTagOptions>;
};

export type {
  StampMode,
  StampCommentOptions,
  StampMetaTagOptions,
  StampOptions,
  PartialStampOptions,
};