// Change this to true to enable console.log() debug messages
const DEBUG = true; 

if (DEBUG) console.log("WARNING: CONSOLE DEBUGGING ENABLED--DISABLE BEFORE PUBLISHING");
if (DEBUG) console.log("Content Script Loaded!");

var browser = require("webextension-polyfill");

///////////////////////////////////////////////////////////////////////////////////////
//  Class Declarations  ///////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------- //

class InventoryReport {
    constructor (creator, date, location) {
        this.creator = creator;
        this.date = date;
        this.location = location;
        this.items = new Map(); // HashMap of <name: count> pairs
    }

    addItem(name, count) {
        this.items.set(name, count);
    }
}

// --------------------------------------------------------------------------------- //
///////////////////////////////////////////////////////////////////////////////////////

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
        // TODO: find a way to do this that's not busy-waiting lol
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

///////////////////////////////////////////////////////////////////////////////////////
//  Define behavior for the 'Save' button  ////////////////////////////////////////////
// --------------------------------------------------------------------------------- //

/*
 * Description: helper function for onSaveClicked()
 * Returns:     an array with all inventory report item panel elements, or an empty array if none are found
 */
function findInventoryReportPanels() {
    // There is a <script> tag adjacent to the first panel that we can easily locate since it has an ID
    let panelsParent = document.getElementById("inventory-historical-recursive.html").parentElement;
    let panels = [];
    for (let i = 2; i < panelsParent.children.length; i++) {
        panels.push(panelsParent.children[i].firstElementChild);
    }
    return panels;
} 

/*
 * Description: helper function for onSaveClicked()
 * Accepts:     An Element that is an inventory report entry panel
 * Returns:     An InventoryReport object representing the panel
 */
function parseInventoryReportPanel(panel) {
    // Step 1: get location name
    let locationName = panel.children[0].children[0].innerHTML;

    // Step 2: get author name and date
    let authorUsername = panel.children[2].firstChild.nodeValue;
    authorUsername = authorUsername.substring(authorUsername.indexOf('(') + 1, authorUsername.indexOf(')'));
    let dateOfCreation = panel.children[2].firstElementChild.innerText;

    // Step 3: create the InventoryReport object then populate its items
    let report = new InventoryReport(authorUsername, dateOfCreation, locationName);
    let itemElementsList = panel.children[1].querySelectorAll(".input-group");
    let itemName, itemCount;
    for (let i = 0; i < itemElementsList.length; i++) {
        itemName = itemElementsList[i].children[0].innerText;
        itemCount = itemElementsList[i].children[1].value;
        report.addItem(itemName, itemCount);
    }

    return report;
}

/*
 * Description: helper function for onSaveClicked()
 * Accepts:     An array of InventoryReport objects
 * Returns:     A Set of unique inventory items (columns for the CSV file)
 */
function getUniqueColumnsFromReports(reports) {
    let cols = new Set();
    for (let i = 0; i < reports.length; i++) {
        console.assert(reports[i] instanceof InventoryReport);
        for (let itemName of reports[i].items.keys()) {
            // Inventory item name should be the key of the key/value Map pair
            // Ignores duplicates, since we're using a Set
            cols.add(itemName);
        }
    }
    return cols;
}

/*
 * Description: helper function for onSaveClicked()
 * Accepts:     
 *              - A Set of unique columns to include in the CSV
 *              - An array of InventoryReport objects
 * 
 * Returns:     A string
 */
function generateCSV(cols, reports) {
    let csvOut = "";
    // Start by adding column headers
    csvOut += "Location,Creator,Date";
    cols.forEach(function(col) {
        csvOut += ("," + col);
    });
    
    // Fill in the data for each report
    
}

function onSaveClicked() {
    if (DEBUG) console.log("SAVE BUTTON CLICKED!");

    let panels = findInventoryReportPanels(); // Scrape the DOM for the info we need

    // Special case for empty query result
    if (panels.length < 1) {
        alert("No data to save.");
        return;
    }

    // Parse the Panel element into a usable JS object
    let reports = [];
    for (let i = 0; i < panels.length; i++) {
        if (DEBUG) console.log("Parsing panel " + panels[i]);
        reports.push(parseInventoryReportPanel(panels[i]));
    }

    // Identify all of the columns for the CSV output
    let columns = getUniqueColumnsFromReports(reports);
    if (DEBUG) console.log("Identified columns: " + Array.from(columns));

    // Generate the CSV from the columns and Inventory Reports
    let csvOut = generateCSV(columns, reports);
}
// --------------------------------------------------------------------------------- //
///////////////////////////////////////////////////////////////////////////////////////

startLoadingGifObserver();