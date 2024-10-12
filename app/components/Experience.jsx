import React from "react";
import Typography from "./Typography";
import { IoIosGitNetwork } from "react-icons/io";
import { TbBrandOffice } from "react-icons/tb";
import Link from "next/link";
import { anchorAttrs } from "../constants";

const Experience = () => {
  const experiences = [
    {
      name: "Full-stack Engineer",
      company: "SozoRock Health",
      href: "",
      startYear: "Feb 2024",
      endYear: "Aug 2024",
    },
    {
      name: "Full-stack Engineer",
      company: "Caltextrader",
      href: "https://caltextrader.com/",
      startYear: "Aug 2023",
      endYear: "Jan 2024",
    },
    {
      name: "Lead Frontend Developer",
      company: "Accomease",
      href: "",
      startYear: "Mar 2020",
      endYear: "Aug 2020",
    },
  ];

  return (
    <div className="whyMe-content-container">
      <Typography variant="title">My Experience</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {experiences.map((e, i) => (
          <div key={i} className="paper flex flex-col gap-8 !p-6">
            <div className="flex flex-col gap-2">
              <div>
                <Typography className="text-green-primary font-bold tracking-widest">
                  {e.timeline
                    ? e.timeline + " contract work"
                    : (e.startYear || new Date().getFullYear()) +
                      " - " +
                      (e.endYear || "Present")}
                </Typography>
                {e.isContract ? (
                  <Typography
                    variant="subTitle"
                    className="
                  text-white-primary/60 font-semibold tracking-widest 
                  not-italic
                  "
                  >
                    Contract Based
                  </Typography>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <IoIosGitNetwork size={24} className="text-white-primary/70" />
                <Typography
                  variant="h4"
                  className="text-white-primary/70 break-all tracking-widest"
                >
                  {e.name}
                </Typography>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                {/* <div className="dot" /> */}
                <TbBrandOffice size={24} className="text-white-primary/60" />
                <Typography
                  {...anchorAttrs}
                  as={e.href ? Link : undefined}
                  href={e.href}
                  className={`
                  text-white-primary/60 break-all font-semibold 
                  tracking-widest ${e.href ? "underline" : ""}
                  `}
                >
                  {e.company}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
