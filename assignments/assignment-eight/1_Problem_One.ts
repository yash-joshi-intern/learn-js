/*
Assignment 1: Type Inference
Declare variables using let and const with initial values and observe inferred types
Try reassigning incompatible values and note the compiler errors
Write a function without a return type and inspect what TypeScript infers
*/

const tempVar = 10;
let tempVa = "4";

console.log(typeof tempVa, typeof tempVar)
//"string",  "number" 

//Const - can't assign any type or value again 
//let -> if the declaration in String then can not assign any other type

function myFunction(id : number) {
    return id;
}
console.log(typeof myFunction(10))

let functionReturnValue = myFunction(11)
console.log(functionReturnValue)

// functionReturnValue = "string"; --. not possible --> Number can be assign