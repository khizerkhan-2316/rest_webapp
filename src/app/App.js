import "./App.css";
import NavigationBar from "../components/stateful components/navigation/navigationbar.js";
import CountryCard from "../components/stateful components/countrycard/countrycard.js";
import Searchbar from "../components/stateful components/searchbar/searchbar.js";
import DropdownList from "../components/stateful components/dropdownList/dropdownList.js";
import countryData from "../api/data.js";
import formatNumber from "../root.js";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchInput, setInput] = useState("");
  const [isdark, setIsdark] = useState(false);
  const [region, setRegion] = useState("");
  useEffect(() => {
    displayAllCountries();
  }, []);

  const filterCountries = (countries, countryName) => {
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(countryName.toLowerCase())
    );
    setFilteredCountries(filteredCountries);
  };

  const displayByRegion = (countries, region) => {
    const countryByRegion = countries.filter((country) =>
      country.region.toLowerCase().includes(region.toLowerCase())
    );

    setFilteredCountries(countryByRegion);
  };

  const displayAllCountries = async () => {
    const result = await countryData("https://restcountries.com/v2/all");
    setCountries(result);
    setFilteredCountries(result);
  };

  return (
    <>
      <NavigationBar isdark={isdark} onClick={setIsdark} />
      <section className="main-container">
        <div className="search_and_filter_container">
          <Searchbar
            input={searchInput}
            onChange={setInput}
            filterCountries={filterCountries}
            countries={countries}
            isdark={isdark}
          />

          <DropdownList
            isdark={isdark}
            onClick={setRegion}
            filterCountries={displayByRegion}
            countries={countries}
            region={region}
          />
        </div>
        <section className="searchbar-and-filter-container"></section>
        <section className="countrycard-container">
          {filteredCountries.map((country, index) => {
            const { flag, name, population, region, capital } = country;

            return (
              <CountryCard
                key={index}
                flag={flag}
                name={name}
                population={formatNumber(population)}
                region={region}
                capital={capital}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}

export default App;
