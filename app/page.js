"use client";

import React from "react";
import codingWithCoffie from "public/codingWithCoffie.json";
import Lottie from "lottie-react";
import MainLayout from "app/AppLayout/MainLayout";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Fade } from "react-reveal";
import ResumeBtn from "./components/ResumeBtn";
import Chips from "./components/Chips";
import { anchorAttrs } from "./constants";
import Socials from "./components/Socials";
import Stats from "./components/Stats";

const Home = () => {
  const projects = [
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
      title: "Cloud Management LP",
      desc: "Simple saas cloud management platform.",
      href: "https://marvelmiles.github.io/cloud-management-react-tailwind",
      github: "https://github.com/marvelmiles/cloud-management-react-tailwind",
      tech: ["React", "Tailwind", "React-scroll", "React-icons"],
    },
  ];

  return (
    <MainLayout>
      <div className="p-2">
        <section id="home">
          <div className="flex items-center gap-15 justify-between">
            <div className="w-full max-w-lg break-words">
              <p className="text-lg text-green-primary">😊 Hi,</p>
              <Fade delay={0}>
                <div className="text-white-primary font-bold text-mdl s280:text-lg s412:text-xl">
                  <h1>I'm Marvellous Akinrinmola</h1>
                </div>
              </Fade>
              <Fade delay={0} bottom>
                <div className="text-white-light text-xs italic">
                  West Africa . Nigeria .{" "}
                  <span className="w-full max-w-80 break-words inline-block s360:inline">
                    marvellousabidemi2@gmail.com
                  </span>
                </div>
              </Fade>
              <Fade delay={0} bottom>
                <div className="text-white-primary italic font-bold max-w-xl my-2">
                  Highly motivated, versatile and results-oriented Full Stack
                  Software Engineer with 4+ years of experience building
                  innovative and user-friendly applications.
                </div>
              </Fade>
            </div>
            <div className="xs:hidden md:block">
              <Lottie
                animationData={codingWithCoffie}
                loop
                style={{ width: 400, height: 400 }}
              />
            </div>
          </div>

          <ResumeBtn className="w-full mt-2 s200:hidden" />

          <Stats />
        </section>

        <section id="bio" className="mt-20">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:max-w-sm">
              <h4 className="text-green-primary text-lg font-bold">AutoBio</h4>
              <div className="text-white-light text-xs italic">Beign Me!</div>
              <div className="mt-5">
                <Fade bottom>
                  <p className="mb-5 text-white-primary">
                    Being me tells a story of a full-stack developer whose love
                    for creating user-friendly applications thrives on
                    transforming ideas into software applications. Marvellous
                    constantly seeks new ways to enhance his skills and
                    knowledge in the ever-evolving world of web development and
                    programming.
                  </p>
                </Fade>
                <div className="text-green-primary">
                  Beyond technical skills:
                </div>
                <Fade bottom>
                  <p className="text-white-primary">
                    I am a team player with a strong work ethic and a commitment
                    to excellence. I am always eager to collaborate with others,
                    share knowledge, and tackle complex projects head-on.
                    Additionally, I am a quick learner, constantly adapting to
                    new technologies and methodologies to stay updated.
                  </p>
                </Fade>

                <div className="text-green-primary mt-5">
                  What i think of success:
                </div>
                <Fade bottom>
                  <p className="text-white-primary">
                    I believe success is all about setting and working hard to
                    achieve goals. Holistically achieving success can be
                    overwhelming, leading to fear and self-doubt. Taking a
                    monolistic approach to success and celebrating small wins
                    makes the big picture easier to achieve. For me, success is
                    found in the small wins of my day-to-day activities.
                  </p>
                </Fade>
              </div>
            </div>

            <div>
              <h4 className="text-green-primary text-mdl font-bold mb-5">
                Soft skills
              </h4>
              <Fade bottom>
                <Chips
                  chips={[
                    "Problem Solving",
                    "Writing",
                    "Decision-Making",
                    "Public Speaking",
                    "Confidence",
                    "Team-Building",
                    "Creativity",
                    "Communication",
                  ]}
                />
              </Fade>
              <h4 className="mt-8 text-mdl font-bold text-green-primary mb-5">
                Coding skills
              </h4>
              <Fade bottom>
                <Chips
                  chips={[
                    "Javascript",
                    "React",
                    "Dev-Ops",
                    "Graphql",
                    "SQL",
                    "Nextjs",
                    "Nodejs",
                    "MongoDB",
                    "Firebase",
                    "Typescript",
                    "PostgreSQL",
                    "Python",
                    "Solidity",
                    "Agile Development",
                  ]}
                />
              </Fade>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20">
          <h4 className="text-mdl font-bold text-green-primary">My Work</h4>
          <div className="text-white-light text-xs italic">
            Simple UI . Sleek Interface
          </div>
          {/* <Chips mini className="mt-2" chips={["Web App", "Mobile App"]} /> */}
          <Fade delay={0} duration={500} bottom>
            <div className="flex flex-wrap mt-4 gap-4 mx-auto">
              {projects.map((p, i) => (
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
                      <h4 className="text-md font-bold text-white-milk">
                        {p.title}
                      </h4>
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

                              n.textContent = open
                                ? " read more"
                                : " read less";
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
                    <div className="flex flex-wrap flex-1 justify-end items-end gap-4 text-white-primary">
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
                </div>
              ))}
            </div>
          </Fade>
        </section>

        <section id="contact" className="mt-20">
          <h4 className="text-mdl font-bold text-green-primary">Contact Me </h4>
          <div className="text-white-light text-xs italic">
            Love to hear from you!
          </div>

          <Socials
            className="mt-4"
            titles={[
              "marvellousabidemi2@gmail.com",
              "marvelmiles",
              "_marvelMiles",
              "Marvellous Akinrinmola",
            ]}
          />
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
