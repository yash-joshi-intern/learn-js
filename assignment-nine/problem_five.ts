// Assignment 5
// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.


type User = {
  id: string
  name: string
  email: string
  role: "ADMIN" | "CUSTOMER"
  isActive: boolean
}

type problemOne = {
  readonly  [KEY in keyof User] : User[KEY]
}

const readUserOnly : problemOne = {
  id: "userID",
  name: "name",
  email: "email.com",
  role: "CUSTOMER",
  isActive: true
}

type problemTwo = {
  [KEY in keyof User] : string
}

const stringOnly : problemTwo = {
  id: "userID",
  name: "name",
  email: "email.com",
  role: "CUSTOMER",
  isActive: "true"
}

type probelmThree = {
  [KEY in keyof User]? : null
}

const optionalAndNullableUserConst : probelmThree = {
  id: null,
  name: null
}


// console.log(readUserOnly.id = "userWantToChange") Cannot assign to 'id' because it is a read-only property.(2540)

//Practices 

type anyType = {
  [KEY in keyof User]? : User[KEY]
}

// const typeZero : User = {
//not allowed
//   //Type '{}' is missing the following properties from type 'User': id, name, email, role, isActive(2739)
// }

const typeone : anyType = {
  //allowed
}

type booleanType = {
  [KEY in keyof User]? : boolean | null
}

const booleanTypeConst : booleanType = {
  id : null
}

type nullOrUserType = {
  [KEY in keyof User] : User[KEY] | null
}

// const nullOrUserTypeConst : nullOrUserType = {
// //have to define all here with original type or null
// }

type partialType = Partial<User>

const partialMeanOptional : partialType = {

}

//Implementation of <Partial> 

type myPartial<T> = {
  // in something : implementation 
  [KEY in keyof T]? : T[KEY]
}

//Impelemetation of <ReadOnly>

type myReadOnly<T> = {
  readonly [KEY in keyof T] : T[KEY]
}

//Implemantation of <Required>

type myRequired<T> = {
  [KEY in keyof T] -? : T[KEY]
}

//NOTE; 
// | Modifier    | Meaning         |
// | ----------- | --------------- |
// | `?`         | add optional    |
// | `-?`        | remove optional |
// | `readonly`  | add readonly    |
// | `-readonly` | remove readonly |

//Implementation of Pick<T, K>

type myPick < T , K extends keyof T > = {
  [KEY in K] : T[KEY]
}



