// Change this to true to enable console.log() debug messages
const DEBUG = false; 

if (DEBUG) console.log("WARNING: CONSOLE DEBUGGING ENABLED--DISABLE BEFORE PUBLISHING");

const { storage } = require("webextension-polyfill");
var browser = require("webextension-polyfill");

browser.runtime.onInstalled.addListener(function(details) {
    browser.storage.sync.set({homePage: "ActiveShifts"});
});

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

//      Check tab info for new navigations to `<ANYTHING>.pie.iu.edu` and hijack the navigation to go 
// to `<ANYTHING>.pie.iu.edu/<CUSTOME HOME PAGE>` instead
browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        if (changeInfo.url.toLowerCase().endsWith("pie.iu.edu") || changeInfo.url.toLowerCase().endsWith("pie.iu.edu/")) {
            console.log(tab.url);
            let pieInstance = tab.url.replace("https:\/\/", "").replace("http:\/\/", "");
            pieInstance = pieInstance.substring(0, pieInstance.indexOf(".pie.iu.edu"));
            let lookup = browser.storage.sync.get("homePage");
            lookup.then(function(homePage) {
                browser.tabs.update(tabId, {url: ("https://" + pieInstance + ".pie.iu.edu/" + homePage.homePage)});
            });
        }
    }
});