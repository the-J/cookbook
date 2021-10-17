import React, { useEffect, useState } from "react";
import { recipesList } from "../../db/queries";
import { LayoutMain } from "../../layouts";
import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import { useError } from "../../context/error.context";

const RecipesView = () => {
  const { addError } = useError();

  const [recipesListState, setRecipesList] = useState({});
  const fetchRecipesList = async () => {
    return await recipesList();
  };

  useEffect(() => {
    let data;
    const fetchData = async () => {
      data = await API.graphql({
        query: queries.listRecipes,
        variables: { limit: 10 },
      });
    };
    fetchData()
      .then((data) => console.log("2", { data }))
      .catch((err) => {
        console.log(err);
        addError(err);
      });
    console.log({ data });
    // const newRecipesListState = fetchRecipesList();
    // console.log({ newRecipesListState });
    // setRecipesList(newRecipesListState);
  }, []);

  return (
    <LayoutMain>
      <div className="container block">
        <div className="columns">
          <div className="column is-6 is-offset-2">
            <input
              name="todo"
              className="input is-warning is-large"
              type="text"
              value={"blogName"}
              placeholder="Add TODO"
            />
          </div>
          <div className="column is-2 is-flex is-justify-content-center">
            <button type="submit" className="button is-large is-warning">
              Add przepis
            </button>
          </div>
        </div>
      </div>
      <h2>Recipes</h2>
      <p>{JSON.stringify(recipesListState)}</p>
    </LayoutMain>
  );
};

export default RecipesView;
