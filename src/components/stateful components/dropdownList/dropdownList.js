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
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick("Africa");
              props.filterCountries(props.countries, "Africa");
            }}
          >
            <p>Africa</p>
          </div>
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick("America");
              props.filterCountries(props.countries, "America");
            }}
          >
            America
          </div>
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick("Asia");
              props.filterCountries(props.countries, "Asia");
            }}
          >
            Asia
          </div>
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick("Europe");
              props.filterCountries(props.countries, "Europe");
            }}
          >
            Europe
          </div>
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick("Oceania");
              props.filterCountries(props.countries, "Oceania");
            }}
          >
            Oceania
          </div>
        </section>
      </section>
    </>
  );
};

export default DropdownList;
