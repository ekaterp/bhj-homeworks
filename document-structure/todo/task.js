const inputForm = document.forms;
const tasksInput = document.querySelector(".tasks__input");
const tasksList = document.getElementById("tasks__list");

function addTask(message) {
    let newTask = `
    <div class="task">
        <div class="task__title"> ${message} </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    tasksList.insertAdjacentHTML("beforeend", newTask);
    tasksList.lastElementChild.querySelector('.task__remove').addEventListener('click', function(e) {
        e.preventDefault();
        e.target.parentElement.remove();
    });
};

inputForm[0].addEventListener('submit', event => {
    if (tasksInput.value.trim() != "") {
        event.preventDefault();
        addTask(tasksInput.value);
        tasksInput.value = "";
    }
});


