let names = [];

function addName() {
  let input = document.getElementById("nameInput");
  let name = input.value.trim();

  if (name !== "") {
    names.push(name);
    input.value = "";
    displayNames();
  }
}

function sortNames() {
  names.sort((a, b) => a.localeCompare(b));
  displayNames();
}

function resetList() {
  names = [];
  displayNames();
}

function displayNames() {
  let list = document.getElementById("nameList");
  
  // Show names exactly in one line (comma-separated)
  list.textContent = names.join(", ");
}