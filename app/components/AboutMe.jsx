import React from "react";
import Typography from "./Typography";
import { mySocials } from "../constants";

const AboutMe = () => {
  return (
    <div className="whyMe-content-container">
      <Typography variant="title">About Me</Typography>
      <div className="flex flex-col gap-4">
        <Typography>
          He/Him, certified music addict, food enthusiast 😊, and movie
          marathoner. My playlists will make you feel alive. Dream retirement? A
          never-ending vacation where I explore every corner of the world with a
          fork in one hand and a diary in the other! Catch me daydreaming about
          exotic foods, smart homes, and tourist sites to visit someday!
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <Typography className="text-white-primary/60">Name</Typography>
            <Typography>Marvellous Akinrinmola</Typography>
          </div>

          <div className="flex items-center gap-4">
            <Typography className="text-white-primary/60">Phone</Typography>
            <Typography>{mySocials.phone}</Typography>
          </div>

          <div className="flex items-center gap-4">
            <Typography className="text-white-primary/60">
              Experience
            </Typography>
            <Typography>4+ Years</Typography>
          </div>

          <div className="flex items-center gap-4">
            <Typography className="text-white-primary/60">
              Nationality
            </Typography>
            <Typography>Nigeria</Typography>
          </div>

          <div className="flex items-center gap-4">
            <Typography className="text-white-primary/60">Status</Typography>
            <Typography>Available</Typography>
          </div>

          <div className="flex items-center gap-4">
            <Typography className="text-white-primary/60">Clients</Typography>
            <Typography>10+ Happy Clients</Typography>
          </div>

          <div className="flex items-center gap-4">
            <Typography className="text-white-primary/60">Languages</Typography>
            <Typography>English, Yoruba</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
