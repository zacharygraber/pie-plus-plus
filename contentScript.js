(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {URL} = obj;
        if (URL === "INV") {
            console.log("TRYING TO INJECT HEADER");
            injectHeader();
        }
        else {
            console.log("TRYING TO REMOVE HEADER");
            removeHeaderIfExists();
        }
    });
})();

const getHeaderTextFromStorage = async () => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get("headerText", ({ headerText }) => {
            if (headerText === undefined) {
                reject();
            }
            else {
                resolve(headerText);
            }
        });
    });
}

async function injectHeader() {
    let pieHeader = document.getElementById("header");

    let headerInnerText = await getHeaderTextFromStorage();

    chrome.storage.sync.get("headerText", ({ headerText }) => {
        headerInnerText = headerText;
    });

    let injectedHeader = `
        <div id="p3InjectedHeader" style="background-color: #990000; width: 100%;">
            <h2 style="color: #EDEBEB;">${headerInnerText}</h2>
        </div>
    `;

    pieHeader.insertAdjacentHTML("beforebegin", injectedHeader);
}

function removeHeaderIfExists() {
    let headerElem = document.getElementById("p3InjectedHeader");
    if (!(headerElem === null)) {
        headerElem.remove();
    }
}