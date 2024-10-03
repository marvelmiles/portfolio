import React from "react";

const Formfield = ({ type, RightIcon, ...rest }) => {
  const isArea = type === "textarea";

  const Comp = isArea ? "textarea" : "input";

  return (
    <div
      className="
     items-center rounded-[8px] bg-white-primary/10
    mb-6 flex px-4 justify-center gap-2
    "
    >
      <Comp
        {...rest}
        className={`
      bg-transparent outline-none shadow-none flex-1
      text-white-milk placeholder:text-white-milk
      ${isArea ? "resize-none h-[200px]" : ""} py-4
        `}
      />
      {RightIcon && (
        <RightIcon
          size={24}
          className="
          text-white-milk min-w-[24px] w-[24px] min-h-[24px] h-[24px]
          "
        />
      )}
    </div>
  );
};

export default Formfield;
