import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuthContext } from "../context/auth/auth.context";

const PrivateRoute = ({ children, path }) => {
  const { state, initializeUser } = useAuthContext();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    await initializeUser();
  };

  useEffect(() => {
    if (!state.user) {
      getUser();
    }
  }, []);

  useEffect(() => {
    if (state.user) {
      setUser(state.user);
    }
  }, [state.user]);

  // @TODO still don't like this mess
  // @TODO some info if fail or reload
  return user ? (
    <Route path={path} exact>
      {user ? children : <Redirect to={{ pathname: "/log-in" }} />}
    </Route>
  ) : null;
};

export default PrivateRoute;
