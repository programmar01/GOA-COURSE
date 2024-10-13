let prop = "name";
let id = "1234";
let mobile = "08923";

const user = {
    [prop]: "Jack",
    [`user_${id}`]: `${mobile}`
};

console.log(user.name);
console.log(user.user_1234)

// ----------------------------------------------------------------------------------------------------------------------------------------------------

const person = {
    name: "Jack",
    age: 18,
    sex: "male"
};

const student = {
    name: 'Bob',
    age: 20,
    xp: "2"
};

let newStudent = Object.assign({}, person, student)

console.log(newStudent.name)
console.log(newStudent.age)
console.log(newStudent.sex)
console.log(newStudent.xp)

// ----------------------------------------------------------------------------------------------------------------------------------------------------

const personOne = {
    name: "Luka",
    lastname: "Tskhvaradze",
    printInfo(){
        console.log(this.name, this.lastname);
    }
}

for (const key in personOne){
    console.log(personOne[key]);
    // not console.log(personOne.key) (undefined)
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------

const manualAssign = (changeObj, copyObj) => {
    for(key of Object.keys(copyObj)){
        changeObj[key] = copyObj[key]
    }
    return changeObj
}

console.log(manualAssign({}, personOne))

// ----------------------------------------------------------------------------------------------------------------------------------------------------

const personTwo = manualAssign({name: "Gio", money: 0}, personOne, {money: 500}, {});

console.log(personTwo)