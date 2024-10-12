import { clsx } from "clsx";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleScrollTo = (id) => {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth" });
};

export const isEmail = (str) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
    str
  );
};

export function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
}
