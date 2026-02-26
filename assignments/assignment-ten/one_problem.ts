// Assignment 1
// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.


type IsNumber<T> = T extends number ? true : false

type ExtractEmail<T> = T extends {email : infer D} ? D : never

type userType = {
  id : number , email : string , isActive : boolean
}

type emailType = ExtractEmail<userType>

//PRACTICE

type IsString<T> = T extends string ? string : number

type A = IsString<string> // true
type B = IsString<number> // false

const vari : A = "strings"


interface User {
  id: string | null
  name: string
  email: string
  role: "ADMIN" | "CUSTOMER"
  isActive: boolean
}

type IdType<T> = T extends {id : infer U} ? U : number
type tempType = IdType<User>
