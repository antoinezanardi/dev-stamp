import { describe } from "vitest";

import type { StampOptions } from "@/index";
import { stampInHtml } from "@/index";
import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import * as CommentMode from "@/modes/comment/comment";
import * as MetaTagMode from "@/modes/meta-tag/meta-tag";
import * as Utils from "@/utils/utils";

describe("Dev Stamp Index", () => {
  describe(stampInHtml, () => {
    beforeEach(() => {
      globalThis.window = window as unknown as typeof globalThis.window;
      globalThis.document = document as unknown as Document;
      window.document.body.innerHTML = "<body><h1>Title</h1><p>Text</p></body>";

      vi.spyOn(CommentMode, "stampCommentInHtml").mockImplementation(vi.fn());
      vi.spyOn(MetaTagMode, "stampMetaTagInHtml").mockImplementation(vi.fn());
      vi.spyOn(Utils, "getStampOptions").mockReturnValue(DEFAULT_STAMP_OPTIONS);
      vi.spyOn(Utils, "validateBrowserEnvironment").mockImplementation(vi.fn());
    });

    it("should validate the browser environment when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      stampInHtml(message, DEFAULT_STAMP_OPTIONS);

      expect(Utils.validateBrowserEnvironment).toHaveBeenCalledExactlyOnceWith();
    });

    it("should call the comment mode when the mode is comment.", () => {
      const message = "Hello Dark Jess' 🪄";
      const options: StampOptions = { ...DEFAULT_STAMP_OPTIONS, mode: "comment" };
      stampInHtml(message, options);

      expect(CommentMode.stampCommentInHtml).toHaveBeenCalledExactlyOnceWith(message, options);
    });

    it("should call the meta tag mode when the mode is meta-tag.", () => {
      const message = "Hello Dark Jess' 🪄";
      const options: StampOptions = { ...DEFAULT_STAMP_OPTIONS, mode: "meta-tag" };
      vi.spyOn(Utils, "getStampOptions").mockReturnValue(options);
      stampInHtml(message, options);

      expect(MetaTagMode.stampMetaTagInHtml).toHaveBeenCalledExactlyOnceWith(message, options);
    });

    it("should log an error when one of the stamp methods throws an error.", () => {
      const message = "Hello Dark Jess' 🪄";
      const options: StampOptions = { ...DEFAULT_STAMP_OPTIONS, mode: "comment" };
      const errorMessage = "Test error";
      vi.spyOn(CommentMode, "stampCommentInHtml").mockImplementation(() => {
        throw new Error(errorMessage);
      });
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(vi.fn());
      stampInHtml(message, options);

      expect(consoleErrorSpy).toHaveBeenCalledWith(new Error(errorMessage));
    });
  });
});