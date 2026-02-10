// ### Code Block 2: Nested Async
console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");



/**
Your Prediction (order):

start
end
promise 2
promise 1
timout 1
timeout 2

Actual Output:

Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2

Explanation:
First start and end will print during that time setTimeout entire block will be in macro Queue and Promise will in priority queue
event loop will call the Promise first so "Promise 2" will print after that the second setTimeOut() function will be given to webapi again
then first setTimout will exexute after it get new Promis so will have the higher priority so "Promise 1" and then Timeout2

Explain the execution order
*/
