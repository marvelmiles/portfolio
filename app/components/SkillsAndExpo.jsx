import React from "react";
import { motion } from "framer-motion";
import Typography from "./Typography";
import Image from "next/image";
import Link from "next/link";

const SkillsAndExpo = () => {
  const codingSkills = [
    {
      name: "Javascript",
      src: "/images/jsIcon.png",
    },
    {
      name: "React",
      src: "/images/jsIcon.png",
    },
    {
      name: "Dev-Ops",
      src: "/images/jsIcon.png",
    },
    {
      name: "Graphql",
      src: "/images/jsIcon.png",
    },
    {
      name: "SQL",
      src: "/images/jsIcon.png",
    },
    {
      name: "Nextjs",
      src: "/images/jsIcon.png",
    },
    {
      name: "Nodejs",
      src: "/images/jsIcon.png",
    },
    {
      name: "MongoDB",
      src: "/images/jsIcon.png",
    },
    {
      name: "Firebase",
      src: "/images/jsIcon.png",
    },
    {
      name: "Typescript",
      src: "/images/jsIcon.png",
    },
    {
      name: "PostgreSQL",
      src: "/images/jsIcon.png",
    },
    {
      name: "Python",
      src: "/images/jsIcon.png",
    },
    {
      name: "Solidity",
      src: "/images/jsIcon.png",
    },
  ];

  const experiences = [
    {
      year: 2020,
      works: [
        {
          name: "Frontend Developer",
          company: "Accomease",
          href: "",
        },
        {
          name: "Frontend Developer",
          company: "Accomease",
          href: "http://www.f.com",
        },
      ],
    },
    {
      year: 2020,
      works: [
        {
          name: "Frontend Developer",
          company: "Accomease",
          href: "",
        },
        {
          name: "Frontend Developer",
          company: "Accomease",
          href: "http://www.f.com",
        },
      ],
    },
    {
      year: 2020,
      works: [
        {
          name: "Frontend Developer",
          company: "Accomease",
          href: "",
        },
        {
          name: "Frontend Developer",
          company: "Accomease",
          href: "http://www.f.com",
        },
      ],
    },
  ];

  return (
    <section>
      <div
        className="
      w-full flex flex-col md:flex-row gap-8 mt-4
      "
      >
        <div>
          <Typography variant="title" className="mb-3">
            Coding Skills
          </Typography>
          <motion.div
            className="
        grid grid-cols-4 gap-8
        "
          >
            {codingSkills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={skill.name}
                className="
              flex flex-col text-center transition-all gap-4
              "
              >
                <div
                  className="
              relative w-[90px] h-[90px] rounded-full aspect-square
              bg-white-primary/10 border border-white-primary/20
              mx-auto
              "
                >
                  <Image
                    fill
                    className="
                  !w-1/2 !h-1/2 !top-1/2 !left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  "
                    alt={skill.name}
                    src={skill.src}
                  />
                </div>
                <Typography className="text-md font-bold">
                  {skill.name}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div>
          <Typography variant="title" className="mb-3">
            Work Experience
          </Typography>
          <div
            className="
        flex-1 flex flex-col justify-start items-start
        "
          >
            {experiences.map((experience) => (
              <motion.div
                key={experience.year}
                className="
              flex flex-row justify-start items-start mb-4
              gap-10 border border-green-primary p-3
              rounded-lg glowing-border-green
            "
              >
                <Typography
                  className="
              font-bold text-md text-green-primary
              "
                >
                  {experience.year}
                </Typography>

                <motion.div className="flex flex-col gap-4">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <Typography className="font-bold text-md">
                          {work.name}
                        </Typography>
                        <Typography
                          as={work.href ? Link : "p"}
                          href={work.href}
                          className={`text-base ${
                            work.href ? "underline" : ""
                          }`}
                        >
                          {work.company}
                        </Typography>
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExpo;
