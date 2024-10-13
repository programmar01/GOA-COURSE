// 1.

function summ(arr){
    let summ = 0;

    for(const number of arr){
        summ += number;
    };

    return summ;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(summ(array1));
console.log(summ(array2));

// 2.

function findLongest(arr){
    let longest = "";

    for(const str of arr){
        if (str.length > longest.length){
            longest = str;
        };
    };

    return longest;
};

const words1 = ["pinaple", "banana", "apple", "JavaScript"];
const words2 = ["pinaple", "banana", "apple", "JavaScript", "situationalAwarness"];

console.log(findLongest(words1));
console.log(findLongest(words2));

// 3.

function findLength(obj){
    const listn = [];

    for(const index in obj){
        listn.push(index);
    }

    return listn.length;
}

const obj1 = {name: "Data", surname: "Diasamidze", age: 17};
const obj2 = {name: "Data", surname: "Diasamidze", age: 17, role: "Mentor"};

console.log(findLength(obj1));
console.log(findLength(obj2));

// 4.1

function objKeys(obj){
    const listn = [];

    for(const property in obj){
        listn.push(property);
    };

    return listn;
}

console.log(objKeys(obj1));
console.log(objKeys(obj2));

// 4.2 (Extra)

function objValues(obj){
    const listn = [];

    for(const property in obj){
        listn.push(obj[property]);
    };

    return listn;
};

console.log(objValues(obj1));
console.log(objValues(obj2));

// 5.

// What the scope is?

// We can imagine scopes as boxes (Parent and Child boxes). The variables that are created in Parent box can be used everywhere, it is called global varaible. And the variables that are created in Child box, it can be used only in that Child box itself, thats called local variable.

// But all that is depended on which keyword do you use when creating variable. Keywords I am talking about: let, const, var. What I said recently was about let and const keywords. What's difference between them? Const keyword says itself that it is constant, so variable created by it, is immutable, it can not be changed. Which we couldn't say about let keyword. So we can say that let and const are same class keywords and var is lot different. Example:

// {
//     let number = 5;
// }

// console.log(number)

// (Results in error)

// -----------------------------------------------------------------------------------------------------------------------------------------------

// {
//     var number = 5;
// }

// console.log(number)

// (Doesn't result in error)

// So it doesn't matter where we create the variable if we use var keyword.
// It's not only that. Var keyword also supports hoisting.

// 6.

// Hoisting means that we can use variable before it's created, which is bit confusing and can lead to bad results.

// Arrow function tasks:

// 1.

const square = (num) => {return num ** 2}

console.log(square(5))

// 2.

const evens = (arr) => {
    const listn = [];

    for(const e of arr){
        if (e % 2 === 0){
            listn.push(e);
        };
    };

    return listn;
}

console.log(evens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 3.

const summ2 = (arr) => {
    let summ = 0;

    for(const num of arr){
        summ += num;
    };

    return summ;
};

console.log(summ2([1, 2, 3, 4, 5]));

// 4.

const fibonacci = (len) => {
    const listn = [1, 1];

    for(let i = 2; i < len; i++){
        listn.push(listn[i-2] + listn[i-1]);
    };

    return listn;
}

console.log(fibonacci(5));
console.log(fibonacci(10));

// 5.

const palindrome = (str) => {
    if (str === str.split("").reverse().join("")){
        return true;
    } else {
        return false;
    };
}

console.log(palindrome("aba"));
console.log(palindrome("baba"));

// 6.

const myP = document.querySelector("#myp");
const myBtn = document.querySelector("#mybtn");

myBtn.addEventListener('click', () => {
    myP.style.display = "block";
});