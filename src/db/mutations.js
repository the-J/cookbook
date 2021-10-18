import * as mutations from "../graphql/mutations";
import { API } from "aws-amplify";
import { nanoid } from "nanoid";
import Auth from "@aws-amplify/auth";

export const createNewStock = async (newStock) => {
  const user = await Auth.currentAuthenticatedUser();
  const newInput = {
    id: nanoid(),
    creatorID: user.username,
    createdAt: new Date(),
    description: "description" + Math.random(),
    ...newStock,
  };

  console.log({ newInput });
  try {
    const newStockCreated = await API.graphql({
      query: mutations.createStock,
      variables: {
        input: newInput,
      },
    });

    console.log({ newStockCreated });

    return newStockCreated;
  } catch (err) {
    console.log("newStockCreated", { err });
    throw new err();
  }
};
