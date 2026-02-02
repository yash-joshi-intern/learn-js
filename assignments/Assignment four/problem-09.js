/*
Problem 9 — Chaining Returns
// common practice to follow structure process through promises. it helps to chain the output and perform operation. first val will have value 5 then added 5 more and retuned/pass to the next .then function and passed there through val param.
*/

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

// Output : 5
//          10
