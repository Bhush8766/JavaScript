let arr = ["Audi", "BMW", "Mercedes", "Toyota"];

function search() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let result = document.getElementById("result");

    let found = arr.find(item => item.toLowerCase() === input);

    if (found) {
        result.innerText = found;
    } else {
        result.innerText = "No matches found";
    }
}