/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      time
      difficulty
      creatorID
      createdAt
      ingredientIDs
      ingredients {
        items {
          id
          name
          category
          scale
          createdAt
          updatedAt
        }
        nextToken
      }
      steps {
        items {
          id
          entryNumber
          description
          time
          recipeID
          ingredientIDs
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      time
      difficulty
      creatorID
      createdAt
      ingredientIDs
      ingredients {
        items {
          id
          name
          category
          scale
          createdAt
          updatedAt
        }
        nextToken
      }
      steps {
        items {
          id
          entryNumber
          description
          time
          recipeID
          ingredientIDs
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      time
      difficulty
      creatorID
      createdAt
      ingredientIDs
      ingredients {
        items {
          id
          name
          category
          scale
          createdAt
          updatedAt
        }
        nextToken
      }
      steps {
        items {
          id
          entryNumber
          description
          time
          recipeID
          ingredientIDs
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const createPrepStep = /* GraphQL */ `
  mutation CreatePrepStep(
    $input: CreatePrepStepInput!
    $condition: ModelPrepStepConditionInput
  ) {
    createPrepStep(input: $input, condition: $condition) {
      id
      entryNumber
      description
      time
      recipeID
      ingredientIDs
      createdAt
      updatedAt
    }
  }
`;
export const updatePrepStep = /* GraphQL */ `
  mutation UpdatePrepStep(
    $input: UpdatePrepStepInput!
    $condition: ModelPrepStepConditionInput
  ) {
    updatePrepStep(input: $input, condition: $condition) {
      id
      entryNumber
      description
      time
      recipeID
      ingredientIDs
      createdAt
      updatedAt
    }
  }
`;
export const deletePrepStep = /* GraphQL */ `
  mutation DeletePrepStep(
    $input: DeletePrepStepInput!
    $condition: ModelPrepStepConditionInput
  ) {
    deletePrepStep(input: $input, condition: $condition) {
      id
      entryNumber
      description
      time
      recipeID
      ingredientIDs
      createdAt
      updatedAt
    }
  }
`;
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      name
      category
      scale
      createdAt
      updatedAt
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      name
      category
      scale
      createdAt
      updatedAt
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      name
      category
      scale
      createdAt
      updatedAt
    }
  }
`;
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
      updatedAt
    }
  }
`;
