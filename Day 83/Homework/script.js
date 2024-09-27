// 1. Sum of Array Elements:

function summation(elements){
    let sum = 0;
    elements.forEach(element => {
        sum += element
    });

    return sum
};

console.log(summation([1, 2, 3, 4, 5]))

// 2. Logging Array Elements with Index:

function indexation(arr){
    const newArr = [];
    let count = 0;
    arr.forEach(char => {
        newArr.push([char, count]);
        count++;
    });

    return newArr
}

console.log(indexation(["d", "a", "t", "a"]))

// 3. Calculate Product of Array Elements:

function reduced(numbers, startingValue){
    const reduceNumbers = numbers.reduce((firstNum, number) => {
        return firstNum + number;
    }, startingValue);

    return reduceNumbers;
}

console.log(reduced([1,2,3,4,5], 5))

// 4. Merge Arrays of Objects:

function mergeArr(arr){
    let merge = arr.reduce((obj1, obj2) => {return {...obj1,  ...obj2}}, [])
    return merge
}

console.log(mergeArr([{name: "Data"}, {age: 17}]))

// 5. Manual forEach:

function manForEach(array, func){
    for(let i = 0; i < array.length; i++){
        func(array[i])
    }
}

let sum = 0;
manForEach([1,2,3,4,5], (num) => sum += num)

console.log(sum)

// 6. Manual reduce:

function manReduce(array, func, startingValue){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result = func(result, startingValue)
    }
    return result
}

console.log(manReduce([1,2,3,4,5], (result, nextElement) => result + nextElement, 5))

// 7. func

function func(strings){
    const res = strings.reduce(myFunc, {});

    function myFunc(count, curVal){
        if (count[curVal]){
            count[curVal]++;
        } else {
            count[curVal] = 1;
        };
        return count;
    }

    return res;
}

console.log(func(["data", "luka", "water", "GOA", "data", "water"]))