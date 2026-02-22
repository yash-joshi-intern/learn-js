// Assignment : 4
// Create a constant adminUser .
// Create a type from it using typeof .
// Add a new property and observe how the type changes automatically

const defaultUser = {
  id : 0, name : "yash" , age : 20 , email : "yash@gmail.com" , isActive : true
}

type defaultType = typeof defaultUser
/**
 * type defaultType = {
    id: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean;
}
*/

enum ROLE {
  ADMIN, USER, GUEST
}

const adminUser = {
  id : 1 , name : "adminbhai", role : ROLE.ADMIN , access : ["orders" , "users", "sellers"] , isActive : true
}

type constTypeAdmin = typeof adminUser //getting type using typeof -> can be use in other function directly this type.

/*
type constTypeAdmin = {
    id: number;
    role: ROLE;
    access: string[];
    isActive: boolean;
}
*/

//changed now -> added name field


/*
type constTypeAdmin = {
    id: number;
    name: string;
    role: ROLE;
    access: string[];
    isActive: boolean;
*/

function usingType ( user : constTypeAdmin) : constTypeAdmin{
  return user;
}

const tempUsers = {
  id : 1 , name : "adminbhai", role : ROLE.ADMIN , access : ["orders" , "users", "sellers"] , isActive : true , idd: 3
}

//Here we are able to add the exta field use : satisfies constTypeAdmin; then it will shows the pop up

const tempUsersTwo = {
  id : 1 , name : "adminbhai", role : ROLE.ADMIN , access : ["orders" , "users", "sellers"] , isActive : true
} satisfies constTypeAdmin;

console.log(usingType(tempUsersTwo))