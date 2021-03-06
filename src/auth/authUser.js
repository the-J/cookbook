import Auth from "@aws-amplify/auth";

export const authUser = async () => {
  try {
    const curSession = await Auth.currentSession();
    return curSession ? curSession.isValid() : false;
  } catch (error) {
    return false;
  }
};

export const signUp = async (name, email, password) => {
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email, // optional
        // other custom attributes
        name,
      },
    });

    return user;
  } catch (error) {
    throw error.message;
  }
};

const confirmSignUp = async (username, code) => {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
};

export const logIn = async (username, password) => {
  try {
    const user = await Auth.signIn(username, password);
    console.log({ user });
    return user;
  } catch (error) {
    console.log("error signing in", error);
    throw error.message;
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

export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
    throw Error(error.message);
  }
};
