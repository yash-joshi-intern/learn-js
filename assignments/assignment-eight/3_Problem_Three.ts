/*
Assignment 3: Union Types

Add one more role (e.g. Guest ) to the User union
Write a function that accepts User
Use the role field to safely narrow the type
Observe how TypeScript prevents invalid property access
Create a union type for two different user roles using type
Create another union using two interfaces
Write a function that accepts the union and narrows the type safely
*/



type Admin = {
    role : 'Admin', //string literal - fixed
    permission : String[] 
}

type Customer = {
    role : 'Cutomer',
    permission : String[]
}

type Guest = {
    role : 'Guest',
    permission : String[]
    visitTime : number
}

type User = Admin | Customer | Guest

function logUser(user : User){
    if(user.role == "Guest") console.log(user.visitTime) //works
    console.log(user.role)
}


logUser({ role : 'Admin', permission : ["login", "logout"]}) //Prints Admin

// logUser({ role : 'Admin', permission : ["login", "logout"], visitTime: 80}) //visitTime Doesn't exist Error

logUser({ role : 'Guest', permission : ["login", "logout"], visitTime: 80}) //Prints Guest -- works


interface Mobile {
    name : "Mobile",
    company : string,
    price : number,
    canCall : boolean
}

interface Laptop {
    name : "Laptop",
    company : string,
    price : number
}

type myElectronic = Mobile | Laptop

function myItem(item : myElectronic){
    if(item.name == "Mobile") console.log(item.canCall);
    return item.price;
}

console.log(myItem({
    name : "Laptop", company: "Samsung" , price : 100
   } 
))

console.log(myItem({
    name : "Mobile", company: "Samsung" , price : 100, canCall: true
   } 
))