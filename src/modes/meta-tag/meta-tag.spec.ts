import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import { stampMetaTagInHtml, stampOnExistingMetaTag } from "@/modes/meta-tag/meta-tag";

describe("Meta Tag Mode", () => {
  describe(stampOnExistingMetaTag, () => {
    it("should set the content attribute of the existing meta tag to the message when overwrite is true.", () => {
      const message = "Hello Dark Jess' 🪄";
      const existingMetaTag = document.createElement("meta");
      const options = { name: "description", overwrite: true };
      const setAttributeSpy = vi.spyOn(existingMetaTag, "setAttribute");
      stampOnExistingMetaTag(message, existingMetaTag, options);

      expect(setAttributeSpy).toHaveBeenCalledExactlyOnceWith("content", message);
    });

    it("should log an error when overwrite is false.", () => {
      const message = "Hello Dark Jess' 🪄";
      const existingMetaTag = document.createElement("meta");
      const options = { name: "description", overwrite: false };
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(vi.fn());
      stampOnExistingMetaTag(message, existingMetaTag, options);

      expect(consoleErrorSpy).toHaveBeenCalledExactlyOnceWith(`Meta tag with name "${options.name}" already exists. Use "overwrite" option to replace it.`);
    });
  });

  describe(stampMetaTagInHtml, () => {
    it("should create a new meta tag with the message when there is no existing meta tag.", () => {
      const message = "Hello Dark Jess' 🪄";
      const { head } = window.document;
      const appendChildSpy = vi.spyOn(head, "appendChild");
      const appendedMetaTag = window.document.createElement("meta");
      appendedMetaTag.setAttribute("name", DEFAULT_STAMP_OPTIONS.metaTag.name);
      appendedMetaTag.setAttribute("content", message);
      stampMetaTagInHtml(message, DEFAULT_STAMP_OPTIONS);

      expect(appendChildSpy).toHaveBeenCalledExactlyOnceWith(appendedMetaTag);
    });

    it("should call stampOnExistingMetaTag when there is an existing meta tag.", () => {
      const message = "Hello Dark Jess' 🪄";
      const { head } = window.document;
      const existingMetaTag = window.document.createElement("meta");
      existingMetaTag.setAttribute("name", DEFAULT_STAMP_OPTIONS.metaTag.name);
      head.appendChild(existingMetaTag);
      stampMetaTagInHtml(message, DEFAULT_STAMP_OPTIONS);

      expect(existingMetaTag.getAttribute("content")).toBe(message);
    });
  });
});