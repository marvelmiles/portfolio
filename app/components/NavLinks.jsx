"use-client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi2";
import { RxPerson } from "react-icons/rx";
import { IoIosGitNetwork } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Fade } from "react-reveal";
import Link from "next/link";

const NavLinks = ({ className, itemClassName, width }) => {
  const router = useRouter();
  const [to, setTo] = useState("");

  useEffect(() => {
    // const hash = window.location.hash;

    // router.replace(hash, { scroll: true });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const ids = ["home", "bio", "projects", "contact"];

      const doc = document.documentElement;

      let to = "";

      if (doc.scrollTop + doc.clientHeight === doc.scrollHeight)
        to = ids[ids.length - 1];
      else {
        to = ids.filter(section => {
          const sectionElement = document.getElementById(section);
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;

          return scrollY + 200 >= sectionTop && scrollY <= sectionBottom;
        })[0];
      }

      setTo(to);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRouting = e => {
    // handling routing bcos gh-pages don't pass client
    // routing to next.js. Which makes the page to reload

    e.preventDefault();
    const href = e.currentTarget.dataset.to;
    console.log(href);
    router.push(href, { scroll: true });
  };

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {[
        { icon: HiOutlineHome, title: "Home", href: "home" },
        { icon: RxPerson, title: "Bio", href: "bio" },
        { icon: IoIosGitNetwork, title: "My Work", href: "projects" },
        {
          icon: CiMail,
          title: "Contact",
          href: "contact"
        }
      ].map((u, i) => (
        <div key={i} style={{ width }}>
          <Fade
            bottom
            delay={0}
            duration={{ 0: 200, 1: 400, 2: 600, 3: 800, 4: 1000 }[i]}
          >
            <span
              onClick={handleRouting}
              href={`/#${u.href}`}
              data-to={`/#${u.href}`}
              style={{ width: "100%", display: "inline-block" }}
            >
              <div
                className={`${to === `${u.href}` ? "bg-white-paper" : ""} ${
                  itemClassName ? "" : "gap-1"
                } p-2 flex items-center text-white-primary rounded-3xl cursor-pointer hover:bg-white-paper ${itemClassName}`}
              >
                <u.icon className="text-mdl" />
                <div className="font-bold">{u.title}</div>
              </div>
            </span>
          </Fade>
        </div>
      ))}
    </ul>
  );
};

NavLinks.propTypes = {};

export default NavLinks;
