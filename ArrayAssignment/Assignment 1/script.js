function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if (task === "") return;

    let table = document.getElementById("taskTable").getElementsByTagName('tbody')[0];

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerText = task;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
        row.remove();
    };

    cell2.appendChild(delBtn);

    taskInput.value = "";
}

function clearTasks() {
    document.querySelector("#taskTable tbody").innerHTML = "";
}