// const child = document.getElementById("child-container"); // carrying element from html document

// let left = 0; // declared variable named left and given value integer 0
// let y = 0; // declared variable named y and given value integer 0
// let direct = "right" // declared variable named direct and given string value "right"

// const moveRight = setInterval(function(){ // created setInterval and giving it two arguments, first - function to work, second - delay
//     if(direct == "right"){
//         left++;
//         if(left == 300){
//             direct = "bottom"
//         } // created if condition that increments left value with 1 if direct equals "right", that condition also contains another if condition - if left equals 300, change direct value to bottom
//     } else if(direct == "bottom"){
//         y++;
//         if(y == 300){
//             direct = "left";
//         } // created else if condition that increments y value with one if direct equals "bottom", we meet another condition that changes direct value to "left" if y equals 300
//     } else if(direct == "left"){
//         left--;
//         if(left == 0){
//             direct = "top"
//         } // created else if condition that decrements value of left if direct equals "left", we got another condition that changes direct value to "top" if left equals 0
//     } else{
//         y--;
//         if(y == 0 && left == 0){
//             clearInterval(moveRight);
//         } // and in the end we created else condition that decrements y value in any other condition other than said before, also if y equals 0 and left equals 0 it function moveRight will stop working
//     }

//     child.style.left = left + 'px'; // styling and applying every new value to child css property - left
//     child.style.top = y + 'px'; // styling and applying every new value to child css property - top
// }, 10);

// ----------------------------------------------------------------------------------------------------------------------------------------------

// learning arrow functions

// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code

// function hello(){
//     console.log("Hello")
// }

// hello();

// const hello = function(){
//     console.log("Hello");
// };

// hello();

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old`)};

// hello("Bro", 16);

// setTimeout( () => console.log("Hello"), 3000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2))

// console.log(squares)

// done

const parent = document.getElementById('parent-container');
const child = document.getElementById('child');

const moveAmount = 10;
let positionx = 0;
let positiony = 0;

// document.addEventListener('keydown', event => {
//     console.log(`Key down = ${event.key}`);
// });

// document.addEventListener('keyup', event => {
//     console.log(`Key up = ${event.key}`)
// });

// document.addEventListener('keydown', event => {
//     child.textContent = "Going";
//     parent.style.backgroundColor = "Tomato";
// });

// document.addEventListener('keyup', event => {
//     child.textContent = "1";
//     parent.style.backgroundColor = "green";
// });

document.addEventListener('keydown', event => {
    if (event.key == "ArrowLeft"){
        const moveLeft = setInterval(() => {
            positionx--;
            child.style.left = `${positionx}px`
            if (positionx == 0){
                clearInterval(moveLeft)
            }
        }, 10);
    } else if (event.key == "ArrowRight"){
        const moveRight = setInterval(() => {
            positionx++;
            child.style.left = `${positionx}px`
            if (positionx == 300){
                clearInterval(moveRight)
            }
        }, 10);
    } else if (event.key == "ArrowUp"){
        const moveUp = setInterval(() => {
            positiony--;
            child.style.top = `${positiony}px`
            if (positiony == 0){
                clearInterval(moveUp)
            }
        }, 10);
    } else if (event.key == "ArrowDown"){
        const moveDown = setInterval(() => {
            positiony++;
            child.style.top = `${positiony}px`
            if (positiony == 300){
                clearInterval(moveDown)
            }
        }, 10);
    }
});