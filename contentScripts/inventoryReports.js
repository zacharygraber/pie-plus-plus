console.log("Content Script Loaded!");

/* 
    The first thing we want to do when the content script is loaded is add an `onclick` to the 'Historical' 
  tab's 'Filter' button. Clicking 'Filter' will refresh the content on the page, but not actually refresh the
  page itself, meaning that the 'Save' button would otherwise not be re-injected and go missing from the DOM.
  Basically, we are just injected a 'Save' button every time the 'Filter' button is clicked--this is safe, since
  any existing 'Save' button would be wiped by clicking 'Filter.'
*/
let loadingGifElement;
while (!(loadingGifElement = document.getElementsByTagName("loading-gif").item(0))) {
    continue;
}
console.log(loadingGifElement);
let observer = new MutationObserver(function(mutations) {
    // Wait for the loading gif element to be hidden; that's when we know the content is there.
    for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
            if (loadingGifElement.getAttribute("class").includes("ng-hide") && !(mutation.oldValue.includes("ng-hide"))) {
                console.log("LOADING GIF HIDDEN");
                //observer.disconnect();
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

test();

// function onFilterClicked() {
//     let loadingGifElement = document.getElementsByTagName("loading-gif")[0];
//     let observer = new MutationObserver(function(mutations) {
//         // Wait for the loading gif element to be hidden; that's when we know the content is there.
//         for (const mutation of mutations) {
//             if (mutation.type === "attributes") {
//                 if (loadingGifElement.getAttribute("class").includes("ng-hide")) {
//                     console.log("LOADING GIF HIDDEN");
//                     observer.disconnect();
//                 }
//             }
//         }
//     });
// }