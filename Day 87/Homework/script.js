// every: 

// 1. All Numbers Positive:

const numbers1 = [1, 2, 3, 4, -5, 6, -7];
const numbers2 = [1, 2, 3, 4, 5, 6, 7];

const newNumbers1 = numbers1.every(myFunc);
const newNumbers2 = numbers2.every(myFunc);

function myFunc(num){
    return num > 0;
};

console.log(newNumbers1);
console.log(newNumbers2);

// 2. All Strings Non-Empty:

const strings1 = ["", "data", "luka", " "];
const strings2 = ["  ", "data", "luka", " "];

const newStrings1 = strings1.every(strFunc);
const newStrings2 = strings2.every(strFunc);

function strFunc(str){
    return str.length > 0;
};

console.log(newStrings1);
console.log(newStrings2);

// 3. All Booleans True:

const booleans1 = [true, true, true, true];
const booleans2 = [true, true, true, false];

const newBooleans1 = booleans1.every(boolFunc);
const newBooleans2 = booleans2.every(boolFunc);

function boolFunc(boolean){
    return boolean == true;
};

console.log(newBooleans1);
console.log(newBooleans2);

// 4. All Numbers Even:

const nums1 = [2, 3, 4, 5, 6];
const nums2 = [2, 4, 6, 8, 10];

const newNums1 = nums1.every(checkEven);
const newNums2 = nums2.every(checkEven);

function checkEven(num){
    return num % 2 == 0;
};

console.log(newNums1);
console.log(newNums2);

// 5. Manual Every:

function manualEvery(array, func){
    let is_true = true;
    for(let i = 0; i < array.length; i++){
        if(func(array[i]) === true){
            is_true = true;
        } else {
            is_true = false;
            break;
        };
    };
    
    return is_true;
};

console.log(manualEvery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], func));
console.log(manualEvery([6, 7, 8, 9, 10], func));

function func(num){
    return num > 5;
};

// -------------------------------------------------------------------------------------------------------------------------------------------------

// some:

// 6. Has Passing Grades:

const grades1 = [6, 7, 8, 2];
const grades2 = [1, 2, 3, 4];

const newGrade1 = grades1.some(checkGrade);
const newGrade2 = grades2.some(checkGrade);

function checkGrade(num){
    let passingGrade = 6;
    return num >= passingGrade;
};

console.log(newGrade1);
console.log(newGrade2);

// 7. Contains Admin Users:

const listn1 = [{role: "admin"}, {role: "citizen"}];
const listn2 = [{role: "dog"}, {role: "citizen"}];

const newListn1 = listn1.some(checkAdmin);
const newListn2 = listn2.some(checkAdmin);

function checkAdmin(dict){
    return dict.role == "admin";
};

console.log(newListn1);
console.log(newListn2);

// 8. Has Overdue Items:

const obj1 = [{overdue: "true", role: "Citizen"}];
const obj2 = [{overdue: "false", role: "Citizen"}];

const newObj1 = obj1.some(checkOverdue);
const newObj2 = obj2.some(checkOverdue);

function checkOverdue(dict){
    return dict.overdue == "true";
};

console.log(newObj1);
console.log(newObj2);

// 9. Includes Prime Numbers:

const numArray1 = [9, 6, 7, 8, 10];
const numArray2 = [8, 10, 12, 14];

const newNumArray1 = numArray1.some(checkPrime);
const newNumArray2 = numArray2.some(checkPrime);

function checkPrime(num){
    if(num % 2 == 0 || num % 3 == 0 || num % 5 == 0){
        return false;
    } else {
        return true;
    };
};

console.log(newNumArray1);
console.log(newNumArray2);

// 10. Manual some

function manualSome(array, func){
    is_true = true;
    for(let i = 0; i < array.length; i++){
        if(func(array[i]) === true){
            is_true = true;
        } else {
            is_true = false;
            break;
        };
    };
    return is_true;
};

console.log(manualSome([1, 2, 3, 4, 5, 6, 7, 8, 9], func));
console.log(manualSome([6, 7, 8, 9, 10, 11, 12, 13], func));

function func(num){
    return num > 5;
};

// find:

// 11. Find First Negative Number:

