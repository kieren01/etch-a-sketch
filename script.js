const container = document.querySelector('#container');

// Get the button elements
const resize = document.querySelector('#resize');
const reset = document.querySelector('#reset');

// create default grid of 16 x 16
createGrid(16);

let userInput;
let oldUserInput;
resize.addEventListener('click', function() {
    // save previous user input in case where user does not input any value or selects cancel 
    oldUserInput = userInput
    userInput= validUserInput();
    console.log(typeof(oldUserInput))
    if (userInput == null){
        createGrid(Num(oldUserInput));
    }
    clearGrid();
    createGrid(userInput);

    const elements = document.querySelectorAll('.square');
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColour();
        })

    });
});

reset.addEventListener('click', function() {
    clearGrid();
    // if user inputs new value 
    if (userInput) {
        createGrid(userInput);
    } // if user does not input new value or presses cancel in prompt 
    else if (oldUserInput) {
        createGrid(oldUserInput);
    } // if user resets grid in its default state of 16 x 16 
    else {
        createGrid(16);
    }

    const elements = document.querySelectorAll('.square');
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColour();
        })
    });
})


const elements = document.querySelectorAll('.square');
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColour();
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


function validUserInput() {
    userInput = Number(prompt('Enter a new grid size between 2 and 100 units (inclusive):'));
    if (!userInput) {
        return null;
    }
    while (userInput > 100 || userInput < 2) {
        userInput = Number(prompt('Enter a new grid size between 2 and 100 units (inclusive):'));
        if (!userInput) {
            return null;
        }
    }
    return userInput;
}

function randomColour() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var colour = "rgb(" + x + "," + y + "," + z + ")";
    return colour;
}