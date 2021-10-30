/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStock = /* GraphQL */ `
  mutation CreateStock(
    $input: CreateStockInput!
    $condition: ModelStockConditionInput
  ) {
    createStock(input: $input, condition: $condition) {
      id
      name
      quantity
      creatorID
      createdAt
      description
      imgName
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const updateStock = /* GraphQL */ `
  mutation UpdateStock(
    $input: UpdateStockInput!
    $condition: ModelStockConditionInput
  ) {
    updateStock(input: $input, condition: $condition) {
      id
      name
      quantity
      creatorID
      createdAt
      description
      imgName
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const deleteStock = /* GraphQL */ `
  mutation DeleteStock(
    $input: DeleteStockInput!
    $condition: ModelStockConditionInput
  ) {
    deleteStock(input: $input, condition: $condition) {
      id
      name
      quantity
      creatorID
      createdAt
      description
      imgName
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
