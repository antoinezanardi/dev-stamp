type StampMode = "comment" | "meta-tag";

type StampMetaTagOptions = {
  name: string;
  overwrite: boolean;
};

type StampOptions = {
  mode: StampMode;
  targetSelector: string;
  metaTag: StampMetaTagOptions;
};

type PartialStampOptions = Omit<Partial<StampOptions>, "metaTag"> & {
  metaTag?: Partial<StampMetaTagOptions>;
};

export type {
  StampMode,
  StampMetaTagOptions,
  StampOptions,
  PartialStampOptions,
};