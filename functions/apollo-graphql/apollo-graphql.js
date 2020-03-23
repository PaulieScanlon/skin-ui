require("dotenv").config()
const faunadb = require("faunadb")
const { ApolloServer, gql } = require("apollo-server-lambda")

const q = faunadb.query

const client = new faunadb.Client({ secret: process.env.FAUNA })

const typeDefs = gql`
  type Query {
    getThemesByUser(user_id: String!): [User!]
    getThemeById(theme_id: String!): ThemeObject
  }

  type Mutation {
    updateThemeById(
      theme_id: String!
      theme_name: String!
      theme_description: String!
      theme_style: String!
      theme_object: String!
    ): ThemeObject
  }

  type ThemeObject {
    ref: String
    user_id: String!
    theme_author: String!
    theme_name: String!
    theme_description: String!
    theme_style: String!
    theme_is_private: Boolean!
    theme_object: String
  }

  type User {
    ref: String!
    user_id: String!
    theme_author: String!
    theme_name: String!
    theme_description: String!
    theme_style: String!
    theme_is_private: Boolean!
    theme_object: String
  }
`

const resolvers = {
  Query: {
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
            theme_object,
          ]) => ({
            ref: ref.id,
            user_id,
            theme_author,
            theme_name,
            theme_description,
            theme_style,
            theme_is_private,
            theme_object,
          })
        )
      }
    },

    getThemeById: async (root, args, context) => {
      if (!args.theme_id) {
        return []
      } else {
        const results = await client.query(
          q.Get(q.Ref(q.Collection("skin-ui-themes"), args.theme_id))
        )

        const { theme_object } = results.data

        return {
          ref: results.ref.id,
          ...results.data,
          theme_object: JSON.stringify(theme_object),
        }
      }
    },
  },
  Mutation: {
    updateThemeById: async (root, args, context) => {
      // console.log("root: ", root)
      console.log("args: ", args)
      // console.log("context: ", context)

      const results = await client.query(
        q.Update(q.Ref(q.Collection("skin-ui-themes"), args.theme_id), {
          data: {
            theme_name: args.theme_name,
            theme_description: args.theme_description,
            theme_style: args.theme_style,
            theme_object: args.theme_object,
          },
        })
      )
      const { theme_object } = results.data

      return {
        ref: results.ref.id,
        ...results.data,
        theme_object: theme_object,
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
