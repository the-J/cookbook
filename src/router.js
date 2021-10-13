import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { HomeView, SignInView, SignUpView } from "views";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route path="/sign-in">
        <SignInView />
      </Route>
      <Route path="/sign-up">
        <SignUpView />
      </Route>
    </Router>
  );
};

export default AppRouter;
