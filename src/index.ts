import { DEFAULT_STAMP_OPTIONS } from "./index.constants";
import type { StampOptions } from "./index.types";

function getStampOptions(options: Partial<StampOptions>): StampOptions {
  return {
    ...DEFAULT_STAMP_OPTIONS,
    ...options,
  };
}

function stampInHtml(message: string, options: StampOptions = DEFAULT_STAMP_OPTIONS): void {
  if (typeof window === "undefined") {
    console.error("This function can only be run in a browser environment.");

    return;
  }
  const mergedOptions = getStampOptions(options);
  const { targetSelector } = mergedOptions;
  const targetElement = window.document.querySelector(targetSelector);
  if (!targetElement) {
    console.error(`Target element not found: ${targetSelector}`);

    return;
  }
  const commentNode = window.document.createComment(message);
  targetElement.appendChild(commentNode);
}

export {
  getStampOptions,
  stampInHtml,
};