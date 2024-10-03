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
import { isEmail } from "@/lib/utils";

const ContactMe = () => {
  const defaultData = {
    email: "",
    message: "",
    name: "",
  };
  const [formData, setFormData] = useState(defaultData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      const values = Object.values(formData);

      if (values.length < 3 || !values.every((v) => !!v))
        return toast.error("Invalid data. All fields are required");

      if (!isEmail(formData.email)) return toast.error("Invalid email address");

      if (formData.message.length < 10)
        return toast.error(
          "Your message is too short. Please provide more details!"
        );

      toast("Sending message to marvellous...");

      setIsSubmitting(true);

      let res = await fetch(`api/feedback`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Contnt-Type": "application/json",
        },
      });

      res = await res.json();

      if (!res.success) throw res;

      setFormData(defaultData);

      toast(
        "Thank you for reaching out. I'll get back to you as soon as possible!"
      );
    } catch (err) {
      toast.error(
        "Something went wrong. Please try again, or contact Marvellous through phone, email or social media."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section id="contact">
        <Typography variant="title">Contact Me </Typography>
        <Typography variant="subTitle">Love to hear from you!</Typography>

        <Socials withPhone withTitle className="mt-4" />
      </section>

      <section>
        <Fade bottom>
          <div className="paper px-8 py-10">
            <div className="relative">
              <Formfield
                readOnly={isSubmitting}
                placeholder="Name"
                RightIcon={FaUser}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <Formfield
                readOnly={isSubmitting}
                placeholder="Email"
                RightIcon={FaEnvelope}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Formfield
                readOnly={isSubmitting}
                type="textarea"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="
                !bg-[rgba(255,255,255,0.04)] relative left-1/2 
          -translate-x-1/2 hover:!bg-[rgba(255,255,255,0.02)] 
          font-semibold
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
