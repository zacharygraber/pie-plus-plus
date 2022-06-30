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

