import React from "react";
import PropTypes from "prop-types";

const Chips = ({ chips = [], mini = false, className }) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {chips.map(u => (
        <div key={u} className={`paper ${mini ? "mini" : ""}`}>
          {u}
        </div>
      ))}
    </div>
  );
};

Chips.propTypes = {};

export default Chips;
