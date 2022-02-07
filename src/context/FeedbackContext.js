import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

//feedback is an array of items of type {id (number), text (string), rating (number)}
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7
    }
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  //define the deleteFeedback function
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  //define addFeedback function
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    //add the new Feedback object to the existing array of items (objects with id, rating, text)
    setFeedback([newFeedback, ...feedback]);
  };

  // Set item to be updated
  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    });
  };

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map(item => (item.id === id ? { ...item, ...updItem } : item)));
  };

  //passing the object (in this case {feedback: feedback})
  //feeedback is an array of objects
  //deleteFeedback, addFeedback and editFeedback are functions
  //feedbackEdit is an object with an item property (and object) and an edit property (boolean)
  return <FeedbackContext.Provider value={{ feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback }}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
