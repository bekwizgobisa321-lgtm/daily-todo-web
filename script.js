const taskInput = document.querySelector('#task-input');
const addBtn = document.querySelector('#the-add-task-btn');
const taskList = document.querySelector('.task-list');


addBtn.addEventListener("click", function () {
    const enteredText = taskInput.value;
   if (enteredText.trim() === ''){
    return;
   }
   console.log(enteredText);
     
});