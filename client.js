/* @flow */
import "isomorphic-fetch"
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import gql from 'graphql-tag'

const client = new ApolloClient({
  ssrMode: true,
  headers: null,
  dataIdFromObject: result => result.id || null,
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3333/graphql'
  })
})

async function main () {
  await client.mutate({mutation: gql`
  mutation {
    addShop(input: { name: "baz" }) {id}
  }
  `})

  const foo = await client.query({query: gql`
  query {
    findShopByName(shopName: "foo") {id, name}
  }
  `})
  console.log(foo);

  // const ret = await client.query({query: gql`
  // query {
  //   shops {
  //     id
  //     name
  //   }
  // }
  // `})
  // console.log(ret.data);
}

main()

// client.query({query: gql`
// query {
//   shops {
//     id,
//     name
//   }
// }
// `})
// .then(ret => {
//   console.log(ret.data);
// })
