import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useNotif } from "../../context/notif/notifications.context";
import { signUp } from "../../auth/authUser";
import { LayoutMain } from "../../layouts";

const initialState = {
  values: {
    name: "",
    email: "",
    password: "",
  },
  errors: {
    name: "",
    email: "",
    password: "",
  },
};

const SignUpView = () => {
  const history = useHistory();
  const { pushNotif } = useNotif();

  const [formState, setFormState] = useState(initialState);
  const [isValid, setIsValid] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const validateForm = () => {
    const noErrors = Object.values(formState.errors).every((x) => !x);
    const fieldsFilled = Object.values(formState.values).every((x) => !!x);
    const isValid = noErrors && fieldsFilled;
    setIsValid(isValid);
  };

  useEffect(() => validateForm(), [formState]);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSigningUp(true);
    const { name, email, password } = formState.values;
    signUp(name, email, password)
      .then(() => history.push("/log-in"))
      .catch((err) => {
        setIsSigningUp(false);
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

  return (
    <LayoutMain>
      <div className="columns">
        <div className="column" />
        <div className="column">
          <form onSubmit={onSubmit} className="mx-4">
            <div className="block">
              <h1 style={{ fontSize: "2rem" }}>Sign up</h1>
            </div>

            <div className="block">
              <input
                placeholder="Name"
                autoFocus
                name="name"
                type="text"
                onChange={onChange}
                minLength={5}
                maxLength={25}
                className={`input ${formState.errors.name && "is-danger"}
                  ${
                    !formState.errors.name &&
                    formState.values.name &&
                    "is-success"
                  }`}
              />
              {formState.errors.name && (
                <p style={{ color: "red" }}>{formState.errors.name}</p>
              )}
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
                className={`button is-success ${isSigningUp && "is-loading"}`}
                type="submit"
                disabled={!isValid}
              >
                Sign up
              </button>
              <button
                className="button is-info is-right"
                onClick={() => history.push("log-in")}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="column" />
      </div>
    </LayoutMain>
  );
};

export default SignUpView;
