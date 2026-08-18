let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

promise
    .then((value) => {
        console.log(value); // 1
        return value + 1; // Pass it to the next .then()
    })
    .then((value) => {
        console.log(value); // 2
        return value + 1; // Pass it to the next .then()
    })
    .then((value) => {
        console.log(value); // 3
    })
    .then((value) => {
        console.log(value); // 3
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Finaly for you to clean up actions"));
