import "../../../root.css";
import "./searchbar.css";
import searchbarIcon from "../../../assets/images/searchbar.png";
import { useState } from "react";

const Searchbar = (props) => {
  const [input, setInput] = useState("");
  return (
    <section className="searchbar-container">
      <img src={searchbarIcon} alt="Search" />
      <input
        type="text"
        className="input_field"
        placeholder="Search for a country..."
        onChange={(event) => setInput(event.target.value)}
      />

      {input}
    </section>
  );
};

export default Searchbar;
