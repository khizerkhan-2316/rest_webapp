import '../../../root.css';
import './countrycardDetails.css';
import { formatNumber } from '../../../root.js';

const CountrycardDetails = () => {
  const array = JSON.parse(localStorage.getItem('countries')).filter(
    (country) => {
      return country.name
        .toLowerCase()
        .includes(localStorage.getItem('selectedCountry').toLowerCase());
    }
  );

  const { flag, name, population, region, capital, nativeName, subregion } =
    array[0];
  let topLevelDomain = array[0].topLevelDomain.join(', ');
  let currencies = array[0].currencies
    .map((currency) => currency.name)
    .join(', ');
  let languages = array[0].languages
    .map((language) => language.name)
    .join(', ');
  return (
    <>
      <section className="countrycardDetails">
        <section className="image-container">
          <img src={flag} alt="flag" />
        </section>
        <section className="countryinfo">
          <div className="main-content">
            <h1>{name}</h1>

            <h6>
              Native Name: <span>{nativeName}</span>
            </h6>
            <h6>
              Population: <span>{formatNumber(population)}</span>
            </h6>
            <h6>
              Region: <span>{region}</span>
            </h6>

            <h6>
              Sub Region: <span>{subregion}</span>
            </h6>
            <h6>
              Capital: <span>{capital}</span>
            </h6>
          </div>

          <div className="main-content">
            <h6>
              Top Level Domain: <span>{topLevelDomain}</span>
            </h6>
            <h6>
              Currencies: <span>{currencies}</span>
            </h6>
            <h6>
              Languages: <span>{languages}</span>
            </h6>
          </div>
        </section>
      </section>
    </>
  );
};

export default CountrycardDetails;
