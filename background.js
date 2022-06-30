let headerText = "SAMPLE TEXT!";

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ headerText });
    console.log("Header text set to default");   
});

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.url) {
//         if (changeInfo.url.includes("pie.iu.edu/InventoryReports")) {
            
//         }
//     }
// });

//&& changeInfo.url.includes("#Historical")

// TODO: refresh page when entering and leaving InventoryReports page to let contentScripts run