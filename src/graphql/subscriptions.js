/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreatePrepStep = /* GraphQL */ `
  subscription OnCreatePrepStep {
    onCreatePrepStep {
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
export const onUpdatePrepStep = /* GraphQL */ `
  subscription OnUpdatePrepStep {
    onUpdatePrepStep {
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
export const onDeletePrepStep = /* GraphQL */ `
  subscription OnDeletePrepStep {
    onDeletePrepStep {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
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
