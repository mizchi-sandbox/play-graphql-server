/* @flow */
export type ID = string;
type QueryFunction<T, U> = (obj: any, args: T, context: any, info: any) => U;

export type Job =
    "NOVICE"
  | "WARRIOR"
  | "MAGE"
  | "ROGUE"
  ;

export type Actor = {
  id: string,
  name: string,
  lv: number,
  exp: number,
  job: Job
};

export type Savedata = {
  id: string,
  playerName: string,
  partyMembers: Actor[]
};

export type AddingPartyMemberInput = {
  partyId: string,
  actorId: string
};

export type Resolvers = {
  Mutation: {
    addPartyMember: QueryFunction<{input: AddingPartyMemberInput}, {error: boolean}>
  },
  Query: {
    getSavedata: QueryFunction<{id: string}, ?Savedata>,
    getActor: QueryFunction<{id: string}, ?Actor>
  }
};
