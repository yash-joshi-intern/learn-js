/*
Problem 13 — Promise.all Failure
// Promise.all has condition that all promises inside of it should resolve after that .then block get executed
*/

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));

// OUTPUT : Caught: Error 1
