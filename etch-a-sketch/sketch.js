const container = document.querySelector(".container")

function createGrid (dimension) {

    containerDiv = document.querySelector('.container')
    containerDiv.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
    for (i=0; i < dimension; i++) {
        squareRow = document.createElement('div')
        squareRow.classList.add("row") //adds squareRow to class "squareRow"
        squareRow.setAttribute("id", "row")
        container.appendChild(squareRow)
    }
    var squareRowDivs = document.querySelectorAll('.row');
    for (i=0;i<squareRowDivs.length; i++) {
        for (x=0; x < dimension; x++) {
            squareColumn = document.createElement('div');
            squareColumn.classList.add("column");
            squareColumn.setAttribute("id", "col")
            squareColumn.style.border = "thin solid #0000FF"
            squareColumn.addEventListener('mouseover', colorChange)
            squareRowDivs[i].appendChild(squareColumn); 
        }
    }
}

function removeGrid () {
    document.getElementById("container").innerHTML = "";
//need to remove nodes from nodelist, ask frank
}

function getRandomColor () {
    const colorChars = "ABCDEF0123456789";
    var colour = "#";
    for (var i = 0; i < 6; i++) {
        colour += colorChars[Math.floor(Math.random()*16)];
    }
    return colour
}

function colorChange(e) {
    var theColor = getRandomColor();
    exactSquareColumn = e.target;
    exactSquareColumn.style.backgroundColor = theColor;
}

function clearBoard(){
    var squareColumnDivs = document.querySelectorAll('.column');
    for (i=0;i<squareColumnDivs.length; i++) {
        squareColumnDivs[i].style.backgroundColor = "white";
    }
}

function newGrid() {
    var dim = prompt("Enter the dimensions of the grid you would like to create (Ex. Enter the number '64' to create a 64x64 grid")
    if (dim) {
        clearBoard()
        removeGrid()
        createGrid(Number(dim))
    }
}

