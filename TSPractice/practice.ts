// const vare : number = 3;

// const n : undefined = undefined;  

// let nn : any = "MONKEY";
// nn = 2;

// let nnn : unknown = "Un";
// nnn = 4

// if(typeof nnn === "string"){
//     nnn.toUpperCase();
// }


interface myInterface {
    id : number;
    name : string;
    email? : string //use for opetional things
}

const myValues : myInterface = {
    id : 1, 
    name  :"yash"
}

const myEmail : myInterface = {
    id : 2, name : "hansil", email : "bacancy@us" 
}

console.log(myEmail, myValues)

interface myInterface2 extends myInterface {
    pass? : string | number
}

const entireUser : myInterface2 ={
    id : 3, name : "dhruv", email : "@monkey.com" , pass:"hereIsPass"
}

console.log(entireUser)

//declaration merging : if interface name are same then the value paris will be merged

interface oneInter {
    mobine : string | number
}

interface oneInter {
    laptop : string
}

const givingValues : oneInter = {
    mobine : 4, laptop : "myLaptop"
}

console.log(givingValues)

//type

type userType = {
    id : number; 
    name : string;
}

type userTypeExtends = {
    email : string
}
const myUser : userTypeExtends & userType = {
    id : 2, name : "yash", email : "null.com"
}

//generics 


function myfunction<T>(value : string) : string{
    return value;
}

console.log(myfunction<number>("myTypeParam"))

function myGenericFunction<T>(arr : T[]) : T{
    return arr[0];
}

console.log(myGenericFunction<string>(["stgring", "Two"]))

enum Role {
    Admin, User, Guest, B
}


console.log(Role.Admin)

type parentType = {
    id : number
    name : string
}

type childType = {
    joinId : parentType
    email : string
    password : string
}

const mytypedvar : childType = {
    joinId : {
        id : 1, 
        name : "yash"
    },
    email : "myemail",
    password : "mypass"

}

const objOne = {
    id : 1, name: "han"
}

type vartemp = keyof typeof objOne

// type User = {
//     name : string,
//     age : number,
//     isAdmin : boolean
// }

// const user : User = {
//     name: "Alice",
//     age: 30,
//     isAdmin: true
// };

// // TypeScript knows these properties exist
// console.log(user.name);  // OK
// console.log(user.isAdmin);

// const numbers = [1, 2, 3]; 
// console.log(typeof numbers)

// const s = 'str'
// console.log(s)

// const graph: [x: number, y: number] = [55.2, 41.3];
// console.log(graph[0])

// function createPair<S,M>(v1: S, v2: M): M{
//   return v2;
// }
// console.log(createPair<string, number>('hello', 42));


interface Apple {

  product : string[],
  productPrice : number[],
  origin? : string,
  valuation? : bigint,
  employees? : number,
  yearOfEsta? : Date,
}

function appleMac <T> (brand: Apple, quantity : number, properties : keyof Apple) : string{

  console.log(`I have baught the ${brand.product[1]}`)
  console.log(`Total Value will be : ${brand.productPrice[1] * quantity}`)
  console.log(`${properties} This have been printed through explicit keyof Apple becuase Apple will have the all keytype`)

 return "hello" 
} 

appleMac <Apple>({
  product : ["Mini", "IPhone"],
  productPrice : [3000,20000]
}, 3, "employees")


let value: string | undefined | null = null;
value = 'hello';
value = undefined;
// value = 23; error
console.log(value)

//Nullish Coalescing used when we have to deal with null or undefined;
console.log("--")
function myNullishCoalescing <T,M>( typeIs : T | null | undefined, defaultValue : M) : T | M{
  return typeIs ?? defaultValue;
}

console.log(myNullishCoalescing <number, number>(null, 2))

type UserRoles = Record<"admin" | "user" | "guest", number | string>;
