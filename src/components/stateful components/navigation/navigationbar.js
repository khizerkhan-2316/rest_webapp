import './navigationbar.css';
import '../../../root.css';
import lightModeIcon from '../../../assets/images/moon.png';
import darkModeIcon from '../../../assets/images/moon_darkmode.png';

const NavigationBar = (props) => {
  return (
    <nav>
      <div id="navigation-container">
        <h4>Where in the world?</h4>
        <div id="theme-switcher">
          <img
            src={props.isdark ? darkModeIcon : lightModeIcon}
            alt="Dark mode"
            onClick={() => {
              if (props.isdark) {
                document.body.classList.remove('darkmode');
                document.body.classList.add('lightmode');
                props.onClick(false);
              } else {
                document.body.classList.remove('lightmode');
                document.body.classList.add('darkmode');
                props.onClick(true);
              }
            }}
          />
          <h6>{props.isdark ? 'Light Mode' : 'Dark Mode'}</h6>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
