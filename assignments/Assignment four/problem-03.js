/*
Problem 3 — The Broken Chain
// In this case the Promise throws the error becuase the promise has the Reject behaviour and it has been printed through on .catch block
*/

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

// Output : Error Occurred
