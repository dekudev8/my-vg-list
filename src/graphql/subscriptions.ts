/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePresentedGame = /* GraphQL */ `
  subscription OnCreatePresentedGame {
    onCreatePresentedGame {
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
export const onUpdatePresentedGame = /* GraphQL */ `
  subscription OnUpdatePresentedGame {
    onUpdatePresentedGame {
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
export const onDeletePresentedGame = /* GraphQL */ `
  subscription OnDeletePresentedGame {
    onDeletePresentedGame {
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
export const onCreateRawGame = /* GraphQL */ `
  subscription OnCreateRawGame {
    onCreateRawGame {
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
export const onUpdateRawGame = /* GraphQL */ `
  subscription OnUpdateRawGame {
    onUpdateRawGame {
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
export const onDeleteRawGame = /* GraphQL */ `
  subscription OnDeleteRawGame {
    onDeleteRawGame {
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
export const onCreateRawGameData = /* GraphQL */ `
  subscription OnCreateRawGameData {
    onCreateRawGameData {
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
export const onUpdateRawGameData = /* GraphQL */ `
  subscription OnUpdateRawGameData {
    onUpdateRawGameData {
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
export const onDeleteRawGameData = /* GraphQL */ `
  subscription OnDeleteRawGameData {
    onDeleteRawGameData {
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
export const onCreateUserCollection = /* GraphQL */ `
  subscription OnCreateUserCollection {
    onCreateUserCollection {
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
export const onUpdateUserCollection = /* GraphQL */ `
  subscription OnUpdateUserCollection {
    onUpdateUserCollection {
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
export const onDeleteUserCollection = /* GraphQL */ `
  subscription OnDeleteUserCollection {
    onDeleteUserCollection {
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
export const onCreateUserGame = /* GraphQL */ `
  subscription OnCreateUserGame {
    onCreateUserGame {
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
export const onUpdateUserGame = /* GraphQL */ `
  subscription OnUpdateUserGame {
    onUpdateUserGame {
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
export const onDeleteUserGame = /* GraphQL */ `
  subscription OnDeleteUserGame {
    onDeleteUserGame {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
