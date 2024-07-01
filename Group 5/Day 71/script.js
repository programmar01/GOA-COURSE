// // მანქანის კლასი
// const Car = {
//     brand : "BMW",
//     model : "M3",
//     currentSpeed : 0,
//     maxSpeed : 250,

//     // აქსელერაციის მეთოდი
//     accelerate() {
//         if (this.currentSpeed + 10 <= this.maxSpeed) {
//             this.currentSpeed += 10;
//         } else {
//             this.currentSpeed = this.maxSpeed;
//             console.log("თქვენ უკვე მაქსიმალურ სიჩქარეზე ხართ!");
//         }
//     },

//     // დექსელარაციის მეთოდი
//     decelerate() {
//         if (this.currentSpeed - 10 >= 0) {
//             this.currentSpeed -= 10;
//         } else {
//             this.currentSpeed = 0;
//             console.log("მანქანა გაჩერდა.");
//         }
//     },

//     // ამჟამინდელი სიჩქარის დაბეჭდვის მეთოდი
//     printCurrentSpeed() {
//         console.log(`ამჟამინდელი სიჩქარეა: ${this.currentSpeed} km/h`);
//     }
// }

// // ობიექტის შექმნა
// let myCar = new Car('Toyota', 'Camry', 0, 180);

// // მეთოდების ტესტირება
// myCar.accelerate();    // აქსელერაცია
// myCar.printCurrentSpeed(); // სიჩქარის ბეჭდვა
// myCar.accelerate();    // კიდევ ერთი აქსელერაცია
// myCar.printCurrentSpeed(); // სიჩქარის ბეჭდვა
// myCar.accelerate();    // კიდევ ერთი აქსელერაცია
// myCar.printCurrentSpeed(); // სიჩქარის ბეჭდვა
// myCar.decelerate();    // დექსელარაცია
// myCar.printCurrentSpeed(); // სიჩქარის ბეჭდვა
// myCar.decelerate();    // კიდევ ერთი დექსელარაცია
// myCar.printCurrentSpeed(); // სიჩქარის ბეჭდვა

// // მოდელის კუთვნილების წაშლა
// delete myCar.model;

// console.log(myCar); // მოდელის გარეშე მანქანის ობიექტის ბეჭდვა

// შექმენით ფუნქცია რომელიც შექმნის მანქანების ობიექტებს, ობიექტებს უნდა ჰქონდეთ ერთნაირი სტრუქტურა.
//  3კუთვნილება 1) მოდელი 2) ამჟამინდელი სიჩქარე 3) მაქსიმალური სიჩქარე. უნდა იყოს 3მეთოდი აქსელერაცია დექსელერაცია და პრინტინფო. 
// ამ კონსტრუქტორის მეშვეობით შექმენით 5 ობიექტი. და ახსენით რა არის კონსტრუქტორი და რა არის ნიუოპერატორი


function create(options){
    let car = {
        brand : options.brand,
        model : options.model,
        currentSpeed : 0,
        maxSpeed : options.maxSpeed,
    }
}