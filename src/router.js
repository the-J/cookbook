import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { PantryView, HomeView, LogInView, SignUpView } from "views";
import { useAuthContext } from "./context/auth/auth.context";

const PrivateRoute = ({ children, path }) => {
  const { state, initializeUser } = useAuthContext();
  const [user, setUser] = useState(null);
  const [ifUser, setIfUser] = useState(false);

  const getUser = async () => {
    await initializeUser();
  };

  useEffect(() => {
    if (!state.user) {
      getUser();
    }
  }, []);

  // @TODO propbably need to handle case when no user better
  useEffect(() => {
    if (state.user) {
      setUser(state.user);
      setIfUser(true);
    }
  }, [state.user]);

  return ifUser ? (
    <Route path={path} exact>
      {user ? children : <Redirect to={{ pathname: "/log-in" }} />}
    </Route>
  ) : null;
};

const AppRouter = () => {
  return (
    <Router>
      <PrivateRoute path="/">
        <HomeView />
      </PrivateRoute>
      <PrivateRoute path="/pantry">
        <PantryView />
      </PrivateRoute>

      <Route exact path="/log-in">
        <LogInView />
      </Route>
      <Route exact path="/sign-up">
        <SignUpView />
      </Route>
    </Router>
  );
};

export default AppRouter;
