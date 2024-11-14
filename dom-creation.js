const mainContent = document.querySelector("#root");

const createQuartElement = (quartName, quartText) =>{
    const quarter = document.createElement("div");
    quarter.innerText = quartText
    quarter.classList.add(quartName, "matrix-quart");
    return quarter;
}

const createMatrix = () =>{

    const matrixElement = document.createElement("div");
    mainContent.appendChild(matrixElement).classList.add("matrix");

    const matrix = document.querySelector(".matrix");
    matrix.appendChild(createQuartElement("first-quart", "Pilne i ważne"));
    matrix.appendChild(createQuartElement("second-quart", "Pilne i nieważne"));
    matrix.appendChild(createQuartElement("third-quart", "Niepilne i ważne"));
    matrix.appendChild(createQuartElement("fourth-quart", "Niepilne i nieważne"));
}

const createTaskPipe = () =>{
    const pipeElement = document.createElement("div");
    const sentElement = document.createElement("div");
    pipeElement.classList.add("task-pipe");
    mainContent.prepend(pipeElement);

    const pipe = document.querySelector(".task-pipe");
    pipe.appendChild(sentElement).classList.add("task-sent");
}

createMatrix();
createTaskPipe();
