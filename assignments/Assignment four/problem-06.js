/*
Problem 6 — The "Lost" Context
//will print undefined. becuase the print() has context of the function but not the variable name. so correct solution would be the const print = user.printName() then console.log(print)
*/

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print(); // prints undefined (lost context)

// Correct usage examples:
// user.printName();
// const bound = user.printName.bind(user); bound();
