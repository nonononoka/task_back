import { gql } from "apollo-server-express";
export const typeDefs = gql`
  scalar DateTime
  type User {
    id: ID!
    email: String!
    registeredTasks: [Task!]!
  }

  type Task {
    id: ID!
    postedBy: String!
    name: String!
    limitDate: DateTime
  }

  type Query {
    me: User
    allRegisteredTasks: [Task!]!
  }

  input AddTaskInput{
    name: String!
    limitDate: DateTime
  }

  type Mutation {
    registerTask(input: AddTaskInput!): Task!
    removeAllTasks: Int
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
