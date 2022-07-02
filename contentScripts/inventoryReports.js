// Change this to true to enable console.log() debug messages
const DEBUG = true; 

if (DEBUG) console.log("Content Script Loaded!");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Returns a string with this tab's current URL
function requestCurrentUrl() {
    let url = "";
    chrome.runtime.sendMessage({MESSAGE_TYPE: URL_REQ}, function(response) {
        if (response.url) url = response.url;
    });
    return url;
}

/* 
        We are injecting a 'Save' button onto the 'Historical' part of the Inventory Reports
    page. The problem here is with Angular and the way it loads web pages. When the page is "finished"
    loading, the content isn't there yet; instead, the loading screen is displayed while the rest of
    the page's content is loaded into the DOM. We need to wait for the page to *actually* be loaded,
    and the easiest way I've found is to attach an Observer to the loading icon--whenever the loading
    icon *was* visible and is now hidden, the page should be either done or nearly done loading. This
    also solves the problem of the 'Filter' button wiping away our custom DOM element.
*/

async function startLoadingGifObserver() {
    let loadingGifElement;
    while (!(loadingGifElement = document.getElementsByTagName("loading-gif")[0])) {
        await sleep(500);// Put a wait in here so we're only spam-checking every 500ms, not holding up the entire page
    }
    let observer = new MutationObserver(function(mutations) {
        // Wait for the loading gif element to be hidden; that's when we know the content is there.
        for (const mutation of mutations) {
            if (mutation.type === "attributes") {
                if (loadingGifElement.getAttribute("class").includes("ng-hide")) {
                    if (DEBUG) console.log("LOADING GIF HIDDEN");
                    // observer.disconnect();
                    attemptSaveButtonInject();
                }
            }
        }
    });
    observer.observe(loadingGifElement, {
        childList: false, 
        characterData: false, 
        attributes: true, 
        attributeOldValue: true, 
        attributeFilter: ["class"]
    });
}

async function attemptSaveButtonInject() {
    // Wait for the filter button to show up again, just in case there is a slight delay between loading finish and
    //      the DOM being updated
    let filterButtonElement;
    while (!(filterButtonElement = document.querySelector("button[ng-click='filterButtonAction()']"))) {
        await sleep(500); // Put a wait in here so we're only spam-checking every 500ms, not holding up the entire page
    }

    let injectedButton = document.createElement("button");
    injectedButton.setAttribute("class", "btn btn-primary");
    injectedButton.setAttribute("type", "button");
    injectedButton.onclick = onSaveClicked;
    injectedButton.innerHTML = "Save";

    filterButtonElement.parentElement.appendChild(injectedButton);
    if (DEBUG) console.log("SAVE BUTTON INJECTED");
}

// Define behavior for the 'Save' button
function onSaveClicked() {
    if (DEBUG) console.log("SAVE BUTTON CLICKED!");
    // Parse whatever is in the 'Data' tab into an array
    const entries = [];
    // TODO: figure out a logical structure for the data
}

startLoadingGifObserver();