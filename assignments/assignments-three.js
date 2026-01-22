//Assignment - Three - Q-1

const registry = {
    active: [{id:1, name:"alpha"}],
    archived : []
}
console.table(registry)

function cloneAndModify(data){
    const copy = {...data};
    copy.active.push({id: 2, name:"beta"});
    copy.active[0].name = "Beta";
    copy.version = 2.0;
    console.table(copy)
    console.table(registry)
    return copy
}

const newRegistery = cloneAndModify(registry)
console.log(registry.active.length); // Will return the 2 
console.log(registry.active[0].name); // will change the name from alpha to beta as it is a shallow copy
console.log(registry.version); //prints undefine there is no such variable present in the registery - but it will created the new one in copyRegistery

//Assignment - Three - Q-2

console.log("-----Problem-3---");
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Object.setPrototypeOf(Dog, Animal);

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

myDog.bark(); // Now there is a chain -> Dog -> Animal -> Object --> returns the Woof!
console.log(myDog.constructor.name); // Now Ponits to the Dog
console.log("-----Problem-3---");

//Assignment - Three - Q-3

function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple"); //this will return the specific object and after we can't assign the prototype chiain to returned object
//stores the retured value {brand : "generic",....}

console.log(myPhone.brand);    // will return the "Generic"
console.log(myPhone.getBrand); // --> will return the undefine as there is no direct link to the prototype

// //return "hello"; // ignored
// return 42;      // ignored
// return null;    // ignored
// return {}       // USED Won't Ignored
// return this -> chain remains unchanged

//Assignment - Three - Q-4

console.log("-----Problem - 4-----")
const originals = {
    a : 1,
    b : {
        c : [2,3],
    },
    sayHi(){
        console.log("hi");
    }
}

const  createDeepCopy = (input) => {
    if(typeof input !== "object"){
        return input;
    }
    let copy = Array.isArray(input) ? [] : {};

    for ( key in input){
        const value = input[key];
        copy[key] = createDeepCopy(value)
    }
    return copy
}

const cloned = createDeepCopy(originals);
cloned.a = 2
cloned.b.c[0] = 9
console.log(originals)
console.log(cloned);
console.log(originals.b === cloned.b)
console.log("-----Problem - 4-----")

//Assignment - Three - Q-5

class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count; //this === instance inside instant method
  }

  static getStaticCount() {
    return this.count; //this == class here inside static method
  }
}


const c1 = new Counter(); //Counter.count ++
const c2 = new Counter(); //Counter.count ++ -> final will be static count = 2

console.log(c1.getCount()); // Will print the value of instact that is 10 
console.log(Counter.getStaticCount()); // Print the 2 value as this will point to the Counter Class itlself and will print 2
// console.log(c1.getStaticCount());  Will be a Type error.  
console.log(c1.getStaticCount);  // will return undefine as static methods are not part of the object


// Instance members → use this, live on each object
// Static members → use ClassName or this (in static), shared
// this in constructor / instance method → instance
// this in static method → class
// this.constructor.count++ → safest way to update static from instance
// Instance ❌ static access | Class ❌ instance access