const listm1 = [1, 2, 3, 4, -5];
const listm2 = [-1, 2, 3, 4, 5];

const newListm1 = listm1.find((num) => num < 0);
const newListm2 = listm2.find((num) => num < 0);

console.log(newListm1);
console.log(newListm2);

// 12. Find User by ID:

const personIds1 = [100, 121, 100, 100, 100];
const personIds2 = [404, 404, 404, 405, 400];

const newPersonIds1 = personIds1.find((num) => num != 100);
const newPersonIds2 = personIds1.find((num) => num != 404);

console.log(newPersonIds1);
console.log(newPersonIds2);

// 13. Find First Incomplete Task:

const tasks1 = [{complete: true, name: "giorgi"}, {complete: false, name: "data"}];
const tasks2 = [{complete: false, name: "giorgi"}, {complete: true, name: "data"}];

const newTasks1 = tasks1.find((dict) => dict.complete === true);
const newTasks2 = tasks2.find((dict) => dict.complete === true);

console.log(newTasks1);
console.log(newTasks2);

// 14. Find Product by Name:

const products1 = ["apple", "GiorgiMW", "banana", "Kilasa", "Lasha"];
const products2 = ["apple", "GiorgiMW", "banana", "Kilasa", "Lasha"];

const newProducs1 = products1.find((productName) => productName === "GiorgiMW");
const newProducs2 = products2.find((productName) => productName === "Kilasa");

console.log(newProducs1);
console.log(newProducs2);

// 15. Manual Find:

function manualFind(array, word){
    returnValue = undefined;

    for(let i = 0; i < array.length; i++){
        if (array[i] === word){
            returnValue = word;
            break;
        } else {
            returnValue = undefined;
        }
    }

    return returnValue;
};

console.log(manualFind(["data", "luka", "lasha", "erekle"], "giorgi"));
console.log(manualFind(["data", "luka", "lasha", "erekle"], "lasha"));

// findIndex:

// 16. Find Index of First Prime Number:

const numbes1 = [6, 9, 8, 11, 13];
const numbes2 = [6, 7, 13, 11, 10];

const primeIndex1 = numbes1.findIndex((num) => findPrime(num));
const primeIndex2 = numbes2.findIndex((num) => findPrime(num));

function findPrime(num){
    if(num % 2 == 0 || num % 3 == 0 || num % 5 == 0){
        return false;
    } else {
        return true;
    };
};

console.log(primeIndex1);
console.log(primeIndex2);

// 17. Find Index of User with Admin Role:

const listx1 = [{role: "citizen"}, {role: "citizen"}, {role: "admin"}, {role: "citizen"}];
const listx2 = [{role: "dog"}, {role: "citizen"}, {role: "citizen"}, {role: "admin"}, {role: "admin"}];

const newListx1 = listx1.findIndex(findAdmin);
const newListx2 = listx2.findIndex(findAdmin);

function findAdmin(dict){
    return dict.role == "admin";
};

console.log(newListx1);
console.log(newListx2);

// 18. Find Index of First Overdue Item:

const obj3 = [{overdue: "true", role: "Citizen"}, {overdue: "false", role: "Citizen"}, {overdue: "true", role: "Citizen"}];
const obj4 = [{overdue: "false", role: "Citizen"}, {overdue: "false", role: "Citizen"}, {overdue: "true", role: "Citizen"}];

const newObj3 = obj3.findIndex((dict) => dict.overdue === "true");
const newObj4 = obj4.findIndex((dict) => dict.overdue === "true");

console.log(newObj3);
console.log(newObj4);

// 19. Find Index of Product Out of Stock:

const products3 = [{apple: 5}, {banana: 0}, {pinnaple: 1}];
const products4 = [{apple: 5}, {banana: 25}, {pinnaple: 0}];

const newProducts3 = products3.findIndex((dict) => Object.values(dict)[0] === 0);


const newProducts4 = products4.findIndex((dict) => Object.values(dict)[0] === 0);

console.log(newProducts3);
console.log(newProducts4);

// 20. manual findIndex

function manualFindIndex(array, func){
    for(let i = 0; i < array.length; i++){
        if(func(array[i])){
            return i;
        }
    }
}

