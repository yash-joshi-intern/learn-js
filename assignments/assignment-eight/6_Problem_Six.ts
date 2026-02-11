/*
Assignment 6: Interfaces
Create Admin and Customer interfaces using a common base
Extend the base interface to add role-specific properties
Write a function that accepts BaseUser
Pass both Admin and Customer objects to the function
Design an interface for an API response object
Create a function that accepts this interface as a parameter
Extend the interface and reuse it
Create an interface for a Product
Create a variable that follows this interface
*/

interface BaseUser {
  id: number;
  email: string;
}

interface Customer extends BaseUser{
    purchaseHistory : string[],
    age : number
}

interface Admin extends BaseUser{
    permission : string[],
    salary : number
}

function printUser(user: BaseUser): void {
  console.log(`User ID: ${user.id}`);
  console.log(`Email: ${user.email}`);
}


function printCutomer(customer : Customer) : void {
    console.log(`${customer.id, customer.email, customer.purchaseHistory, customer.age}`)
}

function printAdmin(admin : Admin) : void {
    console.log(`${admin.id, admin.email, admin.permission, admin.salary}`)
}

const customer : Customer = {
    id : 1, email : "email.com" , purchaseHistory : ["mouse", "keyboard"], age : 21
}

const admin : Admin = {
    id : 2, email : "email.com" , permission : ["remove", "add"], salary : 21000
}

printUser(customer)

printAdmin(admin)


interface ApiResponse {
  success: boolean;
  message: string;
}


function handleApiResponse(response: ApiResponse): void {
  if(response.success){
    console.log("Success:",response.message);
  }else{
    console.log("Error:", response.message + "Failed");
  }
}

const apiResponse: ApiResponse = {
  success:true,
  message:"User fetched",
};

handleApiResponse(apiResponse);


interface Product {
  id:number;
  name:string;
  price:number;
  inStock: boolean;
}


const product: Product = {
  id:1021,
  name: "Laptop",
  price:750200,
  inStock:true
};

console.log("Product:", product);