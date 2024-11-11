const taskButton = document.querySelector(".task-button");
const quarters = document.querySelectorAll(".matrix-quart");

const startSendingTask = () =>{
    const taskSent = document.querySelector(".task-sent");
    taskSent.classList.add("task-sent-active");
    setTimeout(()=>{
        taskSent.classList.remove("task-sent-active");
        selectQuart();
    }, 2800) 
}

const selectQuart = () => {
    let count = 0;

    const interval = setInterval(() => {
        quarters.forEach((quart) => {
            quart.classList.toggle("quart-shiny"); 
        });
        count++;

        if (count === 20) {
            clearInterval(interval);
            fourthQuartSelected();
        }
    }, 300);
};

const fourthQuartSelected = () =>{
    quarters[3].classList.add("quart-shiny");
    setTimeout(()=>{
        quarters[3].classList.remove("quart-shiny");
    }, 3000)
}

taskButton.addEventListener("click", startSendingTask);

