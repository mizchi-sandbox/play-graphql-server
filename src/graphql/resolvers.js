/* @flow */
import type { Shop, ShopInput, Resolvers } from "./types"

const shopList: Shop[]= [
  {id: 1, name: "foo"},
  {id: 2, name: "bar"}
]

const resolvers: Resolvers = {
  Mutation: {
    addShop(obj, args, context, info) {
      const newShop = {id: ~~(Math.random() * 1000), ...args.input}
      shopList.push(newShop);
      return newShop
    }
  },
  Query: {
    shops() {
      return shopList
    },

    lastShop() {
      return shopList[shopList.length - 1]
    },

    findShopByName(obj, args, context, info) {
      return shopList.find(i => i.name === args.shopName);
    }
  }
};
module.exports = resolvers;
