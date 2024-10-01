import React from "react";
import { cn } from "../lib/utils";

const Typography = ({
  as: Comp = "p",
  children,
  variant = "",
  className = "",
  ...rest
}) => {
  return (
    <Comp
      {...rest}
      className={cn(
        "text-base text-white-primary",
        {
          title: "!text-green-primary text-lg font-bold",
          subTitle: "text-white-light text-xs italic",
        }[variant],
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Typography;
