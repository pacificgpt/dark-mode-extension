(() => {
  const applyDarkMode = () => {
    if (!document.getElementById("dark-mode-style")) {
      const style = document.createElement("style");
      style.id = "dark-mode-style";
      style.innerHTML = `
        html {
          filter: invert(1) hue-rotate(180deg);
          background-color: #000 !important;
        }
        img, video {
          filter: invert(1) hue-rotate(180deg);
        }
      `;
      document.head.appendChild(style);
    }
  };

  const removeDarkMode = () => {
    const darkModeStyle = document.getElementById("dark-mode-style");
    if (darkModeStyle) darkModeStyle.remove();
  };

  // Get the hostname (website) instead of storing it globally
  const currentSite = new URL(window.location.href).hostname;

  chrome.storage.local.get(["darkModeSites"], ({ darkModeSites }) => {
    if (darkModeSites && darkModeSites[currentSite]) {
      applyDarkMode();
    } else {
      removeDarkMode();
    }
  });

  // Listen for storage changes only for this website
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.darkModeSites && changes.darkModeSites.newValue) {
      if (changes.darkModeSites.newValue[currentSite]) {
        applyDarkMode();
      } else {
        removeDarkMode();
      }
    }
  });
})();
