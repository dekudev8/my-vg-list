/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePresentedGameInput = {
  id?: string | null,
  internalId?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type ModelPresentedGameConditionInput = {
  internalId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPresentedGameConditionInput | null > | null,
  or?: Array< ModelPresentedGameConditionInput | null > | null,
  not?: ModelPresentedGameConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type PresentedGame = {
  __typename: "PresentedGame",
  id: string,
  internalId?: string | null,
  title?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePresentedGameInput = {
  id: string,
  internalId?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type DeletePresentedGameInput = {
  id: string,
  _version?: number | null,
};

export type CreateRawGameInput = {
  id?: string | null,
  internalId?: string | null,
  sourceId?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type ModelRawGameConditionInput = {
  internalId?: ModelStringInput | null,
  sourceId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelRawGameConditionInput | null > | null,
  or?: Array< ModelRawGameConditionInput | null > | null,
  not?: ModelRawGameConditionInput | null,
};

export type RawGame = {
  __typename: "RawGame",
  id: string,
  internalId?: string | null,
  sourceId?: string | null,
  title?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRawGameInput = {
  id: string,
  internalId?: string | null,
  sourceId?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type DeleteRawGameInput = {
  id: string,
  _version?: number | null,
};

export type CreateRawGameDataInput = {
  id?: string | null,
  sourceId?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type ModelRawGameDataConditionInput = {
  sourceId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelRawGameDataConditionInput | null > | null,
  or?: Array< ModelRawGameDataConditionInput | null > | null,
  not?: ModelRawGameDataConditionInput | null,
};

export type RawGameData = {
  __typename: "RawGameData",
  id: string,
  sourceId?: string | null,
  title?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRawGameDataInput = {
  id: string,
  sourceId?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type DeleteRawGameDataInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserCollectionInput = {
  id?: string | null,
  userID?: string | null,
  displayName?: string | null,
  _version?: number | null,
};

export type ModelUserCollectionConditionInput = {
  userID?: ModelIDInput | null,
  displayName?: ModelStringInput | null,
  and?: Array< ModelUserCollectionConditionInput | null > | null,
  or?: Array< ModelUserCollectionConditionInput | null > | null,
  not?: ModelUserCollectionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UserCollection = {
  __typename: "UserCollection",
  id: string,
  userID?: string | null,
  displayName?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Games?: ModelUserGameConnection | null,
};

export type ModelUserGameConnection = {
  __typename: "ModelUserGameConnection",
  items?:  Array<UserGame | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserGame = {
  __typename: "UserGame",
  id: string,
  internalId?: string | null,
  collectionID?: string | null,
  title?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserCollectionInput = {
  id: string,
  userID?: string | null,
  displayName?: string | null,
  _version?: number | null,
};

export type DeleteUserCollectionInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserGameInput = {
  id?: string | null,
  internalId?: string | null,
  collectionID?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type ModelUserGameConditionInput = {
  internalId?: ModelStringInput | null,
  collectionID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelUserGameConditionInput | null > | null,
  or?: Array< ModelUserGameConditionInput | null > | null,
  not?: ModelUserGameConditionInput | null,
};

export type UpdateUserGameInput = {
  id: string,
  internalId?: string | null,
  collectionID?: string | null,
  title?: string | null,
  _version?: number | null,
};

export type DeleteUserGameInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  realName?: string | null,
  userName?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  realName?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  realName?: string | null,
  userName?: string | null,
  email?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Collections?: ModelUserCollectionConnection | null,
};

export type ModelUserCollectionConnection = {
  __typename: "ModelUserCollectionConnection",
  items?:  Array<UserCollection | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  realName?: string | null,
  userName?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelPresentedGameFilterInput = {
  id?: ModelIDInput | null,
  internalId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPresentedGameFilterInput | null > | null,
  or?: Array< ModelPresentedGameFilterInput | null > | null,
  not?: ModelPresentedGameFilterInput | null,
};

export type ModelPresentedGameConnection = {
  __typename: "ModelPresentedGameConnection",
  items?:  Array<PresentedGame | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRawGameFilterInput = {
  id?: ModelIDInput | null,
  internalId?: ModelStringInput | null,
  sourceId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelRawGameFilterInput | null > | null,
  or?: Array< ModelRawGameFilterInput | null > | null,
  not?: ModelRawGameFilterInput | null,
};

export type ModelRawGameConnection = {
  __typename: "ModelRawGameConnection",
  items?:  Array<RawGame | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRawGameDataFilterInput = {
  id?: ModelIDInput | null,
  sourceId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelRawGameDataFilterInput | null > | null,
  or?: Array< ModelRawGameDataFilterInput | null > | null,
  not?: ModelRawGameDataFilterInput | null,
};

export type ModelRawGameDataConnection = {
  __typename: "ModelRawGameDataConnection",
  items?:  Array<RawGameData | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserCollectionFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  displayName?: ModelStringInput | null,
  and?: Array< ModelUserCollectionFilterInput | null > | null,
  or?: Array< ModelUserCollectionFilterInput | null > | null,
  not?: ModelUserCollectionFilterInput | null,
};

export type ModelUserGameFilterInput = {
  id?: ModelIDInput | null,
  internalId?: ModelStringInput | null,
  collectionID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelUserGameFilterInput | null > | null,
  or?: Array< ModelUserGameFilterInput | null > | null,
  not?: ModelUserGameFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  realName?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreatePresentedGameMutationVariables = {
  input: CreatePresentedGameInput,
  condition?: ModelPresentedGameConditionInput | null,
};

export type CreatePresentedGameMutation = {
  createPresentedGame?:  {
    __typename: "PresentedGame",
    id: string,
    internalId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePresentedGameMutationVariables = {
  input: UpdatePresentedGameInput,
  condition?: ModelPresentedGameConditionInput | null,
};

export type UpdatePresentedGameMutation = {
  updatePresentedGame?:  {
    __typename: "PresentedGame",
    id: string,
    internalId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePresentedGameMutationVariables = {
  input: DeletePresentedGameInput,
  condition?: ModelPresentedGameConditionInput | null,
};

export type DeletePresentedGameMutation = {
  deletePresentedGame?:  {
    __typename: "PresentedGame",
    id: string,
    internalId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRawGameMutationVariables = {
  input: CreateRawGameInput,
  condition?: ModelRawGameConditionInput | null,
};

export type CreateRawGameMutation = {
  createRawGame?:  {
    __typename: "RawGame",
    id: string,
    internalId?: string | null,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRawGameMutationVariables = {
  input: UpdateRawGameInput,
  condition?: ModelRawGameConditionInput | null,
};

export type UpdateRawGameMutation = {
  updateRawGame?:  {
    __typename: "RawGame",
    id: string,
    internalId?: string | null,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRawGameMutationVariables = {
  input: DeleteRawGameInput,
  condition?: ModelRawGameConditionInput | null,
};

export type DeleteRawGameMutation = {
  deleteRawGame?:  {
    __typename: "RawGame",
    id: string,
    internalId?: string | null,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRawGameDataMutationVariables = {
  input: CreateRawGameDataInput,
  condition?: ModelRawGameDataConditionInput | null,
};

export type CreateRawGameDataMutation = {
  createRawGameData?:  {
    __typename: "RawGameData",
    id: string,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRawGameDataMutationVariables = {
  input: UpdateRawGameDataInput,
  condition?: ModelRawGameDataConditionInput | null,
};

export type UpdateRawGameDataMutation = {
  updateRawGameData?:  {
    __typename: "RawGameData",
    id: string,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRawGameDataMutationVariables = {
  input: DeleteRawGameDataInput,
  condition?: ModelRawGameDataConditionInput | null,
};

export type DeleteRawGameDataMutation = {
  deleteRawGameData?:  {
    __typename: "RawGameData",
    id: string,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserCollectionMutationVariables = {
  input: CreateUserCollectionInput,
  condition?: ModelUserCollectionConditionInput | null,
};

export type CreateUserCollectionMutation = {
  createUserCollection?:  {
    __typename: "UserCollection",
    id: string,
    userID?: string | null,
    displayName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Games?:  {
      __typename: "ModelUserGameConnection",
      items?:  Array< {
        __typename: "UserGame",
        id: string,
        internalId?: string | null,
        collectionID?: string | null,
        title?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateUserCollectionMutationVariables = {
  input: UpdateUserCollectionInput,
  condition?: ModelUserCollectionConditionInput | null,
};

export type UpdateUserCollectionMutation = {
  updateUserCollection?:  {
    __typename: "UserCollection",
    id: string,
    userID?: string | null,
    displayName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Games?:  {
      __typename: "ModelUserGameConnection",
      items?:  Array< {
        __typename: "UserGame",
        id: string,
        internalId?: string | null,
        collectionID?: string | null,
        title?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteUserCollectionMutationVariables = {
  input: DeleteUserCollectionInput,
  condition?: ModelUserCollectionConditionInput | null,
};

export type DeleteUserCollectionMutation = {
  deleteUserCollection?:  {
    __typename: "UserCollection",
    id: string,
    userID?: string | null,
    displayName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Games?:  {
      __typename: "ModelUserGameConnection",
      items?:  Array< {
        __typename: "UserGame",
        id: string,
        internalId?: string | null,
        collectionID?: string | null,
        title?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateUserGameMutationVariables = {
  input: CreateUserGameInput,
  condition?: ModelUserGameConditionInput | null,
};

export type CreateUserGameMutation = {
  createUserGame?:  {
    __typename: "UserGame",
    id: string,
    internalId?: string | null,
    collectionID?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserGameMutationVariables = {
  input: UpdateUserGameInput,
  condition?: ModelUserGameConditionInput | null,
};

export type UpdateUserGameMutation = {
  updateUserGame?:  {
    __typename: "UserGame",
    id: string,
    internalId?: string | null,
    collectionID?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserGameMutationVariables = {
  input: DeleteUserGameInput,
  condition?: ModelUserGameConditionInput | null,
};

export type DeleteUserGameMutation = {
  deleteUserGame?:  {
    __typename: "UserGame",
    id: string,
    internalId?: string | null,
    collectionID?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    realName?: string | null,
    userName?: string | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Collections?:  {
      __typename: "ModelUserCollectionConnection",
      items?:  Array< {
        __typename: "UserCollection",
        id: string,
        userID?: string | null,
        displayName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    realName?: string | null,
    userName?: string | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Collections?:  {
      __typename: "ModelUserCollectionConnection",
      items?:  Array< {
        __typename: "UserCollection",
        id: string,
        userID?: string | null,
        displayName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    realName?: string | null,
    userName?: string | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Collections?:  {
      __typename: "ModelUserCollectionConnection",
      items?:  Array< {
        __typename: "UserCollection",
        id: string,
        userID?: string | null,
        displayName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type GetPresentedGameQueryVariables = {
  id: string,
};

export type GetPresentedGameQuery = {
  getPresentedGame?:  {
    __typename: "PresentedGame",
    id: string,
    internalId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPresentedGamesQueryVariables = {
  filter?: ModelPresentedGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPresentedGamesQuery = {
  listPresentedGames?:  {
    __typename: "ModelPresentedGameConnection",
    items?:  Array< {
      __typename: "PresentedGame",
      id: string,
      internalId?: string | null,
      title?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPresentedGamesQueryVariables = {
  filter?: ModelPresentedGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPresentedGamesQuery = {
  syncPresentedGames?:  {
    __typename: "ModelPresentedGameConnection",
    items?:  Array< {
      __typename: "PresentedGame",
      id: string,
      internalId?: string | null,
      title?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRawGameQueryVariables = {
  id: string,
};

export type GetRawGameQuery = {
  getRawGame?:  {
    __typename: "RawGame",
    id: string,
    internalId?: string | null,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRawGamesQueryVariables = {
  filter?: ModelRawGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRawGamesQuery = {
  listRawGames?:  {
    __typename: "ModelRawGameConnection",
    items?:  Array< {
      __typename: "RawGame",
      id: string,
      internalId?: string | null,
      sourceId?: string | null,
      title?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRawGamesQueryVariables = {
  filter?: ModelRawGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRawGamesQuery = {
  syncRawGames?:  {
    __typename: "ModelRawGameConnection",
    items?:  Array< {
      __typename: "RawGame",
      id: string,
      internalId?: string | null,
      sourceId?: string | null,
      title?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRawGameDataQueryVariables = {
  id: string,
};

export type GetRawGameDataQuery = {
  getRawGameData?:  {
    __typename: "RawGameData",
    id: string,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRawGameDatasQueryVariables = {
  filter?: ModelRawGameDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRawGameDatasQuery = {
  listRawGameDatas?:  {
    __typename: "ModelRawGameDataConnection",
    items?:  Array< {
      __typename: "RawGameData",
      id: string,
      sourceId?: string | null,
      title?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRawGameDataQueryVariables = {
  filter?: ModelRawGameDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRawGameDataQuery = {
  syncRawGameData?:  {
    __typename: "ModelRawGameDataConnection",
    items?:  Array< {
      __typename: "RawGameData",
      id: string,
      sourceId?: string | null,
      title?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserCollectionQueryVariables = {
  id: string,
};

export type GetUserCollectionQuery = {
  getUserCollection?:  {
    __typename: "UserCollection",
    id: string,
    userID?: string | null,
    displayName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Games?:  {
      __typename: "ModelUserGameConnection",
      items?:  Array< {
        __typename: "UserGame",
        id: string,
        internalId?: string | null,
        collectionID?: string | null,
        title?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListUserCollectionsQueryVariables = {
  filter?: ModelUserCollectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserCollectionsQuery = {
  listUserCollections?:  {
    __typename: "ModelUserCollectionConnection",
    items?:  Array< {
      __typename: "UserCollection",
      id: string,
      userID?: string | null,
      displayName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Games?:  {
        __typename: "ModelUserGameConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserCollectionsQueryVariables = {
  filter?: ModelUserCollectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserCollectionsQuery = {
  syncUserCollections?:  {
    __typename: "ModelUserCollectionConnection",
    items?:  Array< {
      __typename: "UserCollection",
      id: string,
      userID?: string | null,
      displayName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Games?:  {
        __typename: "ModelUserGameConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserGameQueryVariables = {
  id: string,
};

export type GetUserGameQuery = {
  getUserGame?:  {
    __typename: "UserGame",
    id: string,
    internalId?: string | null,
    collectionID?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserGamesQueryVariables = {
  filter?: ModelUserGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserGamesQuery = {
  listUserGames?:  {
    __typename: "ModelUserGameConnection",
    items?:  Array< {
      __typename: "UserGame",
      id: string,
      internalId?: string | null,
      collectionID?: string | null,
      title?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserGamesQueryVariables = {
  filter?: ModelUserGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserGamesQuery = {
  syncUserGames?:  {
    __typename: "ModelUserGameConnection",
    items?:  Array< {
      __typename: "UserGame",
      id: string,
      internalId?: string | null,
      collectionID?: string | null,
      title?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    realName?: string | null,
    userName?: string | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Collections?:  {
      __typename: "ModelUserCollectionConnection",
      items?:  Array< {
        __typename: "UserCollection",
        id: string,
        userID?: string | null,
        displayName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      realName?: string | null,
      userName?: string | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Collections?:  {
        __typename: "ModelUserCollectionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      realName?: string | null,
      userName?: string | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Collections?:  {
        __typename: "ModelUserCollectionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePresentedGameSubscription = {
  onCreatePresentedGame?:  {
    __typename: "PresentedGame",
    id: string,
    internalId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePresentedGameSubscription = {
  onUpdatePresentedGame?:  {
    __typename: "PresentedGame",
    id: string,
    internalId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePresentedGameSubscription = {
  onDeletePresentedGame?:  {
    __typename: "PresentedGame",
    id: string,
    internalId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRawGameSubscription = {
  onCreateRawGame?:  {
    __typename: "RawGame",
    id: string,
    internalId?: string | null,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRawGameSubscription = {
  onUpdateRawGame?:  {
    __typename: "RawGame",
    id: string,
    internalId?: string | null,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRawGameSubscription = {
  onDeleteRawGame?:  {
    __typename: "RawGame",
    id: string,
    internalId?: string | null,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRawGameDataSubscription = {
  onCreateRawGameData?:  {
    __typename: "RawGameData",
    id: string,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRawGameDataSubscription = {
  onUpdateRawGameData?:  {
    __typename: "RawGameData",
    id: string,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRawGameDataSubscription = {
  onDeleteRawGameData?:  {
    __typename: "RawGameData",
    id: string,
    sourceId?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserCollectionSubscription = {
  onCreateUserCollection?:  {
    __typename: "UserCollection",
    id: string,
    userID?: string | null,
    displayName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Games?:  {
      __typename: "ModelUserGameConnection",
      items?:  Array< {
        __typename: "UserGame",
        id: string,
        internalId?: string | null,
        collectionID?: string | null,
        title?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateUserCollectionSubscription = {
  onUpdateUserCollection?:  {
    __typename: "UserCollection",
    id: string,
    userID?: string | null,
    displayName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Games?:  {
      __typename: "ModelUserGameConnection",
      items?:  Array< {
        __typename: "UserGame",
        id: string,
        internalId?: string | null,
        collectionID?: string | null,
        title?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteUserCollectionSubscription = {
  onDeleteUserCollection?:  {
    __typename: "UserCollection",
    id: string,
    userID?: string | null,
    displayName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Games?:  {
      __typename: "ModelUserGameConnection",
      items?:  Array< {
        __typename: "UserGame",
        id: string,
        internalId?: string | null,
        collectionID?: string | null,
        title?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateUserGameSubscription = {
  onCreateUserGame?:  {
    __typename: "UserGame",
    id: string,
    internalId?: string | null,
    collectionID?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserGameSubscription = {
  onUpdateUserGame?:  {
    __typename: "UserGame",
    id: string,
    internalId?: string | null,
    collectionID?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserGameSubscription = {
  onDeleteUserGame?:  {
    __typename: "UserGame",
    id: string,
    internalId?: string | null,
    collectionID?: string | null,
    title?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    realName?: string | null,
    userName?: string | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Collections?:  {
      __typename: "ModelUserCollectionConnection",
      items?:  Array< {
        __typename: "UserCollection",
        id: string,
        userID?: string | null,
        displayName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    realName?: string | null,
    userName?: string | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Collections?:  {
      __typename: "ModelUserCollectionConnection",
      items?:  Array< {
        __typename: "UserCollection",
        id: string,
        userID?: string | null,
        displayName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    realName?: string | null,
    userName?: string | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Collections?:  {
      __typename: "ModelUserCollectionConnection",
      items?:  Array< {
        __typename: "UserCollection",
        id: string,
        userID?: string | null,
        displayName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};
