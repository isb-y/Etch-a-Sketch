const container = document.querySelector('.container');
let gridSize = 16;

function createGrid() {
    container.innerHTML = ''; // Clear the existing grid
    container.style.setProperty('--grid-size', gridSize); // Set the custom CSS property

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);

        gridSquare.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f00';
        });

        gridSquare.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#f00';
        });
    }
}

function resetGrid() {
    const input = prompt('Enter the number of squares per side (max 100):');
    const newGridSize = parseInt(input);

    if (Number.isInteger(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
        gridSize = newGridSize;
        createGrid();
    } else {
        alert('Invalid input! Please enter a valid number between 1 and 100.');
    }
}

createGrid();