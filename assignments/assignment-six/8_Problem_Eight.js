// 8) Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result.


function promiseResolve(number){
    
    return new Promise((resolve, reject) => {
      
        if(number == 5){
            console.log("Promise Resolve")
            resolve("5")
        }else{
            reject("Rejected")
        }
    })
}

promiseResolve(4)
    .then(result => {
        return result*2
    })
    .then(result =>{
        return result+20
    })
    .then(result => {
        console.log(result)
    }).catch(err => console.log(err))