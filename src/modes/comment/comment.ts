import type { StampOptions } from "@/index.types";
import { getTargetElement } from "@/utils/utils";

function stampCommentInHtml(message: string, options: StampOptions): void {
  const { targetSelector } = options;
  const targetElement = getTargetElement(targetSelector);
  const commentNode = window.document.createComment(message);
  targetElement.appendChild(commentNode);
}

export { stampCommentInHtml };