<div align="center">
  <img width="200" alt="Dev Stamp logo" src="https://raw.githubusercontent.com/antoinezanardi/dev-stamp/refs/heads/main/assets/logo.png">
  <h1>Dev Stamp</h1>
  <h3>✨ Stamp your dev footprint into HTML</h3>
  <br/>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/dev-stamp"><img src="https://img.shields.io/npm/v/dev-stamp" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/dev-stamp"><img src="https://img.shields.io/npm/dm/dev-stamp" alt="npm downloads"></a>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License">
</div>

<div align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=antoinezanardi_dev-stamp"><img src="https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_dev-stamp&metric=alert_status" alt="SonarQube Quality Gate"></a>
  <a href="https://dashboard.stryker-mutator.io/reports/github.com/antoinezanardi/dev-stamp/main"><img src="https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fantoinezanardi%2Fdev-stamp%2Fmain" alt="Mutation testing badge"></a>
</div>

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

👉 Choose your injection mode: a comment in the `body` tag or a meta tag in the `head` section.

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

### 💡 Modes of Injection

**Dev Stamp** supports two modes of injection:

1. **Comment**: Injects a comment at the end of the `body` tag (by default).
2. **Meta Tag**: Injects a meta tag in the `head` section of the HTML.

You can choose the mode by setting the `mode` option in the `StampOptions`.

### 🦋 Options

|      Field       |                     Type                     |                                             Description                                              |                           Default                           |
|:----------------:|:--------------------------------------------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------:|
| `targetSelector` |                   `string`                   | CSS selector to find the target element to inject the stamp. Only used if `mode` is set to `comment` |                          `"body"`                           |
|      `mode`      |          `"comment" \| "meta-tag"`           |                           Mode of HTML injection: `comment` or `meta-tag`                            |                         `"comment"`                         |
|    `metaTag`     |  [StampMetaTagOptions](#-meta-tag-options)   |        Options related to the `meta-tag` injection. Only used if `mode` is set to `meta-tag`         | Refer to [Meta Tag Options](#-meta-tag-options) for details |


#### ☀️ Meta Tag Options

|    Field    |   Type    |                         Description                          |    Default    |
|:-----------:|:---------:|:------------------------------------------------------------:|:-------------:|
|   `name`    | `string`  |             Name of the meta tag to be injected              | `"dev-stamp"` |
| `overwrite` | `boolean` | Whether to overwrite an existing meta tag with the same name |    `true`     |

---

## 🧪 Robustness

### 💯 Unit Testing

Dev Stamp is designed to be robust and handle various scenarios.

To achieve this, it is 100% unit tested with [Vitest](https://vitest.dev/) and has 100% code coverage.

### 🐋 SonarCloud

The code quality is continuously monitored using [SonarCloud](https://sonarcloud.io/).

You can check the code quality by clicking on the badge below:

[![SonarCloud Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_dev-stamp&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_dev-stamp)

### 👽 Mutation Testing

[StrykerJS](https://stryker-mutator.io/) is used to ensure the code is resilient to mutations.

You can check the mutation testing results by clicking on the badges below:

[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fantoinezanardi%2Fdev-stamp%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/antoinezanardi/dev-stamp/main)

---

## ⚖️ License

Licensed under the [MIT License](https://opensource.org/licenses/MIT) 📄 – free as in freedom.

---

## 👩‍💻 Contributing

We welcome contributions! If you have ideas, suggestions, or issues, please open an issue or a pull request.

Thanks to [Jessica Garrido](https://github.com/jessicagarrido) for the fantastic idea ❤️