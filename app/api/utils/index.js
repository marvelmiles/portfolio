import { MAIL_CONST } from "@/app/constants";
import nodemailer from "nodemailer";

export const sendMail = async (
  mailOptions = {},
  service = "Gmail",
  user = MAIL_CONST.user,
  pass = process.env.MAIL_PASSWORD
) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service,
      auth: {
        user,
        pass,
      },
    });

    transporter.sendMail(
      {
        to: user,
        subject: "CLIENT MESSAGE FROM PORTFOLIO",
        html: mailOptions?.text,
        ...mailOptions,
      },
      (err) => {
        if (err) reject(err);
        else resolve("Mail sent successfully!");
      }
    );
  });
};
