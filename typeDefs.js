export const typeDefs = `


  type User{
    id: ID!
    username: String!
    email: String!
    phone: String!
    birthDate: String!
    todos: [Todo]
  }

  type Todo{
    id: ID!
    userId: ID!
    todo: String!
    completed: Boolean!
    user: User
  }

  type Query {
    users: [User]
    todos: [Todo]
  }

  type Mutation {
    addTodo(userId: ID!, todo: String!, completed: Boolean! ): Todo!
  }
`;
