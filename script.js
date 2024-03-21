let listOfResults = [];
const button = document.getElementById("button");
const header = document.getElementById("numberBlocked");
const startButton = document.getElementById("buttonCaption");
let extensionActive = false;




resultsCount = () => {
    let count = listOfResults.length
if (extensionActive == false) {
    header.textContent = `${count} results blocked!`
    startButton.textContent = "Turn off Authentic Search"
} else {
    header.textContent = "Ready to see results from multiple sites?"
    startButton.textContent = "Turn on Authentic Search"
}
};





button.addEventListener("click", resultsCount());