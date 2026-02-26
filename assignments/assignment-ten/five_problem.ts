// Assignment 5
// Create a constructor type for UserRepository .
// Create a callable type that formats User name.

type users = {
  id: string
  name: string
  email: string
}

class UserRepository {
  constructor(private connectionString: string) {}

  findById(id: string): users | null {
    return null
  }
}

type UserRepositoryConstructor = new (connectionString: string) => UserRepository

type FormatUserName = (user: users) => string