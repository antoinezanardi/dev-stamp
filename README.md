<div align="center">
  <img width="200" alt="Dev Stamp logo" src="https://raw.githubusercontent.com/antoinezanardi/dev-stamp/refs/heads/main/assets/logo.png">
  <h1>Dev Stamp</h1>
  <h3>✨ Stamp your dev footprint into HTML</h3>
  <br/>
</div>

![npm version](https://img.shields.io/npm/v/dev-stamp) ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 📜 Table of Contents

- [🚀 What is Dev Stamp?](#-what-is-dev-stamp)
- [🎯 Use Cases](#-use-cases)
- [🔥 Why You'll Love It](#-why-youll-love-it)
- [✍️ Quick Example](#-quick-example)
- [📦 Installation](#-installation)
- [🛠️ Advanced Usage](#-advanced-usage)
- [🧪 Robustness](#-robustness)
- [⚖️ License](#-license)
- [👩‍💻 Contributing](#-contributing)

---

## 🚀 What is Dev Stamp?

**Dev Stamp** is a tiny ⚡️ zero-config tool that lets you **inject custom content** (like build time, version, commit hash, or even a fun signature) right into the HTML of your project, anywhere.

Whether you're building apps, sites, or web widgets – Dev Stamp leaves your *dev mark* with style 💮.

---

## 🎯 Use Cases

- ✍️ Add your personal touch to your projects
- 🧪 Debug production issues faster with visible build info
- 🪪 Watermark internal tools or preprod environments
- 🛠️ Keep track of your builds in a fun way

---

## 🔥 Why You'll Love It

- 🪶 **Ultra-lightweight** – less than 5KB, no dependencies
- ⚙️ **Zero-config** – works out of the box, but easily customizable
- 💬 **Inject anything, anywhere** – version, build date, Git SHA, or your custom message anywhere in the HTML
- 🛠️ **Tool-agnostic** – fits into any build process, no matter the stack
- 🧙‍♂️ **Magical simplicity** – one function, one job, done right

---

## ✍️ Quick Example

```ts
import { stampInHtml } from 'dev-stamp';

stampInHtml("💮 Made with love by [Your Name]");
```

⬇️ This adds a comment at the end of the `body` tag in your HTML.

```html
<html lang="en">
  <head>
    <title>My Project</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <!-- 💮 Made with love by [Your Name] -->
  </body>
</html>
```

---

## 📦 Installation

If you're using **npm**, **yarn**, or **pnpm**, you can install **Dev Stamp** with the following command:

```bash
npm i dev-stamp --save-dev
# or
yarn add -D dev-stamp
# or
pnpm add -D dev-stamp
```

If you want to use **Dev Stamp** in a browser environment, you can include it via a `<script type="module">` tag, which is supported by all modern browsers:

```html
<script type="module">
  import { stampInHtml } from "https://cdn.jsdelivr.net/npm/dev-stamp/dist/index.js";

  stampInHtml("Hello from CDN 🪴");
</script>
```

---

## 🛠️ Advanced Usage

You can customize the stamp with various options, which can be passed as a second argument to the `stampInHtml` function.

```ts
import { stampInHtml, StampOptions } from 'dev-stamp';

const options: StampOptions = {
  targetSelector: '.my-custom-selector', // CSS selector to find the target element, comment will be injected at the end of this element
};

stampInHtml("💮 Made with love by [Your Name]", options);
```

|      Option      |                         Description                         | Default |
|:----------------:|:-----------------------------------------------------------:|:-------:|
| `targetSelector` | CSS selector to find the target element to inject the stamp | `body`  |

---

## 🧪 Robustness

Dev Stamp is designed to be robust and handle various scenarios.

To achieve this, it is 100% unit tested with [Vitest](https://vitest.dev/) and has 100% code coverage.

---

## ⚖️ License

Licensed under the [MIT License](https://opensource.org/licenses/MIT) 📄 – free as in freedom.

---

## 👩‍💻 Contributing

We welcome contributions! If you have ideas, suggestions, or issues, please open an issue or a pull request.

Thanks to [Jessica Garrido](https://github.com/jessicagarrido) for the fantastic idea ❤️