// 1. შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი string და ერთი number.
//  თქვენი დავალებაა, რომ ამ ფუნქციაში მოახდინოთ +, -, *, / ამ ელემენტებზე
//   და კონსოლში დაბეჭდოთ ეს შედეგები.

// function math(a, b) {
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log(a / b)
// }

// math("hello", 5)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. შექმენით ფუნქცია, რომელიც მომხმარებელს შეეკითხება ტექსტს,
// ფერს და background ფერს.მოწოდებული ინფორმაციით გამოიტანეთ ერთი პარაგრაფი,
// რომლის ტექსტიც იქნება მომხმარებლის მიერ მოწოდებული, ფერებიც შესაბამისად გამოტანილი.

function createParagraph(text, textColor, backgroundColor) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.style.color = textColor;
    paragraph.style.backgroundColor = backgroundColor;
    document.body.appendChild(paragraph);
}

// Example usage:
createParagraph('Hello, World!', 'ed', 'yellow');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////