import { Node } from "happy-dom";

import type { StampCommentOptions } from "@/index.types";
import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import * as Utils from "@/utils/utils";
import { stampCommentInHtml, getFormattedComment } from "@/modes/comment/comment";

describe("Comment Mode", () => {
  beforeEach(() => {
    vi.spyOn(Utils, "getTargetElement").mockReturnValue(document.createElement("body"));
  });

  describe(getFormattedComment, () => {
    it("should return the message as is when innerDisplay is 'inline'.", () => {
      const message = "Hello Dark Jess' 🪄";
      const options: StampCommentOptions = { innerDisplay: "inline" };
      const formattedMessage = getFormattedComment(message, options);

      expect(formattedMessage).toBe(message);
    });

    it("should return the message with leading and trailing spaces when innerDisplay is 'spaced-inline'.", () => {
      const message = "Hello Dark Jess' 🪄";
      const options: StampCommentOptions = { innerDisplay: "spaced-inline" };
      const formattedMessage = getFormattedComment(message, options);

      expect(formattedMessage).toBe(` ${message} `);
    });

    it("should return the message with leading and trailing newlines when innerDisplay is 'block'.", () => {
      const message = "Hello Dark Jess' 🪄";
      const options: StampCommentOptions = { innerDisplay: "block" };
      const formattedMessage = getFormattedComment(message, options);

      expect(formattedMessage).toBe(`\n${message}\n`);
    });
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

    it("should append a comment node to the target element when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      const targetElement = window.document.querySelector("body");
      const appendChildSpy = vi.spyOn(targetElement as Element, "appendChild");
      vi.spyOn(Utils, "getTargetElement").mockReturnValue(targetElement as Element);
      stampCommentInHtml(message, DEFAULT_STAMP_OPTIONS);
      const appendedNode = appendChildSpy.mock.calls[0][0] as Comment;

      expect(appendedNode.nodeType).toBe(Node.COMMENT_NODE);
    });

    it("should append a comment node with the message specified in first argument to the target element when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      const targetElement = window.document.querySelector("body");
      const appendChildSpy = vi.spyOn(targetElement as Element, "appendChild");
      vi.spyOn(Utils, "getTargetElement").mockReturnValue(targetElement as Element);
      stampCommentInHtml(message, DEFAULT_STAMP_OPTIONS);
      const appendedNode = appendChildSpy.mock.calls[0][0] as Comment;

      expect(appendedNode.textContent).toBe(message);
    });
  });
});