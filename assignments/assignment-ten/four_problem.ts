// Assignment 4
// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .

type user = {
    id : number , name : string
}

abstract class Service<T> {
    abstract execute() : T
}

class UserService extends Service<user>{
    execute(): user {
        return {
            id : 2, name : "yash"
        }
    }
}