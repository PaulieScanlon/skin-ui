require("dotenv").config()
const faunadb = require("faunadb")
const q = faunadb.query

const client = new faunadb.Client({ secret: process.env.FAUNA })

async function run() {
  // get theme by id
  // const results = await client.query(
  //   q.Get(q.Ref(q.Collection("skin-ui-themes"), "260230131177488898"))
  // )

  // get all public themes
  // the false string relates to the theme_is_private data value
  // const results = await client.query(
  //   q.Paginate(q.Match(q.Index("get-all-public-themes"), "false"))
  // )

  // get light / dark themes
  //   const results = await client.query(
  //     q.Paginate(q.Match(q.Index("get-themes-by-style"), "dark"))
  //   )

  // get themes by user
  // const results = await client.query(
  //   q.Paginate(
  //     q.Match(
  //       q.Index("get-themes-by-user"),
  //       "dbbe4b2e-0cc3-41ce-aa81-84d63bb07727"
  //     )
  //   )
  // )

  // update a value for a given id
  const results = await client.query(
    q.Update(q.Ref(q.Collection("skin-ui-themes"), "260230901859877387"), {
      data: { theme_name: "Pauls test theme 1" },
    })
  )

  //   create a new theme / user
  // const results = await client.query(
  //   q.Create(q.Collection("skin-ui-themes"), {
  //     data: {
  //       user_id: "789",
  //       theme_author: "Paul",
  //       theme_name: "Pauls third theme",
  //       theme_description: "This is the description for Pauls third theme",
  //       theme_style: "Dark",
  //       theme_is_private: false,
  //     },
  //   })
  // )
  // console.log("results: ", results)
  //   console.log("results.ref: ", results.data)
}

run()

// console.log("hello from index.js")
// console.log(process.env.FAUNA)
