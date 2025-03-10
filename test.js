// Task List Array
let tasks = [];

// Create a new task
function addTask(id, name, description) {
    tasks.push({ id, name, description });
    console.log(`Task added: ${name}`);
}

// Read (View) all tasks
function viewTasks() {
    console.log("List of Tasks:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
}

// Update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task with ID ${id} updated.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task deleted: ${deletedTask[0].name}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Example Usage
addTask(1, "Buy Groceries", "Milk, Eggs, Bread");
addTask(2, "Workout", "Jogging for 30 minutes");
viewTasks();
updateTask(1, "Buy Groceries", "Milk, Eggs, Bread, and Butter");
deleteTask(2);
viewTasks();
