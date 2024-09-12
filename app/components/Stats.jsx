import React from "react";
import Typography from "./Typography";
import CountUp from "./CountUp";
import { Fade } from "react-reveal";

const Stats = () => {
  const stats = [
    {
      num: 4,
      text: "Years of experiece",
      className: "min-w-[34px]",
    },
    {
      num: 38,
      text: "Projects completed",

      className: "min-w-[61px]",
    },
    {
      num: 18,
      text: "Technologies Mastered",
      className: "min-w-[51px]",
    },
    {
      num: 1530,
      text: "Code contributions",
      className: "min-w-[115px]",
    },
  ];

  return (
    <Fade bottom>
      <div className="flex items-center gap-4">
        {stats.map((stat, i) => (
          <div
            className="
        flex items-center gap-3
        "
          >
            <CountUp to={stat.num} className={stat.className} />
            <Typography className="font-bold max-w-[120px]">
              {stat.text}
            </Typography>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default Stats;
