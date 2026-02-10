// ### Code Block 4: Complex Async Chain


console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");



/**
Your Prediction (order):

1
7
3
4
5
2
6

Actual Output:

1
7
3
4
5
2
6

Explanation:
first 1 will print from call stack, then setTimeout will goes to the macrotask queue, 
queueMicroTask will be pushed to the micro task then promise will pushed into microtask as well behind the queueMicrotask. 
and the second setTimeout will be pushed behind the first Timeout. then all micro task will executed so -> 3 4 5
(at this time the second queueMicrostask will be pushed to the microtask queue aswell) then macrotask ->2,6
*/
