// Exercise 1 — Basic Promise

// a.	Create a function ⁠delay(ms) that returns a Promise which resolves after 2000⁠ms milliseconds with the string ⁠"done".

// b.	Call it and log the resolved value.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 2000);
});

console.log(promise); // done
