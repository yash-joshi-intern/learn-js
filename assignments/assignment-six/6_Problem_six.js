//  Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
// Call them in sequence using nested callbacks.
// Log "All steps finished" only after step3 completes.

function step1(callOne){
    setTimeout(()=>{
        console.log("one finish")
        callOne()
    },1000)
}


function step2(callTwo){
    setTimeout(()=>{
        console.log("two finish")
        callTwo()
    },1000)
}


function step3(callThree){
    setTimeout(()=>{
        console.log("three finish")
        callThree()
    },1000)
}

// function finishCallBack(){
//     console.log("All Steps Are Finished!")
// }

// step1(finishCallBack)

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All Steps Are finished!") //callbackhell
        })
    })
})