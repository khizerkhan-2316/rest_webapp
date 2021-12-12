import NavigationBar from '../../components/stateful components/navigation/navigationbar.js';

const CountryDetails = (props) => {
  return (
    <>
      <NavigationBar isdark={props.isdark} onClick={props.onClick} />
    </>
  );
};

export default CountryDetails;
