// Get references to the input and task container
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");

// Press Enter to add a task
taskInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        createTask();
    }
});

// Click Add button
document.querySelector("#push").onclick = function () {
    createTask();
};

// Function to create a new task
function createTask() {

    if (taskInput.value.trim() === "") {
        alert("The task field is blank. Enter a task name and try again.");
        return;
    }

    taskSection.innerHTML += `
        <div class="task">
            <label>
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${taskInput.value}</p>
            </label>

            <div class="delete">
                <i class="uil uil-trash"></i>
            </div>
        </div>
    `;

    // Delete buttons
    let currentTasks = document.querySelectorAll(".delete");

    for (let i = 0; i < currentTasks.length; i++) {
        currentTasks[i].onclick = function () {
            this.parentNode.remove();
        };
    }

    // Add scrolling if many tasks
    if (taskSection.offsetHeight >= 300) {
        taskSection.classList.add("overflow");
    } else {
        taskSection.classList.remove("overflow");
    }

    // Clear the input
    taskInput.value = "";
}

// Toggle completed state
function updateTask(task) {
    let taskItem = task.nextElementSibling;

    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}