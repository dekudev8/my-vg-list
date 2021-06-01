/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPresentedGame = /* GraphQL */ `
  mutation CreatePresentedGame(
    $input: CreatePresentedGameInput!
    $condition: ModelPresentedGameConditionInput
  ) {
    createPresentedGame(input: $input, condition: $condition) {
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
export const updatePresentedGame = /* GraphQL */ `
  mutation UpdatePresentedGame(
    $input: UpdatePresentedGameInput!
    $condition: ModelPresentedGameConditionInput
  ) {
    updatePresentedGame(input: $input, condition: $condition) {
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
export const deletePresentedGame = /* GraphQL */ `
  mutation DeletePresentedGame(
    $input: DeletePresentedGameInput!
    $condition: ModelPresentedGameConditionInput
  ) {
    deletePresentedGame(input: $input, condition: $condition) {
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
export const createRawGame = /* GraphQL */ `
  mutation CreateRawGame(
    $input: CreateRawGameInput!
    $condition: ModelRawGameConditionInput
  ) {
    createRawGame(input: $input, condition: $condition) {
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
export const updateRawGame = /* GraphQL */ `
  mutation UpdateRawGame(
    $input: UpdateRawGameInput!
    $condition: ModelRawGameConditionInput
  ) {
    updateRawGame(input: $input, condition: $condition) {
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
export const deleteRawGame = /* GraphQL */ `
  mutation DeleteRawGame(
    $input: DeleteRawGameInput!
    $condition: ModelRawGameConditionInput
  ) {
    deleteRawGame(input: $input, condition: $condition) {
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
export const createRawGameData = /* GraphQL */ `
  mutation CreateRawGameData(
    $input: CreateRawGameDataInput!
    $condition: ModelRawGameDataConditionInput
  ) {
    createRawGameData(input: $input, condition: $condition) {
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
export const updateRawGameData = /* GraphQL */ `
  mutation UpdateRawGameData(
    $input: UpdateRawGameDataInput!
    $condition: ModelRawGameDataConditionInput
  ) {
    updateRawGameData(input: $input, condition: $condition) {
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
export const deleteRawGameData = /* GraphQL */ `
  mutation DeleteRawGameData(
    $input: DeleteRawGameDataInput!
    $condition: ModelRawGameDataConditionInput
  ) {
    deleteRawGameData(input: $input, condition: $condition) {
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
export const createUserCollection = /* GraphQL */ `
  mutation CreateUserCollection(
    $input: CreateUserCollectionInput!
    $condition: ModelUserCollectionConditionInput
  ) {
    createUserCollection(input: $input, condition: $condition) {
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
export const updateUserCollection = /* GraphQL */ `
  mutation UpdateUserCollection(
    $input: UpdateUserCollectionInput!
    $condition: ModelUserCollectionConditionInput
  ) {
    updateUserCollection(input: $input, condition: $condition) {
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
export const deleteUserCollection = /* GraphQL */ `
  mutation DeleteUserCollection(
    $input: DeleteUserCollectionInput!
    $condition: ModelUserCollectionConditionInput
  ) {
    deleteUserCollection(input: $input, condition: $condition) {
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
export const createUserGame = /* GraphQL */ `
  mutation CreateUserGame(
    $input: CreateUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    createUserGame(input: $input, condition: $condition) {
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
export const updateUserGame = /* GraphQL */ `
  mutation UpdateUserGame(
    $input: UpdateUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    updateUserGame(input: $input, condition: $condition) {
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
export const deleteUserGame = /* GraphQL */ `
  mutation DeleteUserGame(
    $input: DeleteUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    deleteUserGame(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
