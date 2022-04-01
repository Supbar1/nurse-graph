import React from "react";

const Input = (
  name: string,
  label: string,
  value: string,
  error: string,
  onChange: undefined
 ) => {
  return (
    <div>
      {/* <div className="form-group">
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
      {error && <div className="alert alert-danger">{error}</div>} */}
    </div>
  );
};

export default Input;
