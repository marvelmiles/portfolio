/** @type {import('next').NextConfig} */

const isProdMode = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProdMode ? "/portfolio" : "",
  assestPrefix: "./",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
