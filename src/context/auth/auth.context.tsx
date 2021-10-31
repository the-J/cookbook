/* eslint-disable camelcase */
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import Auth, { CognitoUser } from "@aws-amplify/auth";
import type { UpdatableUserAttributes, User } from "./auth.reducer";
import {
  authReducer,
  AuthReducerAction,
  AuthState,
  initialState,
} from "./auth.reducer";
import {
  IDENTITY_LOCALSTORAGE_KEY,
  JWT_LOCALSTORAGE_KEY,
  USER_LOCALSTORAGE_KEY,
} from "../../constants";

type AuthContextValue = [AuthState, React.Dispatch<AuthReducerAction>];

const AuthContext = createContext<AuthContextValue | null>(null);

const AuthProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = useMemo(() => [state, dispatch], [state]) as AuthContextValue;

  return <AuthContext.Provider value={value} {...props} />;
};

export type CognitoUserAttributes = {
  name: string;
  email: string;
  picture?: string;
  "custom:isAdmin"?: boolean;
};

function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  const [state, dispatch] = context;

  const setIdentityIdInLocalStorage = useCallback(async () => {
    const credentials = await Auth.currentCredentials();
    localStorage.setItem(IDENTITY_LOCALSTORAGE_KEY, credentials.identityId);
  }, []);

  const setTokenInLocalStorage = useCallback((cognitoUser: CognitoUser) => {
    localStorage.setItem(
      JWT_LOCALSTORAGE_KEY,
      cognitoUser.getSignInUserSession()?.getIdToken().getJwtToken() || ""
    );
  }, []);

  const setUserInLocalStorage = (user: User) =>
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify({ user: user }));

  const getUserFromLocalStorage = useMemo(():
    | (User &
        CognitoUser & {
          attributes: CognitoUserAttributes;
          username: String;
        })
    | undefined => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    return user ? JSON.parse(user) : undefined;
  }, []);

  const deleteLocalStorageData = () => {
    localStorage.removeItem(IDENTITY_LOCALSTORAGE_KEY);
    localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  };

  const logOutUser = () => {
    deleteLocalStorageData();
    dispatch({ type: "LOGOUT_SUCCESS" });
  };

  const getCurrentUser = useCallback(async () => {
    try {
      return (await Auth.currentAuthenticatedUser()) as CognitoUser & {
        attributes: CognitoUserAttributes;
        username: String;
      };
    } catch (error: any) {
      throw error.message;
    }
  }, []);

  // @TODO main got... I'll need to clean types for user and cognito user cause this is a mess
  const initializeUser = useCallback(async () => {
    try {
      const localUser = getUserFromLocalStorage;

      if (!localUser) {
        const cognitoUser = await getCurrentUser();
        setTokenInLocalStorage(cognitoUser);
        setUserInLocalStorage({
          id: cognitoUser.username,
          email: cognitoUser.attributes.email,
          name: cognitoUser.attributes.name,
        });
        await setIdentityIdInLocalStorage();
        const { attributes } = cognitoUser;

        dispatch({
          type: "LOGIN_SUCCESS",
          userConfig: cognitoUser,
          user: {
            id: cognitoUser.username,
            name: attributes.name,
            email: attributes.email,
            isAdmin: attributes["custom:isAdmin"],
          },
        });
      } else {
        dispatch({
          type: "LOGIN_SUCCESS",
          userConfig: undefined,
          user: {
            id: localUser.id,
            name: localUser.name,
            email: localUser.email,
          },
        });
      }
    } catch (e) {
      console.log({ e });
      if (e instanceof Error) {
        dispatch({ type: "LOGIN_FAILURE", error: e });
      } else {
        dispatch({ type: "LOGIN_FAILURE", error: undefined });
      }

      localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
    }
  }, [
    dispatch,
    getCurrentUser,
    setIdentityIdInLocalStorage,
    setTokenInLocalStorage,
  ]);

  const updateUserAttributes = useCallback(
    (attributesToUpdate: UpdatableUserAttributes) => {
      dispatch({
        type: "UPDATE_USER",
        updatedUserAttributes: attributesToUpdate,
      });
    },
    [dispatch]
  );

  return {
    state,
    dispatch,
    initializeUser,
    updateUserAttributes,
    logOutUser,
  };
}

export { AuthProvider, useAuthContext };
