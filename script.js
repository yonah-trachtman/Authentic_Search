let listOfResults = [];
let btn = document.getElementById("src_btn");
let list = document.getElementById("lst");




let resultsCount = () => {
    let count = listOfResults.length()
    list.textContent = `number of results is ${count}`
};





btn.addEventListener("click", resultsCount);