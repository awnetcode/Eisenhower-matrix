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

createMatrix();


//Zrobić tę wspaniałą stronę, która pomoże w końcu skupić się na tym co ważne, i wszystkie prośby innych ludzi wyjebie do kosza, gdzie ich miejsce.
//A jeśli overflow na tym polu się wydarzy, natenczas się scroll po prawej pojawi.