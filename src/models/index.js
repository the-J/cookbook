// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Ingredientcategory = {
  "WARZYWO": "WARZYWO",
  "NABIAL": "NABIAL",
  "OWOC": "OWOC",
  "PRZYPRAWA": "PRZYPRAWA",
  "MIESO": "MIESO"
};

const Ingredientscale = {
  "KG": "KG",
  "G": "G",
  "ML": "ML",
  "SZTUK": "SZTUK"
};

const { Recipe, Ingredient, PrepStep } = initSchema(schema);

export {
  Recipe,
  Ingredient,
  PrepStep,
  Ingredientcategory,
  Ingredientscale
};