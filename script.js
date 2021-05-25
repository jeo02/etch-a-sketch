let container = document.querySelector("#container");
let dimension = 16;
let gridSize = 500/dimension + "px";
window.onload = resize();


//16x16 div elements in the grid
function resize(){
    //clearing elements from container
    container.innerHTML = '';
    //making the dimensions of the grid fit to 500x500 pixels 
    let gridDimensions = "";
    for(let i = 0; i < dimension; i++)
    {
        gridDimensions += gridSize + " ";
    }

    container.style.gridTemplateRows = gridDimensions;
    container.style.gridTemplateColumns = gridDimensions;

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
            e.target.style.background = colors[num];
        })
    })
}




let button = document.querySelector('#button');
button.addEventListener('click', function(){
    let valid = false;
    while(!valid){
        let userInput = prompt("Please eneter the new grid size.");
        if(userInput != null && userInput >0 && userInput <= 64){
            dimension = userInput;
            gridSize = 500/dimension + "px";
            resize();
            valid = true;
        }
        else{
            alert("Grid size must be a number between 1 and 64");
        }
    }
    
})

