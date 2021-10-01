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
      ingredientIDs
      creatorID
      createdAt
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
      ingredientIDs
      creatorID
      createdAt
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
      ingredientIDs
      creatorID
      createdAt
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
      steps {
        items {
          id
          time
          difficulty
          ingredientIDs
          creatorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      steps {
        items {
          id
          time
          difficulty
          ingredientIDs
          creatorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      steps {
        items {
          id
          time
          difficulty
          ingredientIDs
          creatorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      ingredientIDs {
        items {
          id
          time
          difficulty
          ingredientIDs
          creatorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      ingredientIDs {
        items {
          id
          time
          difficulty
          ingredientIDs
          creatorID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      ingredientIDs {
        items {
          id
          time
          difficulty
          ingredientIDs
          creatorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
