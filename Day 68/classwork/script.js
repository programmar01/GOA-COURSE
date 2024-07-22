// // DOM არის ბრაუზერის მიერ შექმნილი სტრუქტურა რომელიც გამოიყენება იმისთვის რომ ბრაუზერმა მარტივად გამოიტანოს ეკრანზე თითოეული HTML ელემენტი, სტრუქტურაა და ქმნის ხეს. გვეხმარება რომ კონკრეტულ HTML'ის ელემენტზე მოვახდინოთ მანიპულირება. 

// const p = document.getElementById("p1")

// p.innerHTML = "<i> Data </i>"

// console.dir(p)

// const elements = document.getElementsByClassName('myp');

// // console.log(elements)

// for (let i = 0; i < elements.length; i++){
//     console.log(elements[i].innerHTML)
// }

// const tags = document.getElementsByTagName('p');

// console.log(tags)

// const div = document.getElementById("div");

// console.log(div.childElementCount); // div's all child elements count

// console.log(div.children); // div's all child elements

// console.dir(div.parentElement); // div's parent element

// console.log(div.nextElementSibling); // div's next tag element

// console.log(div.previousElementSibling); // div's previous tag element 

const p = document.getElementById('p1');

p.className = "Data";

p.style.color = "red";

p.style.backgroundColor = "blue"

console.dir(p.style);