// Assignment 6
// Create a type UserPublicProfile without email and isActive .
// Create a Record that maps user IDs (string) to User objects.


type User = {
  id: string
  name: string
  email: string
  role: "ADMIN" | "CUSTOMER"
  isActive: boolean
}

type problemOne = Omit<User , "name" | "isActive">

const tempVarOne : problemOne = {
  id : "1", email : "email.com" , role : "ADMIN"  
}

console.log(tempVarOne)

type problemTwo = Record<string  , User>


const tempVarTwo : problemTwo = {
  "user1": {
    id: "user1",
    name: "Yash",
    email: "yash@mail.com",
    role: "ADMIN",
    isActive: true
  }
}

console.log(tempVarTwo)