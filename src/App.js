import React from "react";
import "App.styles.scss";
import { AuthProvider } from "./context/auth.context";
import AppRouter from "./router";

const App = () => (
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);

export default App;
