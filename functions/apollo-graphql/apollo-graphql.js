require("dotenv").config()
const faunadb = require("faunadb")
const { ApolloServer, gql } = require("apollo-server-lambda")

const q = faunadb.query

const client = new faunadb.Client({ secret: process.env.FAUNA })

const typeDefs = gql`
  type Query {
    hello: String
    getThemesByUser(user_id: String!): [User!]
    user(id: Int!): User
    userByName(author: String!): User
  }
  type User {
    user_id: String!
    theme_author: String!
    theme_name: String!
    theme_description: String!
    theme_style: String!
    theme_is_private: String!
  }
`

const users = [
  {
    user_id: "123",
    theme_author: "Boop",
    theme_name: "Theme name ",
    theme_description: "Theme description",
    theme_style: "light",
    theme_is_private: "false",
  },
  {
    user_id: "123",
    theme_author: "Boop",
    theme_name: "Theme name",
    theme_description: "Theme description",
    theme_style: "dark",
    theme_is_private: "true",
  },
  {
    user_id: "789",
    theme_author: "Paul",
    theme_name: "Theme name",
    theme_description: "Theme description",
    theme_style: "light",
    theme_is_private: "false",
  },
]

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!"
    },
    // getAllUsers: (root, args, context) => {
    //   return users
    // },
    getThemesByUser: async (root, args, context) => {
      if (!args.user_id) {
        return []
      } else {
        const results = await client.query(
          q.Paginate(q.Match(q.Index("get-themes-by-user"), args.user_id))
        )
        return results.data.map(
          ([
            ref,
            user_id,
            theme_author,
            theme_name,
            theme_description,
            theme_style,
            theme_is_private,
          ]) => ({
            id: ref.id,
            user_id,
            theme_author,
            theme_name,
            theme_description,
            theme_style,
            theme_is_private,
          })
        )
      }

      // console.log("//// results.data: ", results.data)
      // return results
    },
    user: (root, args, context) => {
      return
    },
    userByName: (root, args, context) => {
      console.log("hi hi hi", args.theme_author)
      return users.find(x => x.theme_author === args.theme_author) || "NOTFOUND"
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
