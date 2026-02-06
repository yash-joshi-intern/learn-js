// import * as readline from "readline";


function calculatePrice (nums : number[]) : number{
    let total : number = 0;
    for(let tempNumber of nums ){
        total+=tempNumber;
    }
    return total;
}

function returnString (paramOne : number , paramTwo : number) : string{
    return ((paramOne+paramTwo)>100) ? "Number Is Greater Than 100" : "Number Is Less Than 101"
}

const inputArray : number[] = [1,2,3]
console.log(calculatePrice(inputArray))

const inputNumOne : number = 44, inputNumTwo : number = 57;
console.log(returnString(inputNumOne, inputNumTwo))
// console.log(returnString(inputNumOne, "string")) --> will throw the error at compiletime itself
// Argument of type 'string' is not assignable to parameter of type 'number'.

//to take input from the console
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your input: ", (answer: string) => {
//   console.log("You entered:", answer);
//   rl.close();
// });