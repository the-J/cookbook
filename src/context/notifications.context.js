import React, { useState, useCallback, useContext, createContext } from "react";

export const NotificationsContext = createContext({
  message: null,
  pushNotif: () => {},
  removeNotif: () => {},
});

const NotificationsProvider = (props) => {
  const [message, setError] = useState(null);

  const removeNotif = () => setError(null);

  const pushNotif = (message, status) => {
    console.log({ message }, { status });
    setError({ message, status });
  };

  const contextValue = {
    message,
    pushNotif: useCallback((message, status) => pushNotif(message, status), []),
    removeNotif: useCallback(() => removeNotif(), []),
  };

  return <NotificationsContext.Provider value={contextValue} {...props} />;
};

const useNotif = () => {
  const { message, pushNotif, removeNotif } = useContext(NotificationsContext);
  return { message, pushNotif, removeNotif };
};

export { NotificationsProvider, useNotif };
