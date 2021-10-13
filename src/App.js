import React from "react";
import "App.styles.scss";
import AppRouter from "./router";
import { AuthProvider } from "./context/auth/auth.context";
import { ErrorProvider } from "./context/error.context";

const App = () => (
  <React.StrictMode>
    <AuthProvider>
      <ErrorProvider>
        <AppRouter />
      </ErrorProvider>
    </AuthProvider>
  </React.StrictMode>
);

export default App;
