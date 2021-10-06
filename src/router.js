import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { TempView, SignInView, SignUpView } from "views";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign in</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign up </Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Route exact path="/">
          <div>
            <TempView />
          </div>
        </Route>
        <Route path="/dashboard">
          <div>Dashboard</div>
        </Route>
        <Route path="/sign-in">
          <SignInView />
        </Route>
        <Route path="/sign-up">
          <SignUpView />
        </Route>
      </div>
    </Router>
  );
};

export default AppRouter;
