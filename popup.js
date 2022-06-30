let headerTextField = document.getElementById("headerTextField");

chrome.storage.sync.get("headerText", ({ headerText }) => {
    headerTextField.innerHTML = headerText;
});