import { describe } from "vitest";

import type { PartialStampOptions, StampOptions } from "@/index.types";
import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import { getStampOptions, getTargetElement, validateBrowserEnvironment } from "@/utils/utils";

describe("Dev Stamp Utils", () => {
  describe(validateBrowserEnvironment, () => {
    it("should throw an error when not in a browser environment because window is undefined.", () => {
      globalThis.window = undefined as unknown as typeof globalThis.window;

      expect(() => validateBrowserEnvironment()).toThrow("This function can only be run in a browser environment.");
    });

    it("should throw an error when not in a browser environment because document is undefined.", () => {
      globalThis.window = {} as unknown as typeof globalThis.window;

      expect(() => validateBrowserEnvironment()).toThrow("This function can only be run in a browser environment.");
    });

    it("should not throw an error when in a browser environment.", () => {
      globalThis.window = window as unknown as typeof globalThis.window;

      expect(() => validateBrowserEnvironment()).not.toThrow();
    });
  });

  describe(getTargetElement, () => {
    it("should throw an error when the target element is not found.", () => {
      const targetSelector = "#nonexistent";

      expect(() => getTargetElement(targetSelector)).toThrow(`Target element not found: ${targetSelector}`);
    });

    it("should return the target element when it is found.", () => {
      const targetSelector = "h1";
      const targetElement = getTargetElement(targetSelector);

      expect(targetElement.nodeName).toBe("H1");
    });
  });

  describe(getStampOptions, () => {
    it("should return default options when no options are provided.", () => {
      const result = getStampOptions({});

      expect(result).toStrictEqual<StampOptions>(DEFAULT_STAMP_OPTIONS);
    });

    it("should override default options with provided options when called.", () => {
      const customOptions: PartialStampOptions = {
        targetSelector: "#custom",
        metaTag: {},
      };
      const result = getStampOptions(customOptions);
      const expectedOptions: StampOptions = {
        ...DEFAULT_STAMP_OPTIONS,
        ...customOptions,
        metaTag: {
          ...DEFAULT_STAMP_OPTIONS.metaTag,
          ...customOptions.metaTag,
        },
      };

      expect(result).toStrictEqual<StampOptions>(expectedOptions);
    });
  });
});