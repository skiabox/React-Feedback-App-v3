// bring in generic context hook
import { useContext } from 'react';
// bring in the specific context that we want to use
import FeedbackContext from '../context/FeedbackContext';

// array of feedbacks prop
const FeedbackStats = () => {
  //extract whatever we want from FeedbackContext
  const { feedback } = useContext(FeedbackContext);

  // Calculate ratings avg
  let average = feedback.reduce((total, item) => total + item.rating, 0) / feedback.length;

  // set decimal to 1 and remove trailing zeros
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired
// };

export default FeedbackStats;
