/*
Problem 19 — Microtask vs Macrotask Interleaving
//first  all promises will will store in micro queue and setTimeout will go to the call stack queue. after printing "End" first Promise will get call Stack and will print P1 then agian another setTimeout function will pushed to the macro queue behind the first setTiemout function. after resoliving the seconde Promise both will executed one by one
*/

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

// Output :
// End
// P1
// P2
// T1
// T2
