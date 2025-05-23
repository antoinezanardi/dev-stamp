function stampCommentInHtml(message: string, targetElement: Element): void {
  const commentNode = window.document.createComment(message);
  targetElement.appendChild(commentNode);
}

export { stampCommentInHtml };