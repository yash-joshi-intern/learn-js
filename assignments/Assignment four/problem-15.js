/*
Problem 15 — Throwing Inside a Chain
//standara chaining concept. .then throws the error. catch handles the error and reutrn 10 and it will pass as parameter in last .then and print in console 10
*/

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

// Output : Caught Error
//          10
