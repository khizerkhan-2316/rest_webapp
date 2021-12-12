import './App.css';
import '../root.css';
import NavigationBar from '../components/stateful components/navigation/navigationbar.js';
import CountryCard from '../components/stateful components/countrycard/countrycard.js';
import Searchbar from '../components/stateful components/searchbar/searchbar.js';
import DropdownList from '../components/stateful components/dropdownList/dropdownList.js';
import getRequest from '../api/data.js';
import { formatNumber } from '../root.js';
import { useEffect, useState } from 'react';
import { CountryDetails } from '../pages/countrydetails/CountryDetails.js';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchInput, setInput] = useState('');
  const [isdark, setIsdark] = useState(false);
  const [region, setRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  console.log(selectedCountry);
  useEffect(() => {
    displayAllCountries();
  }, []);

  const filterCountries = (countries, countryName) => {
    const filteredCountries = countries.filter((country) => {
      if (region !== '') {
        return (
          country.name.toLowerCase() === countryName.toLowerCase() &&
          country.region.toLowerCase() === region.toLowerCase()
        );
      } else {
        return country.name.toLowerCase().includes(countryName.toLowerCase());
      }
    });
    setFilteredCountries(filteredCountries);
  };

  const QueryMessage = () => {
    return <h3>No results found for the query: {' ' + searchInput}</h3>;
  };

  const displayByRegion = (countries, region) => {
    const countryByRegion = countries.filter((country) => {
      if (searchInput !== '') {
        return (
          country.region.toLowerCase().includes(region.toLowerCase()) &&
          country.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else {
        return country.region.toLowerCase().includes(region.toLowerCase());
      }
    });

    setFilteredCountries(countryByRegion);
  };

  const searchQuery = () => {
    if (filteredCountries.length <= 0 && countries.length > 0) {
      return <QueryMessage />;
    } else {
      return filteredCountries.map((country, index) => {
        const { flag, name, population, region, capital } = country;

        return (
          <CountryCard
            key={index}
            flag={flag}
            name={name}
            population={formatNumber(population)}
            region={region}
            capital={capital}
            onClick={setSelectedCountry}
          />
        );
      });
    }
  };

  const displayAllCountries = async () => {
    const result = await getRequest('https://restcountries.com/v2/all');
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
            onClick={setInput}
          />

          <DropdownList
            isdark={isdark}
            onClick={setRegion}
            filterCountries={displayByRegion}
            countries={countries}
            region={region}
            input={searchInput}
          />
        </div>
        <section className="searchbar-and-filter-container"></section>
        <section className="countrycard-container">{searchQuery()}</section>
      </section>
    </>
  );
}

export default App;
