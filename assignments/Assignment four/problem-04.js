/*
Problem 4 — Global vs. Local Scope
// this points to the current scope of the function and look only iside the current scope -> it print undfined if there isn't available satatus variable
*/

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus()); // Output: Online
