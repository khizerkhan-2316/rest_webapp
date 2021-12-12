import './dropdownList.css';
import '../../../root.css';
import dropdownListIcon from '../../../assets/images/dropdown-icon.png';
import dropdownListDarkmodeIcon from '../../../assets/images/dropdown-darkmode-icon.png';
import { useState } from 'react';

const DropdownList = (props) => {
  const [isListActive, setIsListActive] = useState(false);
  return (
    <>
      <section className="dropdown">
        <div
          id={
            props.region === '' ? 'remove-filter-box hide' : 'remove-filter-box'
          }
        >
          <p
            onClick={() => {
              props.onClick('');
              props.filterCountries(props.countries, '');
            }}
          >
            {props.region !== '' ? 'Remove filter: ' + props.region : ''}
          </p>
        </div>
        <section className="dropdown-list">
          <h4>Filter by region</h4>
          <img
            src={props.isdark ? dropdownListDarkmodeIcon : dropdownListIcon}
            alt="Dropdown list icon"
            onClick={() => {
              if (isListActive) {
                setIsListActive(false);
              } else {
                setIsListActive(true);
              }
            }}
          />
        </section>

        <section
          className={
            isListActive ? 'dropdown-content show' : 'dropdown-content hide'
          }
          id="myDropdown"
        >
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick('Africa');
              props.filterCountries(props.countries, 'Africa');

              isListActive ? setIsListActive(false) : setIsListActive(true);
            }}
          >
            <p>Africa</p>
          </div>
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick('America');
              props.filterCountries(props.countries, 'America');

              isListActive ? setIsListActive(false) : setIsListActive(true);
            }}
          >
            America
          </div>
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick('Asia');
              props.filterCountries(props.countries, 'Asia');

              isListActive ? setIsListActive(false) : setIsListActive(true);
            }}
          >
            Asia
          </div>
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick('Europe');
              props.filterCountries(props.countries, 'Europe');

              isListActive ? setIsListActive(false) : setIsListActive(true);
            }}
          >
            Europe
          </div>
          <div
            className="dropdown-div"
            onClick={() => {
              props.onClick('Oceania');
              props.filterCountries(props.countries, 'Oceania');

              isListActive ? setIsListActive(false) : setIsListActive(true);
            }}
          >
            Oceania
          </div>
        </section>
      </section>
    </>
  );
};

export default DropdownList;
