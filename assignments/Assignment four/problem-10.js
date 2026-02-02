/*
Problem 10 — Catch and Continue
// catch are use to handle reject functionalities which occured during the process of promises. it returns the error message/promise message writen inside the function and after .then is chained expression to print further
*/

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

// Output : Fail
//          Recovered
