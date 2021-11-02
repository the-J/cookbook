import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuthContext } from "../context/auth/auth.context";
import { authUser } from "../auth/authUser";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state, initializeUser } = useAuthContext();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const setUser = async () => {
    await initializeUser();
    const isAuth = await authUser();
    setIsLoggedIn(isAuth);
  };

  useEffect(() => {
    setUser();
  }, []);

  useEffect(() => {
    if (state.user) setIsLoggedIn(true);
  }, [state.user]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/log-in" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
