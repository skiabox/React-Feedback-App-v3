import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {
  //styles object
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
};

//Set default props
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95'
};

//Define prop types
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};

export default Header;
