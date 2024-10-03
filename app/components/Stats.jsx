import React from "react";
import Typography from "./Typography";
import CountUp from "./CountUp";
import { Fade } from "react-reveal";

const Stats = () => {
  const stats = [
    {
      num: 4,
      text: "Years of experiece",
      className: "min-w-[45px]",
    },
    {
      num: 38,
      text: "Projects completed",

      className: "min-w-[99px]",
    },
    {
      num: 3,
      text: "Tech Stack Mastered",
      className: "min-w-[70px]",
    },
    {
      num: 1530,
      text: "Code contributions",
      className: "min-w-[140px]",
    },
  ];

  return (
    <Fade bottom>
      <div
        className="
      flex items-center flex-col justify-center gap-4 
      sm:flex-row
      "
      >
        {stats.map((stat, i) => (
          <div
            className="
            flex items-center gap-3 justify-center flex-col w-full 
            sm:w-auto mdl:flex-row
            "
          >
            <CountUp to={stat.num} className={stat.className} />
            <Typography
              className="
              font-bold flex-1 sm:max-w-[120px] !text-white-primary/90  
              text-center mdl:text-left
              "
            >
              {stat.text}
            </Typography>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default Stats;
