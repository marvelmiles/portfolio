import React from "react";
import Typography from "./Typography";
import { GiOfficeChair } from "react-icons/gi";
import { IoIosGitNetwork } from "react-icons/io";
import { TbBrandOffice } from "react-icons/tb";

const Experience = () => {
  const experiences = [
    {
      name: "Frontend Developer",
      company: "Accomease",
      href: "",
      startYear: 2023,
    },
    {
      name: "Frontend Developer",
      company: "Accomease",
      href: "http://www.f.com",
      startYear: 2023,
      endYear: 2204,
    },
    {
      name: "Frontend Developer",
      company: "Accomease",
      href: "",
      timeline: "3 month",
    },
    {
      name: "Frontend Developer",
      company: "Accomease",
      href: "http://www.f.com",
    },
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
  ];

  return (
    <div className="whyMe-content-container">
      <Typography variant="title">My Experience</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {experiences.map((e, i) => (
          <div key={i} className="paper flex flex-col gap-8 !p-6">
            <div className="flex flex-col gap-2">
              <Typography className="text-green-primary font-bold tracking-widest">
                {e.timeline
                  ? e.timeline + " contract work"
                  : (e.startYear || new Date().getFullYear()) +
                    " - " +
                    (e.endYear || "Present")}
              </Typography>
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
            <div className="flex items-center gap-2">
              {/* <div className="dot" /> */}
              <TbBrandOffice size={24} className="text-white-primary/60" />
              <Typography
                className="
              text-white-primary/60 break-all font-semibold tracking-widest
              "
              >
                {e.company}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
