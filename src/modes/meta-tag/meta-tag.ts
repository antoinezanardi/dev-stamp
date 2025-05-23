import type { StampMetaTagOptions, StampOptions } from "@/index.types";

function stampOnExistingMetaTag(message: string, existingMetaTag: Element, options: StampMetaTagOptions): void {
  const { overwrite: doesOverride } = options;
  if (!doesOverride) {
    console.error(`Meta tag with name "${options.name}" already exists. Use "overwrite" option to replace it.`);

    return;
  }
  existingMetaTag.setAttribute("content", message);
}

function stampMetaTagInHtml(message: string, options: StampOptions): void {
  const { head } = window.document;
  const { name } = options.metaTag;
  const existingMetaTag = head.querySelector(`meta[name="${name}"]`);
  if (existingMetaTag) {
    stampOnExistingMetaTag(message, existingMetaTag, options.metaTag);

    return;
  }
  const metaTag = window.document.createElement("meta");
  metaTag.setAttribute("name", name);
  metaTag.setAttribute("content", message);
  head.appendChild(metaTag);
}

export {
  stampOnExistingMetaTag,
  stampMetaTagInHtml,
};