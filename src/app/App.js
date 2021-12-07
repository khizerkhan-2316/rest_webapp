import "./App.css";
import NavigationBar from "../components/stateful components/navigation/navigationbar.js";
import CountryCard from "../components/stateful components/countrycard/countrycard.js";
import Searchbar from "../components/stateful components/searchbar/searchbar.js";
import countryData from "../api/data.js";
import formatNumber from "../root.js";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchInput, setInput] = useState("");

  useEffect(() => {
    displayAllCountries();
  }, []);

  const filterCountries = (countries, countryName) => {
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(countryName.toLowerCase())
    );
    setFilteredCountries(filteredCountries);
  };

  const displayAllCountries = async () => {
    const result = await countryData("https://restcountries.com/v2/all");
    setCountries(result);
    setFilteredCountries(result);
  };

  return (
    <>
      <NavigationBar />
      <section className="main-container">
        <div className="search_and_filter_container">
          <Searchbar
            input={searchInput}
            onChange={setInput}
            filterCountries={filterCountries}
            countries={countries}
          />
        </div>
        <section className="searchbar-and-filter-container"></section>
        <section className="countrycard-container">
          {filteredCountries.map((country, index) => {
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
          })}
        </section>
      </section>
    </>
  );
}

export default App;
