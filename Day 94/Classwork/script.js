// const inventory = {
//     sunglasses: 1900,
//     pants: 1088,
//     bags: 1344
// };

// const myExecutor = (resolve, reject) => {
//     if(inventory.sunglasses > 0){
//         resolve("Sunglasses order processed");
//     } else {
//         reject('That item is sold out');
//     }
// }

// const orderSunglasses = () => {
//     return new Promise(myExecutor);
// }

// const orderPromise = new Promise(myExecutor);

// console.log(orderPromise);

// console.log("start");

// setTimeout(() => {
//     console.log("OPA");
// }, 1000);

// console.log("End");

// const pantsCount = 100;

// const executerFunction = (resolve, reject) => {
//     if(pantsCount > 0){
//         setTimeout(() => {resolve("Yeee you can buy!")}, 1000);
//     } else {
//         setTimeout(() => {reject("Pants is sold out")}, 1000);
//     }
// };

// const orderPant = () => {
//     return new Promise(executerFunction);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------

// orderPant().then((resolvedValue) => {
//     console.log(resolvedValue)
// }, (rejectReason) => {
//     console.log(rejectReason)
// })

// or

// orderPant()
//     .then((resolvedValue) => {
//     console.log(resolvedValue)
//     })
//     .then((rejectReason) => {
//         console.log(rejectReason)
//     });

// or

// orderPant()
//     .then((resolvedValue) => {
//     console.log(resolvedValue)
//     })
//     .catch((rejectReason) => {
//         console.log(rejectReason)
//     });

// --------------------------------------------------------------------------------------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))