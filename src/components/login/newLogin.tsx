import React, { useState } from "react";
// import Input from "./input";
import Joi from "joi";

function NewLogin() {
  return (
    <form className="wrap">
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password:</label>
        <input type="password" />
      </fieldset>
      <button type="submit">Login</button>
    </form>
  );
}
export default NewLogin;
