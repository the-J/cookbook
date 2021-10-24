import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
  <Router>
    {Object.values(routes).map((route) =>
      route.privateRoute ? (
        <PrivateRoute key={route.name} path={route.pathName}>
          {route.view}
        </PrivateRoute>
      ) : (
        <Route exact key={route.name} path={route.pathName}>
          {route.view}
        </Route>
      )
    )}
  </Router>
);

export default AppRouter;
