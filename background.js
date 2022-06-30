let headerText = "SAMPLE TEXT!";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ headerText });
    console.log("Header text set to default");   
});

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("pie.iu.edu/InventoryReports")) {
        console.log("Sending 'INV' message.");
        chrome.tabs.sendMessage(tabId, {URL: "INV"});
    }
    else if (tab.url && tab.url.includes("pie.iu.edu")) {
        console.log("Sending 'OTHER_PIE' message.");
        chrome.tabs.sendMessage(tabId, {URL: "OTHER_PIE"});
    }
});