function getGridSize() {
    var gridSize = prompt("Please enter grid size less than or equal to 100:");
    return gridSize;
}

function clearPreviousGrid() {
    const container = document.querySelector('#container');
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const button = document.querySelector('button');
button.addEventListener('click', function() {
    clearPreviousGrid();

    // creating grid based on user input 
    var gridSize = getGridSize();
    // createGrid(gridSize);
    const container = document.querySelector('#container');

    minWidth = container.offsetWidth / gridSize + "px";
    minHeight = container.offsetHeight / gridSize + "px";
    console.log("minwidth is: ", minWidth);
    console.log("minheight is: ", minHeight);

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement('div');
            column.classList.add('col');
            column.style.width = minWidth;
            column.style.height = minHeight;
            column.style.border = "1 px solid black";
            row.appendChild(column);
        }
        container.appendChild(row);
    }

    // colouring divs as mouse hovers 
    const elements = document.querySelectorAll('.col');
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
        })

        // element.addEventListener('mouseout', () => {
        //     element.style.backgroundColor = '';
        // })
    });
});
