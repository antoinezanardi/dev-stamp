import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import type { PartialStampOptions, StampCommentOptions, StampMetaTagOptions, StampOptions } from "@/index.types";

function validateBrowserEnvironment(): void {
  if (typeof window === "undefined" || typeof window.document === "undefined") {
    throw new Error("This function can only be run in a browser environment.");
  }
}

function getTargetElement(targetSelector: string): Element {
  const targetElement = window.document.querySelector(targetSelector);
  if (!targetElement) {
    throw new Error(`Target element not found: ${targetSelector}`);
  }
  return targetElement;
}

function getStampMetaTagOptions(options: PartialStampOptions): StampMetaTagOptions {
  return {
    ...DEFAULT_STAMP_OPTIONS.metaTag,
    ...options.metaTag,
  };
}

function getStampCommentOptions(options: PartialStampOptions): StampCommentOptions {
  return {
    ...DEFAULT_STAMP_OPTIONS.comment,
    ...options.comment,
  };
}

function getStampOptions(options: PartialStampOptions): StampOptions {
  return {
    ...DEFAULT_STAMP_OPTIONS,
    ...options,
    comment: getStampCommentOptions(options),
    metaTag: getStampMetaTagOptions(options),
  };
}

export {
  validateBrowserEnvironment,
  getTargetElement,
  getStampMetaTagOptions,
  getStampCommentOptions,
  getStampOptions,
};