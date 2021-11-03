const { gql } = require("apollo-server");

const type = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = TAIWAN
  }
  input UpdateUsername {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updatedUsername(input: UpdateUsername!): User
    deleteUser(id: ID!): User
  }

  enum Nationality {
    TAIWAN
    AMERICAN
  }
`;

module.exports = type;
