# 💮 Dev Stamp

### ✨ *Stamp your dev footprint into HTML*

![npm version](https://img.shields.io/npm/v/dev-stamp) ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🚀 What is Dev Stamp?

**Dev Stamp** is a tiny ⚡️ zero-config tool that lets you **inject custom content** (like build time, version, commit hash, or even a fun signature) right into your HTML files during your build process.
Whether you're building apps, sites, or web widgets – Dev Stamp leaves your *dev mark* with style.

---

## 🔥 Why You'll Love It

* 🪶 **Ultra-lightweight** – less than 2KB, no dependencies
* ⚙️ **Zero-config** – works out of the box, but easily customizable
* 💬 **Inject anything** – version, build date, Git SHA, or your custom message
* 🛠️ **Tool-agnostic** – fits into any build pipeline (Node.js, Vite, Webpack, etc.)
* 🧙‍♂️ **Magical simplicity** – one function, one job, done right

---

## 📦 Installation

```bash
npm install dev-stamp --save-dev
# or
pnpm add -D dev-stamp
```

---

## ✍️ Quick Example

```ts
import devStamp from 'dev-stamp';

devStamp({
  input: 'index.html',
  output: 'dist/index.html',
  content: `<!-- 🧱 Built on ${new Date().toISOString()} -->`,
});
```

🔖 This adds a comment at the top of your HTML file like:

```html
<!-- 🧱 Built on 2025-05-14T14:12:00Z -->
```

---

## 🎯 Use Cases

* 🔍 Identify which build is deployed (great for CI/CD pipelines)
* 🧪 Debug production issues faster with visible build info
* ✍️ Add your personal touch to your projects
* 🪪 Watermark internal tools or preprod environments

---

## ⚖️ License

Licensed under the [MIT License](https://opensource.org/licenses/MIT) 📄 – free as in freedom.