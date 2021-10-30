/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStock = /* GraphQL */ `
  subscription OnCreateStock {
    onCreateStock {
      id
      name
      quantity
      creatorID
      createdAt
      description
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateStock = /* GraphQL */ `
  subscription OnUpdateStock {
    onUpdateStock {
      id
      name
      quantity
      creatorID
      createdAt
      description
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteStock = /* GraphQL */ `
  subscription OnDeleteStock {
    onDeleteStock {
      id
      name
      quantity
      creatorID
      createdAt
      description
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
      id
      name
      file {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
      id
      name
      file {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
      id
      name
      file {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
