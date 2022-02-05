import React, { Component } from "react";
import Input from "./input";

class LoginForm extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
      const errors = {};
      
    return { username: "Username is required." };
  };

  handleSubmit = (e) => {
      e.preventDefault();
      const errors = this.validate();
      this.setState({ errors });
      if (errors) return;
    };
    handleChange = ({ currentTarget: input }) => {
      const account = { ...this.state.account };
      account[input.name] = input.value;
      this.setState({ account });
    };
  render() {
    const { username, password } = this.state.account;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />

          <button className="btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
