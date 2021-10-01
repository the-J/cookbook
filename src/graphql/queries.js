/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($creatorID: ID!, $createdAt: String!) {
    getRecipe(creatorID: $creatorID, createdAt: $createdAt) {
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
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $creatorID: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRecipes(
      creatorID: $creatorID
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const getPrepStep = /* GraphQL */ `
  query GetPrepStep($id: ID!) {
    getPrepStep(id: $id) {
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
export const listPrepSteps = /* GraphQL */ `
  query ListPrepSteps(
    $filter: ModelPrepStepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrepSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        entryNumber
        description
        time
        recipeID
        ingredientIDs
        steps {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
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
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        scale
        ingredientIDs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const recipeByCreatorID = /* GraphQL */ `
  query RecipeByCreatorID(
    $creatorID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeByCreatorID(
      creatorID: $creatorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const stepByRecipeID = /* GraphQL */ `
  query StepByRecipeID(
    $recipeID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPrepStepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stepByRecipeID(
      recipeID: $recipeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        entryNumber
        description
        time
        recipeID
        ingredientIDs
        steps {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ingredientByCategory = /* GraphQL */ `
  query IngredientByCategory(
    $category: INGREDIENTCATEGORY
    $sortDirection: ModelSortDirection
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ingredientByCategory(
      category: $category
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        category
        scale
        ingredientIDs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
