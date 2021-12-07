import "./dropdownList.css";
import "../../../root.css";
import dropdownListIcon from "../../../assets/images/dropdown-icon.png";
import dropdownListDarkmodeIcon from "../../../assets/images/dropdown-darkmode-icon.png";
import { useState } from "react";

const DropdownList = (props) => {
  const [isListActive, setIsListActive] = useState(false);
  return (
    <>
      <section className="dropdown">
        <section className="dropdown-list">
          <h4>Filter by region</h4>
          <img
            src={props.isdark ? dropdownListDarkmodeIcon : dropdownListIcon}
            alt="Dropdown list icon"
            onClick={() => {
              if (isListActive) {
                setIsListActive(false);
              } else {
                setIsListActive(true);
              }
            }}
          />
        </section>

        <section
          className={
            isListActive ? "dropdown-content show" : "dropdown-content hide"
          }
          id="myDropdown"
        >
          <option
            className="dropdown-option"
            onClick={() => props.onClick("Africa")}
          >
            Africa
          </option>
          <option
            className="dropdown-option"
            onClick={() => props.onClick("America")}
          >
            America
          </option>
          <option
            className="dropdown-option"
            onClick={() => props.onClick("Asia")}
          >
            Asia
          </option>
          <option
            className="dropdown-option"
            onClick={() => props.onClick("Europe")}
          >
            Europe
          </option>
          <option
            className="dropdown-option"
            onClick={() => props.onClick("Oceania")}
          >
            Oceania
          </option>
        </section>
      </section>
    </>
  );
};

export default DropdownList;
