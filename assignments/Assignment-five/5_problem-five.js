// ### Code Block 5: Async/Await

console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");

/*
**Your Prediction (order):**
Start
Async 1
End
Async 2
Promise 1
Timeout

**Actual Output:**
Start
Async 1
End
Async 2
Promise 1
Timeout


// **Explanation:**
first will print "start" from call stack after that the asyncFuntion will execute and will print Async 1 
then the remaining part of that function will go to the microtaskQueue then setTimeout will goes to the macroTaskQueue. 
meanwhile the "End" will be printed in console. then the microTaskQueue Promise will be exuted -> So will print Async 2 
then promise microtask queue then Promise 1 will be printed then MacroTaskQueue setTimout function prints "Timeout"

*/