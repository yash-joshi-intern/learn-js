/*
Assignment 8: Typed Functions
Write a function with required and optional parameters
Define return types explicitly
Create a small utility function that would exist in a real project
Write a function with one required and one optional parameter
Call it with and without the optional argument
How does TypeScript enforce correctness here?
*/

function functionWithOptional(id : number, stringOptional? : string ) : string{
    return stringOptional + " Handled " + id
}

console.log(functionWithOptional(3, "Hello")) // will accept the value
console.log(functionWithOptional(3)) //stringOptional will be printed as undefined


function formatPrice(amount: number, currency?: string): string {
  const finalCurrency = currency ?? "INR";
  return `${finalCurrency} ${amount.toFixed(2)}`;
}

console.log(formatPrice(12000.98384)) // INR 12000.98
console.log(formatPrice(12000.98384, "dollar")) // dollar 12000.98