// manualMap

function manualMap(subFunc, arr){
    const newArr = [];

    for (let i = 0; i < arr.length; i++){
        newArr.push(subFunc(arr[i]))
    }
    return newArr
}

function myFunc(value){
    return value ** 2
}

const result = manualMap(myFunc, [1,2,3,4,5])

console.log(result)

// manualFilter

function manualFilter(subFunc, numbers){
    const newArr = [];

    for (let i = 0; i < numbers.length; i++){
        if (subFunc(numbers[i]) == true){
            newArr.push(numbers[i])
        }
    }
    return newArr
}

const numbers = [1, 2, 3, 4, 5];

const result1 = manualFilter((value) => {
    return value >= 3
}, numbers)

console.log(result1)

// cap

const names = ["data", "luka"];
const capNames = names.map((value) => {return value[0].toUpperCase() + value.slice(1)})

console.log(capNames)

// filter names

const names1 = ["Data", "luka", "Vano", "Sandro", "Mate"];
const newNames = names1.filter((value) => {return value.length <= 5 && value[0].toUpperCase() === value[0] ? true : false})

console.log(newNames)

// filter numbers

const numArr = [1, 5, 10, 11, 20, 19, 25, 30, 51, 40, 70];
const newNumArr = numArr.filter((value) => {return value > 20 && value % 5 == 0 ? true : false})

console.log(newNumArr)