const cube = document.getElementById('rubiks-cube');
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let rotation = { x: -30, y: -30 };

function initializeCube() {
    const size = 3;
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            for (let z = 0; z < size; z++) {
                const cubie = createCubie(x, y, z);
                cube.appendChild(cubie);
            }
        }
    }
}

function createCubie(x, y, z) {
    const cubie = document.createElement('div');
    cubie.classList.add('cubie');
    cubie.style.transform = `translate3d(${x * 100}px, ${y * 100}px, ${z * 100}px)`;
    
    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
    faces.forEach(face => {
        const faceDiv = document.createElement('div');
        faceDiv.classList.add('face', face);
        cubie.appendChild(faceDiv);
    });

    return cubie;
}

function rotateCube(event) {
    if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;

        rotation.y += deltaX * 0.1; // Horizontal rotation (Y axis)
        rotation.x -= deltaY * 0.1; // Vertical rotation (X axis)

        cube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;

        previousMousePosition = { x: event.clientX, y: event.clientY };
    }
}

function startDragging(event) {
    isDragging = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
}

function stopDragging() {
    isDragging = false;
}

cube.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', rotateCube);
document.addEventListener('mouseup', stopDragging);

function scramble() {
    // Your scramble logic here (optional for now)
    console.log('Scrambling the cube...');
}

function solve() {
    // Your solving logic here (optional for now)
    console.log('Solving the cube...');
}

initializeCube();
