// Assign:

// 1.

const person1 = {
    name: "data",
    age: 17
};

const employee = Object.assign({position: "Mentor"}, person1);

console.log(employee);

// 2.

const obj1 = {
    color: "red",
    role: "CLC"
};

const obj2 = {
    name: "Data",
    age: 17
};

const newObj12 = Object.assign({}, obj1, obj2);

console.log(newObj12);

// 3.

const part1 = {
    name: "Exurbia"
};

const part2 = {
    stars: 5
};

const part3 = {
    content: "Very interesting"
};

const part4 = {
    lastVideoWatched: "How long is now?"
};

const targetObj = Object.assign({}, part1, part2, part3, part4);

console.log(targetObj);

// 4.

const originalObj = {
    name: "Exurbia",
    content: "Best",
    lastVideoWatched: "How long is now?"
};

const copyObj = Object.assign({}, originalObj);

console.log(copyObj)

// 5.

const sourceObj = {
    name: "Exurbia"
};

const newTargetObj = Object.assign({platform: "YouTube"}, sourceObj);

console.log(newTargetObj);

// 6.

const objArr = [{name: "Data"}, {surname: "Diasamidze"}, {age: 17}];

const newObj = Object.assign({}, ...objArr);

console.log(newObj)

// 7.

const randomObj = {
    name: "GOA",
    students: 1000,
    mentor1: "Tskhvaradze",
    mentor2: "Janezashvili"
}

const newRandomObj = Object.assign({name: "GOA Best", students: 2000, mentor3: "Molodini", mentor4: "Diasamidze", mentor5: "Tezela"});

console.log(newRandomObj);

// 8.

function extend(...objs){
    return Object.assign({}, ...objs);
};

console.log(extend({name: "Data"}, {surname: "Diasamidze"}));

// 9.

function manualAssign(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            };
        };
    };
    return target;
}

console.log(manualAssign({}, {name: "Data"}, {surname: "Diasamidze"}));

// 10.

function manualAssign2(target, ...sources){
    for (let source of sources){
        for (const key in source){
            target[key] = source[key];
        };
    };
    
    return target;
}

console.log(manualAssign2({}, {name: "Data"}, {surname: "Diasamidze"}))

// Rest:

// 1.

const ranArr = ["Data", "Diasamidze", 17, 10, 19];
const [first1, second1, ...rest] = ranArr;

console.log(rest);

// 2.

function collect(...all){
    return all
}

console.log(collect("data", "diasamidze", 17))

// 3.

function sum(...numbers){
    let sum = 0;

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    };

    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 4.

function func1(...args){
    func2(...args);
}

function func2(...args){
    console.log(args);
}

func1("data", "diasamidze");

// 5.

const testObj = {name: "Data", surname: "Diasamidze"};
const {name: first, ...rest1} = testObj;

console.log(first);
console.log(rest1);

// Spread:

// 1. 

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const combine = [...arr1, ...arr2, ...arr3];

console.log(combine);

// 2.

const obj3 = {
    color: "red"
};
const obj4 = {
    level: "8 amotrialebuli"
};
const obj5 = {
    role: "Mentor"
};

const combine1 = {...obj3, ...obj4, ...obj5};

console.log(combine1);

// 3.

const array1 = [1, 2, 3, 4, 5];

const modifiedArr1 = [...array1, 6, 7, 8, 9, 10];

console.log(modifiedArr1);

// 4.

const array2 = [1, 2, 3, 4, 5];

const copyArr2 = [...array2];

console.log(copyArr2);

// 5.

const str = "Hello world!";

const arrStr = [...str];

console.log(arrStr);

// Destructing:

// 1.

const myArr = ["Data", "Diasamidze", 17];

const [name1, surname, age] = myArr;

console.log(name1);
console.log(surname);
console.log(age);

// 2.

const testObj1 = {name: "Data", surname: "Diasamidze"};

const {name: name, surname: surname1} = testObj1;

console.log(name);
console.log(surname1);

// 3.

const testObj2 = {name: "Data", surname: "Diasamidze"};

const {name: mentorName, surname: mentorSurname} = testObj2;

console.log(mentorName);
console.log(mentorSurname);

// 4.

const array3 = [1, 2, 3, 4, 5];

const [num1, , num2, ...rest2] = array3;

console.log(num1);
console.log(num2);
console.log(rest2);

// 5.

const array4 = [{name: "Data", surname: "Tezelashvili"}, {name: "Data", surname: "Diasamidze"}];

for (const {name, surname} of array4){
    console.log(name);
    console.log(surname);
};

// 6.

const array5 = [1, 2, 3, 4, 5];

const [first5, second5, ...rest5] = array5;

console.log(first5);
console.log(second5);
console.log(rest5);

// 7.

const array6 = [1, 2, 3, 4, 5];

const [first6 , , , , last] = array6;

console.log(first6);
console.log(last);

// 8.

function combineMF(arr){
    const filtered = arr.filter((num) => num % 2 === 0);

    const res = filtered.map((num) => {return num ** 2});

    return res;
};

console.log(combineMF([1, 2, 3, 4, 5]))

// 9.

const array7 = [
    "Data",
    {color: "red", age: 1000},
    17,
    "Diasamidze"
];

for (const el of array7){
    if (typeof el === "object"){
        const {color, age} = el;
        console.log(color);
        console.log(age);
    } else {
        console.log(el);
    };
};

// 10.

function manualDestructing(obj){
    const vals = [];
    for (const el of Object.keys(obj)){
        vals.push(obj[el]);
    };

    return vals
};

console.log(manualDestructing({data: "London", source: "Unknown"}));