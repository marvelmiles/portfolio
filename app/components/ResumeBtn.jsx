import React from "react";
import PropTypes from "prop-types";
import { Fade } from "react-reveal";

const ResumeBtn = ({ className, ...props }) => {
  return (
    <Fade bottom {...props}>
      <a
        href="#"
        className={`block p-2 text-center rounded-3xl border-solid border-2 border-green-primary text-green-primary hover:bg-green-primary hover:text-white-primary active:bg-transparent ${className}`}
      >
        Resume
      </a>
    </Fade>
  );
};

ResumeBtn.propTypes = {};

export default ResumeBtn;
