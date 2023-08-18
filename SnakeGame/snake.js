const gameBoard = document.getElementById("game-board"); // Import module.
const gridSize = 20;
const gameBoardSize = 600;
const snakeSpeed = 200;

let snake = [{ x: 0, y: 0 }];
let food = { x: 0, y: 0 };
let dx = 1;
let dy = 0;
let changingDirection = false;

function createSnakeSegment(x, y) {
    const segment = document.createElement("div");
    segment.className = "snake";
    segment.style.left = `${x}px`;
    segment.style.top = `${y}px`;
    return segment;
}

function createFood() {
    const x = Math.floor(Math.random() * gridSize) * gridSize;
    const y = Math.floor(Math.random() * gridSize) * gridSize;

    const foodElement = document.createElement("div");
    foodElement.className = "food";
    foodElement.style.left = `${x}px`;
    foodElement.style.top = `${y}px`;
    foodElement.style.width = `${gridSize}px`;
    foodElement.style.height = `${gridSize}px`; 
    return { x, y, element: foodElement };
}

function updateSnake() {
    const head = { x: snake[0].x + dx * gridSize, y: snake[0].y + dy * gridSize };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        gameBoard.removeChild(food.element);
        food = createFood();
        gameBoard.appendChild(food.element);
    } else {
        snake.pop();
    }
    // Check for collisions with the food   
}

function renderSnake() {
    const oldSegments = document.getElementsByClassName("snake");
    while (oldSegments.length > 0) {
        gameBoard.removeChild(oldSegments[0]);
    }

    snake.forEach(segment => {
        const segmentElement = createSnakeSegment(segment.x, segment.y);
        gameBoard.appendChild(segmentElement);
    });
}

function handleKeyDown(event) {
    if (changingDirection) return;

    changingDirection = true;

    const keyPressed = event.key;
    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingLeft = dx === -1;
    const goingRight = dx === 1;

    if (keyPressed === "ArrowUp" && !goingDown) {
        dx = 0;
        dy = -1;
    }

    if (keyPressed === "ArrowDown" && !goingUp) {
        dx = 0;
        dy = 1;
    }

    if (keyPressed === "ArrowLeft" && !goingRight) {
        dx = -1;
        dy = 0;
    }

    if (keyPressed === "ArrowRight" && !goingLeft) {
        dx = 1;
        dy = 0;
    }
}

function gameLoop() {
    if (gameOver()) {
        alert("Game over!");
        resetGame();
        return;
    }

    changingDirection = false;
    updateSnake();
    renderSnake();

    setTimeout(gameLoop, snakeSpeed);
}

function resetGame() {
    snake = [{ x: 0, y: 0 }];
    dx = 1;
    dy = 0;
    food = createFood();
    gameBoard.appendChild(food.element);
}

function gameOver() {
    const head = snake[0];
    const hitLeftWall = head.x < 0;
    const hitRightWall = head.x >= gameBoardSize;
    const hitTopWall = head.y < 0;
    const hitBottomWall = head.y >= gameBoardSize;

    const selfCollision = snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall || selfCollision;
}

document.addEventListener("keydown", handleKeyDown);
gameBoard.appendChild(createFood().element);
gameLoop();
