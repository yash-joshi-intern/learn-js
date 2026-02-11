/*
Assignment 7: Enums
Create an enum for payment states (INITIATED, SUCCESS, FAILED)
Write a function that accepts only this enum
Try passing an invalid value and observe the error
Why enums are better than magic strings?
*/


enum PaymentState {
  Initiated = "INITIATED",
  Success = "SUCCESS",
  Failed = "FAILED"
}


function paymentStatus(state : PaymentState) : void {
    console.log("Current State : ", state)

    if(state === PaymentState.Success) console.log("Order Completed!")
}

console.log(typeof paymentStatus(PaymentState.Failed))
// console.log(typeof paymentStatus(PaymentState.Sussecc)) // ERROR : Property 'Sussecc' does not exist on type 'typeof PaymentState'.

//Magic Strings are not typed safe, typos are allowed, refactoring is hard than the ENUM
// ENUMS : Predefined Values, Clear Bussiness Logic - Only one state 