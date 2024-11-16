const taskButton = document.querySelector(".task-button:first-child");
const matrixButton = document.querySelector(".task-button:nth-child(2)");
const clearButton = document.querySelector(".task-button:nth-child(3)");
const rootElement = document.querySelector("#root");
const quarters = document.querySelectorAll(".matrix-quart");
const taskElement = document.querySelector("#task");
const taskArea = document.querySelector(".task-area"); 
const taskList = document.querySelector(".task-list");
const deleteButtonsPanel = document.querySelector(".delete-buttons"); 
const taskPipe = document.querySelector(".task-pipe");

const deleteButtons = document.querySelectorAll(".delete-button");

let matrixActive = false;
const showHideMatrix = () =>{
    matrixActive = !matrixActive;
    const spark = '<span class="button-spark"></span>'
    rootElement.classList.toggle("hidden");
    matrixActive == false ? matrixButton.innerHTML = spark+"Pokaż matrycę" : matrixButton.innerHTML = spark+"Ukryj matrycę";
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

const deleteTask = (event) => {
    // Pobierz indeks z klikniętego przycisku
    const index = event.target.value;

    // Pobierz aktualną tablicę zadań z localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Usuń zadanie na podstawie indeksu, 1 znaczy ze ma być usunięta tylko jedna pozycja
    tasks.splice(index, 1);

    // Zapisz zaktualizowaną tablicę w localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Odśwież listę zadań na stronie
    getListFromLocalStorage();
};

document.addEventListener("keydown", (event)=>{
    if (event.key === 'Enter') {
        startSendingTask();
    }
})

// const clearList = () =>{
//     localStorage.clear();
//     getListFromLocalStorage();
// }

const getListFromLocalStorage = () => {
    taskList.innerHTML = ''; 
    deleteButtonsPanel.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []; 
    tasks.forEach((task, index) => {
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");

        //Tworzenie wpisu na liście
        newTask.classList.add("task-list-li");
        newTask.innerText = task; 
        taskList.appendChild(newTask);

        //Tworzenie przycisku do usunięcia
        deleteButton.type = "submit";
        deleteButton.classList.add("delete-button");
        deleteButton.value = index;
        deleteButton.onclick = deleteTask;
        deleteButton.innerText = "usuń";
        deleteButtonsPanel.appendChild(deleteButton);
        taskElement.placeholder = 'Nowe zadanie';
    });
};

taskButton.addEventListener("click", startSendingTask);
matrixButton.addEventListener("click", showHideMatrix);
// clearButton.addEventListener("click", clearList);

getListFromLocalStorage();

