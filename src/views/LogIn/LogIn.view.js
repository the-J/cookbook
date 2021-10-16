import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useAuthContext } from "../../context/auth/auth.context";
import { useError } from "../../context/error.context";
import { logIn } from "../../auth/authUser";
import { LayoutMain } from "../../layouts";

const initState = {
  email: "",
  password: "",
};

const LogInView = () => {
  const { initializeUser } = useAuthContext();
  let history = useHistory();
  const { addError } = useError();

  const [isValid, setIsValid] = useState(true);
  const [validationErrors, setValidationError] = useState(initState);
  const [fieldValues, setFieldValues] = useState(initState);

  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/recipes" } };

  const checkIsValid = () => {
    const isValid = Object.values(validationErrors).some((x) => !x);
    setIsValid(isValid);
  };

  useEffect(() => {
    checkIsValid();
  }, [validationErrors]);

  const onSubmit = (e) => {
    console.log("onsubmit");
    e.preventDefault();
    logIn(fieldValues.email, fieldValues.password)
      .then(async () => {
        await initializeUser();
        history.replace(from);
      })
      .catch((err) => addError(err, "AWS err"));
  };

  // validation:
  // trim
  // check some shit
  // go

  const validateValue = (e) => {
    // const eValue = e.target.value
    console.log(e.target);
    const eName = e.target.name;
    switch (eName) {
      case "email":
        setValidationError({
          ...validationErrors,
          [eName]: e.target.validationMessage,
        });
        break;
      case "password":
        setValidationError({
          ...validationErrors,
          [eName]: e.target.validationMessage,
        });
        break;
      default:
        return;
    }
  };
  return (
    <LayoutMain>
      <div className="columns">
        <div className="column" />
        <div className="column">
          <form onSubmit={onSubmit} className="mx-4">
            <input
              required
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) =>
                setFieldValues((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              className={`block input form-control ${
                validationErrors.email ? "is-invalid" : ""
              }`}
            />
            {validationErrors.email && <p>{validationErrors.email}</p>}

            <input
              required
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) =>
                setFieldValues((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              className={`block input form-control ${
                validationErrors.password ? "is-invalid" : ""
              }`}
            />
            {validationErrors.password && <p>{validationErrors.password}</p>}
            <button
              className="block button is-primary"
              type="submit"
              // disabled={isValid}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="column" />
      </div>
    </LayoutMain>
  );
};

export default LogInView;
