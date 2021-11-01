import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";

import { useAuthContext } from "../../context/auth/auth.context";
import { useNotif } from "../../context/notif/notifications.context";
import { logIn } from "../../auth/authUser";
import { LayoutMain } from "../../layouts";

const initialState = {
  values: {
    email: "",
    password: "",
  },
  errors: {
    email: "",
    password: "",
  },
};

const LogInView = () => {
  const { state, initializeUser } = useAuthContext();
  const history = useHistory();
  const { pushNotif } = useNotif();
  const location = useLocation();

  const [formState, setFormState] = useState(initialState);
  const [isValid, setIsValid] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const validateForm = () => {
    const noErrors = Object.values(formState.errors).every((x) => !x);
    const fieldsFilled = Object.values(formState.values).every((x) => !!x);
    const isValid = noErrors && fieldsFilled;
    setIsValid(isValid);
  };

  useEffect(() => validateForm(), [formState]);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    const { email, password } = formState.values;
    logIn(email, password)
      .then(async () => {
        await initializeUser();
        const { from } = location.state || { from: { pathname: "/pantry" } };
        history.replace(from);
      })
      .catch((err) => {
        setIsLoggingIn(false);
        pushNotif(err, "err");
      });
  };

  const onChange = (e) => {
    const { name, value, validationMessage } = e.target;

    setFormState({
      values: {
        ...formState.values,
        [name]: value,
      },
      errors: {
        ...formState.errors,
        [name]: validationMessage,
      },
    });
  };

  if (state.user) {
    return <Redirect to={"/pantry"} />;
  }

  return (
    <LayoutMain>
      <div className="columns">
        <div className="column" />
        <div className="column">
          <form onSubmit={onSubmit} className="mx-4">
            <div className="block">
              <h1 style={{ fontSize: "2rem" }}>Log in</h1>
            </div>

            <div className="block">
              <input
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="email"
                onChange={onChange}
                className={`input ${formState.errors.email && "is-danger"}
                  ${
                    !formState.errors.email &&
                    formState.values.email &&
                    "is-success"
                  }`}
              />
              {formState.errors.email && (
                <p style={{ color: "red" }}>{formState.errors.email}</p>
              )}
            </div>

            <div className="block">
              <input
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="new-password"
                minLength={8}
                onChange={onChange}
                className={`input ${formState.errors.password && "is-danger"}
                  ${
                    !formState.errors.password &&
                    formState.values.password &&
                    "is-success"
                  }`}
              />
              {formState.errors.password && (
                <p style={{ color: "red" }}>{formState.errors.password}</p>
              )}
            </div>

            <div className="buttons block is-grouped level">
              <button
                className={`button is-success ${isLoggingIn && "is-loading"}`}
                type="submit"
                disabled={!isValid}
              >
                Log in
              </button>
              <button
                className="button is-info is-right"
                onClick={() => history.push("sign-up")}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="column" />
      </div>
    </LayoutMain>
  );
};

export default LogInView;
