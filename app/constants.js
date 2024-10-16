export const anchorAttrs = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export const mySocials = {
  email: "marvellousabidemi2@gmail.com",
  github: "https://github.com/marvelmiles",
  twitter: "https://twitter.com/_Marvelmiles",
  linkedIn: "https://www.linkedin.com/in/marvellous-akinrinmola/",
  phone: "(+234) 9162670753",
};

export const isProdMode = process.env.NODE_ENV === "production";

export const SERVER_ORIGIN = isProdMode
  ? "https:portfolio-marvelmiles.vercel.app/api"
  : "http://localhost:3000/api";

export const MAIL_CONST = {
  user: "marvellousabidemi2@gmail.com",
  service: "Gmail",
};
