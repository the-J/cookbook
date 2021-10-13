import React, { useEffect, useRef, useState } from "react";

import { useAuthContext } from "../../context/auth.context";
import { signUp } from "../../auth/authUser";

const SignUpView = () => {
  const { initializeUser, updateUserAttributes } = useAuthContext();
  console.log({ updateUserAttributes });
  const [validationErrors, setValidationError] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);

  const checkIsValid = () => {
    const isValid = Object.values(validationErrors).some((x) => !x);
    setIsValid(isValid);
  };

  useEffect(() => {
    checkIsValid();
  }, [validationErrors]);

  const onSubmit = (values) => {
    console.log(values);
    // const user = signUp(values.Name, values.Email, values.Password);
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
    <>
      <div className="columns">
        <div className="column" />
        <div className="column">
          <form onSubmit={() => onSubmit()} className="mx-4">
            <input
              required
              placeholder="Name"
              name="name"
              type="text"
              onChange={(e) => validateValue(e)}
              minLength={5}
              maxLength={25}
              className={`block input form-control ${
                validationErrors.name ? "is-invalid" : ""
              }`}
            />
            {validationErrors.name && <p>{validationErrors.name}</p>}

            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  style={{
                    fontSize: ".5rem",
                  }}
                  type="text"
                  placeholder="Text input"
                  value="bulma"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </div>
            </div>

            <input
              required
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) => validateValue(e)}
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
              onChange={(e) => validateValue(e)}
              className={`block input form-control ${
                validationErrors.password ? "is-invalid" : ""
              }`}
            />
            {validationErrors.password && <p>{validationErrors.password}</p>}
            <button
              className="block button is-primary"
              type="submit"
              disabled={isValid}
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
    </>
  );
};

export default SignUpView;
