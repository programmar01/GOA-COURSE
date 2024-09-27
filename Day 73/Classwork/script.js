// const movingRight = setInterval(function(){
//     console.log("Move right")
//     clearInterval(movingRight)
// }, 2000)

// let left = 1;

// const movingRight = setInterval(function(){
//     console.log(left)
//     if (left <= 300){
//         left++
//     } else {
//         left = 0;
//         clearInterval(movingRight)
//     }
// }, 100);

// const child = document.getElementById('child-container');

// let position = 0;

// const moveRight = setInterval(function(){
//     if (position === 300){
//         clearInterval(moveRight)
//         const moveLeft = setInterval(function(){
//             if (position === 0){
//                 clearInterval(moveLeft)
//             }
//             child.style.left = `${position}px`
//             position--;
//         }, 10)
//     }
//     child.style.left = `${position}px`;
//     position++;
// }, 10);

const child = document.getElementById('child-container');

let positionx = 0;
let positiony = 0;

const moveRight = setInterval(function(){
    if (positionx === 300){
        clearInterval(moveRight);
        const moveDown = setInterval(function(){
            if (positiony === 300){
                clearInterval(moveDown);
                const moveLeft = setInterval(function(){
                    if (positionx === 0){
                        clearInterval(moveLeft);
                        const moveUp = setInterval(function(){
                            if (positiony === 0){
                                clearInterval(moveUp)
                            }
                            child.style.top = `${positiony}px`;
                            positiony--;
                        }, 10)
                    }
                    child.style.left = `${positionx}px`;
                    positionx--;
                }, 10);
            };
            child.style.top = `${positiony}px`;
            positiony++;
        }, 10);
    }
    child.style.left = `${positionx}px`;
    positionx++;
}, 10);