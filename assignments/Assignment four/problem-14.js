/*
Problem 14 — The "Callback" Context Trap
// reason : inside the normal satatement fucntion this point to the global object in web browseres we have to defined score outside the player. or we can use the arrow function as it will have it's own score and lexical environment so will have the score value
*/

const player = {
    score: 50,
    updateScore() {
        setTimeout(() => {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore(); // prints undefined 
