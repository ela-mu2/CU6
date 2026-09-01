// Exercise 2 — Promise chaining

// a.	Write three functions ⁠step1(), ⁠step2(value), ⁠step3(value) where:

// i.	⁠step1() returns a Promise that resolves to the number ⁠1.

// ii.	⁠step2(value) returns a Promise that resolves to ⁠value + 2.

// iii.	⁠step3(value) returns a Promise that resolves to ⁠value * 3.

// b.	Chain them with ⁠.then() so the final logged result equals ⁠9.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

promise

    .then((value) => {
        console.log(value);

        return value + 1;
    })

    .then((value) => {
        console.log(value);

        return value + 2;
    })

    .then((value) => {
        console.log(value);

        return value * 3;
    });

promise()
    .then((result1) => step2(result1))

    .then((result2) => step3(result2))

    .then((finalResult) => {
        console.log(finalResult); // Output: (1 + 2) * 3 = 9
    });
