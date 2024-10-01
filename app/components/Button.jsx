import React from "react";
import { cn } from "../lib/utils";

const Button = ({ children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={cn("paper mini outline-none shadow-none", className)}
    >
      {children}
    </button>
  );
};

export default Button;
