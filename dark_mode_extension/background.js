chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url && tab.url.startsWith("http")) {
        chrome.storage.local.get(["darkModeEnabled"], ({ darkModeEnabled }) => {
            if (darkModeEnabled) {
                chrome.scripting.executeScript({
                    target: { tabId },
                    files: ["content.js"]
                });
            }
        });
    }
});
