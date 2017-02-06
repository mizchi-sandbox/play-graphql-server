/* @flow */
import "isomorphic-fetch"
import ApolloClient, { createNetworkInterface } from 'apollo-client'
const client = new ApolloClient({
  ssrMode: true,
  headers: null,
  dataIdFromObject: result => result.id || null,
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3333/graphql'
  })
})

const gql = require('graphql-tag')
const MyQuery = gql`
query {
  shops {
    id,
    name
  }
}
`
client.query({query: MyQuery})
.then(ret => {
  console.log(ret);
});
