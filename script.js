const container = document.querySelector('#container');


for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const column = document.createElement('div');
        column.classList.add('col');
        column.textContent = 'I am an element'
        row.appendChild(column);
    }
    container.appendChild(row);
}

const elements = document.querySelectorAll('.col');

elements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'black';
    })
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '';
    })
  });

