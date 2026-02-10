

// ### Code Block 3: Multiple Microtasks


console.log("A");


Promise.resolve().then(() =>{
 console.log("B");
  Promise.resolve().then(() => {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(() => {
 console.log("E");
});


setTimeout(() => {
 console.log("F");
}, 0);


console.log("G");

/**

Your Prediction (order):

a
g
b d e c f

Actual Output:

A
G
B
D
E
C
F

Explanation:

Explain the execution order
first will print through call stack --> A
then Both promise into MicroTaskQueue --> Promise B, Promise E
SetTimeout in the MacroTaskQueue --> F
Meawhile exexutes the callStack --> Prints --> G
Promise one executes -> Prints B --> Remaining goes to Call Stack ---> Current callStack --> Promise E, Promise C (Meanwhile Prints D)
Promise E --> Prints --> Then C Prints 
The SetTimeOut becuase no MicroTasks --> prints F

*/
