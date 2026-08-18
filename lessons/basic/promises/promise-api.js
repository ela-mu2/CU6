// Promise.all

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 completed");
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 rejected");
    }, 1000);
});

// Only when ALL promises are resolved
// Only then it will go into .then()
Promise.all([promise1, promise2])
    .then((values) => console.log(values))
    .catch((error) => console.log(error));
// If even 1 of them is rejected
// It will immediately go into the .catch() error.
