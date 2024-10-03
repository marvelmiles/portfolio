"use client";

import React, { useState } from "react";
import Chips from "./Chips";
import { Fade } from "react-reveal";
import Image from "next/image";
import { anchorAttrs } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Typography from "./Typography";
import TabsY from "./TabsY";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { handleScrollTo } from "@/lib/utils";
import { motion } from "framer-motion";

const Works = () => {
  const [tabsApi, setTabsApi] = useState(null);

  const [page, setPage] = useState(0);

  const projects = {
    "Web App": [
      {
        img: "/images/soshare.png",
        title: "Soshare",
        desc: "Mini social platform for sharing videos and posts within a vibrant community.",
        href: "https://soshare.onrender.com",
        github: "https://github.com/marvelmiles/soshare",
        tech: ["Firebase", "Socket.io", "JWT", "Axios", "React-multi-carousel"],
      },
      {
        img: "/images/react-admin-panel.png",
        title: "React Admin",
        desc: "Product-oriented admin panel for managing products and users. Frontend-focused, powered by Firebase.",
        href: "https://cozy-granita-a65274.netlify.app/",
        github: "https://github.com/marvelmiles/react-admin-panel",
        tech: ["Firebase", "Moment", "Recharts"],
      },
      {
        img: "/images/ip-explorer.png",
        title: "IP Explorer",
        desc: "Lightweight website for retrieving IPv4/IPv6 address details, including a built-in theme picker.",
        href: "https://merry-conkies-96fe95.netlify.app/",
        github: "https://github.com/marvelmiles/ip-explorer",
        tech: ["React", "Styled-components", "React-popper"],
      },
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

  const handlePageChange = (page) =>
    tabsApi.handleTransition(() => {
      setPage(page);
      const id = setTimeout(() => {
        handleScrollTo("projects");
        clearTimeout(id);
      }, 200);
    }, "vertical");

  return (
    <section id="projects" className="mt-20 mdl:overflow-visible">
      <Typography variant="title">My Work</Typography>
      <Typography variant="subTitle">Simple UI . Sleek Interface</Typography>
      <Fade bottom>
        <div>
          <TabsY
            setTabsApi={setTabsApi}
            transition="fade"
            defaultTab="Web App"
            // tabs={["Web App", "Mobile App"]}

            renderTab={({ activeTab }) => {
              const skip = page * 4;

              return (
                <div
                  className="
                flex flex-col gap-4 lg:min-h-[395px]
                "
                >
                  {
                    {
                      "Web App": (
                        <div
                          className="
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                      gap-6
                      "
                        >
                          {projects[activeTab]
                            .slice(skip, skip + 3)
                            .map((p, i) => (
                              <motion.div
                                key={i}
                                whileHover={{
                                  rotate: "1deg",
                                  scale: 1.01,
                                }}
                                transition={{
                                  ease: "easeInOut",
                                }}
                                className="
                              w-full flex flex-col rounded-sm border-solid 
                              border border-white-divider max-h-[394px] 
                              overflow-hidden
                              "
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

                                      <span style={{ display: "none" }}>
                                        {p.moreDesc}
                                      </span>
                                      {p.moreDesc > 74 ? (
                                        <span
                                          data-open={false}
                                          className="underline cursor-pointer"
                                          onClick={(e) => {
                                            const n = e.currentTarget;
                                            const open =
                                              n.dataset.open === "true";

                                            n.textContent = open
                                              ? " read more"
                                              : " read less";
                                            n.dataset.open = !open;
                                            n.previousElementSibling.style.display =
                                              open ? "none" : "inline";
                                          }}
                                        >
                                          {" "}
                                          read more
                                        </span>
                                      ) : null}
                                    </p>

                                    <Chips
                                      mini
                                      className="mb-2"
                                      chips={p.tech}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                        </div>
                      ),
                    }[activeTab]
                  }
                </div>
              );
            }}
          />

          <div className="w-full flex-center mt-8">
            <Button
              size="mini"
              disabled={!(page > 0)}
              onClick={() => handlePageChange(page - 1)}
              className="text-white-primary"
            >
              <ChevronLeft />
            </Button>{" "}
            <Button
              size="mini"
              disabled={
                !tabsApi ||
                !(page < Math.floor(projects[tabsApi.activeTab].length / 4))
              }
              onClick={() => handlePageChange(page + 1)}
              className="text-white-primary"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Works;
