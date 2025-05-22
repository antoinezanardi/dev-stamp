import { Window } from "happy-dom";
import { describe } from "vitest";

import * as CommentMode from "@/modes/comment/comment";
import { stampInHtml } from "@/index";

const window = new Window({ url: "https://localhost:8080" });
const document = window.document;

describe("Dev Stamp Index", () => {
  describe(stampInHtml, () => {
    beforeEach(() => {
      globalThis.window = window as unknown as typeof globalThis.window;
      globalThis.document = document as unknown as Document;
      window.document.body.innerHTML = "<body><h1>Title</h1><p>Text</p></body>";
      vi.spyOn(CommentMode, "stampCommentInHtml").mockImplementation(vi.fn());
    });

    it("should log an error when not in a browser environment because window is undefined.", () => {
      globalThis.window = undefined as unknown as typeof globalThis.window;
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(vi.fn());
      stampInHtml("Test message");

      expect(consoleErrorSpy).toHaveBeenCalledWith("This function can only be run in a browser environment.");
    });

    it("should log an error when not in a browser environment because document is undefined.", () => {
      globalThis.window = {} as unknown as typeof globalThis.window;
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(vi.fn());
      stampInHtml("Test message");

      expect(consoleErrorSpy).toHaveBeenCalledWith("This function can only be run in a browser environment.");
    });

    it("should log an error when the target element is not found.", () => {
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(vi.fn());
      stampInHtml("Test message", { targetSelector: "#nonexistent" });

      expect(consoleErrorSpy).toHaveBeenCalledWith("Target element not found: #nonexistent");
    });

    it("should stamp comment in html when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      stampInHtml(message);

      expect(CommentMode.stampCommentInHtml).toHaveBeenCalledWith(message, window.document.body);
    });
  });
});