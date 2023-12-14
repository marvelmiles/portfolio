import React, { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

const Dialog = ({ open, onClose, children }) => {
  const ref = useRef();

  const closeDialog = useCallback(
    e => {
      const d = ref.current;

      const c = d.classList.contains("invisible");

      if (!e || e.target === d) {
        !c && onClose();
        const t = setTimeout(() => {
          d.classList.add("invisible");
          clearTimeout(t);
        }, 300);
      }
    },
    [onClose]
  );

  useEffect(() => {
    !open && closeDialog();
  }, [open, closeDialog]);

  return (
    <div
      ref={ref}
      onClick={closeDialog}
      className={`dialog ${
        open ? "active visible" : open === false ? "" : `invisible`
      } w-full h-screen bg-dark-dialog fixed top-0 left-0 z-40`}
    >
      <div
        onClick={() => closeDialog()}
        className="ml-2 mt-3 absolute z-40 bg-dark-light rounded-full p-2 cursor-pointer"
      >
        <IoCloseOutline className="text-white-primary text-md" />
      </div>
      <div
        style={{
          transform: "translateX(-1500px)",
          animation: open
            ? "slideIn 400ms ease-in-out forwards"
            : "slideOut 500ms ease-out"
        }}
        className="dialog-content w-full h-full bg-dark-primary max-w-300 flex items-center justify-center relative"
      >
        {children}
      </div>
    </div>
  );
};

Dialog.propTypes = {};

export default Dialog;
