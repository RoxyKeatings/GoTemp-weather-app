import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        THIS PROJECT WAS CODED BY{" "}
        <a
          href="https://roxannekeatings.netlify.app"
          target="_blank"
          rel="noreferrer">
          ROXANNE KEATINGS
        </a>
        , AND IS OPEN-SOURCED ON
        <a
          href="https://github.com/RoxyKeatings/GoTemp-weather-app"
          target="_blank"
          rel="noreferrer">
          {" "}
          GITHUB
        </a>{" "}
        AND IS HOSTED ON{" "}
        <a href="https://gotemp.netlify.app/" target="_blank" rel="noreferrer">
          NETLIFY
        </a>
      </footer>
    </div>
  );
}
