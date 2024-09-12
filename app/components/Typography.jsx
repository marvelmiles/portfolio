import React from "react";
import { cn } from "../lib/utils";

const Typography = ({ as: Comp = "p", children, className = "" }) => {
  return (
    <Comp className={cn("text-base text-white-primary", className)}>
      {children}
    </Comp>
  );
};

export default Typography;
