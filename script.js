let container = document.querySelector("#container");
let dimension = 16;
let gridSize = 500/dimension + "px";
let gridDimensions = "";

//making the dimensions of the grid fit to 500x500 pixels 
for(let i = 0; i <= dimension; i++)
{
    gridDimensions += gridSize + " ";
}

container.style.gridTemplateRows = gridDimensions;
container.style.gridTemplateColumns = gridDimensions;

//16x16 div elements in the grid
for(let i = 1; i <= dimension; i++){
    for(let j = 1; j <= dimension; j++){
        let content = document.createElement('div');
        content.setAttribute("class", "box");
        container.appendChild(content);
        content.style.gridColumnStart = j;
        content.style.gridRowStart = i;
    }
}

//grid elements change color on hover
let squares = document.querySelectorAll('.box');
let colors = ['blue', 'red', 'yellow', 'purple', 'peach', 'orange', 'turquoise', 'pink', 'green', 'lime', 'brown', 'teal'];
squares.forEach(square =>{
    square.addEventListener('mouseover', function(e){
        let num = Math.floor(Math.random()*12);
        console.log(num);
        e.target.style.background = colors[num];
    })
})

