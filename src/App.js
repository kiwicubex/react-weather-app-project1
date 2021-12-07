import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://brave-meninsky-cd508d.netlify.app/about.html"
            target="_blank"
            rel="noreferrer"
          >
            Amanda Chan{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/kiwicubex/react-weather-app-project1"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
