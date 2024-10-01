"use client";

import React, { useState } from "react";
import Chips from "./Chips";
import { Fade } from "react-reveal";
import Image from "next/image";
import { anchorAttrs } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import Typography from "./Typography";

const Works = () => {
  const [activeWork, setActiveWork] = useState("Web App");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const projects = {
    "Web App": [
      {
        img: "/images/soshare.png",
        title: "Soshare",
        desc: "Mini social platform for sharing videos and posts within a vibrant community.",
        href: "https://soshare.onrender.com",
        github: "https://github.com/marvelmiles/soshare",
        tech: [
          "Firebase",
          "Get-video-duration",
          "Socket.io",
          "JWT",
          "React",
          "Axios",
          "React-multi-carousel",
        ],
      },
      {
        img: "/images/react-admin-panel.png",
        title: "React Admin",
        desc: "Product-oriented admin panel for managing products and users. Frontend-focused, powered by Firebase.",
        href: "https://cozy-granita-a65274.netlify.app/",
        github: "https://github.com/marvelmiles/react-admin-panel",
        tech: [
          "Firebase",
          "React",
          "Recharts",
          "React-circular-progressbar",
          "Moment",
        ],
      },
      {
        img: "/images/ip-explorer.png",
        title: "IP Explorer",
        desc: "Lightweight website for retrieving IPv4/IPv6 address details, including a built-in theme picker.",
        href: "https://merry-conkies-96fe95.netlify.app/",
        github: "https://github.com/marvelmiles/ip-explorer",
        tech: ["React", "Styled-components", "React-popper"],
      },
    ],
    "Mobile App": [
      {
        img: "/images/nigeria-history.png",
        title: "Nigeria History",
        desc: "Command-line quiz built with Node.js, featuring a mix of colors for an engaging user experience",
        github: "https://github.com/marvelmiles/nigeria-history",
        tech: [
          "Chalk",
          "Chalkercli",
          "Nanospinner",
          "Figlet",
          "Gradient-string",
          "Inquirer",
        ],
      },
      {
        img: "/images/advent.png",
        title: "Advnt.",
        desc: "Lightweight website to review a product.",
        href: "https://marvelmiles.github.io/advent",
        github: "https://github.com/marvelmiles/advent",
        tech: ["React", "Scroll-reveal", "Bootstrap", "Reactstrap"],
      },
      {
        img: "/images/rcmt.png",
        title: "Cloud Management",
        desc: "Simple saas cloud management platform.",
        href: "https://marvelmiles.github.io/cloud-management-react-tailwind",
        github:
          "https://github.com/marvelmiles/cloud-management-react-tailwind",
        tech: ["React", "Tailwind", "React-scroll", "React-icons"],
      },
    ],
  };

  const handleWorkFilter = (work) => {
    setActiveWork(work);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  return (
    <section id="projects" className="mt-20">
      <Typography variant="title">My Work</Typography>
      <Typography variant="subTitle">Simple UI . Sleek Interface</Typography>
      <Fade bottom>
        <Chips
          mini
          className="mt-2"
          chips={["Web App", "Mobile App"]}
          activeChip={activeWork}
          onSelect={handleWorkFilter}
        />
      </Fade>
      <Fade bottom>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <div className="flex flex-wrap mt-4 gap-4 mx-auto">
            {projects[activeWork].map((p, i) => (
              <div
                key={i}
                className="w-full flex flex-col sm:w-col2 md:w-col3 rounded-sm border-solid border border-white-divider hover:scale-101 hover:rotate-1 transition-all"
              >
                <div>
                  <Image
                    alt={`${p.title} image`}
                    src={p.img}
                    width={300}
                    height={100}
                    style={{
                      maxHeight: "140px",
                      minHeight: "auto",
                      minWidth: "100%",
                    }}
                  />
                </div>
                <div className="p-2 flex-1 flex flex-col">
                  <div>
                    <div className="flex gap-2 items-start justify-between">
                      <h4 className="text-md font-bold text-white-milk break-all">
                        {p.title}
                      </h4>
                      <div
                        className="
                      flex flex-wrap sm:flex-nowrap flex-1 justify-end
                      items-end gap-2 text-white-primary
                      "
                      >
                        {[
                          {
                            icon: FaExternalLinkAlt,
                            href: p.href,
                            nullify: !p.href,
                          },
                          {
                            icon: FiGithub,
                            href: p.github,
                          },
                        ].map((b, i) =>
                          b.nullify ? null : (
                            <a
                              key={i}
                              href={b.href}
                              className="w-8 h-8 flex items-center justify-center  rounded-full border-solid border-2 border-white-divider hover:border-white-light"
                              {...anchorAttrs}
                            >
                              <b.icon />
                            </a>
                          )
                        )}
                      </div>
                    </div>
                    <p className="my-3 text-white-primary">
                      {p.desc}

                      <span style={{ display: "none" }}>{p.moreDesc}</span>
                      {p.moreDesc > 74 ? (
                        <span
                          data-open={false}
                          className="underline cursor-pointer"
                          onClick={(e) => {
                            const n = e.currentTarget;
                            const open = n.dataset.open === "true";

                            n.textContent = open ? " read more" : " read less";
                            n.dataset.open = !open;
                            n.previousElementSibling.style.display = open
                              ? "none"
                              : "inline";
                          }}
                        >
                          {" "}
                          read more
                        </span>
                      ) : null}
                    </p>

                    <Chips mini className="mb-2" chips={p.tech} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Fade>
    </section>
  );
};

export default Works;
