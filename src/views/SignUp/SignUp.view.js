import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useNotif } from "../../context/notifications.context";
import { signUp } from "../../auth/authUser";
import { LayoutMain } from "../../layouts";

const SignUpView = () => {
  let history = useHistory();
  const { pushNotif } = useNotif();
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

  const checkIsValid = () => {
    const isValid = Object.values(validationErrors).some((x) => !x);
    setIsValid(isValid);
  };

  useEffect(() => {
    checkIsValid();
  }, [validationErrors]);

  const onSubmit = (e) => {
    e.preventDefault();
    signUp(fieldValues.name, fieldValues.email, fieldValues.password)
      .then(() => history.push("/log-in"))
      .catch((err) => pushNotif(err, "AWS err"));
  };

  const onChange = (e) => {
    // const eValue = e.target.value
    const name = e.target.name;
    const validationMessage = e.target.validationMessage;
    console.log(name, validationMessage);
    setValidationError({
      ...validationErrors,
      [name]: validationMessage,
    });
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
              onChange={onChange}
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
