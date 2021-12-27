import '../../../root.css';
import './countrycardDetails.css';
const CountrycardDetails = (props) => {
  const array = props.countries.filter((country) => {
    return country.name
      .toLowerCase()
      .includes(props.selectedCountry.toLowerCase());
  });

  console.log(array[0]);

  // destructure country data from array
  const { flag, name, population, region, capital, nativeName, subregion } =
    array[0];
  //topLevelDomain, currencies.name, languages, borders
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
              Population: <span>{population}</span>
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
              Native Name: <span>{nativeName}</span>
            </h6>
            <h6>
              Population: <span>{population}</span>
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
        </section>
      </section>
    </>
  );
};

export default CountrycardDetails;
