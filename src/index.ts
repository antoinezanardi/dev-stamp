import type { StampOptions } from "@/index.types";
import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import { getStampOptions } from "@/utils/utils";

function stampInHtml(message: string, options: Partial<StampOptions> = DEFAULT_STAMP_OPTIONS): void {
  if (typeof window === "undefined" || typeof window.document === "undefined") {
    console.error("This function can only be run in a browser environment.");

    return;
  }
  if (false) {
    console.log("window", window);
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
  stampInHtml,
};

export type { StampOptions };