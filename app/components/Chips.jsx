import React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Chips = ({
  chips = [],
  mini = false,
  className = "",
  onSelect,
  activeChip = "",
  chipClassName = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {chips.map((u) => (
        <div
          key={u}
          onClick={onSelect ? () => onSelect(u) : undefined}
          className={cn(
            `paper transition-colors ${mini ? "mini" : ""}`,
            onSelect
              ? `
        cursor-pointer hover:bg-green-primary
        ${activeChip === u ? "!bg-green-primary" : ""}
        `
              : "",
            chipClassName
          )}
        >
          {u}
        </div>
      ))}
    </div>
  );
};

Chips.propTypes = {};

export default Chips;
