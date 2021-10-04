import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Ingredientcategory {
  WARZYWO = "WARZYWO",
  NABIAL = "NABIAL",
  OWOC = "OWOC",
  PRZYPRAWA = "PRZYPRAWA",
  MIESO = "MIESO"
}

export enum Ingredientscale {
  KG = "KG",
  G = "G",
  ML = "ML",
  SZTUK = "SZTUK"
}



type RecipeMetaData = {
  readOnlyFields: 'updatedAt';
}

type IngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PrepStepMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Recipe {
  readonly id: string;
  readonly time?: string;
  readonly difficulty?: number;
  readonly creatorID: string;
  readonly createdAt: string;
  readonly ingredientIDs?: (string | null)[];
  readonly ingredients?: (Ingredient | null)[];
  readonly steps?: (PrepStep | null)[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<Recipe, RecipeMetaData>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe, RecipeMetaData>) => MutableModel<Recipe, RecipeMetaData> | void): Recipe;
}

export declare class Ingredient {
  readonly id: string;
  readonly name: string;
  readonly category?: (Ingredientcategory | null)[] | keyof typeof Ingredientcategory;
  readonly scale?: (Ingredientscale | null)[] | keyof typeof Ingredientscale;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Ingredient, IngredientMetaData>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient, IngredientMetaData>) => MutableModel<Ingredient, IngredientMetaData> | void): Ingredient;
}

export declare class PrepStep {
  readonly id: string;
  readonly entryNumber?: number;
  readonly description?: string;
  readonly time?: string;
  readonly recipeID: string;
  readonly ingredientIDs?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PrepStep, PrepStepMetaData>);
  static copyOf(source: PrepStep, mutator: (draft: MutableModel<PrepStep, PrepStepMetaData>) => MutableModel<PrepStep, PrepStepMetaData> | void): PrepStep;
}