import { describe } from "vitest";

import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import { getStampOptions } from "@/utils/utils";

describe("Dev Stamp Utils", () => {
  describe(getStampOptions, () => {
    it("should return default options when no options are provided.", () => {
      const result = getStampOptions({});

      expect(result).toStrictEqual(DEFAULT_STAMP_OPTIONS);
    });

    it("should override default options with provided options when called.", () => {
      const customOptions = { targetSelector: "#custom" };
      const result = getStampOptions(customOptions);

      expect(result).toStrictEqual({ ...DEFAULT_STAMP_OPTIONS, ...customOptions });
    });
  });
});