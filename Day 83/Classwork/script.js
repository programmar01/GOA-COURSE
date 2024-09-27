// const numbers = [1,2,3,4,5];

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// for each - method of arrays

// let result = 0;

// numbers.forEach(function(value){
//     result += value
//     console.log(value)
// })

// console.log(newArray)

// for each doesn't return anything

// function manualForEach(arr, func){
//     for(let i = 0; i < arr.length; i++){
//         func(arr[i])
//     }
// }
// const numbers = [1,2,3,4,5];

// manualForEach(numbers, function(value){console.log(value)})

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// console.log(fruits.get('bananas'))

// anonymus function is function that doesn't have name

// create manualReduce function (3 parameters - arr, func(sum, nextElement), startingValue)

function manualReduce(arr, func, startingValue){
    let result = startingValue;
    for (let i = 0; i < arr.length; i++){
        result = func(result, arr[i])
    }
    return result;
}

const myArr = [1, 2, 3, 4, 5];

const result = manualReduce(myArr, function(result, nextElement){
    return result + nextElement
}, 5)

console.log(result)

// const strArr = "data".split("")

// const result = manualReduce(strArr, function(result, nextElement){
//     return result + nextElement
// }, "data")

// console.log(result)

// function manualEvery(arr, func){
//     return func(40, "<", arr) 
// }

// const myFunc = function(number, condition, arr){
//     if (condition == "<"){
//         for (let i = 0; i < arr.length; i++){
//             let isTrue = true;
//             if (arr[i] < number){
//                 isTrue = true;
//                 break
//             } else{
//                 isTrue = false;
//             }
//         }
//     }
// }