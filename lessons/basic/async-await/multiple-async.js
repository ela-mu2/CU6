async function asyncFunction() {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1 resolved");
        }, 2000);
    });
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2 resolved");
        }, 1000);
    });
    // "await" can be used multiple times in an async function
    // let result1 = await promise1
    // let result2 = await promise2

    // console.log(result1) // 'Promise 1 resolved'
    // console.log(result2) // 'Promise 2 resolved'

    let results = await Promise.all([promise1, promise2]);

    console.log(results);
}

asyncFunction();
