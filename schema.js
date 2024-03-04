import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type User {
    id:ID!
    email: String!
  }

  type Query {
    me: User
  }

  schema {
    query: Query
  }
`;
