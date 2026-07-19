const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#the-add-task-btn");
const taskList = document.querySelector(".task-list");
/////
let tasks = [];
const savedTasks = localStorage.getItem("tasks");
console.log(savedTasks);
///
addBtn.addEventListener("click", function () {
  const enteredText = taskInput.value;

  if (enteredText.trim() === "") {
    return;
  }
  const newTask = {
    text: enteredText,
    completed: false,
  };
  tasks.push(newTask);
  console.log(tasks);
  //
  localStorage.setItem("tasks", JSON.stringify(tasks));
  //'
  const li = document.createElement("li");
  li.className = "T-item";
  li.innerHTML = `
        <input type="checkbox" class="task-check">
        <span class="task-text">${enteredText}</span>
        <button class="delete-btn" type="button" aria-label="Delete task">x</button> `;
  taskList.appendChild(li);
  taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    console.log("delete button was clicked!");

    const taskItem = event.target.parentElement;
    taskItem.remove();
  }

 if (event.target.classList.contains("task-check")) {
   const taskText = event.target.nextElementSibling;
   taskText.classList.toggle("completed");
 }

});

