// 1) შექმენით ობიექტი თქვენს თავზე - დაამატეთ სახელი, გვარი, ასაკი, საცხოვრებელი ადგილი და სკოლა. ბოლოს თითოეული დაბეჭდეთ კონსოლში.
// 2) მიწვდით პირველი დავალების ობიექტის ყველა კუთვნილებას და შეუცვალეთ მათ მნიშვნელობები. უკვე შეცვლილები კი დაბეჭდეთ კონსოლში.

const myInfo = {
    firstName: "mate",
    lastName: "dolidze",
    age: 15,
}
myInfo.firstName = "giorgi"
myInfo.lastName = "giorgadze"
myInfo.age = 16


console.log(myInfo.firstName);
console.log(myInfo.lastName);
console.log(myInfo.age);

// შექმენით ობიექტები თქვენი ოჯახის წევრების შესახებ, თითოეულს უნდა ქონდეს სახელის, გვარის და ასაკის კუთვნილებები. ყველა მათგანი დაბეჭდეთ კონსოლში.


const myFamilyInfo = {
    myFirstName: "mate",
    myLastName: "dolidze",
    myAge: 15,
    dadFirstName: "davit",
    dadLastName: "dolidze",
    dadAge: 44,
    momFirstName: "nino",
    momLastName: "kurtsua",
    momAge: 39,
    
    
}



console.log(myFamilyInfo);


// შექმენით ორი იდენტური ობიექტი, რომლებსაც სახელების გარდა ყველა კუთვნილება და
//  მათი მნიშვნელობები ექნებათ ერთი და იგივე. საბოლოოდ შეადარეთ ეს ორი ობიექტი == ოპერატორით.


const myFirstInfo = {
    firstName: "mate",
    lastName: "dolidze",
    age: 15,
}
const mySecondInfo = {
    firstName: "mate",
    lastName: "dolidze",
    age: 15,
}

console.log(myFirstInfo == mySecondInfo);

// აირჩეთ ერთი კონკრეტული ადგილი და შექმენით ამინდის პროგნოზის ობიექტი მისთვის. ამ ობიექტში უნდა გქონდეთ ლოკაცია,
//  ტემპერატურა, დროის ხანგრძლივობა, ასევე ზოგადად როგორი ამინდი და პირობები იქნება. ყველა მათგანი კი ბოლოს კონსოლში დაბეჭდეთ.
   

const weatherForecast = {
    place: "tbilisi",
    temptemperature: "30C°+",
    time: "00:00 to 23:59",
    localWeather: "hot",
}

console.log(weatherForecast.place);