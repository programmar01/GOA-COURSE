// 1
 
// const div = document.getElementById('div');
// const myP = document.getElementById('myp');
// const myBtn = document.getElementById('mybtn');

// myBtn.addEventListener('click', function(){
//     myP.textContent = Number(myP.textContent) + 1;
//     div.style.backgroundColor = 'red';
//     myP.style.color = 'white';
// });


// 2

// const myImg = document.getElementById('image');
// const myBtn = document.getElementById('mybtn');

// myBtn.addEventListener('click', function(){
//     myImg.src = 'Images/perceptual-standard.jpg';
// })


// 3

// const myBtn = document.getElementById('mybtn');
// const myP = document.getElementsByClassName('myp');

// myBtn.addEventListener('click', function(){
//     for (let i = 0; i < myP.length; i++){
//         myP[i].textContent = Math.floor(Math.random() * 10);
//     }
// })


// 4

// const div = document.getElementById('div');
// const link = document.getElementById('link');
// const myBtn = document.getElementById('mybtn');

// myBtn.addEventListener('click', function(){
//     div.style.backgroundColor = 'red';
//     link.href = 'https://www.w3schools.com/js/js_random.asp';
// })


// 5

const myPs = document.getElementsByTagName('p');
const myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', function(){
    for (let i = 0; i < myPs.length; i++){
        if (myPs[i].className == 'myp'){
            myPs[i].style.color = 'red';
        };
    };
})

console.dir(myPs)