const signIn = document.querySelectorAll(".lists");
signIn.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("activeTags");
  });
});

/* MAIN APP SCRIPTING */
/* starts from here */

// Declearing variables
const body = document.querySelector("body");
const title = document.querySelector("h1");
const btn = document.querySelectorAll(".button");
const inputField = document.getElementById("inputField");
const input = document.getElementById("inputField");
const addTaskBtn = document.getElementById("submitTask");
const modeChangeBtn = document.getElementById("modeChange");
const taskField = document.getElementById("tasks");
const emptyImage = document.querySelector(".emptyImg");

function addTask() {
  if (!input.value.trim()) {
    return;
  }
  // removes the  emptyimage
  emptyImage.classList.add("removeImage");

  // creates a div for the list
  let listDiv = document.createElement("div");
  listDiv.className = "liContainer";
  taskField.appendChild(listDiv);

  // creates a checkbox inside the list div
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "my-checkbox";
  listDiv.appendChild(checkBox);

  //creates a li inside the list div
  let tasklist = document.createElement("li");
  tasklist.textContent = input.value;
  tasklist.className = "li";
  listDiv.appendChild(tasklist);

  // creates a deleteOPtion inside the list div
  let deleteTask = document.createElement("img");
  deleteTask.src = "/Images/delete.png";
  deleteTask.className = "deleteOption";
  listDiv.appendChild(deleteTask);

  deleteTask.addEventListener("click", () => {
    listDiv.remove();
  });
  // clicking on checkbox grades out the task.
  checkBox.addEventListener("click", () => {
    tasklist.classList.toggle("completedTask");
  });

  // this resets the value in the input field
  input.value = "";
}

function toggleMode() {
  // Dark Mode Btn
  if (modeChangeBtn.src.includes("/Images/darkMode.png")) {
    modeChangeBtn.src = "/Images/lightMode.png";
  } else {
    modeChangeBtn.src = "/Images/darkMode.png";
  }

  // Dark mode effects
  body.classList.toggle("ChangBgcMode");
  btn.forEach((btn) => {
    btn.classList.toggle("changeBtnMode");
  });
  title.classList.toggle("titleColor");
  inputField.classList.toggle("inputBgcPlchldr");
  inputField.classList.toggle("inputBgc");
}

// eventListners
modeChangeBtn.addEventListener("click", toggleMode);
addTaskBtn.addEventListener("click", addTask);
// Enter key functionality
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
