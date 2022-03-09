import React, { useState } from "react";
import Input from "./input";
import Joi from "joi-browser";

function LoginForm() {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [schema, setSchema] = useState({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

 
  function validate() {
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.datails) errors[item.path[0]] = item.message;
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validate();
    setErrors({ errors: errors || {} });
    if (errors) return;
  }

  function validateProperty({ value, name }) {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  }

  function handleChange({ currentTarget: input }) {
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    account[input.name] = input.value;
    setAccount({ account });
    setErrors({ errors });
  }

  return (
    <div className="margin-auto">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={account.username}
          label="Username"
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          name="password"
          value={account.password}
          label="Password"
          onChange={handleChange}
          error={errors.password}
        />

        <button className="btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
