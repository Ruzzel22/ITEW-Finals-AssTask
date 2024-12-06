/* To-Do List */
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const completedCount = document.getElementById("completed-count");
    const uncompletedCount = document.getElementById("uncompleted-count");
  
    addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
          taskTextElement.classList.toggle("completed", checkbox.checked);
          updateTaskCount();
        });
  
        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => {
          taskItem.remove();
          updateTaskCount();
        });
  
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        editButton.addEventListener("click", () => {
          const newText = prompt("Edit task:", taskTextElement.textContent);
          if (newText !== null && newText.trim() !== "") {
            taskTextElement.textContent = newText.trim();
          }
        });
  
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(editButton);
  
        taskList.appendChild(taskItem);
        taskInput.value = "";
        updateTaskCount();
      }
    });
  
    function updateTaskCount() {
      const completedTasks = taskList.querySelectorAll("input[type='checkbox']:checked").length;
      const uncompletedTasks = taskList.querySelectorAll("input[type='checkbox']:not(:checked)").length;
  
      completedCount.textContent = completedTasks;
      uncompletedCount.textContent = uncompletedTasks;
    }
});

/* To-Do List (Button-Function)*/
// Show
document.getElementById('list-show').addEventListener('click', function() {
    const toDoList = document.getElementById('to-do-list');
    toDoList.style.display = 'flex';
});

// Hide
document.getElementById('list-close').addEventListener('click', function() {
    const toDoList = document.getElementById('to-do-list');
    toDoList.style.display = 'none';
});