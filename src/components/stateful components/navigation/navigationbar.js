import "./navigationbar.css";
import "../../../root.css";
import { useState } from "react";
import darkModeIcon from "../../../assets/images/moon.png";

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
              if (isDark) {
                document.body.classList.remove("darkmode");
                document.body.classList.add("lightmode");

                setIsDark(false);
              } else {
                document.body.classList.remove("lightmode");

                document.body.classList.add("darkmode");

                setIsDark(true);
              }
            }}
          />
          <h6>{isDark ? "Light Mode" : "Dark Mode"}</h6>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
