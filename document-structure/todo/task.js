const inputForm = document.forms;
const tasksInput = document.querySelector(".tasks__input");
const tasksList = document.getElementById("tasks__list");

inputForm[0].addEventListener('submit', event => {
    event.preventDefault();
    if (tasksInput.value.trim() != "") {
        addTask(tasksInput.value);
        tasksInput.value = "";
    }
});

function addTask(task) {
    let newTask = `
    <div class="task">
        <div class="task__title"> ${task} </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;

    tasksList.insertAdjacentHTML("beforeend", newTask);
    tasksList.lastElementChild.querySelector('.task__remove').addEventListener('click', function(e) {
        e.preventDefault();
        e.target.parentElement.remove();
    });
};

function alternativeAddTask(task) {     //не используется
    let newTask = document.createElement('div');
    newTask.classList.add('task');
    let newTaskTitle = document.createElement('div');
    newTaskTitle.classList.add('task__title');
    newTaskTitle.innerText = task;
    newTask.appendChild(newTaskTitle);
    let newTaskRemoveLink = document.createElement('a');
    newTaskRemoveLink.classList.add('task__remove');
    newTaskRemoveLink.innerHTML = '&times;';
    newTask.appendChild(newTaskRemoveLink);
    newTaskRemoveLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.target.parentElement.remove();
    });

    tasksList.appendChild(newTask);
};


