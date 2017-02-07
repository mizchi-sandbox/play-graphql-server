/* @flow */
export type Shop = {
  id: number,
  name: string
};

export type ShopInput = {
  name: string
};

export type Resolvers = {
  Mutation: {
    addShop(obj: any, args: {input: ShopInput}, contex: any, info: any): Shop;
  },
  Query: {
    shops(): Shop[],
    lastShop(): ?Shop,
    findShopByName(obj: any, args: {shopName: string}, contex: any, info: any): ?Shop
  }
};
