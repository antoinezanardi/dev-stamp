import { Window } from "happy-dom";

const window = new Window({ url: "https://localhost:8080" });
const { document } = window;

beforeEach(() => {
  globalThis.window = window as unknown as typeof globalThis.window;
  globalThis.document = document as unknown as typeof globalThis.document;

  window.document.body.innerHTML = `
    <body>
        <h1>Title</h1>
        <p>Text</p>
    </body>
  `;
  window.document.head.innerHTML = "";
});