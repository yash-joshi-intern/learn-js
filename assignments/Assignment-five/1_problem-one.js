// ## Task 1: Predict Output of Async Code
// ### Objective
// Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.


// ### Requirements
// 1. Predict the output order for each code block
// 2. Run the code and compare with your prediction
// 3. Explain the execution order based on the event loop


// ### Code Block 1: Basic Async
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4");

/**
Your Prediction (order):

1
4
3
2

Actual Output:

1
4
3
2

Explanation:
Program start with printing 1, then setTimeout will be handover to the webAPI and Promises will be sent to webAPI as well. 
Durint the execution of both the call stack handle the another operation and print 4. 
after that Promise will execute because of the priority so 3 and then last the setTimeout and prints 2
*/
