import { useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { USER_LOCALSTORAGE_KEY } from "../constants";
import { logIn } from "../auth/authUser";
import { useAuthContext } from "../context/auth/auth.context";
import { useNotif } from "../context/notif/notifications.context";

export const useLogIn = (username, password) => {
  const { initializeUser } = useAuthContext();
  let history = useHistory();
  const { pushNotif } = useNotif();

  let user = useRef(null);
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/recipes" } };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "null";
    return JSON.parse(user);
  };

  const getUserOrLogIn = async () => {
    const localStorageUser = getUserFromLocalStorage();
    console.log({ localStorageUser });
    if (!localStorageUser) {
      user.current = await logIn(username, password);
    }

    console.log("user.current", user.current);
  };

  useEffect(() => {
    getUserOrLogIn()
      .then(async () => {
        await initializeUser();
        // history.replace(from);
      })
      .catch((err) => pushNotif(err, "AWS err"));
  }, []);

  return user;
};
