//----------------------------------------1


// ამოცანა 1: შექმენით ფუნქცია სახელად isTeenager, რომელიც იღებს ორ პარამეტრს: ასაკი (რიცხვი) და hasPermission.
//  ფუნქცია უნდა დაბრუნდეს False, თუ ადამიანი არის მოზარდი (18 წლამდე) და არ აქვს ნებართვა აიღოს მართვის მოწმობა, ან თუ ადამიანი არის 
//  18 წლის და აქვს უფლება აიღოს მართვის მოწმობა ფუნქციამ დააბრუნოს true.  გამოიყენეთ "and" (&&) და "or" (||)

// function isTeenager (age, hasPermission) {
//     if (age >= 18 && hasPermission == false) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isTeenager(19, false))






//----------------------------------------2

// ამოცანა 2: შექმენით ფუნქცია სახელად isValidCoupon, რომელიც იღებს ორ პარამეტრს: couponCode (სტრინგი) და totalAmount 
// (რიცხვი). ფუნქცია უნდა დაბრუნდეს true, თუ კუპონის კოდი არის "SALE" ან "BIGSALE" და ჯამური თანხა მეტია ან ტოლია 50-ზე, ან თუ კუპონის
// კოდი არის "LILSALE" მთლიანი თანხის მიუხედავად. წინააღმდეგ შემთხვევაში, ის უნდა დაბრუნდეს false. გამოიყენეთ "და" (&&) და "ან" (||)

function isValidCoupon(couponCode, totalAmount){
    if (couponCode == "SALE" || couponCode == "BIGSALE") {
        if (totalAmount >= 50) {
            return true
        } else {
            return false
        }
    } else if (couponCode == "LILSALE") {
        return true
    } else {
        return false
    }
}