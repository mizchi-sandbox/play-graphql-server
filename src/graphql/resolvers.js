/* @flow */
type Shop = {
  id: number,
  name: string
};

type ShopInput = {
  name: string
};

const shopList: Shop[]= [
  {id: 1, name: "foo"},
  {id: 2, name: "bar"}
]

const resolvers = {
  Mutation: {
    addShop(shop: ShopInput): Shop {
      const newShop = {id: ~~(Math.random() * 1000), ...shop}
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
    }
  }
};
module.exports = resolvers;
