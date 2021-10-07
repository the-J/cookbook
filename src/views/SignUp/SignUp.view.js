import React from "react";

import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/auth.context";
import { signUp } from "../../auth/authUser";

const SignUpView = () => {
  const auth = useAuthContext();
  console.log({ auth });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
    delayError: 1500,
  });

  const onSubmit = (values) => {
    console.log({ values });
    signUp("Marco", "polo@marco.com", "password");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        placeholder="Name"
        className={`block input form-control ${
          errors.name ? "is-invalid" : ""
        }`}
        {...register("name", {
          required: "Name is required",
          pattern: {
            value: /^.{5}$/i,
            message: "Name needs at least 5 characters long",
          },
        })}
      />
      <p>{errors.name?.message}</p>

      <input
        name="email"
        placeholder="Enter email"
        className={`block input form-control ${
          errors.email ? "is-invalid" : ""
        }`}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address format",
          },
        })}
      />
      <input
        name="password"
        placeholder="Password"
        className={`block input form-control ${
          errors.password ? "is-invalid" : ""
        }`}
        {...register("password", {
          required: "Password is required",
          pattern: {
            message: "Invalid email address format",
          },
        })}
      />
      <p>{errors.password?.message}</p>
      <button className="block button is-primary" type="submit">
        Sign in{" "}
      </button>
    </form>
  );
};

export default SignUpView;
