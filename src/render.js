const greenColor = '#34750d';
const redColor = '#ec4009';

// let LocaDataBase = window.localStorage.length;

function renderList() {
    const h2 = document.createElement('h2');
    createDomElement(app, h2, 'taskListTitle');
    styleTextElement(taskListTitle, 'Tasks!', '"Comic Sans MS", cursive, sans-serif',
        greenColor, '36px', 'center', 'normal');
    const div = document.createElement('div');
    createDomElement(app, div, 'taskContainer');
    createSpanTable(taskContainer);
}


function createSpanTable(parent) {
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');

    createDomElement(parent, span1, 'number', 'dataField');
    styleTextElement(number, 'Nr', '"Arial, Helvetica", sans-serif',
        'black', '14px', 'center', 'normal');
    const numberSpan = document.querySelector('#number')
    numberSpan.style.width = '10%'
    numberSpan.style.paddingRight = '5px'

    createDomElement(parent, span2, 'taskName', 'dataField');
    styleTextElement(taskName, 'Task name', '"Arial, Helvetica", sans-serif',
        'black', '14px', 'left', 'normal');
    const taskNameSpan = document.querySelector('#taskName');
    taskNameSpan.style.width = '20%'
    taskNameSpan.style.paddingRight = '5px'

    createDomElement(parent, span3, 'task', 'dataField');
    styleTextElement(task, 'Task', '"Arial, Helvetica", sans-seSrif',
        'black', '14px', 'left', 'normal');
    const taskSpan = document.querySelector('#task');
    taskSpan.style.width = '50%'
    taskSpan.style.paddingRight = '5px'

    createDomElement(parent, span4, 'date', 'dataField');
    styleTextElement(date, 'Date', '"Arial, Helvetica", sans-serif',
        'black', '14px', 'left', 'normal');
    const dateSpan = document.querySelector('#date');
    dateSpan.style.width = '20%'
    dateSpan.style.paddingRight = '5px'

    const taskContainer = document.getElementById('taskContainer')
    styleTable(taskContainer, '1px solid black', '5px 30px')
    styleElement(taskContainer, 'flex')
    taskContainer.style.justifyContent = 'space-around'
}

function render() {

    const h1 = document.createElement('h1');
    createDomElement(app, h1, 'appTitle');    // (parentDivId, tagToCreate, id)
    const appTitle = document.getElementById('appTitle');
    styleTextElement(appTitle, 'To Do List', '"Comic Sans MS", cursive, sans-serif',
        greenColor, '54px', 'center', 'normal'); // (element, text, fontFamily, color, fontSize, textAlign, fontWeight) 

    const div = document.createElement('div');
    createDomElement(app, div, 'appCreateTask');
    const appCreateTask = document.getElementById('appCreateTask');
    styleTextElement(appCreateTask, 'Task name:    ', '"Arial, Helvetica", sans-serif',
        'black', '24px', 'center', 'normal');

    const input = document.createElement('input');
    createDomElement(appCreateTask, input, 'taskNameInput');
    const taskNameInput = document.getElementById('taskNameInput');
    taskNameInput.setAttribute('placeholder', 'Add task name    ')

    const span = document.createElement('span');
    createDomElement(appCreateTask, span, 'taskSpan');
    const taskSpan = document.getElementById('taskSpan');
    styleTextElement(taskSpan, '', '"Arial, Helvetica", sans-serif',
        'black', '24px', 'center', 'normal');
    styleElement(taskSpan, 'block', '30px auto');

    const textarea = document.createElement('textarea');
    createDomElement(taskSpan, textarea, 'taskInput');

    const taskInput = document.getElementById('taskInput');
    taskInput.setAttribute('placeholder', 'Add task here    ');
    styleInput(taskInput, '150px', '350px')

    const btn = document.createElement('button');
    createDomElement(appCreateTask, btn, 'createNewTask');

    const createNewTask = document.getElementById('createNewTask');
    styleTextElement(createNewTask, 'CREATE NEW TASK', '"Impact, Charcoal", sans-serif',
        'black', '24px', 'center', '900');
    styleBtn(createNewTask, '1px solid black', redColor, '15px 30px', '25px auto', 'block', 'fit-content');
    //(elementId, border , backgroundColor, padding, margin, display, width)
    createNewTask.setAttribute('type', 'submit');

}

function createDomElement(parentDivId, tagToCreate, id, className) {
    parentDivId.appendChild(tagToCreate);
    if (id !== (undefined || '')) {
        tagToCreate.setAttribute('id', id);
    }
    if (className !== undefined) {
        tagToCreate.setAttribute('class', className);
    }
}

function styleTextElement(elementId, text, fontFamily, color, fontSize, textAlign, fontWeight) {
    elementId.innerText = text;
    elementId.style.fontFamily = fontFamily;
    elementId.style.fontSize = fontSize;
    elementId.style.color = color;
    elementId.style.textAlign = textAlign;
    elementId.style.fontWeight = fontWeight;
}

function styleBtn(elementId, border, backgroundColor, padding, margin, display, width) {
    elementId.style.border = border;
    elementId.style.backgroundColor = backgroundColor;
    elementId.style.padding = padding;
    elementId.style.margin = margin;
    elementId.style.display = display;
    elementId.style.width = width;
}

function styleInput(elementId, height, width) {
    elementId.style.height = height;
    elementId.style.width = width;
}

function styleElement(elementId, display, margin) {
    elementId.style.display = display;
    elementId.style.margin = margin;
}

function styleTable(elementId, border, margin) {
    elementId.style.border = border;
    elementId.style.margin = margin;
}