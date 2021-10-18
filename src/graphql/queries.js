/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
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
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        difficulty
        creatorID
        createdAt
        ingredientIDs
        ingredients {
          nextToken
        }
        steps {
          nextToken
        }
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStock = /* GraphQL */ `
  query GetStock($id: ID!) {
    getStock(id: $id) {
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
export const listStocks = /* GraphQL */ `
  query ListStocks(
    $filter: ModelStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        creatorID
        createdAt
        description
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
        creatorID
        createdAt
        ingredientIDs
        ingredients {
          nextToken
        }
        steps {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const recipeByIngredientIDs = /* GraphQL */ `
  query RecipeByIngredientIDs(
    $ingredientIDs: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeByIngredientIDs(
      ingredientIDs: $ingredientIDs
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        time
        difficulty
        creatorID
        createdAt
        ingredientIDs
        ingredients {
          nextToken
        }
        steps {
          nextToken
        }
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const stockByCreatorID = /* GraphQL */ `
  query StockByCreatorID(
    $creatorID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stockByCreatorID(
      creatorID: $creatorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        quantity
        creatorID
        createdAt
        description
        updatedAt
      }
      nextToken
    }
  }
`;
