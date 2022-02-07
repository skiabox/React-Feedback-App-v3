import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

// bring in generic context hook
import { useContext } from 'react';
// bring in the specific context that we want to use
import FeedbackContext from '../context/FeedbackContext';

//item is an object, handleDelete is a function
const FeedbackItem = ({ item }) => {
  //extract whatever we want from FeedbackContext
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

//import prop types
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default FeedbackItem;
