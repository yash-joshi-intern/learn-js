/*
Problem 20 — Object Method Assigned to Class
//this print the current object's personal value. setting up this.anyVariable = value points to the class variable.
*/

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p(); // Output: Sarah
