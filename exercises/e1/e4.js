// Exercise 4 — Convert then/catch to async/await

// a.	Take the Promise-chaining code from Exercise 2 and rewrite it using ⁠async / ⁠await inside an ⁠async function run() that returns the final value.

// b.	Use ⁠try / ⁠catch around the awaits to handle errors.

// a.

async function asyncFunction() {
    const result1 = await step1();

    const result2 = await step2(result1);

    const finalResult = await step3(result2);

    console.log(finalResult);

    return finalResult;
}

asyncFunction();

// b.

async function asyncFunction() {
    try {
        const result1 = await step1();

        const result2 = await step2(result1);

        const finalResult = await step3(result2);

        console.log(finalResult);

        return finalResult;
    } catch (error) {
        console.log("Error: ", error);
    }
}

asyncFunction();
