import React from "react";
import "./Button.scss";

const Button = ({ name, method, classes, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        e?.stopPropagation();
        method();
      }}
      className={classes}
    >
      {name}
    </button>
  );
};
export default Button;
