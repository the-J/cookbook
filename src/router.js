import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import { HomeView, LogInView, SignUpView } from "views";
// import { useAuthContext } from "src/contextauth/auth.context";
// const PrivateRoute = ({ children, ...rest }) => {
//   const auth = useAuthContext();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };
const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route path="/log-in">
        <LogInView />
      </Route>
      <Route path="/sign-up">
        <SignUpView />
      </Route>
    </Router>
  );
};

export default AppRouter;
