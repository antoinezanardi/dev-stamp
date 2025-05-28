import type { StampMode, StampOptions, StampMetaTagOptions } from "@/index.types";
import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import { stampCommentInHtml } from "@/modes/comment/comment";
import { stampMetaTagInHtml } from "@/modes/meta-tag/meta-tag";
import { getStampOptions, validateBrowserEnvironment } from "@/utils/utils";

function stampInHtml(message: string, options: Partial<StampOptions> = DEFAULT_STAMP_OPTIONS): void {
  const mergedOptions = getStampOptions(options);
  const stampMethods: Record<StampMode, () => void> = {
    "comment": () => stampCommentInHtml(message, mergedOptions),
    "meta-tag": () => stampMetaTagInHtml(message, mergedOptions),
  };

  try {
    validateBrowserEnvironment();
    stampMethods[mergedOptions.mode]();
  } catch (error) {
    console.error(error);
  }
}

export {
  stampInHtml,
};

export type {
  StampOptions,
  StampMetaTagOptions,
};