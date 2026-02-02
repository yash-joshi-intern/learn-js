/*
Problem 12 — Explicit Binding (Call/Apply)
//Here call -- > immediately invoke the function and agent will point pass as this funciton. So, this === agent. so this.id will be agent.id so prints the 101 and null here will print the undefined
*/

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);   // 101
showId.apply(null);   // undefined
