import { describe } from "vitest";

import type { PartialStampOptions, StampCommentOptions, StampMetaTagOptions, StampOptions } from "@/index.types";
import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import { getStampCommentOptions, getStampMetaTagOptions, getStampOptions, getTargetElement, validateBrowserEnvironment } from "@/utils/utils";

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

  describe(getStampMetaTagOptions, () => {
    it("should return default meta tag options when no options are provided.", () => {
      const result = getStampMetaTagOptions({});

      expect(result).toStrictEqual(DEFAULT_STAMP_OPTIONS.metaTag);
    });

    it("should override default meta tag options with provided options when called.", () => {
      const customOptions: PartialStampOptions = {
        metaTag: {
          name: "custom-name",
        },
      };
      const result = getStampMetaTagOptions(customOptions);
      const expectedOptions: StampMetaTagOptions = {
        ...DEFAULT_STAMP_OPTIONS.metaTag,
        ...customOptions.metaTag,
      };

      expect(result).toStrictEqual<StampMetaTagOptions>(expectedOptions);
    });
  });

  describe(getStampCommentOptions, () => {
    it("should return default comment options when no options are provided.", () => {
      const result = getStampCommentOptions({});

      expect(result).toStrictEqual(DEFAULT_STAMP_OPTIONS.comment);
    });

    it("should override default comment options with provided options when called.", () => {
      const customOptions: PartialStampOptions = {
        comment: {
          innerDisplay: "block",
        },
      };
      const result = getStampCommentOptions(customOptions);
      const expectedOptions: StampCommentOptions = {
        ...DEFAULT_STAMP_OPTIONS.comment,
        ...customOptions.comment,
      };

      expect(result).toStrictEqual<StampCommentOptions>(expectedOptions);
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
        comment: DEFAULT_STAMP_OPTIONS.comment,
        metaTag: {
          ...DEFAULT_STAMP_OPTIONS.metaTag,
          ...customOptions.metaTag,
        },
      };

      expect(result).toStrictEqual<StampOptions>(expectedOptions);
    });
  });
});