const container = document.querySelector('#container');

// Get the button elements
const resize = document.querySelector('#resize');
const reset = document.querySelector('#reset');

// create default grid of 16 x 16
createGrid(16);

let userInput;
resize.addEventListener('click', function() {
    userInput = prompt('Enter a new grid size between 4 and 100 units:');
    clearGrid();
    createGrid(userInput);

    const elements = document.querySelectorAll('.square');
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
        })

    });
});

reset.addEventListener('click', function() {
    clearGrid();
    // reset default grid if user input does not exist 
    if (userInput) {
        createGrid(userInput);
    } else {
        createGrid(16);
    }
})



const elements = document.querySelectorAll('.square');
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
        })
    });


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }   
}


function clearGrid() {
    const container = document.querySelector('#container');
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

