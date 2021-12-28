import '../../root.css';
import './CountryDetails.css';
import Button from '../../components/stateless components/button/Button.js';
import CountrycardDetails from '../../components/stateful components/countryCardDetails/countrycardDetails.js';
const CountryDetails = (props) => {
  return (
    <>
      <section className="country-details">
        <section className="navigate-to-homepage-button-container">
          <Button target="/" />
        </section>
        <CountrycardDetails />
      </section>
    </>
  );
};

export default CountryDetails;
