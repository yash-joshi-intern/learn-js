/*
Problem 7 — Event Loop Basic Race
// setTime is webAPI call and Promise will be handeled by micro queue and meanwhile before event loop call one by one the "End" got printed. then "Promise" and then lower priorotize setTimeout function will be loaded 
*/

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
