let input = document.querySelector('.input');
let submit = document.querySelector('.add');
let taskDivs = document.querySelector('.tasks');

let arrayOfTasks = [];

submit.addEventListener('click', function() {
    if (input.value !== "") {
        addTask(input.value);
        input.value = "";
        displayTasks(); // Call function to display tasks
    }
});

function addTask(task) {
    let newTask = {
        id: Date.now(),
        description : task,
        completed : false
    }
    arrayOfTasks.push(newTask);
    console.log(arrayOfTasks);
}

function displayTasks() {
    taskDivs.innerHTML = ''; // Clear previous tasks
    arrayOfTasks.forEach(task => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        // Checkbox for task completion
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
            task.completed = checkbox.checked;
        });
        taskDiv.appendChild(checkbox);

        // Task description
        let taskDescription = document.createElement('span');
        taskDescription.textContent = task.description;
        taskDiv.appendChild(taskDescription);

        // Delete button for task
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(task.id);
            displayTasks(); // Re-display tasks after deletion
        });
        taskDiv.appendChild(deleteButton);

        taskDivs.appendChild(taskDiv);
    });
}

function deleteTask(id) {
    arrayOfTasks = arrayOfTasks.filter(task => task.id !== id);
}
