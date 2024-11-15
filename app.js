const taskButton = document.querySelector(".task-button:first-child");
const matrixButton = document.querySelector(".task-button:nth-child(2)");
const clearButton = document.querySelector(".task-button:nth-child(3)");
const rootElement = document.querySelector("#root");
const quarters = document.querySelectorAll(".matrix-quart");
const taskElement = document.querySelector("#task");
const taskArea = document.querySelector(".task-area"); 
const taskPipe = document.querySelector(".task-pipe");


let matrixActive = false;
const showHideMatrix = () =>{
    matrixActive = !matrixActive;
    rootElement.classList.toggle("hidden");
    matrixActive == false ? matrixButton.textContent = "Pokaż matrycę" : matrixButton.textContent = "Ukryj matrycę";
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


const addNewTask = () => {
    const taskValue = taskElement.value.trim();
    if (taskValue !== '') {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskValue);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskElement.value = ''; // Wyczyść pole
        taskElement.placeholder = 'Nowe zadanie';

        getListFromLocalStorage();
    } else {
        taskElement.placeholder = 'Wprowadź coś...';
    }

    // Przypisz placeholder po wyczyszczeniu pola
    taskElement.placeholder = 'Wprowadź nowe zadanie';
};

document.addEventListener("keydown", (event)=>{
    if (event.key === 'Enter') {
        startSendingTask();
    }
})

const clearList = () =>{
    localStorage.clear();
    getListFromLocalStorage();
}

const getListFromLocalStorage = () => {
    taskArea.innerHTML = ''; 
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []; 
    tasks.forEach((task) => {
        const newTask = document.createElement("li");
        newTask.classList.add("task-list-li");
        newTask.innerText = task; 
        taskArea.appendChild(newTask);
        taskElement.placeholder = 'Nowe zadanie';
    });
};

taskButton.addEventListener("click", startSendingTask);
matrixButton.addEventListener("click", showHideMatrix);
clearButton.addEventListener("click", clearList);

getListFromLocalStorage();

//localStorage.clear();
