console.log("Content Script Loaded!");

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        console.log("-----------\nMessage received:");
        console.log(message);
        console.log("-----------");  
    }
);