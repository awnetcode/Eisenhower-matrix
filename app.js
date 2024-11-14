const taskButton = document.querySelector(".task-button:first-child");
const matrixButton = document.querySelector(".task-button:last-child");
const rootElement = document.querySelector("#root");
const quarters = document.querySelectorAll(".matrix-quart");
const taskElement = document.querySelector("#task");
const taskArea = document.querySelector(".task-area"); 
const taskPipe = document.querySelector(".task-pipe");

const showHideMatrix = () =>{
    rootElement.classList.toggle("hidden");
    matrixButton.textContent = "Pokaż matrycę"
}

const startSendingTask = () =>{
    const taskSent = document.querySelector(".task-sent");
    taskSent.classList.add("task-sent-active");
    setTimeout(()=>{
        taskSent.classList.remove("task-sent-active");
        selectQuart();
    }, 800) 
    addNewTask();
}

const selectQuart = () => {
    let count = 0;

    const interval = setInterval(() => {
        quarters.forEach((quart) => {
            quart.classList.toggle("quart-shiny"); 
        });
        count++;

        if (count === 16) {
            clearInterval(interval);
            fourthQuartSelected();
        }
    }, 200);
};

const fourthQuartSelected = () =>{
    quarters[3].classList.add("quart-shiny");
    setTimeout(()=>{
        quarters[3].classList.remove("quart-shiny");
    }, 1500)
}

const addNewTask = () =>{
    const taskValue = taskElement.value;

    if(taskValue !==''){
        const newTask = document.createElement("li");
        newTask.classList.add("task-list-li");
        newTask.innerText = taskValue;
        taskArea.appendChild(newTask);
        taskElement.value = '';
        taskElement.placeholder = 'Nowe zadanie';
    }else{
        taskElement.placeholder = 'Wprowadź coś...';
    }
}

const saveAtLocalStorage = () =>{
    const taskListArray = document.querySelectorAll(".task-list-li");
    taskListArray.forEach((taskLink, index)=>{
        const taskContent = taskLink.textContent;
        localStorage.setItem(index, taskContent);
    })
}

taskButton.addEventListener("click", startSendingTask);
matrixButton.addEventListener("click", showHideMatrix);
document.addEventListener("keydown", (event)=>{
    if (event.key === 'Enter') {
        startSendingTask();
    }

    if (event.key === 'Control'){
        saveAtLocalStorage();
    }
})

const getListFromLocalStorage = () => {
    
    for (let i = 0; i < localStorage.length-1; i++){
        const task = localStorage.getItem(i);
        const newTask = document.createElement("li");
        newTask.classList.add("task-list-li");
        newTask.innerText = task;
        taskArea.appendChild(newTask);
    }
}

getListFromLocalStorage();
//localStorage.clear();
