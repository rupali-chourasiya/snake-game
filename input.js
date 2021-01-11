let inputDirection = { x: 0 , y: 0}
let lastInputDirection = { x: 0 , y:0 }

window.addEventListener('keydown' , e => {
    switch(e.key) {
        case 'ArrowUp' :
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0 , y: -1}
            break;
        case 'ArrowDown' :
            if(lastInputDirection.y !== 0) break
                inputDirection = { x: 0 , y: 1}
                break;
         case 'ArrowLeft' :
            if(lastInputDirection.x !== 0) break
                    inputDirection = { x: -1 , y: 0}
                    break;
        case 'ArrowRight' :
            if(lastInputDirection.x !== 0) break
                        inputDirection = { x: 1 , y: 0}
                        break;
                    
        
    }
})

export function getInputDirection () {
    lastInputDirection = inputDirection
    return inputDirection
}

// Negative sign of Y-axis is to move upword and Vice-Versa
/* Your Snake can't reverse onto itself
So , We need to set up some checks like :-
1. Make sure we can't move up to down once we moved up already and vice-versa
2. make sure we can't move right to left once we moved right already and vice-versa
*/
