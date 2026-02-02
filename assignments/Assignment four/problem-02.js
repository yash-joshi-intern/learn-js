/*
Problem 2 — Basic Promise Flow
Explanation:
  Here Promise will execute through the micro queue and event loop scenario so, in meanwhile the other program get executed
*/

console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

// Output : 1
//          3
//          2
