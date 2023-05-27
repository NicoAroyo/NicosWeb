import React from "react";
import "./Button.scss";
import { useNavigate } from "react-router-dom";

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  return (
    <button className="btn" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
