"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CountUp = ({
  to = 100,
  duration = 5,
  delay = 0,
  ease = "linear",
  className = "",
}) => {
  const controls = useAnimation();
  const [count, setCount] = useState(to);

  useEffect(() => {
    controls.start({
      count: to,
      transition: {
        duration,
        delay,
        ease,
      },
    });
  }, [controls, to, duration, delay]);

  return (
    <motion.div
      animate={controls}
      onUpdate={(latest) => setCount(latest.count.toFixed(0))}
    >
      <h1
        className={cn(
          `
        text-white-primary/90 font-extrabold text-xl
        inline-block min-w-[80px] text-center
        `,
          className
        )}
      >
        {count}+
      </h1>
    </motion.div>
  );
};

export default CountUp;
