import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

//feedback is an array of items of type {id (number), text (string), rating (number)}
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  //define the deleteFeedback function
  const deleteFeedback = async id => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  //define addFeedback function
  const addFeedback = async newFeedback => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    });

    const data = await response.json();
    //newFeedback.id = uuidv4();
    //add the new Feedback object to the existing array of items (objects with id, rating, text)
    //setFeedback([newFeedback, ...feedback]);
    setFeedback([data, ...feedback]);
  };

  // Set item to be updated
  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    });
  };

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)
    });

    const data = await response.json();

    setFeedback(feedback.map(item => (item.id === id ? { ...item, ...data } : item)));
  };

  //passing the object (in this case {feedback: feedback})
  //feeedback is an array of objects
  //deleteFeedback, addFeedback and editFeedback are functions
  //feedbackEdit is an object with an item property (and object) and an edit property (boolean)
  return <FeedbackContext.Provider value={{ feedback, feedbackEdit, isLoading, deleteFeedback, addFeedback, editFeedback, updateFeedback }}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
