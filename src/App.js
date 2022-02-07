import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';

import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
// import Post from './components/Post';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
            {/* <Route path='/post/*' element={<Post />} /> */}
            {/* <Route path='/post/:id' element={<Post />} /> */}
            {/* <Route path='/post/:id/:name' element={<Post />} /> */}
          </Routes>
          {/* <Card>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
            <NavLink to='/about' activeClassName='active'>
              About
            </NavLink>
          </Card> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
