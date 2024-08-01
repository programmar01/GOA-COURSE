const form = document.getElementById('form');
const resultDiv = document.getElementById('result');
const accs = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nameInp = form.elements.name.value;
    const passInp = form.elements.password.value;
    
    accs.push(nameInp);
    accs.push(passInp);
});

const logInForm = document.getElementById('loginform');

logInForm.addEventListener('submit', function(e){
    e.preventDefault();

    const logInName = logInForm.elements.loginname.value;
    const logInPass = logInForm.elements.loginpassword.value;

    if (logInName == accs[0] && logInPass == accs[1]) {
        location.href = "welcome.html"
    } else {
        const childNode = document.createTextNode("This account does not exist");
        resultDiv.appendChild(childNode)
    }
});