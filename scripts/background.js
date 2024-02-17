// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   const tabUrl = tab.url ?? tab.pendingUrl;
//   if (
//     changeInfo.status === "complete" &&
//     tabUrl &&
//     tabUrl.includes("reddit.com")
//   ) {
//     chrome.scripting.insertCSS({
//       target: { tabId: tabId },
//       files: ["css/global.css"],
//     });
//   }
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("www.reddit.com")
  ) {
    const oldRedditUrl = tabUrl.replace("www", "old");
    // const newUrl = queryParams ? `${tedditUrl}?${queryParams}` : tedditUrl;
    chrome.tabs.update(tabId, { url: oldRedditUrl });
  }
});
