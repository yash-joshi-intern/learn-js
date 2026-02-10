// 9) Create a function wait(ms) that returns a Promise and resolves after ms milliseconds using setTimeout.
// Use it to log "2 seconds passed" after 2000 ms.

function wait(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve()
            console.log("Printed")  
        },ms)
    })
}

wait(3000).then(()=>{console.log("3000ms Passed")})