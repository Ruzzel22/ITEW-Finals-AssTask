/* To-Do List */
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const completedCount = document.getElementById("completed-count");
    const uncompletedCount = document.getElementById("uncompleted-count");

    // Function to save tasks to local storage
    const saveTasks = () => {
        const tasks = [];
        taskList.querySelectorAll("li").forEach(taskItem => {
            const text = taskItem.querySelector("span").textContent;
            const completed = taskItem.querySelector("input[type='checkbox']").checked;
            tasks.push({ text, completed });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateTaskCount();
    };

    // Function to load tasks from local storage
    const loadTasks = () => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach(({ text, completed }) => addTask(text, completed));
        updateTaskCount();
    };

    // Function to update task counts
    function updateTaskCount() {
        const completedTasks = taskList.querySelectorAll("input[type='checkbox']:checked").length;
        const uncompletedTasks = taskList.querySelectorAll("input[type='checkbox']:not(:checked)").length;

        completedCount.textContent = completedTasks;
        uncompletedCount.textContent = uncompletedTasks;
    }

    // Function to add a task
    const addTask = (taskText, isCompleted = false) => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isCompleted;
        checkbox.addEventListener("change", () => {
            taskTextElement.classList.toggle("completed", checkbox.checked);
            saveTasks();
        });

        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;
        taskTextElement.classList.toggle("completed", isCompleted);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
            saveTasks();
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        editButton.addEventListener("click", () => {
            const newText = prompt("Edit task:", taskTextElement.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskTextElement.textContent = newText.trim();
                saveTasks();
            }
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(editButton);

        taskList.appendChild(taskItem);
        updateTaskCount();
    };

    // Add task button click event
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
            saveTasks();
        }
    });

    // Load saved tasks on page load
    loadTasks();
});

/* To-Do List (Button-Function) */
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