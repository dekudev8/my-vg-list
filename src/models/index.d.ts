import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class PresentedGame {
  readonly id: string;
  readonly internalId?: string;
  readonly title?: string;
  constructor(init: ModelInit<PresentedGame>);
  static copyOf(source: PresentedGame, mutator: (draft: MutableModel<PresentedGame>) => MutableModel<PresentedGame> | void): PresentedGame;
}

export declare class RawGame {
  readonly id: string;
  readonly internalId?: string;
  readonly sourceId?: string;
  readonly title?: string;
  constructor(init: ModelInit<RawGame>);
  static copyOf(source: RawGame, mutator: (draft: MutableModel<RawGame>) => MutableModel<RawGame> | void): RawGame;
}

export declare class RawGameData {
  readonly id: string;
  readonly sourceId?: string;
  readonly title?: string;
  constructor(init: ModelInit<RawGameData>);
  static copyOf(source: RawGameData, mutator: (draft: MutableModel<RawGameData>) => MutableModel<RawGameData> | void): RawGameData;
}

export declare class UserCollection {
  readonly id: string;
  readonly Games?: UserGame[];
  readonly userID?: string;
  readonly displayName?: string;
  constructor(init: ModelInit<UserCollection>);
  static copyOf(source: UserCollection, mutator: (draft: MutableModel<UserCollection>) => MutableModel<UserCollection> | void): UserCollection;
}

export declare class UserGame {
  readonly id: string;
  readonly internalId?: string;
  readonly collectionID?: string;
  readonly title?: string;
  constructor(init: ModelInit<UserGame>);
  static copyOf(source: UserGame, mutator: (draft: MutableModel<UserGame>) => MutableModel<UserGame> | void): UserGame;
}

export declare class User {
  readonly id: string;
  readonly realName?: string;
  readonly Collections?: (UserCollection | null)[];
  readonly userName?: string;
  readonly email?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}