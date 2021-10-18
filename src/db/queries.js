import { API } from "aws-amplify";
import * as queries from "../graphql/queries";

export const recipesList = async () => {
  try {
    const data = await API.graphql({
      query: queries.listRecipes,
      authMode: "AWS_IAM",
    });
    console.log({ data });
    return data;
  } catch (error) {
    console.log("recipesList", { error });
    throw error.message;
  }
};

export const fetchAllStock = async () => {
  try {
    const data = await API.graphql({ query: queries.listStocks });
    return data?.data?.listStocks?.items;
  } catch (error) {
    // @TODO handle this errors
    console.log("fetchAllStock", { error }, error.errors[0].message);
    throw error.message;
  }
};
