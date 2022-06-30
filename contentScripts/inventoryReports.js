console.log("Content Script Loaded!");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* 
    The first thing we want to do when the content script is loaded is add an `onclick` to the 'Historical' 
  tab's 'Filter' button. Clicking 'Filter' will refresh the content on the page, but not actually refresh the
  page itself, meaning that the 'Save' button would otherwise not be re-injected and go missing from the DOM.
  Basically, we are just injected a 'Save' button every time the 'Filter' button is clicked--this is safe, since
  any existing 'Save' button would be wiped by clicking 'Filter.'
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
                    console.log("LOADING GIF HIDDEN");
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

// Define behavior for the 'Save' button
function onSaveClicked() {
    console.log("SAVE BUTTON CLICKED!");
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
    console.log("SAVE BUTTON INJECTED");
}

startLoadingGifObserver();