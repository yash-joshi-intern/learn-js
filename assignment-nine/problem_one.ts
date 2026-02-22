// Assignment 1
// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number

function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray("returns this as it is : string"))
console.log(wrapInArray(3))

interface PaginatedResponse<T>{
    items : T[] , total : number
}

const firstTake : PaginatedResponse<number>= {
    items : [1, 2, 3, 4, 5] , total: 3
} 
console.log(firstTake)

type user = {
    id : number, name : string
}

const secondTake : PaginatedResponse<user>= {
    items : [
        { id : 1 , name : "yash"} , { id : 2 , name : "yash"}, { id : 3 , name : "yash"} 
    ] , total: 3
} 
console.log(secondTake)

//output
// {
//   "items": [
//     1,
//     2,
//     3,
//     4,
//     5
//   ],
//   "total": 3
// } 
// [LOG]: {
//   "items": [
//     {
//       "id": 1,
//       "name": "yash"
//     },
//     {
//       "id": 2,
//       "name": "yash"
//     },
//     {
//       "id": 3,
//       "name": "yash"
//     }
//   ],
//   "total": 3
// } 


//PRACTICES - EXTRAS

interface User {
    id : number,
    name : string,
    email : string,
    role : "ADMIN" | "CUSTOMER",
    isActive : boolean 
}

function getUser<T> ( user : T) : T{
    return user;
}

const user = getUser(
    {
        id : 1, name : "yash" , email : "yash@gmail.com", role : "ADMIN" , isActive : true 
    }
)

console.log(user)

class myShop<T extends mobile> {
  private item : T[] = []
  private price : number[] = []

  constructor(item : T[]){
    this.item = item
  }

  getPrice () : number[] {
    return this.price;
  }

  setPrice ( price : number[] ) {
    this.price = price
    this.item.forEach((e, indexd) => {
      console.log(e.name + " " + this.price[indexd])
      console.log(e.ram + e.storage)
    })
  }

}

type mobile = {
  name : string, ram : number , storage : number
} 

const myMobieOne : mobile ={
  name : "samgung" , ram : 4 , storage : 32
}

const myMobieTwo : mobile ={
  name : "apple" , ram : 8 , storage : 32
}

const myMobieThree : mobile ={
  name : "galaxy" , ram : 40 , storage : 32
}


const myClass = new myShop <mobile>([ myMobieOne, myMobieTwo , myMobieThree])
myClass.setPrice([12, 12, 34])

console.log(myClass.getPrice())

