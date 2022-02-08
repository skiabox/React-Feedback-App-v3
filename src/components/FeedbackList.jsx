import { motion, AnimatePresence } from 'framer-motion';
// bring in generic context hook
import { useContext } from 'react';
// bring in the specific context that we want to use
import FeedbackContext from '../context/FeedbackContext';

import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';

//feedback is an array of objects, handleDelete is a function
const FeedbackList = () => {
  //extract whatever we want from FeedbackContext
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  //pass either the whole item as an object or every property of the item as a separate prop
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map(item => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired
//     })
//   )
// };

export default FeedbackList;
