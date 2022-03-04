import React, { Component } from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          type="text"
          className="form-control"
          autoFocus
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
   </div>
  );
};

export default Input;
