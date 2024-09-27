const myP = document.getElementById('myp');
const myBtn = document.getElementById('mybtn');
let count = 0;

function countP(){
    count++;
    myP.textContent = count;
    if (count === 10){
        myBtn.removeEventListener('click', countP);
    };
};

myBtn.addEventListener('click', countP)