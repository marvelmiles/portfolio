import { cn } from "@/lib/utils";
import React from "react";

const Button = ({ children, size = "", className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(
        `
        paper outline-none shadow-none disabled:opacity-40
        disabled:cursor-not-allowed font-semibold transition-colors
        `,
        { mini: "mini" }[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
