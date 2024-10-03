import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import Typography from "./Typography";
import TabsY from "./TabsY";
import Chips from "./Chips";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineCloudSync } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { SiSolidity } from "react-icons/si";

const Skills = () => {
  const codingSkills = [
    {
      name: "Javascript",
      icon: IoLogoJavascript,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Dev-Ops",
      icon: MdOutlineCloudSync,
    },
    {
      name: "Graphql",
      icon: GrGraphQl,
    },
    {
      name: "SQL",
      icon: GrMysql,
    },
    {
      name: "Nextjs",
      icon: TbBrandNextjs,
    },
    {
      name: "Nodejs",
      icon: FaNodeJs,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "Firebase",
      icon: IoLogoFirebase,
    },
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "Python",
      icon: IoLogoPython,
    },
    {
      name: "Solidity",
      icon: SiSolidity,
    },
  ];

  return (
    <div className="whyMe-content-container">
      <Typography variant="title">My Skills</Typography>
      <TabsY
        capsule
        tabs={["Coding skill", "Soft skill"]}
        renderTab={({ activeTab }) => {
          return {
            "Soft skill": (
              <Chips
                chips={[
                  "Problem Solving",
                  "Writing",
                  "Creativity",
                  "Decision-Making",
                  "Public Speaking",
                  "Confidence",
                  "Team-Building",
                  "Communication",
                ]}
              />
            ),
            "Coding skill": (
              <div
                className="
              grid grid-cols-1 s320:grid-cols-2 sm:grid-cols-4 gap-4
              md:grid-cols-5 mdl:grid-cols-4
              "
              >
                {codingSkills.map((s, i) => (
                  <div
                    key={i}
                    className="
                  paper w-[120px] h-[120px] flex-center !rounded-[13px] 
                  !flex-col group transition-colors !p-0 mx-auto !gap-2
                  "
                  >
                    <s.icon
                      size={40}
                      className="text-white-primary/70 transition-colors group-hover:text-green-primary"
                    />
                    <Typography className="transition-colors group-hover:text-white-primary/80">
                      {s.name}
                    </Typography>
                  </div>
                ))}
              </div>
            ),
          }[activeTab];
        }}
      />
    </div>
  );
};

export default Skills;
