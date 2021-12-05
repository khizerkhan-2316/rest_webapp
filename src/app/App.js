import "./App.css";
import NavigationBar from "../components/stateful components/navigation/navigationbar.js";
import CountryCard from "../components/stateful components/countrycard/countrycard.js";
import countryData from "../api/data.js";
import formatNumber from "../root.js";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    data();
  });

  const data = async () => {
    const result = await countryData("https://restcountries.com/v2/all");
    const components = result.map((country, index) => {
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
    });

    setCountries(components);
  };

  return (
    <>
      <NavigationBar />
      <section className="main-container">
      <section className="searchbar-and-filter-container"> 
      
      </section>
        <section className="countrycard-container">{countries}</section>
      </section>
    </>
  );
}

export default App;
