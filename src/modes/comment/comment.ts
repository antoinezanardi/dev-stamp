import type { StampCommentOptions, StampOptions } from "@/index.types";
import { getTargetElement } from "@/utils/utils";

function getFormattedComment(message: string, options: StampCommentOptions): string {
  const { innerDisplay } = options;
  if (innerDisplay === "block") {
    return `\n${message}\n`;
  }
  if (innerDisplay === "spaced-inline") {
    return ` ${message} `;
  }
  return message;
}

function stampCommentInHtml(message: string, options: StampOptions): void {
  const { targetSelector, comment: commentOptions } = options;
  const targetElement = getTargetElement(targetSelector);
  const formattedComment = getFormattedComment(message, commentOptions);
  const commentNode = window.document.createComment(formattedComment);
  targetElement.appendChild(commentNode);
}

export {
  getFormattedComment,
  stampCommentInHtml,
};