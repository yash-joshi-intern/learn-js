// ### Exercise 3: setTimeout with Clear
// **Task:** Create a countdown timer that counts from 10 to 0, then stops.


// TODO: Implement countdown function
function countdown(start) {
    let timeoutId;
    let i = start;

    function run(){
        console.log(i);
        if(i-- > 0) timeoutId = setTimeout(run,1000);
        else clearTimeout(timeoutId);
    }
    run()
}

countdown(5);
/*
another method to implement

function countdown(start) {
 for(let i = start ; i > 0 ; i--){
    setTimeout(() => {
        console.log(i)
    }, 1000*Math.abs(start-i+1));
 }
}

outoput :
5
4
3
2
1
0
*/