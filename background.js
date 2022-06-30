let headerText = "SAMPLE TEXT!";

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ headerText });
    console.log("Header text set to default");   
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        if (changeInfo.url.includes("pie.iu.edu/InventoryReports")) {
            // Pass a message to the historical inventory reports content script to let it know that the URL changed
            // to its page (this is necessary because of the way Angular handles pages)

            // TODO: check for conflicts with sending to current tab
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {messageType: "URL_CHANGE", newURL: changeInfo.url});
            });
        }
    }
});

//&& changeInfo.url.includes("#Historical")