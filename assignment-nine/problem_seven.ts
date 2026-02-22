// Assignment 7
// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// Apply both to User and test different scenarios

//SIMPLE STEPS to follow any "SELECTED" operation for custom type 
// Step 1: Omit<T, K> → remove selected keys
// Step 2: Pick<T, K> → extract selected keys
// Step 3: Partial<> → make them optional
// Step 4: Combine using &

type User = {
  id: string
  name: string
  email: string | null
  role: "ADMIN" | "CUSTOMER"
  isActive?: boolean | null
}

type  readByKe <T, K extends keyof T> = Omit< T , K > & { readonly [KEY in K] : T[KEY] }

const readOneByKey : readByKe<User, "id"> = {
  id: "1",
  name: "Yash",
  email: null,
  role: "ADMIN"
}

// readOneByKey.id = "2" 
readOneByKey.name = "New"

type nonNullable <T> = {
  [K in keyof T]: NonNullable<T[K]>
}

const nonNullOne : nonNullable<User> = {
  id: "1",
  name: "Yash",
  email : "nullCan't be Null",
  // email: null,
  role: "ADMIN",
  isActive: true
}