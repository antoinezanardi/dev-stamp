import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import type { PartialStampOptions, StampOptions } from "@/index.types";

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

function getStampOptions(options: PartialStampOptions): StampOptions {
  return {
    ...DEFAULT_STAMP_OPTIONS,
    ...options,
    metaTag: {
      ...DEFAULT_STAMP_OPTIONS.metaTag,
      ...options.metaTag,
    },
  };
}

export {
  validateBrowserEnvironment,
  getTargetElement,
  getStampOptions,
};