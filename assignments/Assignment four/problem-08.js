/*
Problem 8 — Arrow Function Pitfall
// in arrow functions it's recommanded to not use this keywork as it points to insider scope only within funciton defination 
*/

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle(); // OUTPUT : undefined
