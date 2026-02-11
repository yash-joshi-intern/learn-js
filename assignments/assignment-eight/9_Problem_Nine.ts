/*
Assignment 9: Access Modifiers
Create a service class exposing only required public methods
Keep internal data private
Explain which members should be accessible and why
Create a class with public, private, and protected members
Try accessing them outside the class
Which members should be exposed and why?
*/

//implementation and private key should not be exposed, bussiness methods should be accessible outside the class. 

class Company {
    private policy : string; //inside the class only  - Encapsulation // policy should be internal only
    public emloyee : number; // anywhere outside the class - Anyone can see the Data
    protected clientDetails : String[]; //can be use inside the child of this class

    constructor(policy : string, employee : number, clientDetails : String[]){
        this.policy = policy
        this.emloyee = employee
        this.clientDetails = clientDetails
    }

    public getPolicy() : string{
        return this.policy
    }

}

const myObj = new Company("5 Days a week", 1000, ["US", "UK"])
// console.log(myObj.policy) // ERROR
console.log(myObj.emloyee)
console.log(myObj.getPolicy()) //gets the policy with getter method 