import type { StampMetaTagOptions, StampOptions } from "@/index.types";

function stampOnExistingMetaTag(message: string, existingMetaTag: Element, options: StampMetaTagOptions): void {
  const { overwrite: doesOverride } = options;
  if (!doesOverride) {
    throw new Error(`Meta tag with name "${options.name}" already exists. Use "metaTag.overwrite" option to replace it.`);
  }
  existingMetaTag.setAttribute("content", message);
}

function validateMetaTagOptions(name: string, options: StampMetaTagOptions): void {
  if (!options.strictValidation) {
    return;
  }
  if (!name) {
    throw new Error("Meta tag name cannot be empty. Set 'metaTag.strictValidation' to false to skip this check.");
  }
  const validNamePattern = /^[a-zA-Z0-9_\-:.]+$/u;
  if (!validNamePattern.test(name)) {
    throw new Error(`Invalid meta tag name: "${name}". Only alphanumeric characters, underscores, hyphens, colons, and periods are allowed. Set 'metaTag.strictValidation' to false to skip this check.`);
  }
}

function stampMetaTagInHtml(message: string, options: StampOptions): void {
  const { head } = window.document;
  const { name } = options.metaTag;
  const trimmedName = name.trim();
  validateMetaTagOptions(trimmedName, options.metaTag);
  const existingMetaTag = head.querySelector(`meta[name="${trimmedName}"]`);
  if (existingMetaTag) {
    stampOnExistingMetaTag(message, existingMetaTag, options.metaTag);

    return;
  }
  const metaTag = window.document.createElement("meta");
  metaTag.setAttribute("name", trimmedName);
  metaTag.setAttribute("content", message);
  head.appendChild(metaTag);
}

export {
  stampOnExistingMetaTag,
  validateMetaTagOptions,
  stampMetaTagInHtml,
};