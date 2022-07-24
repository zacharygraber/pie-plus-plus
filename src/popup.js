const DEBUG = true;
if (DEBUG) console.log("WARNING: CONSOLE DEBUGGING ENABLED--DISABLE BEFORE PUBLISHING");

var browser = require("webextension-polyfill");

var homePage = "";
function retrieveHomePageFromStorage() {
    let getFromStorage = browser.storage.sync.get("homePage");
    getFromStorage.then(function(result) {
        homePage = result;
        let homePageText = document.getElementById("homePageField");
        if (DEBUG) console.log(homePage);
        homePageText.value = homePage.homePage;
    });
    let homePageEdit = document.getElementById("homePageFieldEdit");
    homePageEdit.onclick = onHomePageEdit;
}

function onHomePageEdit() {
    if (DEBUG) console.log("EDITING HOME PAGE FIELD");
    let homePageInput = document.getElementById("homePageField");
    let homePageInputButton = document.getElementById("homePageFieldEdit");
    homePageInputButton.src = "images/save-icon.svg";
    homePageInputButton.onclick = function() {
        if (DEBUG) console.log("SAVING HOME PAGE VALUE");
        let saving = browser.storage.sync.set({homePage: homePageInput.value});
        saving.then(function(result) {
            homePageInput.disabled = true;
            homePageInputButton.src = "images/icons8-edit.svg";
            homePageInputButton.onclick = onHomePageEdit;
        });
    };
    homePageInput.disabled = false;
}

retrieveHomePageFromStorage();