/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection {
    onCreateCollection {
      id
      collectionName
      userID
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
  }
`;
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection {
    onUpdateCollection {
      id
      collectionName
      userID
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
  }
`;
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection {
    onDeleteCollection {
      id
      collectionName
      userID
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
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      title
      operatingConsole
      collectionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      title
      operatingConsole
      collectionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      title
      operatingConsole
      collectionID
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
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      realName
      userName
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
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      realName
      userName
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
  }
`;
