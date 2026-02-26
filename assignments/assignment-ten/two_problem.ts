// Assignment 2
// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .

type FirstArgument<T extends (...args: any[]) => any >= Parameters<T>[0]

function updateUser ( id : number , name : string ){
  return { isFinished : true}
}

type FirstType = FirstArgument<typeof updateUser>