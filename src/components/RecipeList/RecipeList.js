import React from "react";
import PropTypes from "prop-types";
import { Recipe } from "../index";

const RecipeList = ({ recipes }) => {
  if (!recipes.length) return null;

  return (
    <ul>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
