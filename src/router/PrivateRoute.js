import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuthContext } from "../context/auth/auth.context";

const PrivateRoute = ({ children, path }) => {
  const { state, initializeUser } = useAuthContext();

  const getUser = async () => {
    await initializeUser();
  };

  useEffect(() => {
    if (!state.user) {
      getUser();
    }
  }, []);

  return (
    <Route path={path} exact>
      {state.user ? children : <Redirect to={{ pathname: "/log-in" }} />}
    </Route>
  );
};

export default PrivateRoute;
