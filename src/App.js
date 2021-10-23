import React from "react";
import "App.styles.scss";
import AppRouter from "./router";
import { AuthProvider } from "./context/auth/auth.context";
import { NotificationsProvider } from "./context/notif/notifications.context";

const App = () => (
  <React.StrictMode>
    <AuthProvider>
      <NotificationsProvider>
        <AppRouter />
      </NotificationsProvider>
    </AuthProvider>
  </React.StrictMode>
);

export default App;
