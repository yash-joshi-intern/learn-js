/*
Assignment 4: Intersection Types
Create an Order using intersection ( & )
Create the same model using interfaces and extends
Remove one required property and observe the compiler error
Decide which approach feels clearer and why
Create two small object types and combine them using intersection ( & )
Create the same structure using interfaces and extends
Try removing a required property and observe the compiler error
Identify when intersection is better than union
*/

type OrderInitiat = {
    orderId : number, amount : number
}

type OrderPending = {
    createdBy : string, totalCheckoutTime : number
}

type OrderCompleted = {
    deliveryPrice : number
}

type Order  = OrderInitiat & OrderPending & OrderCompleted

function myOrderFunction(order : Order){
    return `Order Comleted : Order Totat Amount : ${order.amount + order.deliveryPrice}`
}

console.log(myOrderFunction({
    orderId : 123,
    amount : 99,
    createdBy : "User",
    totalCheckoutTime : 18,
    deliveryPrice : 1
}))

// console.log(myOrderFunction({
//     orderId : 123,
//     amount : 99,
//     createdBy : "User",
//     totalCheckoutTime : 18,
// })) //compile time error - showcase the missing argument


interface OrderInitiatInterface {
    orderId : number, amount : number
}

interface OrderPendinginterface extends OrderInitiatInterface {
    createdBy : string
}

interface OrderCompletedinterface extends OrderPendinginterface{
    deliveryPrice : number
}

function myOrderFunctionTwo(order : OrderCompletedinterface){
    return `Order Comleted : Order Totat Amount : ${order.amount + order.deliveryPrice}`
}

console.log(myOrderFunctionTwo({
    orderId : 13,
    amount : 199,
    createdBy : "User",
    deliveryPrice : 1
}))

// console.log(myOrderFunctionTwo({
//     orderId : 13,
//     amount : 199,
//     createdBy : "User",
// })) --compiletime error as the previous on - showcase that one argument is missing 

//Interface and Extends feels more clearer in terms of OOP, extending the properties from the upper interface
// & between the types of interface is morea readable and clear to understand 

//intersaction is better when we wanted the field or parametered to perform certain operation based on must needed field. without 
// some field the bussiness logic can be failed. 

//Extra -> Interface, Type

type ContactInfo = {
  email: string;
};

type ProfileInfo = {
  username: string;
};

interface Contact {
  email: string;
}

interface Profile extends Contact {
  username: string;
}

type UserProfile = ContactInfo & ProfileInfo;

const user: UserProfile = {
  email: "test",
  username: "123"
};

const userTwo: Profile = {
  email: "test",
  username: "123"
};

console.log(user, userTwo)