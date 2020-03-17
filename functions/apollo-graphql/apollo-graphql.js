const { ApolloServer, gql } = require("apollo-server-lambda")

const typeDefs = gql`
  type Query {
    hello: String
    allUsers: [User!]
    user(id: Int!): User
    userByName(name: String!): User
  }
  type User {
    id: ID!
    full_name: String!
    email: String!
  }
`

const users = [
  { id: 1, full_name: "Terry Pratchett", email: "terry@gmail.com" },
  { id: 2, full_name: "Stephen King", email: "stephen@gmail.com" },
  { id: 3, full_name: "JK Rowling", email: "j@gmail.com" },
]

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!"
    },
    allUsers: (root, args, context) => {
      return users
    },
    user: (root, args, context) => {
      return
    },
    userByName: (root, args, context) => {
      console.log("hi hi hi", args.full_name)
      return users.find(x => x.full_name === args.full_name) || "NOTFOUND"
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

exports.handler = server.createHandler()
