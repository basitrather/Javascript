// Login page disableON auth = true ✅
// Check auth role to show approp UI ✅
// If role = admin -- Load all the users✅ --> Show total users ✅ and tasks--> Load all previous assignmemts --> Create  btn for assignment ✅ --> Submit form for assignment ✅--> Load assignments again --> again Show total users and tasks

const loadUserdata = function () {
  profiles.forEach((element) => {
    let tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    let userName = document.createElement("td");
    tableRow.appendChild(userName);
    userName.textContent = element.username;
    let age = document.createElement("td");
    tableRow.appendChild(age);
    age.textContent = element.age;
  });
};

const loadAssigmentCount = function () {
  totalAssignments.textContent = assignmemts.length + 1;
};
const assignmentHistory = () => {
  let revivedAssignments = JSON.parse(localStorage.getItem("assignment"));
  assignmemts = [];
  console.log(assignmemts);
  assignmemts.push(...revivedAssignments);
  loadAssignments();
  console.log(assignmemts);
};
const loadAssignments = function () {
  assignmemts.forEach((element) => {
    let tableRow = document.createElement("tr");
    AssignmentTableBody.appendChild(tableRow);

    let taskName = document.createElement("td");
    tableRow.appendChild(taskName);
    taskName.textContent = element.Name;

    let taskDescription = document.createElement("td");
    tableRow.appendChild(taskDescription);
    taskDescription.textContent = element.description;
  });
};
const loadUserTasks = function () {
  assignmemts.forEach((element) => {
    let userTaskRow = document.createElement("tr");
    userTaskBody.appendChild(userTaskRow);

    let UserTaskName = document.createElement("th");
    userTaskRow.appendChild(UserTaskName);

    let UserTaskDescription = document.createElement("th");
    userTaskRow.appendChild(UserTaskDescription);

    UserTaskName.textContent = element.Name;
    UserTaskDescription.textContent = element.description;
  });
};
const profiles = [
  { username: "basit", password: "1", role: "admin", age: 22, auth: false },
  { username: "a", password: "2", role: "user", age: 23, auth: false },
  { username: "faisal", password: "11111", role: "user", age: 21, auth: false },
];
let assignmemts = [];
let inputSubmit = document.getElementById("input-submit");
let loginContainer = document.querySelector(".login-container");
let adminDashboard = document.querySelector(".container");
let userPanel = document.querySelector(".userPanel");
let addTaskBtn = document.querySelector(".addTaskBtn");
let addTaskWindow = document.querySelector(".AssignmentForm");
let totalUsers = document.querySelector(".total-users");
let totalAssignments = document.querySelector(".total-assignments");
let tableBody = document.querySelector(".userTableBody");
let submitBtn = document.querySelector(".formSubmitBtn");
let taskName = document.querySelector("#user-box-name");
let taskDescription = document.querySelector("#user-box-description");
let userTaskBody = document.querySelector(".userTaskBody");
let AssignmentTableBody = document.querySelector(".AssignmentTableBody");

inputSubmit.addEventListener("click", function () {
  let inputUserName = document.getElementById("email").value;
  let inputPassword = document.getElementById("password").value;
  for (let curPro = 0; curPro < profiles.length; curPro++) {
    let checkUserName = profiles[curPro].username === inputUserName;
    let checkPassword = profiles[curPro].password === inputPassword;
    if (checkUserName && checkPassword) {
      let checkRole = profiles[curPro].role;
      if (checkRole === "admin") {
        profiles[curPro].auth = true;
        loginContainer.classList.add("displaynone");
        adminDashboard.classList.add("displayFlex");
        totalUsers.textContent = profiles.length - 1;
        loadUserdata();
        loadAssignments();
        assignmentHistory();
        loadAssigmentCount();
      }
      if (checkRole === "user") {
        profiles[curPro].auth = true;
        loginContainer.classList.add("displaynone");
        userPanel.classList.add("displayFlex");
        assignmentHistory();
        loadUserTasks();
      }
    }
  }
});

addTaskBtn.addEventListener("click", function () {
  addTaskWindow.style.display = "block";
  adminDashboard.style.display = "none";
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTaskWindow.style.display = "none";
  adminDashboard.style.display = "flex";
  const obj = { Name: "", description: "" };
  obj.Name = taskName.value;
  obj.description = taskDescription.value;
  assignmemts.push(obj);
  console.log(obj);
  localStorage.setItem("assignment", JSON.stringify(assignmemts));
  let tableRow = document.createElement("tr");
  AssignmentTableBody.appendChild(tableRow);

  let taskNameData = document.createElement("td");
  tableRow.appendChild(taskNameData);
  taskNameData.textContent = obj.Name;

  let taskDescriptionData = document.createElement("td");
  tableRow.appendChild(taskDescriptionData);
  taskDescriptionData.textContent = obj.description;
  loadAssigmentCount();
});