console.log(manualFindIndex([6, 7, 8, 1, 5], func));
console.log(manualFindIndex([6, 7, 8, 9, 4], func));

function func(num){
    return num < 5;
};

// indexOf

// 21. Index of First Occurrence of a Character: 

const string1 = "Hello world!";
const string2 = "Hello world!";

const charIndex1 = string1.indexOf("o");
const charIndex2 = string2.indexOf("w");

console.log(charIndex1);
console.log(charIndex2);

// 22. Index of First Occurrence of a Number:

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [87, 125, 12, 53, 5];

const numIndex1 = array1.indexOf(5);
const numIndex2 = array2.indexOf(12);

console.log(numIndex1);
console.log(numIndex2);

// 23. Index of First Occurrence of Substring:

const string3 = "Hello world!";
const string4 = "Hello world!";

const subStringIndex3 = string3.indexOf("llo");
const subStringIndex4 = string4.indexOf("wor");

console.log(subStringIndex3);
console.log(subStringIndex4);

// 24. Index of First Occurrence of an element in an Array of Objects:

const objArray1 = [{name: "Data", age: 16, role: "Mentor"}, {name: "Data", age: 15, role: "Mentor"}, {name: "Malxazi", age: 55, role: "Citizen"}];
const objArray2 = [{name: "Data", age: 16, role: "Mentor"}, {name: "Malxazi", age: 55, role: "Citizen"}, {name: "Data", age: 15, role: "Mentor"}];

const citizen1 = objArray1.find((obj) => obj.role === "Citizen");
const citizen2 = objArray2.find((obj) => obj.role === "Citizen");

const objIndex1 = objArray1.indexOf(citizen1);
const objIndex2 = objArray2.indexOf(citizen2);

console.log(objIndex1);
console.log(objIndex2);

// 25. Manual indexOf:

function manualIndexOf(string, char){
    for(let i = 0; i < string.length; i++){
        if (string[i] === char){
            return i;
        };
    };
};

console.log(manualIndexOf("Hello World!", "o"));

// lastIndexOf:

// 26. Last Index of a Character in a Sentence:

const string5 = "Hello world!";
const string6 = "Hello world!";

const charIndex5 = string5.lastIndexOf("o");
const charIndex6 = string6.lastIndexOf("w");

console.log(charIndex5);
console.log(charIndex6);

// 27. Last Index of a Prime Number in an Array:

const array3 = [1, 2, 3, 11, 5, 6];
const array4 = [87, 125, 11, 53, 13];

const numIndex3 = array3.lastIndexOf(11);
const numIndex4 = array4.lastIndexOf(11);

console.log(numIndex3);
console.log(numIndex4);

// 28. Last Index of a Word in an Array of Strings:

const string7 = "Hello world! and Hello JavaScript!";
const string8 = "Hello world! and Hello JavaScript!";

const subStringIndex7 = string7.lastIndexOf("llo");
const subStringIndex8 = string8.lastIndexOf("!");

console.log(subStringIndex7);
console.log(subStringIndex8);

// 29. Last Index of an Active User in an Array of Objects:

const objArray3 = [{name: "Data", age: 16, role: "Mentor", isActive: true}, {name: "Data", age: 15, role: "Mentor", isActive: false}, {name: "Malxazi", age: 55, role: "Citizen", isActive: false}];
const objArray4 = [{name: "Data", age: 16, role: "Mentor", isActive: false}, {name: "Malxazi", age: 55, role: "Citizen", isActive: true}, {name: "Data", age: 15, role: "Mentor", isActive: false}];

const citizen3 = objArray3.find((obj) => obj.isActive === true);
const citizen4 = objArray4.find((obj) => obj.isActive === true);

const objIndex3 = objArray3.lastIndexOf(citizen3);
const objIndex4 = objArray4.lastIndexOf(citizen4);

console.log(objIndex3);
console.log(objIndex4);

// 30. Manual lastIndexOf:

function manualLastIndexOf(string, char){
    for(let i = 0; i < string.length; i++){
        if(string.split("").reverse().join("")[i] === char){
            return string.length - (i + 1);
        }
    };
};

console.log(manualLastIndexOf("Hello world!", "o"))