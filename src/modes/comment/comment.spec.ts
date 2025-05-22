import { Node, Window } from "happy-dom";

import { stampCommentInHtml } from "@/modes/comment/comment";

const window = new Window({ url: "https://localhost:8080" });
const document = window.document;

describe("Comment Mode", () => {
  describe(stampCommentInHtml, () => {
    beforeEach(() => {
      globalThis.window = window as unknown as typeof globalThis.window;
      globalThis.document = document as unknown as Document;
      window.document.body.innerHTML = "<body><h1>Title</h1><p>Text</p></body>";
    });

    it("should append a comment node to the target element when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      const targetElement = window.document.querySelector("body");
      stampCommentInHtml(message, targetElement as unknown as Element);
      const appendedNode = targetElement?.lastChild;

      expect(appendedNode?.nodeType).toBe(Node.COMMENT_NODE);
    });

    it("should append a comment node with the message specified in first argument to the target element when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      const targetElement = window.document.querySelector("body");
      stampCommentInHtml(message, targetElement as unknown as Element);
      const appendedNode = targetElement?.lastChild;

      expect(appendedNode?.nodeValue).toBe(message);
    });
  });
});