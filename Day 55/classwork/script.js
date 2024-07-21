function calculateTotal() {
    let total = 0;

    let first_name = prompt("Enter your first name: ");
    let last_name = prompt("Enter your last name: ");
    let age = prompt("Enter your age: ");
    let place_of_residence = prompt("Enter your place of residence: ");

    total = parseInt(age) + first_name.length + last_name.length + place_of_residence.length;

    document.getElementById("total") + total;
  }