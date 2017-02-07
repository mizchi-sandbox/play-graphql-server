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
  const ret = await client.mutate({mutation: gql`
  mutation {
    addPartyMember(input: {partyId: "1", actorId: "2"}) {error}
  }
  `})
  console.log(ret)

  const {data} = await client.query({query: gql`
  query {
    getSavedata(id: "1") {
      id
      playerName
      partyMembers {
        name
      }
    }
  }
  `})
  console.log(data.getSavedata)
}

main()
