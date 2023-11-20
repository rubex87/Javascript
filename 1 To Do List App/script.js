document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    if (taskInput.value.trim() === '') return;

    const tasksList = document.getElementById('tasks-list');
    const li = document.createElement('li');
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Eliminar</button>`;
    tasksList.appendChild(li);

    saveTasks();
    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#tasks-list li').forEach(task => {
        tasks.push(task.innerText.replace('Eliminar', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
        const tasksList = document.getElementById('tasks-list');
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">Eliminar</button>`;
        tasksList.appendChild(li);
    });
}
