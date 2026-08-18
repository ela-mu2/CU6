// Exercise 3 — Promise reject & catch

// a.	Write a function ⁠maybeFail(shouldFail) that returns a Promise:

// i.	If ⁠shouldFail is true, reject with an ⁠Error('failed').

// ii.	Otherwise resolve with ⁠'ok'.

// b.	Call it with ⁠true and handle the rejection using ⁠.catch() to log the error message.

function maybeFail(shouldFail) {
    let promise = Promise((resolve, reject) => {
        if (shouldFail) {
            reject("Failed");
        } else {
            resolve("OK");
        }
    });

    promise
        .then(value => console.log(value))
        .catch(error => console.log(error))
}

maybeFail(true);
maybeFail(false);
