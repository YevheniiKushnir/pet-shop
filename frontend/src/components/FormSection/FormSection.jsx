import React from "react";
import { useForm } from "react-hook-form";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register("password", { required: "Password is required" })}
        placeholder="Password"
        type="password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSection;
