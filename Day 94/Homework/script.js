// 1.

const helloPromise = new Promise((resolve) => resolve("Hello world!"));

helloPromise.then((res) => console.log(res));

// 2.

const delayPromise = new Promise((resolve) => resolve("Resolved after 2 seconds"));

setTimeout(() => {
    delayPromise.then((res) => console.log(res));
}, 2000)

// 3.

const firstPromise = new Promise((resolve) => {resolve("First")});
const secondPromise = firstPromise.then((res) => res + " -> Second");

secondPromise.then((res) => {console.log(res)});

// 4.

const promise1 = new Promise((resolve) => resolve("Hello "));
const promise2 = promise1.then((res) => res + "World");
const promise3 = promise2.then((res) => res + "!")

// 5.

const promise4 = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Rejected");
    }, 1000);
});

promise4
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject))

// 6.

function delay(){
    setTimeout(() => console.log(1), 1000);
    setTimeout(() => console.log(2), 2000);
    setTimeout(() => console.log(3), 3000);
}

delay()

// 7.

function delay1(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
};

delay1(1000)
    .then(() => {
        console.log(1);
        return delay1(1000);
    })
    .then(() => {
        console.log(2);
        return delay1(1000);
    })
    .then(() => {
        console.log(3)
    })


// 8.

const promise5 = new Promise((resolve, reject) => {
    let num = 5;

    if(num === 5){
        resolve("The number is 5");
    } else {
        reject(`The number is not ${num}`);
    }
})

promise5
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));

// 9.

const promise6 = new Promise((resolve, _) => {
    resolve("Hello world!")
});

promise6
    .then((resolve) => console.log(resolve))

// 10.

const promise7 = new Promise((resolve) => {
    resolve(1);
})

promise7
    .then((value) => console.log(value))
    .then(() => console.log(2))
    .then(() => console.log(3));
