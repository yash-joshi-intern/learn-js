/*
Assignment 2: any vs unknown
Create a function that accepts any and performs operations without checks
Create the same function using unknown and add proper type guards
Compare the compiler behavior and runtime safety

Create one variable using any
Create another variable using unknown
Try calling methods directly on both
Which one forces you to write safer code?
*/


function myFunction(id : any){
    return id *2; // will run successfully
}

console.log(myFunction(8))
console.log(myFunction("8"))
console.log(myFunction("U"))
console.log(myFunction(true))
console.log(myFunction(false))

// [LOG]: 16 
// [LOG]: 16 
// [LOG]: NaN 
// [LOG]: 2 
// [LOG]: 0 


function myFunction(id : unknown){
    if(typeof id === "number"){
        return 8*2;
    }

    if(typeof id === "boolean"){
        return id + " boolean"
    }

    return id + "string"; //tells to check type first 
    //if we will perform the operation like *, / then will shows the error at compile time becuase it will say that this can be perform if the type is number only, we can use + because number and string can be perform through concatination
}
console.log(myFunction(8))
console.log(myFunction("8"))
console.log(myFunction("U"))
console.log(myFunction(true))
console.log(myFunction(false))



let a : any = "stringOne"
let b : unknown = "stringTwo"

console.log(a.toUpperCase())
// a.toUpperCase()
// b.toUpperCase() //wont work

if(typeof b === "string") b.toUpperCase() //will work
//each time have to verify if the function is defined as unknown then typeof function should be === to "function" then can be called
