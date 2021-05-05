import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Collection {
  readonly id: string;
  readonly Games?: Game[];
  readonly collectionName?: string;
  readonly userID?: string;
  constructor(init: ModelInit<Collection>);
  static copyOf(source: Collection, mutator: (draft: MutableModel<Collection>) => MutableModel<Collection> | void): Collection;
}

export declare class Game {
  readonly id: string;
  readonly title?: string;
  readonly operatingConsole?: string;
  readonly collectionID?: string;
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

export declare class User {
  readonly id: string;
  readonly realName?: string;
  readonly Collections?: (Collection | null)[];
  readonly userName?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}