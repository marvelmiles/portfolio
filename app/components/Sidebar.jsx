import React from "react";
import PropTypes from "prop-types";
// import meImage from "public/images/meImage.png";
// import Image from "next/image";
import Socials from "../components/Socials";
import ResumeBtn from "../components/ResumeBtn";
import NavLinks from "./NavLinks";

const Sidebar = ({ className = "", closeDialog }) => {
  return (
    <div className={`w-auto ${className}`}>
      {/* <Image
        alt=""
        src={meImage}
        style={{ width: "150px", height: "150px" }}
        className="rounded-full border-solid border-20 hover:border-dark-light hidden"
      /> */}

      <NavLinks
        className="flex-col my-8"
        itemClassName="gap-2"
        width="100%"
        onClick={closeDialog}
      />

      <ResumeBtn
        className="w-full mb-5 s200:hidden"
        delay={0}
        duration={1200}
      />
      <Socials className="justify-around flex-wrap" delay={0} duration={1200} />
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
