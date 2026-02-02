/*
Problem 11 — The Nested Timeout
// will print A and E directly as it will go through the call stack 
// durin that process in Macro Queue ---> SetTimeout and in Micro Queue ---> Promise(all promises inside it will also returned before Macro Task) cuz. high priority
*/

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

// output:
// A
// E
// C
// D
// B
