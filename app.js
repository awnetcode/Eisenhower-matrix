const taskButton = document.querySelector(".task-button");

const startSendingTask = () =>{
    const taskSent = document.querySelector(".task-sent");
    taskSent.classList.add("task-sent-active");
    setTimeout(()=>{
        taskSent.classList.remove("task-sent-active");
    }, 2800)
}

taskButton.addEventListener("click", startSendingTask);