/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPresentedGame = /* GraphQL */ `
  query GetPresentedGame($id: ID!) {
    getPresentedGame(id: $id) {
      id
      internalId
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPresentedGames = /* GraphQL */ `
  query ListPresentedGames(
    $filter: ModelPresentedGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresentedGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        internalId
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPresentedGames = /* GraphQL */ `
  query SyncPresentedGames(
    $filter: ModelPresentedGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPresentedGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        internalId
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRawGame = /* GraphQL */ `
  query GetRawGame($id: ID!) {
    getRawGame(id: $id) {
      id
      internalId
      sourceId
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listRawGames = /* GraphQL */ `
  query ListRawGames(
    $filter: ModelRawGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRawGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        internalId
        sourceId
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRawGames = /* GraphQL */ `
  query SyncRawGames(
    $filter: ModelRawGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRawGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        internalId
        sourceId
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRawGameData = /* GraphQL */ `
  query GetRawGameData($id: ID!) {
    getRawGameData(id: $id) {
      id
      sourceId
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listRawGameDatas = /* GraphQL */ `
  query ListRawGameDatas(
    $filter: ModelRawGameDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRawGameDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sourceId
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRawGameData = /* GraphQL */ `
  query SyncRawGameData(
    $filter: ModelRawGameDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRawGameData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sourceId
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserCollection = /* GraphQL */ `
  query GetUserCollection($id: ID!) {
    getUserCollection(id: $id) {
      id
      userID
      displayName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Games {
        items {
          id
          internalId
          collectionID
          title
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listUserCollections = /* GraphQL */ `
  query ListUserCollections(
    $filter: ModelUserCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        displayName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserCollections = /* GraphQL */ `
  query SyncUserCollections(
    $filter: ModelUserCollectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        displayName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserGame = /* GraphQL */ `
  query GetUserGame($id: ID!) {
    getUserGame(id: $id) {
      id
      internalId
      collectionID
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUserGames = /* GraphQL */ `
  query ListUserGames(
    $filter: ModelUserGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        internalId
        collectionID
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserGames = /* GraphQL */ `
  query SyncUserGames(
    $filter: ModelUserGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        internalId
        collectionID
        title
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      realName
      userName
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Collections {
        items {
          id
          userID
          displayName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        realName
        userName
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Collections {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        realName
        userName
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Collections {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
