import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import * as Utils from "@/utils/utils";
import { stampCommentInHtml } from "@/modes/comment/comment";

describe("Comment Mode", () => {
  beforeEach(() => {
    vi.spyOn(Utils, "getTargetElement").mockImplementation(() => document.createElement("body"));
  });

  describe(stampCommentInHtml, () => {
    it("should get the target element when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      stampCommentInHtml(message, DEFAULT_STAMP_OPTIONS);

      expect(Utils.getTargetElement).toHaveBeenCalledWith(DEFAULT_STAMP_OPTIONS.targetSelector);
    });

    it("should create comment node with the message when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      const targetElement = window.document.querySelector("body");
      const commentNode = window.document.createComment(message);
      const appendChildSpy = vi.spyOn(targetElement as Element, "appendChild");
      vi.spyOn(Utils, "getTargetElement").mockReturnValue(targetElement as Element);
      stampCommentInHtml(message, DEFAULT_STAMP_OPTIONS);

      expect(appendChildSpy).toHaveBeenCalledWith(commentNode);
    });
  });
});