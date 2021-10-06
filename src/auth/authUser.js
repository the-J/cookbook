import Auth from "@aws-amplify/auth";

export const authUser = async () => {
  try {
    return await Auth.currentSession().isValid();
  } catch (error) {
    return false;
  }
};

export const signUp = async (username, password) => {
  console.log(username, password);
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email: "email@email.com", // optional
        phone_number: "123123123", // optional - E.164 number convention
        // other custom attributes
        "custom:favorite_flavor": "Cookie Dough", // custom attribute, not standard
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
};

const confirmSignUp = async (username, code) => {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
};

const signIn = async (username, password) => {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log("error signing in", error);
  }
};

const resendConfirmationCode = async (username) => {
  try {
    await Auth.resendSignUp(username);
    console.log("code resent successfully");
  } catch (err) {
    console.log("error resending code: ", err);
  }
};

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
};
