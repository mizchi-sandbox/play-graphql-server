/* @flow */
import type { Actor, Savedata, Resolvers } from "./types"

// mock data
const actor1: Actor = {
  id: '1',
  name: "Mars",
  lv: 1,
  exp: 0,
  job: "NOVICE"
}

const actor2: Actor = {
  id: '2',
  name: "Jagan",
  lv: 11,
  exp: 0,
  job: "WARRIOR"
}

const savedata1: Savedata = {
  id: '1',
  playerName: "mizchi",
  partyMembers: [actor1]
}

const actorList: Actor[] = [actor1, actor2]

const savedataList: Savedata[]= [savedata1]

const resolvers: Resolvers = {
  Mutation: {
    addPartyMember(obj, args, context, info) {
      const {input} = args
      const savedata = savedataList.find(i => i.id == input.partyId)
      const targetActor = actorList.find(i => i.id == input.actorId)

      if (targetActor && savedata) {
        savedata.partyMembers.push(targetActor)
        return {error: false}
      } else {
        return {error: true}
      }
    }
  },
  Query: {
    getSavedata(obj, args, context, info) {
      return savedataList.find(i => i.id == args.id);
    },
    getActor(obj, args, context, info) {
      console.log("getActor, id", args)
      return actorList.find(i => i.id == args.id);
    }
  }
}
module.exports = resolvers;
