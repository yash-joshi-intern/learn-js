/*
Problem 17 — The "Finally" Gotcha
// Here finally avoid the return value --> in case of error or rejected promise it returns override thing. the return "modified?" will be ignored. 
// "Done" value is presereved here. --> after that it will be printed.
*/

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?"; // ignored
    })
    .then(res => console.log(res));

// Output :
// Cleanup
// Done
