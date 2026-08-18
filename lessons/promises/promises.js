let promise = new Promise((resolve, reject) => {
    // Simulating asynchronous operation using setTimeout
    setTimeout(() => {
        resolve("Promise is resolved!");
    }, 2000);
});

let anotherPromise = new Promise((clear, rejected) => {
    setTimeout(() => {
        clear('Promise is "cleared"');
    }, 2000);
});

console.log(promise); // Promise {<pending>}
console.log(anotherPromise);

// Promises .then and .catch

// Using .then(), you get the value of whatever your 'resolve'
// Similary, using .catch(), you get the va;ue of whatever you 'reject'
promise
    .then((value) => console.log(value))
    .catch((error) => console.log("Error:", error))
    .finally(() => console.log("Promise settled!"));

// Using .finnaly() w
