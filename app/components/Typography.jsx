import { cn } from "@/lib/utils";
import React from "react";

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
          title:
            "!text-green-primary text-[30px] sm:text-lg font-bold tracking-widest",
          subTitle: "text-white-light text-xs italic",
          h4: "text-[16px] font-semibold",
        }[variant],
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Typography;
