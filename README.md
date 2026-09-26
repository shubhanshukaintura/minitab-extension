<img width="751" height="957" alt="image" src="https://github.com/user-attachments/assets/476d2808-d6dc-4871-a4d4-a073f8a5b012" />

# MiniTab

**A lightning-fast, floating quick-search companion for Chrome.**

MiniTab is a lightweight Manifest V3 Chrome extension that opens a persistent, floating search window in the corner of your screen. It allows you to look up information, define words, convert currency, or browse the web without ever leaving or disrupting your current active tab.

Built for speed and minimal memory footprint, MiniTab loads a stripped-down, text-optimized version of Google Search and bypasses cross-origin iframe restrictions to ensure every website loads perfectly inside your mini-browser.

## ✨ Features

* **Zero-Friction Search:** Press `Cmd+Shift+K` (Mac) or `Ctrl+Shift+K` (Windows) to instantly summon the floating window over any app or tab.
* **Smart Window Management:** Single-instance enforcement ensures you never accidentally spawn duplicate windows. The window perfectly anchors to the top-right of your primary display.
* **Unblocked Embedded Browsing:** Uses Chrome's `declarativeNetRequest` API to seamlessly strip `X-Frame-Options` and `Content-Security-Policy` headers in the background, allowing sites like Wikipedia, GitHub, and Reddit to load inside the frame without "refused to connect" errors.
* **Custom History Stack:** Fully functional **Back**, **Forward**, and **Reload** navigation buttons powered by a custom in-memory history tracker.
* **Ultra-Lightweight:** Defaults to Google's `udm=14` parameter to serve lightning-fast, text-only search results without heavy widgets or JavaScript bloat.
* **Quick Actions:** One-click shortcut chips for common queries like Weather, Flight Status, and Currency Conversion.

## 🚀 Installation (Developer Mode)

Since this extension is not yet on the Chrome Web Store, you can load it manually:

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle in the top right corner.
4. Click the **Load unpacked** button in the top left.
5. Select the `minitab-extension` folder.
6. Pin the extension to your toolbar for easy access!

## ⌨️ Usage

* **Keyboard Shortcut:** Hit `Cmd+Shift+K` / `Ctrl+Shift+K` to open or focus the mini-window.
* **Search:** Type any query to search Google, or type a direct URL (e.g., `reddit.com`) to navigate straight to a website.
* **Break Out:** Found something you want to read in full-screen? Click the **New Tab (↗)** button to push your current mini-window page into a standard Chrome browser tab.

## 🛠️ Technical Stack

* **Manifest V3:** Fully compliant with modern Chrome extension architecture.
* **Vanilla HTML/CSS/JS:** Zero frameworks, meaning near-instant load times and virtually zero idle memory consumption.
* **Service Worker:** Background script goes to sleep when inactive, preserving CPU and RAM. Uses `chrome.storage.session` to remember window IDs across sleep cycles.
