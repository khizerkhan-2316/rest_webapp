import "./navigationbar.css";
import "../root.css";
import { useState } from "react";
import darkModeIcon from "../assets/images/moon.png";

const NavigationBar = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <nav>
      <div id="navigation-container">
        <h4>Where in the world?</h4>
        <div id="theme-switcher">
          <img
            src={darkModeIcon}
            alt="Dark mode"
            onClick={() => {
              isDark ? setIsDark(false) : setIsDark(true);
            }}
          />
          <h5>{isDark ? "Light Mode" : "Dark Mode"}</h5>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
