"use client";

import React, { useState } from "react";
import Formfield from "./Formfield";
import Button from "./Button";
import { SERVER_ORIGIN } from "../constants";
import { toast } from "react-toastify";
import { FaEnvelope, FaUser } from "react-icons/fa6";
import Socials from "./Socials";
import Typography from "./Typography";
import { Fade } from "react-reveal";

const ContactMe = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const res = await fetch({
        url: `${SERVER_ORIGIN}/feedback`,
        method: "POST",
        body: formData,
        headers: {
          "Contnt-Type": "application/json",
        },
      });

      const data = await res.json();

      console.log(data);
      setFormData({});
      toast(
        "Thank you for reaching out. I'll get back to you as soon as possible!"
      );
    } catch (err) {
      console.log(err.code, err.response);
      toast(err.message, { type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact">
        <Typography variant="title">Contact Me </Typography>
        <Typography variant="subTitle">Love to hear from you!</Typography>

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

      <section>
        <Fade bottom>
          <div className="paper px-8 py-10">
            <div className="relative">
              <Formfield
                readOnly={isSubmitting}
                placeholder="Name"
                RightIcon={FaUser}
              />

              <Formfield
                readOnly={isSubmitting}
                placeholder="Email"
                RightIcon={FaEnvelope}
              />

              <Formfield
                readOnly={isSubmitting}
                type="textarea"
                placeholder="Message"
              />
              <Button
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="
          bg-white-primary/5 relative left-1/2 
          -translate-x-1/2 hover:bg-white-primary/20
          "
              >
                Send Message
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default ContactMe;
