/*
Assignment 5: Type Aliases
Create reusable aliases for union and intersection types
Refactor earlier assignments to use these aliases
Observe how readability improves
Create a type alias for string | number
Use it in two variables
How does this improve readability?
*/

// type Role = "Admin" | "User" | "Guest"


// type User = {
//   role: Role;
//   permissions: string[];
// };

//Previous Example  #########################---> 

// type Admin = {
//     role : 'Admin', //string literal - fixed
//     permission : String[] 
// }

// type Customer = {
//     role : 'Cutomer',
//     permission : String[]
// }

// type Guest = {
//     role : 'Guest',
//     permission : String[]
//     visitTime : number
// }

// type User = Admin | Customer | Guest

//Instead of this #############################-->


// type UserRefactored = {
//     role : Role,
//     permission : String[],
// } // redundant code removed, key bussiness logic remains. improve redability

// type GuestSame = {
//     visitTime : number
// }

// type UserImproved = (UserRefactored & GuestSame) | UserRefactored

// function logUsers(user : UserImproved){
//     if(user.role == "Guest") console.log(user.visitTime) //doesn't works no scope for setimtout. 
//     console.log(user.role)
// }


// logUsers({ role : 'Admin', permission : ["login", "logout"]}) //Prints Admin

// // logUser({ role : 'Admin', permission : ["login", "logout"], visitTime: 80}) //visitTime Doesn't exist Error

// logUsers({ role : 'Guest', permission : ["login", "logout"], visitTime: 80}) //Prints Guest -- works


//correcton one ################################## --> 

type NewRole = "Admin" | "User" | "Guest" | "Hacker"

type SubUser = {
    role : NewRole,
    permission : String[],
} 

type UserImproved = (SubUser & {role : "Admin" | "User "}) | (SubUser &  { role : "Guest", visitTime : number }) 


function logUsers(user : UserImproved){
    if(user.role == "Guest") console.log(user.visitTime) //doesn't works no scope for setimtout. 
    console.log(user.role)
}


logUsers({ role : 'Admin', permission : ["login", "logout"]}) //Prints Admin

// logUser({ role : 'Admin', permission : ["login", "logout"], visitTime: 80}) //visitTime Doesn't exist Error

logUsers({ role : 'Guest', permission : ["login", "logout"], visitTime: 80}) //Prints Guest -- works


type StringOrNumber = string | number;

let id: StringOrNumber = 10;
let orderCode: StringOrNumber = "ORD-22";

//can helps to remove boiller plate code and flexible to change at any point. don't have to change at every line where function of variable declared