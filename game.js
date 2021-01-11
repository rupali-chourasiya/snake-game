import { update as updateSnake , draw as drawSnake , SNAKE_SPEED ,
getSnakeHead , snakeInterSection } from "./snake.js";
import { update as updateFood , draw as drawFood} from "./food.js"
import { outSideGrid } from "./grid.js"
const gameBoard = document.getElementById('game-board');

let lastReanderTime = 0;
let gameOver = false

function main(currentTime) {
    if(gameOver) {
        
        if(confirm('You lost , press OK to restart!!')) {
            window.location = "/"
        }

        return

    }
    window.requestAnimationFrame(main);
    const  secondsSinceLastReander = (currentTime - lastReanderTime) / 1000
    if (secondsSinceLastReander < 1 / SNAKE_SPEED) return
    lastReanderTime = currentTime;

    update();
    draw();

}

window.requestAnimationFrame(main);

function update() {
    updateFood();
    updateSnake();
    checkDeath();

}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard);
    drawFood(gameBoard);

}

// gameOver Function
function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeInterSection()
}