import React from "react";

import { useForm } from "react-hook-form";

const SignInView = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "Name",
      email: "Email",
    },
    criteriaMode: "all",
    delayError: 1500,
  });

  const onSubmit = (values) => console.log({ values });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        placeholder="Name"
        className={`form-control ${errors.name ? "is-invalid" : ""}`}
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
        className={`form-control ${errors.email ? "is-invalid" : ""}`}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address format",
          },
        })}
      />
      <p>{errors.email?.message}</p>
    </form>
  );
};

export default SignInView;
