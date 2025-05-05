import { describe } from "vitest";
import { Window } from "happy-dom";

import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import { getStampOptions, stampInHtml } from "@/index";

const window = new Window({ url: "https://localhost:8080" });
const document = window.document;

describe("Dev Stamp Index", () => {
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

  describe(stampInHtml, () => {
    beforeEach(() => {
      globalThis.window = window as unknown as typeof globalThis.window;
      globalThis.document = document as unknown as Document;
      window.document.body.innerHTML = "<body><h1>Title</h1><p>Text</p></body>";
    });

    it("should log an error when not in a browser environment.", () => {
      globalThis.window = undefined as unknown as typeof globalThis.window;
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(vi.fn());
      stampInHtml("Test message");

      expect(consoleErrorSpy).toHaveBeenCalledWith("This function can only be run in a browser environment.");
    });

    it("should log an error when the target element is not found.", () => {
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(vi.fn());
      stampInHtml("Test message", { targetSelector: "#nonexistent" });

      expect(consoleErrorSpy).toHaveBeenCalledWith("Target element not found: #nonexistent");
    });

    it("should append a comment node with the message to the target element when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      stampInHtml(message);
      const targetElement = window.document.querySelector("body");
      const commentNode = document.createComment(message);
      targetElement?.appendChild(commentNode);
      const appendedNode = targetElement?.lastChild;

      expect(appendedNode).toStrictEqual(commentNode);
    });
  });
});