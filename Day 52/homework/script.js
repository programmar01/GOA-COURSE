// 1)შექმენით ფუნქცია სახელად infoJoin, რომელსაც გადასცემთ თქვენს სახელს, გვარს, ასაკს, საცხოვრებელ ადგილს
//  და ერთ ინტერესის სფეროს / ჰობის. თქვენი დავალებაა, რომ ამ ფუნქციამ დააბრუნოს ეს ინფორმაცია ერთ დიდ წინადადებაში.



const infoJoin = {
    firstName: "mate",
    lastName: "dolidze",
    age: 15,
    livingPlace: "tbilisi",
    hobbi: "dance",
}


// first variant
function allInfoJoin(firstName, lastName, age, livingPlace, hobbi) {
    const fullInfo = firstName + " " + lastName + " " + age + " " + livingPlace + " " + hobbi
    return fullInfo
}

console.log(allInfoJoin(infoJoin.firstName, infoJoin.lastName, infoJoin.age, infoJoin.livingPlace, infoJoin.hobbi))

// second variant

console.log(infoJoin.firstName + " " + infoJoin.lastName + " " + infoJoin.age + " " + infoJoin.livingPlace + " " + infoJoin.hobbi)


// შექმენით ფუნქცია სახელად ageCheck. ამ ფუნქციას გადასცემთ ასაკს და მოახდენთ შემდეგ შედარებას: 1) მეტია 18-ზე 2) ნაკლებია 18-ზე
//  3) ტოლია 18-ის და მას დაბეჭდავთ კონსოლში. ფუნქცია გამოიძახეთ რამდენიმეჯერ, ჩასვით სხვადასხვა რიცხვითი მნიშვნელობები.


function ageCheck(age) {
    if (age > 18) {
        console.log("more than 18")
    } else if (age < 18) {
        console.log("less than 18")
    } else {
        console.log("equal to 18")
    }
}

age = 18
console.log(ageCheck(age))



// html-ში აიღეთ ერთი ღილაკი. ღილაკის ყოველ დაკლიკებაზე უნდა გაეშვას ფუნქცია
// სახელად alerter - ვებსაიტზე უნდა გამოვიდეს alert box და დაწეროს "Clicked".

document.getElementById("alBox").addEventListener("click", function() {
    alert("Clicked");
});








// html-ში აიღეთ ერთი ღილაკი და პარაგრაფი. ღილაკის დაკლიკებაზე უნდა გაეშვას ფუნქცია 
// სახელად colorChanger - პარაგრაფის ტექსტის ფერი უნდა გახდეს მწვანე.


