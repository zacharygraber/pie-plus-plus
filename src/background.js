// Change this to true to enable console.log() debug messages
const DEBUG = true; 

if (DEBUG) console.log("WARNING: CONSOLE DEBUGGING ENABLED--DISABLE BEFORE PUBLISHING");

var browser = require("webextension-polyfill");

let headerText = "SAMPLE TEXT!";

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ headerText });
});


browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (DEBUG) console.log("Message received in service worker of type: " + message.MESSAGE_TYPE);
    if (message.MESSAGE_TYPE === "DL_REQ") {
        
        browser.downloads.download({url: "data:text/csv;base64,TG9jYXRpb24sQ3JlYXRvcixEYXRlLExldHRlcig4LjUiIHggMTEiKSxCbGFjawpBQ0MwOTksb2hoZWFkZHksMDctMTMtMjAyMiw2MSwyCkFDQzA5OSxncmVlbmVhaiwwNy0wMS0yMDIyLDYxLDIKQUNDMDk5LGdyZWVuZWFqLDA2LTI5LTIwMjIsNjEsMgpBQ0MwOTksb2hoZWFkZHksMDYtMjItMjAyMiw2MSwyCkFDQzA5OSxvaGhlYWRkeSwwNi0xNS0yMDIyLDYzLDIKQUNDMDk5LG9oaGVhZGR5LDA2LTA4LTIwMjIsNjUsMgpBQ0MwOTksZ3JlZW5lYWosMDYtMDEtMjAyMiw2NSwyCkFDQzA5OSxvaGhlYWRkeSwwNS0yNS0yMDIyLDY3LDIKQUNDMDk5LG9oaGVhZGR5LDA1LTExLTIwMjIsNjcsMgpBQ0MwOTksYXZnb3BhbCwwNS0wNC0yMDIyLDY3LDIKQUNDMDk5LG5ndXllbmFwLDA1LTAzLTIwMjIsNjgsMQpBQ0MwOTkscHJrb2hsaSwwNC0yOS0yMDIyLDY4LDEKQUNDMDk5LHNoYXJwa3ksMDQtMjgtMjAyMiw2OCwxCkFDQzA5OSxuZ3V5ZW5hcCwwNC0yNi0yMDIyLDc0LDEKQUNDMDk5LGhhZ2FuYSwwNC0yNS0yMDIyLDc1LDEKQUNDMDk5LHNoYXJwa3ksMDQtMjEtMjAyMiw3NSwxCkFDQzA5OSxhdmdvcGFsLDA0LTIwLTIwMjIsNzUsMQpBQ0MwOTksbmd1eWVuYXAsMDQtMTktMjAyMiw3NSwwCkFDQzA5OSxoYWdhbmEsMDQtMTgtMjAyMiw3NywxCkFDQzA5OSxwcmtvaGxpLDA0LTE1LTIwMjIsNzcsMQpBQ0MwOTksc2hhcnBreSwwNC0xNC0yMDIyLDczLDEKQUNDMDk5LGF2Z29wYWwsMDQtMTMtMjAyMiw3MywwCkFDQzA5OSxncmVlbmVhaiwwNC0xMC0yMDIyLDgwLDEKQUNDMDk5LHBya29obGksMDQtMDgtMjAyMiw4MCwxCkFDQzA5OSxzaGFycGt5LDA0LTA3LTIwMjIsODEsMQpBQ0MwOTksYXZnb3BhbCwwNC0wNi0yMDIyLDgzLDEKQUNDMDk5LG5ndXllbmFwLDA0LTA1LTIwMjIsODMsMQpBQ0MwOTksZ2FiZWFsb2ksMDQtMDMtMjAyMiw4NywxCkFDQzA5OSxwcmtvaGxpLDA0LTAxLTIwMjIsODcsMQpBQ0MwOTksc2hhcnBreSwwMy0zMS0yMDIyLDg3LDEKQUNDMDk5LG5ndXllbmFwLDAzLTI5LTIwMjIsODcsMQpBQ0MwOTksaGFnYW5hLDAzLTI4LTIwMjIsODcsMQpBQ0MwOTksZ2FiZWFsb2ksMDMtMjctMjAyMiw4NywxCkFDQzA5OSxtcmZlaHJlbiwwMy0yNS0yMDIyLDg3LDEKQUNDMDk5LHNoYXJwa3ksMDMtMjQtMjAyMiw4NywxCkFDQzA5OSxhdmdvcGFsLDAzLTIzLTIwMjIsODcsMQpBQ0MwOTksbmd1eWVuYXAsMDMtMjItMjAyMiw4OCwxCkFDQzA5OSxoYWdhbmEsMDMtMjEtMjAyMiw4OCwxCkFDQzA5OSxzaGFycGt5LDAzLTExLTIwMjIsODgsMQpBQ0MwOTksc2hhcnBreSwwMy0xMC0yMDIyLDkxLDEKQUNDMDk5LGF2Z29wYWwsMDMtMDktMjAyMiw5MSwxCkFDQzA5OSxuZ3V5ZW5hcCwwMy0wOC0yMDIyLDkxLDEKQUNDMDk5LGhhZ2FuYSwwMy0wNy0yMDIyLDkzLDEKQUNDMDk5LGdhYmVhbG9pLDAzLTA2LTIwMjIsOTMsMQpBQ0MwOTkscHJrb2hsaSwwMy0wNC0yMDIyLDkzLDEKQUNDMDk5LHNoYXJwa3ksMDMtMDMtMjAyMiw5MywxCkFDQzA5OSxhdmdvcGFsLDAzLTAyLTIwMjIsOTMsMQpBQ0MwOTksbmd1eWVuYXAsMDMtMDEtMjAyMiw5NSwxCkFDQzA5OSxoZGV2YXJhaiwwMi0yOC0yMDIyLDk1LDEKQUNDMDk5LHdjbGlmZm9yLDAyLTI3LTIwMjIsOTYsMQpBQ0MwOTkscHJrb2hsaSwwMi0yNS0yMDIyLDk4LDEKQUNDMDk5LHNoYXJwa3ksMDItMjQtMjAyMiw5OCwxCkFDQzA5OSxhdmdvcGFsLDAyLTIzLTIwMjIsOTgsMQpBQ0MwOTksbmd1eWVuYXAsMDItMjItMjAyMiw5OCwxCkFDQzA5OSxoYWdhbmEsMDItMjEtMjAyMiw5OCwxCkFDQzA5OSxzaGFycGt5LDAyLTE3LTIwMjIsOTgsMQpBQ0MwOTksYXZnb3BhbCwwMi0xNi0yMDIyLDEwMiwxCkFDQzA5OSxuZ3V5ZW5hcCwwMi0xNS0yMDIyLDEwMywxCkFDQzA5OSxoYWdhbmEsMDItMTQtMjAyMiwxMDMsMQpBQ0MwOTksc2hhcnBreSwwMi0xMy0yMDIyLDEwMywxCkFDQzA5OSxzaGFycGt5LDAyLTEwLTIwMjIsMTAzLDEKQUNDMDk5LGF2Z29wYWwsMDItMDktMjAyMiwxMDQsMQpBQ0MwOTksbmd1eWVuYXAsMDItMDgtMjAyMiwxMDYsMQpBQ0MwOTksaGFnYW5hLDAyLTA3LTIwMjIsMTA2LDEKQUNDMDk5LGdhYmVhbG9pLDAyLTA2LTIwMjIsMTA2LDE=", saveAs: true});
    }
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