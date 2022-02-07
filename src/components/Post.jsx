import React from 'react';
// import { useParams, Navigate, useNavigate, Routes, Route } from 'react-router-dom';

function Post() {
  //use useParams hook
  // const params = useParams();
  const status = 200;

  // const navigate = useNavigate();

  //handlers
  const onClickHandler = () => {
    console.log('Hello');
    // navigate('/about');
  };

  if (status === 404) {
    // return <Navigate to='/notfound' />;
  }

  return (
    <div>
      {/* <h1>Post {params.id}</h1> */}
      {/* <p>Name: {params.name}</p> */}
      <h1>Post</h1>
      <button onClick={onClickHandler}>Click</button>
      {/* <Routes> */}
      {/* <Route path='/show' element={<h1>Hello World</h1>} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default Post;
