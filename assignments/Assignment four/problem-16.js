/*
Problem 16 — Async Function Order
// first "C" will print after that there is function is called and "A" will print after that await is there, so the remaining code will passed to the microtask quick after "D" will print than the remaining "B" will print
*/

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

// Output :
// C
// A
// D
// B
