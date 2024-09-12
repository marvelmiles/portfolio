import React from "react";
import PropTypes from "prop-types";

const Chips = ({
  chips = [],
  mini = false,
  className = "",
  onSelect,
  activeChip = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {chips.map((u) => (
        <div
          key={u}
          onClick={() => onSelect(u)}
          className={`paper ${mini ? "mini" : ""} ${
            onSelect
              ? `
            cursor-pointer
            ${
              activeChip === u ? "" : "bg-transparent hover:bg-white-primary/10"
            }
            `
              : ""
          }`}
        >
          {u}
        </div>
      ))}
    </div>
  );
};

Chips.propTypes = {};

export default Chips;
