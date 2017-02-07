/* @flow */
const {graphqlExpress} = require("graphql-server-express")
const bodyParser = require("body-parser")
const {makeExecutableSchema} = require("graphql-tools")
const express = require('express')

const typeDefs = require("./graphql/type-defs")
// const mocks = require("./graphql/mocks")
const resolvers = require("./graphql/resolvers")

const server = express()
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: makeExecutableSchema({typeDefs, resolvers})
}))
server.listen(3333, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3333')
})
