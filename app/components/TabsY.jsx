"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Chips from "./Chips";
import { motion } from "framer-motion";

const TabsY = ({
  defaultTab = "",
  tabs = [],
  renderTab,
  capsule = false,
  chipClassName,
  transition = "vertical",
  setTabsApi,
}) => {
  const getEnterAnimate = (_transition = transition) =>
    ({
      fade: { opacity: 1 },
    }[_transition] || { y: 0, opacity: 1 });

  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);
  const [animateTab, setAnimateTab] = useState(getEnterAnimate());

  const handleTransition = useCallback((tab, _transition = transition) => {
    setAnimateTab([
      {
        fade: {
          opacity: 0,
        },
      }[_transition] || { y: 100, opacity: 0 },
    ]);

    setTimeout(() => {
      typeof tab === "function" ? tab() : setActiveTab(tab);

      setAnimateTab([getEnterAnimate(_transition)]);
    }, 500);
  }, []);

  const apiProps = useMemo(
    () => ({
      activeTab,
      setActiveTab,
      handleTransition,
    }),
    [activeTab, setActiveTab, handleTransition]
  );

  useEffect(() => {
    setTabsApi && setTabsApi(apiProps);
  }, [setTabsApi, apiProps]);

  return (
    <div className={`next-child flex flex-col ${capsule ? "gap-8" : "gap-4"}`}>
      <Chips
        mini
        chips={tabs}
        activeChip={activeTab}
        onSelect={handleTransition}
        chipClassName={`font-semibold ${
          capsule ? "!rounded-[32px]" : "mt-4"
        } ${chipClassName}`}
      />
      <motion.div
        animate={animateTab}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {renderTab(apiProps)}
      </motion.div>
    </div>
  );
};

export default TabsY;
