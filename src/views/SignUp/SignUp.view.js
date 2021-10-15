import React, { useEffect, useRef, useState } from "react";

import { useAuthContext } from "../../context/auth/auth.context";
import { useError } from "../../context/error.context";
import { signUp } from "../../auth/authUser";
import { LayoutMain } from "../../layouts";
import { Redirect, useHistory } from "react-router-dom";

const SignUpView = () => {
  let history = useHistory();
  const { initializeUser, updateUserAttributes, state } = useAuthContext();
  const { addError } = useError();
  const [validationErrors, setValidationError] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [fieldValues, setFieldValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(true);

  // let history = useHistory();
  // let location = useLocation();
  // let auth = useAuthContext();
  //
  // let { from } = location.state || { from: { pathname: "/" } };
  // let login = () => {
  // auth.signin(() => {
  //   history.replace(from);
  // });
  // };

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
    signUp(fieldValues.name, fieldValues.email, fieldValues.password)
      .then(() => history.push("/log-in"))
      .catch((err) => addError(err, "again"));
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
      case "name":
        setValidationError({
          ...validationErrors,
          [eName]: e.target.validationMessage,
        });
        console.log({
          ...validationErrors,
          [eName]: e.target.validationMessage,
        });
        break;
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
              placeholder="Name"
              name="name"
              type="text"
              onChange={(e) =>
                setFieldValues((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
              minLength={5}
              maxLength={25}
              className={`block input ${
                validationErrors.name ? "is-invalid" : ""
              }`}
            />
            {validationErrors.name && <p>{validationErrors.name}</p>}

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
              Sign up
            </button>

            {/*<input*/}
            {/*    className="block button is-primary"*/}
            {/*    type="submit"*/}
            {/*    disabled={!formState.isDirty || !formState.isValid}*/}
            {/*/>*/}
          </form>
        </div>
        <div className="column" />
      </div>
    </LayoutMain>
  );
};

export default SignUpView;
