/*
Problem 5 — Math in Promises
// the promise is resolved so flow will be --> 10 will pass as num param --> 10*2 --> 20 will pass as result --> console.log(result)
*/

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

// Output : 20
