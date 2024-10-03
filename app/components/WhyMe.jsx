"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Experience from "./Experience";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import { Fade } from "react-reveal";
import TabsY from "./TabsY";
import Button from "./Button";

const WhyMe = () => {
  const [tabsApi, setTabsApi] = useState(null);

  return (
    <section id="whyMe">
      <Fade bottom>
        <div
          defaultValue="experience"
          className="
        flex flex-col gap-y-16  gap-x-14 xl:gap-x-24 w-full 
       mdl:flex-row
        "
        >
          <div
            className="
          w-full mdl:max-w-[375px] flex flex-col gap-8
          "
          >
            <Typography variant="title">Why Me?</Typography>
            <Typography>
              I am a team player with a strong work ethic and a commitment to
              excellence. I am always eager to collaborate with others, share
              knowledge, and tackle complex projects head-on. Additionally, I am
              a quick learner, constantly adapting to new technologies and
              methodologies to stay updated.
            </Typography>
            <div
              className="
          flex flex-col justify-start h-auto bg-transparent gap-8 p-0 m-0
          "
            >
              <Button
                onClick={() => tabsApi.handleTransition("experience")}
                className={`
     ${
       tabsApi?.activeTab === "experience"
         ? `!bg-green-primary !text-white-primary`
         : ""
     }
     `}
              >
                Experience
              </Button>
              <Button
                onClick={() => tabsApi.handleTransition("skills")}
                className={`
                ${
                  tabsApi?.activeTab === "skills"
                    ? `!bg-green-primary !text-white-primary`
                    : ""
                }
                `}
              >
                Skills
              </Button>
              <Button
                onClick={() => tabsApi.handleTransition("aboutMe")}
                className={`
                ${
                  tabsApi?.activeTab === "aboutMe"
                    ? `!bg-green-primary !text-white-primary`
                    : ""
                }
                `}
              >
                About Me
              </Button>
            </div>
          </div>
          <div
            className="
        flex-1
        "
          >
            <TabsY
              setTabsApi={setTabsApi}
              defaultTab="experience"
              transition="fade"
              renderTab={({ activeTab }) => {
                return {
                  experience: <Experience />,
                  skills: <Skills />,
                  aboutMe: <AboutMe />,
                }[activeTab];
              }}
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default WhyMe;
