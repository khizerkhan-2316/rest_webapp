import "./countrycard.css";
import "../../../root.css";

const CountryCard = (props) => {
  const { flag, name, population, region, capital } = props;
  return (
    <section className="countrycard">
      <img src={flag} alt="Country" />

      <h4>{name}</h4>

      <div className="countryinformation-container">
        <h6>
          Population: <span>{population}</span>
        </h6>
        <h6>
          Region: <span>{region}</span>
        </h6>
        <h6>
          Capital: <span>{capital}</span>
        </h6>
      </div>
    </section>
  );
};

export default CountryCard;
