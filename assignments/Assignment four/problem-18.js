/*
Problem 18 — Variable Hoisting & Promises
// arrow function points the global reference so it will be outscope variable. then it's insdie the promise so after the remaining proghram executes the value will be 10 so prints 10 and for the console.log(a) outside of the Promise will print undefined as hoisting behavious of the JS langauge where the JS engine skim through the code and assign the temporal key and vlaue to var and fucntions 
*/

console.log(a);
var a = 5;

Promise.resolve().then(() =>{
    console.log(a);
});

a = 10;

// Output : undefined
//          10
