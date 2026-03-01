document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-dark-mode");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0 || !tabs[0].url) return;
        const currentSite = new URL(tabs[0].url).hostname;

        chrome.storage.local.get(["darkModeSites"], ({ darkModeSites }) => {
            if (darkModeSites && darkModeSites[currentSite]) {
                document.body.classList.add("dark");
            }
        });
    });

    toggleBtn.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0 || !tabs[0].url) return;
            const currentSite = new URL(tabs[0].url).hostname;

            chrome.storage.local.get(["darkModeSites"], ({ darkModeSites }) => {
                darkModeSites = darkModeSites || {};
                const newDarkModeState = !darkModeSites[currentSite];

                darkModeSites[currentSite] = newDarkModeState;
                chrome.storage.local.set({ darkModeSites });

                document.body.classList.toggle("dark");
            });
        });
    });
});
