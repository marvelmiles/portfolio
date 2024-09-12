import { Inter } from "next/font/google";
import "app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marvellous Akinrinmola Website",
  description: `
  Highly motivated, versatile and results-oriented Full Stack
  Software Engineer with 4+ years of experience building
  innovative and user-friendly applications.
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Montserrat:ital,wght@0,100;0,200;0,300;1,100&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className + " min-h-screen bg-dark-primary"}>
        {children}
      </body>
    </html>
  );
}
