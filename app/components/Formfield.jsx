import React from "react";

const Formfield = ({ type, RightIcon, ...rest }) => {
  const isArea = type === "textarea";

  const Comp = isArea ? "textarea" : "input";

  return (
    <div
      className="
    flex items-start rounded-[8px] bg-white-primary/10
    mb-6
    "
    >
      <Comp
        {...rest}
        className={`
      bg-transparent flex-1 p-4 outline-none shadow-none
      text-white-milk placeholder:text-white-milk
      ${isArea ? "resize-none h-[200px]" : ""}
        `}
      />
      {RightIcon && (
        <div className="p-4">
          <RightIcon size={24} className="text-white-milk" />
        </div>
      )}
    </div>
  );
};

export default Formfield;
