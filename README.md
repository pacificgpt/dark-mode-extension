# Dark Mode Toggle - Chrome Extension

<div align="center">
  <img src="https://img.shields.io/badge/Manifest_V3-Ready-success?style=for-the-badge&logo=googlechrome" alt="Manifest V3 Ready" />
  <img src="https://img.shields.io/badge/Status-Optimized-blue?style=for-the-badge" alt="Status Optimized" />
  <br/>
  <i>A sleek, modern, and highly-optimized Chrome Extension to bring dark mode to the web.</i>
</div>

## 🌙 Overview  
**Dark Mode Toggle** is a lightweight Chrome extension that allows users to **enable or disable dark mode** on any website with a single click. The extension remembers your preferences for each individual site and ensures a smooth browsing experience without affecting other tabs or slowing down your browser.  

## ✨ Features  
- 🔄 **One-Click Toggle:** Instantly toggle dark mode on any website.  
- 🌍 **Smart Memory:** Remembers your settings per site (persists after browser restarts).  
- 🎨 **Modern Aesthetics:** Sleek, high-quality dark theme that improves readability and reduces eye strain.  
- ⚡ **Minimalistic UI:** Features an elegantly animated toggle button.  
- 🚀 **Blazing Fast & Zero Bloat:** Built purely with Vanilla JavaScript. No redundant background scripts or heavy frameworks.

## 📚 Installation  

### **Option 1: Load as an Unpacked Extension (For Development)**  
1. **Download or clone** this repository:  
   ```sh  
   git clone https://github.com/pacificgpt/dark-mode-extension.git 
   cd dark-mode-extension  
   ```  
2. Open **Google Chrome** and navigate to:  
   ```
   chrome://extensions/  
   ```  
3. Enable **Developer Mode** (toggle switch in the top right).  
4. Click **"Load unpacked"**, then select the `dark_mode_extension` folder.  
5. The extension will be added to Chrome! 🎉  

## 🛠 Usage  
1. Click the **Dark Mode Toggle** extension icon in your toolbar.  
2. Click the animated **switch** to enable or disable dark mode for the current website.  
3. Your preference is **saved automatically** for that specific website domain.  

## 🏠 Development & Architecture
This extension is built using the latest **Manifest V3** standards. Recent optimizations include removing obsolete background workers and consolidating state management purely into the content script and popup, resulting in zero background memory usage. 

- To **modify the dark theme colors**, edit `dark_mode_extension/content.js`.  
- To **adjust the popup UI**, modify `dark_mode_extension/popup.html` and `dark_mode_extension/popup.js`.  
- To **clear stored preferences**, open Chrome DevTools → `Application` → `Local Storage`.  

## 🐟 License  
This project is **open-source** under the [MIT License](LICENSE).  

## 💡 Contribution  
Want to improve this extension? Fork the repository and submit a PR! 😊  

## 📧 Contact
For any issues, open an issue on the GitHub repository.
