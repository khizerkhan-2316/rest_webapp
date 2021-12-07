import "../../../root.css";
import "./searchbar.css";
import searchbarIcon from "../../../assets/images/searchbar.png";
import searchbarDarkModeIcon from "../../../assets/images/searchbar_darkmode.png";

const Searchbar = (props) => {
  return (
    <section className="searchbar-container">
      <img
        src={props.isdark ? searchbarDarkModeIcon : searchbarIcon}
        alt="Search"
      />
      <input
        type="text"
        className="input_field"
        placeholder="Search for a country..."
        onChange={(event) => {
          props.onChange(event.target.value);
          props.filterCountries(props.countries, event.target.value);
        }}
      />
    </section>
  );
};

export default Searchbar;
