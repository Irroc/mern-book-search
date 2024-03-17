const typeDefs = `
  type bookSchema {
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks:[bookSchema]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    users: [User]
    user(email: String): User
    me: User
  }

  type Mutation {
    AddUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook( bookId: String!, authors: [String], description: String!, image: String, link: String, title: String!, ): Auth
    removeBook( bookId: String! ): Auth
  }
`;

module.exports = typeDefs;
