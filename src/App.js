import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by
          <a
            href="https://unrivaled-gumption-827cae.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Ayane Manuel
          </a>{" "}
          and is{" "}
          <a
            href="https://shimmering-brigadeiros-d5aa85.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
