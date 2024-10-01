import React from "react";
import { Fade } from "react-reveal";
import Typography from "./Typography";
import Chips from "./Chips";

const Bio = () => {
  return (
    <section id="bio">
      <div className="flex flex-col gap-12 md:flex-row">
        <div className="md:max-w-sm">
          <Typography variant="title">AutoBio</Typography>
          <Typography variant="subTitle">Beign Me!</Typography>
          <div className="mt-5">
            <Fade bottom>
              <p className="mb-5 text-white-primary">
                Being me tells a story of a full-stack developer whose love for
                creating user-friendly applications thrives on transforming
                ideas into software applications. Marvellous constantly seeks
                new ways to enhance his skills and knowledge in the
                ever-evolving world of web development and programming.
              </p>
            </Fade>
            <div className="text-green-primary">Beyond technical skills:</div>
            <Fade bottom>
              <p className="text-white-primary">
                I am a team player with a strong work ethic and a commitment to
                excellence. I am always eager to collaborate with others, share
                knowledge, and tackle complex projects head-on. Additionally, I
                am a quick learner, constantly adapting to new technologies and
                methodologies to stay updated.
              </p>
            </Fade>
          </div>
        </div>

        <div>
          <Typography variant="title">Soft skills</Typography>
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

          <div className="text-green-primary mt-5">
            What i think of success:
          </div>
          <Fade bottom>
            <p className="text-white-primary">
              I believe success is all about setting and working hard to achieve
              goals. Holistically achieving success can be overwhelming, leading
              to fear and self-doubt. Taking a monolistic approach to success
              and celebrating small wins makes the big picture easier to
              achieve. For me, success is found in the small wins of my
              day-to-day activities.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Bio;
