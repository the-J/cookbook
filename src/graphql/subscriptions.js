/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
      id
      name
      category
      scale
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStock = /* GraphQL */ `
  subscription OnCreateStock {
    onCreateStock {
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
export const onUpdateStock = /* GraphQL */ `
  subscription OnUpdateStock {
    onUpdateStock {
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
export const onDeleteStock = /* GraphQL */ `
  subscription OnDeleteStock {
    onDeleteStock {
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
