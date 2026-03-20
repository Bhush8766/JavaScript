let numbers = [];

function addNumber() {
    let input = document.getElementById("numInput");
    let value = Number(input.value);

    if (value === "" || isNaN(value)) return;

    numbers.push(value);
    input.value = "";
}

function showEven() {
    let even = numbers.filter(n => n % 2 === 0);
    document.getElementById("evenOutput").innerText = even.join(", ");
}

function showOdd() {
    let odd = numbers.filter(n => n % 2 !== 0);
    document.getElementById("oddOutput").innerText = odd.join(", ");
}

function clearAll() {
    numbers = [];
    document.getElementById("evenOutput").innerText = "";
    document.getElementById("oddOutput").innerText = "";
}