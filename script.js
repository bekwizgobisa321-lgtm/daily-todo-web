const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#the-add-task-btn");
const taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", function () {
   const enteredText = taskInput.value;
   console.log(enteredText);
  if (enteredText.trim() === "") {
    return;
  }
  const li = document.createElement("li");
  li.className = "T-item";
  li.innerHTML = `
  <input type="checkbox" class="task-check">
  <span class="task-text">${enteredText}</span>
  <button class="delete-btn" type="button" aria-label="Delete task">x</button>
  `;
   taskList.appendChild(li);
   taskInput.value = "";
  });

  taskList.addEventListener("click", function (event){
    if (event.target.classList.contains("delete-btn")){
        console.log("delete button was clicked!")
    }
    const taskItem = event.target.parentElement;
    taskItem.remove();
  });
