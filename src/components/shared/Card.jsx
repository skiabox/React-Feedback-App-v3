import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
  // conditional class
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  // we prefer conditional style here
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000'
      }}
    >
      {children}
    </div>
  );
};

//set some default props
Card.defaultProps = {
  reverse: false
};

//set prop types
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
};

export default Card;
