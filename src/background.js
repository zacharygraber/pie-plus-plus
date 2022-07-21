// Change this to true to enable console.log() debug messages
const DEBUG = false; 

if (DEBUG) console.log("WARNING: CONSOLE DEBUGGING ENABLED--DISABLE BEFORE PUBLISHING");

var browser = require("webextension-polyfill");

//      If the page changes to Inventory Reports (and wasn't before) refresh
// the browser tab. Same when navigating away from the IR page. This is a workaround
// to get the IR page content script to run (and stop running), since Angular
// doesn't *actually* reload the page.
browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        if (changeInfo.url.toLowerCase().includes("pie.iu.edu/inventoryreports")) {
            // Check most recent history entry
            let searchHistory = browser.history.search({text: '', maxResults: 2});
            searchHistory.then(function(results) {
                if (results.length > 1) {
                    // Compare the previously visited URL
                    if (!(results[1].url.toLowerCase().includes("pie.iu.edu/inventoryreports"))) {
                        browser.tabs.reload(tabId);
                    }
                }
            });
        }
        else if (changeInfo.url.toLowerCase().includes("pie.iu.edu")) {
            // Check most recent history entry
            let searchHistory = browser.history.search({text: '', maxResults: 2});
            searchHistory.then(function(results) {
                if (results.length > 1) {
                    // Compare the previously visited URL
                    if (results[1].url.toLowerCase().includes("pie.iu.edu/inventoryreports")) {
                        browser.tabs.reload(tabId); // Reload to clean up the content script
                    }
                }
            });
        }
    }
});