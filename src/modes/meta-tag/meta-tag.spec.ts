import { DEFAULT_STAMP_OPTIONS } from "@/index.constants";
import type { StampMetaTagOptions } from "@/index.types";
import { stampMetaTagInHtml, stampOnExistingMetaTag, validateMetaTagOptions } from "@/modes/meta-tag/meta-tag";

describe("Meta Tag Mode", () => {
  describe(stampOnExistingMetaTag, () => {
    it("should set the content attribute of the existing meta tag to the message when overwrite is true.", () => {
      const message = "Hello Dark Jess' 🪄";
      const existingMetaTag = document.createElement("meta");
      const options: StampMetaTagOptions = {
        name: "description",
        strictValidation: true,
        overwrite: true,
      };
      const setAttributeSpy = vi.spyOn(existingMetaTag, "setAttribute");
      stampOnExistingMetaTag(message, existingMetaTag, options);

      expect(setAttributeSpy).toHaveBeenCalledExactlyOnceWith("content", message);
    });

    it("should throw an error when overwrite is false and an existing meta tag is found.", () => {
      const message = "Hello Dark Jess' 🪄";
      const existingMetaTag = document.createElement("meta");
      existingMetaTag.setAttribute("name", "description");
      const options: StampMetaTagOptions = {
        name: "description",
        strictValidation: true,
        overwrite: false,
      };
      const expectedError = `Meta tag with name "${options.name}" already exists. Use "meta.overwrite" option to replace it.`;

      expect(() => stampOnExistingMetaTag(message, existingMetaTag, options)).toThrow(expectedError);
    });
  });

  describe(validateMetaTagOptions, () => {
    it("should not throw an error when strictValidation is false.", () => {
      const options: StampMetaTagOptions = {
        name: "invalid@name",
        strictValidation: false,
        overwrite: true,
      };

      expect(() => validateMetaTagOptions(options.name, options)).not.toThrow();
    });

    it("should throw an error when name is empty and strictValidation is true.", () => {
      const options: StampMetaTagOptions = {
        name: "",
        strictValidation: true,
        overwrite: true,
      };
      const expectedError = "Meta tag name cannot be empty. Set 'meta.strictValidation' to false to skip this check.";

      expect(() => validateMetaTagOptions(options.name, options)).toThrow(expectedError);
    });

    it("should throw an error when name contains invalid characters and strictValidation is true.", () => {
      const options: StampMetaTagOptions = {
        name: "invalid@name",
        strictValidation: true,
        overwrite: true,
      };
      const expectedError = `Invalid meta tag name: "invalid@name". Only alphanumeric characters, underscores, hyphens, colons, and periods are allowed. Set 'meta.strictValidation' to false to skip this check.`;

      expect(() => validateMetaTagOptions(options.name, options)).toThrow(expectedError);
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

    it("should create a new meta tag when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      const { head } = window.document;
      const appendChildSpy = vi.spyOn(head, "appendChild");
      stampMetaTagInHtml(message, DEFAULT_STAMP_OPTIONS);
      const appendedElement = appendChildSpy.mock.calls[0][0] as HTMLMetaElement;

      expect(appendedElement.tagName).toBe("META");
    });

    it("should trim the name of the meta tag when set in options.", () => {
      const message = "Hello Dark Jess' 🪄";
      const { head } = window.document;
      const appendChildSpy = vi.spyOn(head, "appendChild");
      const customName = "  custom-name  ";
      const customOptions = {
        ...DEFAULT_STAMP_OPTIONS,
        metaTag: { ...DEFAULT_STAMP_OPTIONS.metaTag, name: customName },
      };
      stampMetaTagInHtml(message, customOptions);
      const appendedElement = appendChildSpy.mock.calls[0][0] as HTMLMetaElement;

      expect(appendedElement.getAttribute("name")).toBe(customName.trim());
    });

    it("should create a new meta tag with the personalized name when set in options.", () => {
      const message = "Hello Dark Jess' 🪄";
      const { head } = window.document;
      const appendChildSpy = vi.spyOn(head, "appendChild");
      const customName = "custom-name";
      const customOptions = {
        ...DEFAULT_STAMP_OPTIONS,
        metaTag: { ...DEFAULT_STAMP_OPTIONS.metaTag, name: customName },
      };
      stampMetaTagInHtml(message, customOptions);
      const appendedElement = appendChildSpy.mock.calls[0][0] as HTMLMetaElement;

      expect(appendedElement.getAttribute("name")).toBe(customName);
    });

    it("should create a new meta tag with the message as content when called.", () => {
      const message = "Hello Dark Jess' 🪄";
      const { head } = window.document;
      const appendChildSpy = vi.spyOn(head, "appendChild");
      stampMetaTagInHtml(message, DEFAULT_STAMP_OPTIONS);
      const appendedElement = appendChildSpy.mock.calls[0][0] as HTMLMetaElement;

      expect(appendedElement.getAttribute("content")).toBe(message);
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