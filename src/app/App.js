import "./App.css";
import NavigationBar from "../components/stateful components/navigation/navigationbar.js";
import CountryCard from "../components/stateful components/countrycard/countrycard.js";
import Searchbar from "../components/stateful components/searchbar/searchbar.js";
import countryData from "../api/data.js";
import formatNumber from "../root.js";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    displayAllCountries();
  });

  const displayAllCountries = async () => {
    const result = await countryData("https://restcountries.com/v2/all");
    const components = result.map((country, index) => {
      if (index < 8) {
        return (
          <CountryCard
            key={index}
            flag={country.flag}
            name={country.name}
            population={formatNumber(country.population)}
            region={country.region}
            capital={country.capital}
          />
        );
      } else {
        return null;
      }
    });

    setCountries(components);
  };

  return (
    <>
      <NavigationBar />
      <section className="main-container">
        <div className="search_and_filter_container">
          <Searchbar allCountries={countries} />
        </div>
        <section className="searchbar-and-filter-container"></section>
        <section className="countrycard-container">{countries}</section>
      </section>
    </>
  );
}

export default App;
