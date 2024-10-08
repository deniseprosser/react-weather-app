import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer text-center">
      This project was coded by{" "}
      <a
        href="https://github.com/deniseprosser"
        target="_blank"
        rel="noreferrer"
      >
        Denise Prosser
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/deniseprosser/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://unique-sunshine-46d235.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
