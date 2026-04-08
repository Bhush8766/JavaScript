const API = "https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects";

let projects = [];
let filteredProjects = [];
let currentPage = 1;
let rowsPerPage = 8;

async function fetchData() {
  const res = await fetch(API);
  projects = await res.json();

  projects = projects.map(p => {
    if (p.status === "Pending") p.status = "In Progress";
    return p;
  });

  filteredProjects = [...projects];

  createTableHead();
  displayData();
}

function createTableHead() {
  document.getElementById("tableHead").innerHTML = `
    <tr>
      <th>#</th>
      <th>Project</th>
      <th>Department</th>
      <th>Priority</th>
      <th>Status</th>
      <th>Start</th>
      <th>End</th>
    </tr>
  `;
}

function displayData() {
  const table = document.getElementById("tableBody");
  table.innerHTML = "";

  let start = (currentPage - 1) * rowsPerPage;
  let pageData = filteredProjects.slice(start, start + rowsPerPage);

  pageData.forEach((p, index) => {

    let statusBadge =
      p.status === "Completed"
        ? `<span class="badge-completed">Completed</span>`
        : `<span class="badge-progress">In Progress</span>`;

    let row = `
      <tr>
        <td>${start + index + 1}</td>

        <td>
          <div class="project-name">${p.ProjectName || "-"}</div>
          <div class="project-sub">${p.Details || ""}</div>
        </td>

        <td>${p.Department || "-"}</td>
        <td>${p.priority || "-"}</td>
        <td>${statusBadge}</td>
        <td>${p.startDate || "Invalid Date"}</td>
        <td>${p.EndDate || "Invalid Date"}</td>
      </tr>
    `;

    table.innerHTML += row;
  });

  createPagination();
}

function createPagination() {
  let pageCount = Math.ceil(filteredProjects.length / rowsPerPage);
  let buttons = "";

  for (let i = 1; i <= pageCount; i++) {
    buttons += `<button onclick="changePage(${i})">${i}</button>`;
  }

  document.getElementById("pagination").innerHTML = buttons;
}

function changePage(page) {
  currentPage = page;
  displayData();
}

document.getElementById("searchInput").addEventListener("input", function () {
  let value = this.value.toLowerCase();

  filteredProjects = projects.filter(p =>
    JSON.stringify(p).toLowerCase().includes(value)
  );

  currentPage = 1;
  displayData();
});

document.getElementById("statusFilter").addEventListener("change", function () {
  let status = this.value;

  filteredProjects = status === "all"
    ? [...projects]
    : projects.filter(p => p.status === status);

  currentPage = 1;
  displayData();
});
   
async function addProject() {
  
  const project = {
    ProjectName: document.getElementById("name").value,
    Details: document.getElementById("details").value,
    Department: document.getElementById("department").value,
    priority: document.getElementById("priority").value,
    startDate: document.getElementById("startDate").value,
    EndDate: document.getElementById("endDate").value,
    status: document.getElementById("status").value
  };

  if (!project.ProjectName) {
    alert("Enter project name");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project)
  });

  const modal = bootstrap.Modal.getInstance(document.getElementById("projectModal"));
  modal.hide();

  document.querySelectorAll("#projectModal input").forEach(i => i.value = "");

  fetchData();
}

fetchData();