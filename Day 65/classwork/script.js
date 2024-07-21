

// for(let i = 0; i < 11; i++) {

//     if(i % 2 == 0) {
//         console.log("even");
//     }
//     else {
//         console.log("odd");
//     }

// }

// 2

const corrpas = "dolidzemate"
let ipas = false

while(ipas!= true){
    pass = prompt("enter password")
    if(pass == corrpas){
        console.log("successfully logged in")
        ipas = true
    }
    else{
        console.log("wrong password")
    }
}