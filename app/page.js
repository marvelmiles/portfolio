"use client";

import React from "react";
import codingWithCoffie from "public/codingWithCoffie.json";
import Lottie from "lottie-react";
import MainLayout from "app/AppLayout/MainLayout";
import { Fade } from "react-reveal";
import ResumeBtn from "./components/ResumeBtn";
import Stats from "./components/Stats";
import Works from "./components/Works";
import SkillsAndExpo from "./components/SkillsAndExpo";
import ContactMe from "./components/ContactMe";
import Bio from "./components/Bio";
import WhyMe from "./components/WhyMe";

const Home = () => {
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

        <WhyMe />

        <Bio />
        <SkillsAndExpo />
        <Works />
        <ContactMe />
      </div>
    </MainLayout>
  );
};

export default Home;
