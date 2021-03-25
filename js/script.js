//Defaults
const container = document.getElementById('container');
const defaultSize = 16;
const maxSize = 100;
const colorStyle = "colorStyle";


//Create Grid
function makeRows(width) {
    if(width > 100) ;

    container.style.setProperty('--grid-rows',width);
    container.style.setProperty('--grid-cols', width);

    for (c = 0; c < (width * width); c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);        
        container.appendChild(cell).className = "grid-item";
    };    
};

makeRows(defaultSize);

//Add Hover Effect
document.addEventListener("mouseover", function(event) {
    if(event.target.classList.contains("grid-item")){        
        event.target.classList.add(colorStyle)        
    }
});

//Reset
const resetButton = document.getElementById('resetbutton');
resetButton.addEventListener("click", resetGrid);

function resetGrid() {      
    container.innerHTML = ""; //Clear existing grid
    
    size = prompt("Grid size (cannot exceed 100):", "16");
    if(!size) size = defaultSize;
    if(size > maxSize) {
        size = defaultSize;
        alert(`Selected size exceeds ${maxSize}, set to ${defaultSize}`)
    }

    makeRows(size)
}

//Get Random Colour
const randomColorButton = document.getElementById('randomColorButton');
randomColorButton.addEventListener("click", getRandomColor);

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++ ) { //6 because rgb is 6 digits long 001122
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.documentElement.style.setProperty('--color', color);  
    return color;      
}


