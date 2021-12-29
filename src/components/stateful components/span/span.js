import './span.css';
import { Link } from 'react-router-dom';

const Span = (props) => {
  return (
    <Link
      to={'#'}
      onClick={() => {
        localStorage.setItem('selectedCountry', props.name);
        window.location.reload();
        localStorage.setItem('latitude', props.latlng[0]);
        localStorage.setItem('longitude', props.latlng[1]);
      }}
    >
      <div className="span">
        <div className="span__text">
          <h1>{props.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Span;
