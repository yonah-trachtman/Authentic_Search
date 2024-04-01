let listOfResults = [];
const actionButton = document.getElementById("actionButton");
let extensionActive = false;

resultsCount = () => {
    const header = document.getElementById("numberBlocked");
    const startButton = document.getElementById("buttonCaption");
chrome.tabs.forEach(cite =>  { 
    listOfResults.push(cite)
    });

    let count = listOfResults.length
if (extensionActive == false) {
    header.textContent = `${count} results blocked!`
    startButton.textContent = "Turn off Authentic Search"
    extensionActive = true
} else if (extensionActive == true) {
    header.textContent = "Ready to see results from multiple sites?"
    startButton.textContent = "Turn on Authentic Search"
    extensionActive = false
}
};

actionButton.addEventListener("click", resultsCount)