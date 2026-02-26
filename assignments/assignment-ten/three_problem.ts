// Assignment 3
// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string

function format (id : number) : string;

function format (id : Date) : string;

function format ( param : number | Date) {
    if( typeof param === "number") {
        return (typeof param).toString()
    }
    return (typeof param).toString()
}


//Practice : 

function getUserData(ids: string[]): string[];

function getUserData  (id: string[]): string[]{
    return id
}

