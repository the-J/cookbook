import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import routes from "./routes";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
  <Router>
    {Object.values(routes).map((route) => {
      // console.log(route, route.privateRoute);
      return route.privateRoute ? (
        <PrivateRoute
          key={route.name}
          path={route.pathName}
          component={route.view}
        />
      ) : (
        <Route
          exact
          key={route.name}
          path={route.pathName}
          component={route.view}
        />
      );
    })}
  </Router>
);

export default AppRouter;
