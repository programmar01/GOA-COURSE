// 1.

class Person {
    #password

    constructor(name, age, gender, id, password){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.id = id;
        this.#password = password;
    }

    greet(){
        console.log("Hello " + this.name);
    }

    set changeName(newName){
        this.name = newName;
    }

    set changeAge(newAge){
        this.age = newAge;
    }

    set changeGender(newGender){
        this.gender = newGender;
    }

    get getGender(){
        return this.gender;
    }

    get getId(){
        if(this.age >= 17){
            return this.id;
        } else {
            return "nah"
        }
    }

    get password(){
        return this.#password;
    }
}

// 2.

const person1 = new Person("Data", 17, "Male", 1, 189);
const person2 = new Person("Luka", 17, "Male", 2, 153);

console.log(person1);
console.log(person2);

// 3.

person1.greet();
person2.greet();

// 4.

console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);

console.log(person2.name);
console.log(person2.age);
console.log(person2.gender);

// 5.

person1.changeName = "Giorgi"
console.log(person1);

// 6.

const person3 = new Person("Malxazi", 11, "Male", 3, 191);
const person4 = new Person("Pavle", 16, "Male", 4, 911);

// 7.

person3.changeGender = "Female"
console.log(person3.getGender);

// 8.

console.log(person1.getId);
console.log(person2.getId);
console.log(person3.getId);
console.log(person4.getId);

// 9.

person3.changeAge = 90;

console.log(person3);

// 10.

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person1.password);
console.log(person2.password);
console.log(person3.password);
console.log(person4.password);