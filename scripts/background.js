chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("www.reddit.com")
  ) {
    const oldRedditUrl = tabUrl.replace("www", "old");
    chrome.tabs.update(tabId, { url: oldRedditUrl });
  }
});
