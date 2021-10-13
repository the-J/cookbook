import React, { useState, useCallback, useContext, createContext } from "react";

export const ErrorContext = createContext({
  error: null,
  addError: () => {},
  removeError: () => {},
});

const ErrorProvider = (props) => {
  const [error, setError] = useState(null);

  const removeError = () => setError(null);

  const addError = (message, status) => {
    console.log({ message }, { status });
    setError({ message, status });
  };

  const contextValue = {
    error,
    addError: useCallback((message, status) => addError(message, status), []),
    removeError: useCallback(() => removeError(), []),
  };

  return <ErrorContext.Provider value={contextValue} {...props} />;
};

const useError = () => {
  const { error, addError, removeError } = useContext(ErrorContext);
  return { error, addError, removeError };
};

export { ErrorProvider, useError };
