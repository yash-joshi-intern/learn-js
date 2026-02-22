// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.


type userId = {
    id : number
}

function activateUser <T extends userId > (user : T) : number {
    // console.log(user.name) shows undefine after force compile - ERROR
    return user.id
}

console.log(activateUser({ id : 3}))
// console.log(activateUser({ id : 3 , name : "yash"}))


type userIdName = {
    id : number , name : string
}

function activeUserTwo < T extends userIdName> (user : T) : void {
    console.log(user)
    //WE DONT' HAVE TO MANUALLY WRITE userIdName placeholder
}

activeUserTwo({
  id : 2 , name : "dharmik"
})
