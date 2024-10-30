// class Account {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     printInfo(){
//         console.log(this.firstname, this.lastname);
//     }
// }

// const person1 = new Account(firstname="Data", lastname="Diasamidze");

// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1);

// person1.printInfo();

// 1.

// const form = document.querySelector("#form");

// const dataBase = [];

// class Account {
//     constructor(name, lastname, gmail){
//         this.name = name;
//         this.lastname = lastname;
//         this.gmail = gmail;
//     }

//     putInDataBase(){
//         dataBase.push(this.name);
//         dataBase.push(this.lastname);
//         dataBase.push(this.gmail);
//     }
// }

// const submitt = form['submit'];
// submitt.addEventListener('click', function(e){
//     e.preventDefault();

//     const person1 = new Account(form['name'].value, form['lastname'].value, form['gmail'].value);
    
//     person1.putInDataBase();

//     console.log(dataBase);
// })


// const form = document.querySelector("#form");

// const dataBase = [];

// class Account {
//     constructor(name, lastname, gmail){
//         this.name = name;
//         this.lastname = lastname;
//         this.gmail = gmail;
//     }
// }

// const submitt = form['submit'];

// submitt.addEventListener('click', function(e){
//     e.preventDefault();

//     const person1 = new Account(form['name'].value, form['lastname'].value, form['gmail'].value);
//     const person2 = new Account(form['name'].value, form['lastname'].value, form['gmail'].value);
    
//     dataBase.push(person1);
//     dataBase.push(person2);

//     console.log(dataBase);
// })

// class Account {
//     #password;

//     constructor(password, firstname){
//         this.#password = password;
//         this.firstname = firstname;
//     }

//     set password(newPass){
//         this.#password = newPass;
//     }

//     get password(){
//         return this.#password;
//     }

//     // get info(){
//     //     return this.firstname
//     // }
// }

// const person1 = new Account(password="Data123", firstname="Data");

// // person1.changeName = "Luka";

// // console.log(person1.info);

// // person1.password = "12345678"

// console.log(person1);
// console.log(person1.password);

// const form = document.querySelector("#form");

// const dataBase = [];

// class Account {
//     constructor(name, lastname, gmail){
//         this.name = name;
//         this.lastname = lastname;
//         this.gmail = gmail;
//     }
// }

const form1 = document.querySelector("#form-register");
const form2 = document.querySelector("#form-authorize");

const dataBase = [];

class Account {
    #password;

    constructor(name, lastname, gmail, password){
        this.name = name;
        this.lastname = lastname;
        this.gmail = gmail;
        this.#password = password;
    }
}

const submit1 = form1['submit'];
const submit2 = form2['submit'];

submit1.addEventListener('click', function(e){
    e.preventDefault();

    const person1 = new Account(form1['name'].value, form1['lastname'].value, form1['gmail'].value);
    
    dataBase.push(person1);

    console.log(dataBase);
})

submit2.addEventListener('click', function(e){
    e.preventDefault();

    const check = dataBase.find((obj) => obj.email === form1.gmail.value);

    if (form2.password.value === form1.password.value && check !== -1) {
        alert("Successfully signed in");
    } else {
        alert("Password is incorrect");
    }
})