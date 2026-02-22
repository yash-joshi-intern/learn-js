// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error


// function updateField < T , K , V extends keyof K>( obj : T , keys : K , values : V) : T {
//   console.log(keys , values)
//   return obj
// }

// console.log(updateField({ id : 1 , name : "string" , email : "string" , isActive : true} , "email" , "myvalue"))

function updateField < T , K extends keyof T > (user : T , key : K , value : T[K]) : T{
  // T here is the entire type , K means the keys of the TYPE that can be inject using function (email , id , name etc..),
  // T[K] meanas ==> user[email] or user[id] etcc... 
  console.log(user)
  user[key] = value
  return user
}

const user = {
  id: 1,
  name: "Joshi",
  email: "test@mail.com",
  isActive: true
};

console.log(updateField(user, "email", "new@mail.com"))

// PRACTICEs 

function updateSpecific < T , K extends keyof T> ( objs : T , keyOne : K , keyTwo : K , valOne : T[K] , valTwo : T[K]) : T[K][]{
    
    objs[keyOne] = valOne
    objs[keyTwo] = valTwo

    return [objs[keyOne], objs[keyTwo]]
}

console.log(updateSpecific(user, "isActive" , "name" , false , "Joshi Yash"))



type user = {
  id : number , name : string , age : number , laptop : string
}

type keyCheck =  keyof user

function tempFunction <keyCheck> ( id : keyCheck) : keyCheck {
  // id can be anything from number, string etc
  return id;
}

console.log(tempFunction(4))

function origina < user , M , K extends keyCheck > ( id : user , message : M , key : M ) : void{

  console.log(message , id , key )
}

origina({
  id : 2 , name : "yash" , age : 20 , laptop : "samsung"
} , "my message as string type" , "can be only string or number")

