const DEBUG = true;

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
}

retrieveHomePageFromStorage();