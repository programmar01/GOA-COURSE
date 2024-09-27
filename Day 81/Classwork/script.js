const people = [
    {   
        name: "data",
        age: 17
    },
    {
        name: "luka",
        age: 13
    }
];
// const names = [];

// for (let i = 0; i < people.length; i++){
//     names.push(people[i].name)
// }

// console.log(names)

const names = people.map((obj) => {return obj.name})

console.log(names)

// -----------------------------------------------------------------------------

// function manualMap(subFunc, arr){
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++){
//         newArr.push(subFunc(arr[i]))
//     }
//     return newArr
// }

// function myFunc(value){
//     return value ** 2
// }

// const result = manualMap(myFunc, [1,2,3,4,5])

// console.log(result)

// -----------------------------------------------------------------------------

function manualMap(subFunc, arr){
    const newArr = [];

    for (let i = 0; i < arr.length; i++){
        newArr.push(subFunc(arr[i], i))
    }
    return newArr
}

function myFunc(num, index){
    if (index % 2 == 0){
        return num ** 2;
    }
    return num;
}

const result1 = manualMap(myFunc, [1,2,3,4,5])

console.log(result1)