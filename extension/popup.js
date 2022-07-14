let headerTextField = document.getElementById("headerTextField");

chrome.storage.sync.get("headerText", ({ headerText }) => {
    headerTextField.innerHTML = headerText;
});

function onDownloadTestClicked() {
    console.log("button clicked");
    chrome.downloads.download({url: "data:text/plain;charset=utf-8;base64,VGVzdGluZywgdGVzdGluZywgMTIz", saveAs: true});
    //chrome.runtime.sendMessage({MESSAGE_TYPE: "DOWNLOAD_REQ"});
}

document.getElementById("testDLButton").onclick = onDownloadTestClicked;