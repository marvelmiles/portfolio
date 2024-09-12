"use client";

import React from "react";
import codingWithCoffie from "public/codingWithCoffie.json";
import Lottie from "lottie-react";
import MainLayout from "app/AppLayout/MainLayout";
import { Fade } from "react-reveal";
import ResumeBtn from "./components/ResumeBtn";
import Chips from "./components/Chips";
import Socials from "./components/Socials";
import Stats from "./components/Stats";
import Works from "./components/Works";

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

        <section id="bio" className="mt-20">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:max-w-sm">
              <h4 className="text-green-primary text-lg font-bold">AutoBio</h4>
              <div className="text-white-light text-xs italic">Beign Me!</div>
              <div className="mt-5">
                <Fade bottom>
                  <p className="mb-5 text-white-primary">
                    Being me tells a story of a full-stack developer whose love
                    for creating user-friendly applications thrives on
                    transforming ideas into software applications. Marvellous
                    constantly seeks new ways to enhance his skills and
                    knowledge in the ever-evolving world of web development and
                    programming.
                  </p>
                </Fade>
                <div className="text-green-primary">
                  Beyond technical skills:
                </div>
                <Fade bottom>
                  <p className="text-white-primary">
                    I am a team player with a strong work ethic and a commitment
                    to excellence. I am always eager to collaborate with others,
                    share knowledge, and tackle complex projects head-on.
                    Additionally, I am a quick learner, constantly adapting to
                    new technologies and methodologies to stay updated.
                  </p>
                </Fade>

                <div className="text-green-primary mt-5">
                  What i think of success:
                </div>
                <Fade bottom>
                  <p className="text-white-primary">
                    I believe success is all about setting and working hard to
                    achieve goals. Holistically achieving success can be
                    overwhelming, leading to fear and self-doubt. Taking a
                    monolistic approach to success and celebrating small wins
                    makes the big picture easier to achieve. For me, success is
                    found in the small wins of my day-to-day activities.
                  </p>
                </Fade>
              </div>
            </div>

            <div>
              <h4 className="text-green-primary text-mdl font-bold mb-5">
                Soft skills
              </h4>
              <Fade bottom>
                <Chips
                  chips={[
                    "Problem Solving",
                    "Writing",
                    "Decision-Making",
                    "Public Speaking",
                    "Confidence",
                    "Team-Building",
                    "Creativity",
                    "Communication",
                  ]}
                />
              </Fade>
              <h4 className="mt-8 text-mdl font-bold text-green-primary mb-5">
                Coding skills
              </h4>
              <Fade bottom>
                <Chips
                  chips={[
                    "Javascript",
                    "React",
                    "Dev-Ops",
                    "Graphql",
                    "SQL",
                    "Nextjs",
                    "Nodejs",
                    "MongoDB",
                    "Firebase",
                    "Typescript",
                    "PostgreSQL",
                    "Python",
                    "Solidity",
                    "Agile Development",
                  ]}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Works />

        <section id="contact" className="mt-20">
          <h4 className="text-mdl font-bold text-green-primary">Contact Me </h4>
          <div className="text-white-light text-xs italic">
            Love to hear from you!
          </div>

          <Socials
            className="mt-4"
            titles={[
              "marvellousabidemi2@gmail.com",
              "marvelmiles",
              "_marvelMiles",
              "Marvellous Akinrinmola",
            ]}
          />
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
