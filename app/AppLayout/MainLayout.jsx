import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import Dialog from "../components/Dialog";
import Socials from "../components/Socials";
import ResumeBtn from "../components/ResumeBtn";
import Sidebar from "../components/Sidebar";
// import meImage from "public/images/meImage.png";
// import Image from "next/image";
import NavLinks from "../components/NavLinks";

const MainLayout = ({ children }) => {
  const [openDialog, setOpenDialog] = useState();

  const handleOpenDialog = useCallback(() => setOpenDialog(true), []);

  const closeDialog = useCallback(() => setOpenDialog(false), []);

  return (
    <div>
      <navbar className="flex p-2 items-center justify-between w-full fixed bg-dark-primary z-30 top-0 left-0">
        <div className="flex items-center gap-4">
          <div
            onClick={handleOpenDialog}
            className="hover:bg-dark-light p-2 rounded-full md:hidden"
          >
            <GiHamburgerMenu className="text-white-primary text-md cursor-pointer" />
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden">
              {/* <Image
                alt="avatar"
                src={meImage}
                style={{ width: "45px", height: "45px" }}
              /> */}
            </div>
            <Socials className="hidden s360:flex" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <NavLinks className="hidden md:flex" key="navbar" />
          <div className="hidden s200:block">
            <ResumeBtn />
          </div>
        </div>
      </navbar>
      <div className="max-w-5xl mx-auto">
        <main className="relative top-12">{children}</main>
      </div>
      <footer className="mt-20 border-solid border border-t-white-divider">
        <p className="text-white-primary p-4 text-center">
          Powered by MarvelMiles Technologies ©{new Date().getFullYear()}. All
          Rights Reserved.
        </p>
      </footer>
      <Dialog open={openDialog} onClose={closeDialog}>
        <Sidebar closeDialog={closeDialog} />
      </Dialog>
      {/* <Dialog>
        <Image alt="" src={meImage} />
      </Dialog> */}
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
