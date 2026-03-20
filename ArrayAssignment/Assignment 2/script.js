let marks = [];

function addMark() {
    let input = document.getElementById("markInput");
    let value = Number(input.value);

    if (value === 0 || value === "") return;

    marks.push(value);
    input.value = "";
}

function calculate() {
    if (marks.length === 0) return;

    let total = marks.reduce((a, b) => a + b, 0);
    let avg = total / marks.length;
    let max = Math.max(...marks);
    let min = Math.min(...marks);

    document.getElementById("total").innerText = "Total Marks: " + total;
    document.getElementById("average").innerText = "Average Marks: " + avg.toFixed(2);
    document.getElementById("highest").innerText = "Highest Mark: " + max;
    document.getElementById("lowest").innerText = "Lowest Mark: " + min;
}

function reset() {
    marks = [];

    document.getElementById("total").innerText = "Total Marks:";
    document.getElementById("average").innerText = "Average Marks:";
    document.getElementById("highest").innerText = "Highest Mark:";
    document.getElementById("lowest").innerText = "Lowest Mark:";
}