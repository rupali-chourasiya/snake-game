import { onSnake , expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
const EXPENSION_RATE = 1;

export function update() { 
   
    if(onSnake(food)) {
      expandSnake(EXPENSION_RATE)
      food = getRandomFoodPosition()
    }

}

export function draw(gameBodard) {
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBodard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition
    while ( newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition
}

// CSS grid always starts at 1 , so whenever giving position we need to remember that we can't/shouldn't give 0 value 