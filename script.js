let listOfResults = [];
const btn = document.getElementById("btn");
const list = document.getElementById("list");




let resultsCount = () => {
    let count = listOfResults.length()
    list.textContent = `number of results is ${count}`
};





btn.addEventListener("click", resultsCount);