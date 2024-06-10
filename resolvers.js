import { users } from "./users.js";
import { todos } from "./todos.js";
// console.log(users);

export const resolvers = {
  Todo: {
    user: (parent, args, context, info) => {
      return users.find((todo) => todo.id === parent.userId);
    },
  },
  User: {
    todos: (parent, args, context, info) => {
      return todos.filter((todo) => todo.userId === parent.id);
    },
  },
  Query: {
    users: () => {
      return users;
    },
    todos: () => {
      return todos;
    },
  },
  Mutation: {
    addTodo: (parent, args, context, info) => {
      console.log(args);
      const newTodos = { ...args, id: todos.length + 1 };
      todos.push(newTodos);
      return newTodos;
    },
  },
};
