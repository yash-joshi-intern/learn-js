// ### Objective
// Complete and understand various setTimeout scenarios.
// ### Exercise 1: Basic setTimeout


// **Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.


function eachCount(number){
    setTimeout(() => {
        console.log(number)
    }, 1000*number);
}

function countWithDelay() {
 for( let i = 0 ; i < 5 ; i++){
    eachCount(i+1)
 }
}

countWithDelay();

// // **Expected Output:**
// 1
// 2
// 3
// 4
// 5