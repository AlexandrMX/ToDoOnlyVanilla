
const app = document.getElementById('app');
locaDataBaseLenght = window.localStorage.length;
listDataIndex = locaDataBaseLenght;

render();
renderList();
if (localStorage !== 0) {
    for (let i = 1; i < locaDataBaseLenght + 1; i++) {
        showtasks(i)
    }
}
const createNewTaskBtn = document.getElementById('createNewTask');
const taskNameInput = document.getElementById('taskNameInput');
const taskInput = document.getElementById('taskInput');

createNewTaskBtn.addEventListener("click", function () {
    listDataIndex++
    if (taskNameInput.value === '') {
        alert('Add name to your task!')
    }
    if (taskInput.value === '') {
        alert('Add a task!')
    }
    else {
        taskList = [
            taskName = taskNameInput.value,
            task = taskInput.value,
            date = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
        ]
        localStorage.setItem(listDataIndex, taskList);
        taskInput.value = ''
        taskNameInput.value = ''
        showtasks(listDataIndex);
    }
});

function showtasks(i) {
    let taskIndex = JSON.stringify(i);
    const taskContainer = document.querySelector('#taskContainer');
    let clone = taskContainer.cloneNode(true);
    app.appendChild(clone);
    clone.setAttribute('id', 'taskContainer' + taskIndex)

    let newTaskContainer = document.getElementById('taskContainer' + taskIndex)
    let children = newTaskContainer.children;
    let data = localStorage.getItem(i)
    let dataSplitted = data.split(',')
    children[0].innerText = taskIndex
    children[1].innerText = dataSplitted[0]
    children[2].innerText = dataSplitted[1]
    children[3].innerText = dataSplitted[2]

}