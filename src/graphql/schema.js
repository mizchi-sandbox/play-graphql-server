/* @flow */
const typeDefinitions = `
type Shop {
  id: ID!
  name: String!
}

input ShopInput {
  name: String!
}

type Mutation {
  addShop(shop: ShopInput): Shop
}

type Query {
  shops: [Shop]!
  lastShop: Shop
}
`;
module.exports = [typeDefinitions]
