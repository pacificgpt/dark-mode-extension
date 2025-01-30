document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0 || !tabs[0].url) return;

        const currentSite = new URL(tabs[0].url).hostname;

        chrome.storage.local.get(["darkModeSites"], ({ darkModeSites }) => {
            darkModeSites = darkModeSites || {};
            const newDarkModeState = !darkModeSites[currentSite];

            // Store dark mode setting per website
            darkModeSites[currentSite] = newDarkModeState;
            chrome.storage.local.set({ darkModeSites });

            // Apply the change to the current tab
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["content.js"]
            });
        });
    });
});
