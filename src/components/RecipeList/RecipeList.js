import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Recipe } from "components/index";

const RecipeList = ({ recipes }) => {
  const sortPosts = (a, b) => a.updatedAt < b.updatedAt;
  const [sortedRecipes, setSortRecipes] = useState(recipes.sort(sortPosts));

  useEffect(() => {
    setSortRecipes(recipes.sort(sortPosts));
  }, [recipes]);

  if (!sortedRecipes.length) return null;

  return sortedRecipes.map((recipe) => (
    <Recipe key={recipe.id} recipe={recipe} />
  ));
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
