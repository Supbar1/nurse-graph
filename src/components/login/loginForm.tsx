import React, { useState } from "react";
// import Input from "./input";
import Joi from "joi";

function LoginForm() {
  //   const [account, setAccount] = useState({ username: "", password: "" });
  //   const [errors, setErrors] = useState({});
  //   const schema = Joi.object({
  //     username: Joi.string().required().label("Username"),
  //     password: Joi.string().required().label("Password"),
  //   });

  //   function validate() {
  //     const options = { abortEarly: false }; //-under i cut "schema"
  //     const { error } = schema.validate(account, options);
  //     if (!error) return null;
  //     let errors = {};
  //     if (error.details[0].message) errors = { error };
  //     if (error.details[1]) errors = { error };
  //     return errors;
  //   }

  //   function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
  //     e.preventDefault();
  //     const errors = validate();
  //     setErrors({ errors: errors || {} });
  //     if (errors) return;
  //     if (!errors) return;
  //   }
  //   function validateProperty(value: string, name: string) {
  //     if (name === "username") {
  //       if (value.trim() === "") return "Username is required";
  //     }
  //     if (name === "password") {
  //       if (value.trim() === "") return "Password is required";
  //     }
  //   }
  // //----------------------------------------------Event???
  //   function handleChange(currentTarget : object) {
  //     const newAcount = {...account};
  //     newAcount[currentTarget.username] = currentTarget.value;

  //     input:Object
  //     const error = { ...errors };
  //     const errorMessage = validateProperty(input);
  //     if (errorMessage) error[input.name] = errorMessage;
  //     else delete error[input.name];

  //     const newAccount = { ...account };
  //     newAccount[input.name] = input.value;
  //     setAccount( newAccount );
  //     // setErrors(error);
  //   }

  return (
    <div className="input">
      {/* <h1>Login</h1>
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
      </form> */}
    </div>
  );
}
export default LoginForm;
