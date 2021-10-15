import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { HomeView, LogInView, SignUpView } from "views";
import { useAuthContext } from "./context/auth/auth.context";

const PrivateRoute = ({ children, path }) => {
  const { state } = useAuthContext();

  return (
    <Route path={path} exact>
      {state.user ? children : <Redirect to={{ pathname: "/log-in" }} />}
    </Route>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <PrivateRoute path="/">
        <HomeView />
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
